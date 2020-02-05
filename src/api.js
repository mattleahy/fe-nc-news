import axios from "axios";

const baseURL = "https://matt-nc-news.herokuapp.com/api";

export const getAllArticles = (topic, author, sort_by, order) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: {
        topic: topic,
        author: author,
        sort_by: sort_by,
        order: order
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticleById = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = article_id => {
  return axios
    .get(
      `https://matt-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};

export const patchVotes = (comment_id, article_id, increment_by) => {
  if (article_id) {
    return axios
      .patch(`${baseURL}/articles/${article_id}`, {
        inc_votes: increment_by
      })
      .then(data => {
        return data.article.votes;
      });
  } else
    return axios
      .patch(`${baseURL}/comments/${comment_id}`, {
        inc_votes: increment_by
      })
      .then(data => {
        return data.comment.votes;
      });
};

export const postComment = (body, username, article_id) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, {
      username: username,
      body: body
    })
    .then(({ data }) => {
      return data.comment;
    });
};
