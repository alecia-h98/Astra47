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

    // Function to add a new contact message
    addContactMessage: async (newMessage) => {
        try {
            await axios.post(`/api/contact`, newMessage);
        } catch (error) {
            console.log('Error adding contact message:', error);
        }
    },

    // Function to archive a contact message

    // Function to toggle the responded status of a contact message

});

export default createContactSlice;
