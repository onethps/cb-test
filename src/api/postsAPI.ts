import axios from 'axios';

export const postAPI = {
  getPosts(search: {search:string}) {
    return axios.get('https://api.thenewsapi.com/v1/news/all', {
      params: {
        search,
        language: 'en',
        search_fields: 'title,description',
        api_token: process.env.API_NEWS_KEY,

      },
    });
  },
  getPostById(uuid:string) {
    return axios.get(`https://api.thenewsapi.com/v1/news/uuid/${uuid}/api_token=${process.env.API_NEWS_KEY}`, {
    });
  },
};