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

export const getArticleById = async article_id => {
  const data = await axios.get(`${baseURL}/articles/1`).catch(err => {
    console.log(err);
  });
  console.log(data);

  return data.article;
};
