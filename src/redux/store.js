import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import studentReducer from './studentReducer';
import teachersReducer from './teacherReducer';

const store = configureStore({
  reducer: {
    users: userReducer,
    students: studentReducer,
    teachers: teachersReducer,
  },
});

export default store;