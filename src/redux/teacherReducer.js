
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fake data for teacher
const fakeTeacherData = {
  info: {
    id: 1,
    name: 'Dr. Jane Smith',
    email: 'jane.smith@example.com',
    department: 'React',
  },
  classes: [
    { subject: 'React JSX', time: '9:00 AM - 10:30 AM' },
    { subject: 'React Router', time: '11:00 AM - 12:30 PM' },
    { subject: 'React HOOKS', time: '2:00 PM - 3:30 PM' },
  ],
  attendanceRecords: [
    { class: 'React JSX', present: 25, total: 30 },
    { class: 'React Router', present: 28, total: 30 },
    { class: 'React HOOKS', present: 27, total: 30 },
  ],
  messages: [
    { from: 'Admin', content: 'Staff meeting on Monday at 3 PM.', date: '2025-01-02' },
    { from: 'Parent', content: 'Could we discuss John’s progress?', date: '2025-01-01' },
    { from: 'Student', content: 'Thank you for the extra help!', date: '2024-12-30' },
  ],
};

export const fetchTeacherData = createAsyncThunk('teacher/fetchData', async () => {
  return fakeTeacherData;
});

const teacherSlice = createSlice({
  name: 'teacher',
  initialState: {
    info: null,
    classes: [],
    attendanceRecords: [],
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeacherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeacherData.fulfilled, (state, action) => {
        state.loading = false;
        state.info = action.payload.info;
        state.classes = action.payload.classes;
        state.attendanceRecords = action.payload.attendanceRecords;
        state.messages = action.payload.messages;
      })
      .addCase(fetchTeacherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default teacherSlice.reducer;
