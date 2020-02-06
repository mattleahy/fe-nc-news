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

export const patchVotesByArticleId = (article_id, increment_by) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, {
    inc_votes: increment_by
  });
};

export const patchVotesByCommentId = (comment_id, increment_by) => {
  return axios.patch(`${baseURL}/comments/${comment_id}`, {
    inc_votes: increment_by
  });
};

export const postCommentByArticleId = (article_id, comment) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteCommentByCommentId = comment_id => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};
