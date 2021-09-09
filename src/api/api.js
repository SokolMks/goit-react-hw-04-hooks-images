import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '22314641-3a8c963c3e0001805b4ad30fd';

const fetchImages = ({ request = "", currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `/?key=${API_KEY}&q=${request}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);
};

export { fetchImages };