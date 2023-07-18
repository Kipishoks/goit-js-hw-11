import { markupImage } from './markup';
import Notiflix from 'notiflix';
import { lightbox, loadMore, gallery } from '../index';
import { fetchData, pageLimit } from './api';
 


const getImage = async (inputSearch, pageSearch) => {
  try {
      const data = await fetchData(inputSearch, pageSearch);
        // console.log(data);
    if (!data.hits.length) {
      gallery.innerHTML = ''; 
      loadMore.classList.add('unvisible');
   Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );    
      return;
        }
        // console.log(data);
    markupImage(data);
    lightbox.refresh();
    loadMore.classList.remove('unvisible');
        if (data.totalHits <= pageSearch * pageLimit) {
      loadMore.classList.add('unvisible');
    };

         }
    catch(error) {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong!');
    gallery.innerHTML = '';
    loadMore.classList.add('unvisible');
    }
};

export {getImage}