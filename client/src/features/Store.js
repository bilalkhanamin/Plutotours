import { configureStore } from '@reduxjs/toolkit'
import packageReducer from './Slices/packagesSlice'
import messageReducer from './Slices/messagesSlice'
import destinationReducer from "./Slices/destinationsSlice"
import userReducer from './Slices/userSlice'

export const store = configureStore({
  reducer: {
    packages: packageReducer,
    messages: messageReducer,
    destinations:destinationReducer,
    users: userReducer,
  },
})