import {configureStore} from '@reduxjs/toolkit'
import playlist from './features/playlist'
import progress from './features/progress'

const store = configureStore({
    reducer: {
        playlist,
        progress
    }
})
export default store