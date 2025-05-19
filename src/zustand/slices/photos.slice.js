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

    // archiving a photo
    archivePhoto: async (photoId) => {
        try {
            await axios.put('/api/photos/arc', { id: photoId });
            get().fetchPhotos();
        } catch (error) {
            console.error('Error archiving photo(zustand):', error);
        }
    },
});

export default createPhotosSlice;
