import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/taskSlice';
import rootReducer from './reducer';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    rootReducer: rootReducer
  }
})
