import axios from 'axios';

const API_KEY = '31176122-470dd6c20579d2a67d5e2ecc1';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export default function fetchImages(searchQuery, page) {
  return axios.get(`${axios.defaults.baseURL}`, {
    params: {
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    },
  });
}
