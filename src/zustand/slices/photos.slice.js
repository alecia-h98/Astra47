import axios from 'axios';

const createPhotosSlice = (set, get) => ({
    photos: [],
    randomPhoto: null,
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
            console.log('newPhoto-zustand', newPhoto);
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

    getRandomPhoto: () => {
        const photo = get().photos;
        if (photo.length > 0) {
            const randomIndex = Math.floor(Math.random() * photo.length);
            set({ randomPhoto: photo[randomIndex] });
        }
    },
});

export default createPhotosSlice;
