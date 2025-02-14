import axios from 'axios';
export const fetchGallery = async (query, page) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=3tJ8YspJunCmgbbBmcypev1jmqVkTFr2gLqZ91vaCKQ&query=${query}&per_page=10&page=${page}`);
    return response.data
}