

export const url = 'https://api.themoviedb.org/3/movie/now_playing';
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmJkYmQ3OTE4NzkxZTJlOWUwOGI5YjRkNzIyMzg5MCIsInN1YiI6IjY1NGNkZTk0NDFhNTYxMzM2ODg2NWUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q54fLpFW1n_Y6JDfRkkYP1DnQfSuaI4cRGauvcoRqhk'
    }
  };
export const IMAGE_CDN_URL = 'https://image.tmdb.org/t/p/w500';

export const lang = {
  English : {
    search:'Search',
    getPlaceholderText:'What would you like to watch today?'
  },
  Hindi:{
    search:'खोज',
    getPlaceholderText:'आज आप क्या देखना चाहेंगे?'
  }
}