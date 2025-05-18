import axios from 'axios';

const createPhotosSlice = (set, get) => ({

    photos: [],
    // GETting all of the photos
    fetchPhotos: async () => {
        try {
            const response = await axios.get('/api/photos');
            set({ photos: response.data });
        } catch (error) {
            console.error('Error fetching photos(zustand):', error);
        }
    },
        
    // POSTing a new photo

});

export default createPhotosSlice;
