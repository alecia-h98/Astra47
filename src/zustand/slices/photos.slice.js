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
    addPhoto: async (newPhoto) => {
        try {
            await axios.post('/api/photos/new', newPhoto);
            get().fetchPhotos();
        } catch (error) {
            console.error('Error with the Zustand post photo function', err);
        }
    },
});

export default createPhotosSlice;
