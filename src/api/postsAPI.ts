import axios from 'axios';

export const postsAPI = {
  getPosts(search:string) {
    const searchParams = search.split(" ").join("|");
    return axios.get(`https://api.thenewsapi.com/v1/news/all?search=${searchParams}`, {
      params: {
        language: 'en',
        search_fields: 'title,description',
        api_token: process.env.REACT_APP_NEWS_KEY,

      },
    });
  },
  getPostById(uuid:string) {
    return axios.get(`https://api.thenewsapi.com/v1/news/uuid/${uuid}/api_token=${process.env.REACT_APP_NEWS_KEY}`, {
    });
  },
};