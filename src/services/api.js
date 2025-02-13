import axios from 'axios';
export const fetchGallery = async (query) => {
    const response = await axios.get(`https://api.unsplash.com/photos/?client_id=3tJ8YspJunCmgbbBmcypev1jmqVkTFr2gLqZ91vaCKQ&query=${query}&per_page=20`);
    return response.data
}