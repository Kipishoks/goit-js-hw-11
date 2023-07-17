import axios from 'axios';

const API_KEY = '38290278-dcc479b73e21f29de09e0024f';
const pageLimit = 40;

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchData = async (inputSearch, pageSearch) => {
    const { data }  = await axios({
        params: {
            key: API_KEY,
            q: inputSearch,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: pageLimit,
            page: pageSearch,
        }
    })
  return data;}
    ;
export {fetchData }