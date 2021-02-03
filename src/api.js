// Base_URL
const base_url = 'http://www.omdbapi.com/';
// apiKey
const apiKey = process.env.REACT_APP_AURA;

// Search URL
export const searchURL = (movie_searched) => `${base_url}?t=${movie_searched}&apikey=18440f8b`;

