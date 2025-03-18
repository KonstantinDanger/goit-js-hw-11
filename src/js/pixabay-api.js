import axios from 'axios';

const API_KEY = '49409178-3b63951a4472504068603616d';
const url = 'https://pixabay.com/api/';

export default function fetchImages(query) {
  return axios
    .get(url, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => response.data)
    .catch(error => {
      throw new Error(error);
    });
}
