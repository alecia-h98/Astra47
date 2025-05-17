import { create } from "zustand";
import userSlice from './slices/user.slice.js';
import contactSlice from './slices/contact.slice.js';
import photoSlice from './slices/photos.slice.js';
import videoSlice from './slices/videos.slice.js';


// Combine all slices in the store:
const useStore = create((...args) => ({
  ...userSlice(...args),
  ...contactSlice(...args),
  ...photoSlice(...args),
  ...videoSlice(...args)
}))


export default useStore;
