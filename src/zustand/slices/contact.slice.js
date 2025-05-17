import axios from 'axios';

const createContactSlice = (set, get) => ({
    contactMessages: [],
    // Function to fetch contact messages
    fetchContactMessages: async () => {
        try {
            const response = await axios.get('/api/contact');
            set({ contactMessages: response.data });
        } catch (error) {
            console.error('Error fetching contact messages:', error);
        }
    },

    addContactMessage: async 


});

export default createContactSlice;
