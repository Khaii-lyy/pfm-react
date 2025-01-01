
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//fake data
const fakeStudentData = {
  info: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 20,
    major: 'Computer Science',
    address: '123 School St, City, Country',
  },
  timetable: [
    { day: 'Monday', subject: 'React', time: '9:00 AM - 10:30 AM' },
    { day: 'Monday', subject: 'UML', time: '10:45 AM - 12:15 PM' },
    { day: 'Tuesday', subject: 'Agile', time: '9:00 AM - 10:30 AM' },
    { day: 'Wednesday', subject: 'DataBase', time: '1:00 PM - 2:30 PM' },
    { day: 'Thursday', subject: 'English', time: '9:00 AM - 10:30 AM' },
    { day: 'Friday', subject: 'Computer Science', time: '11:00 AM - 12:30 PM' },
  ],
  grades: [
    { subject: 'React', grade: 'A' },
    { subject: 'UML', grade: 'B+' },
    { subject: 'Agile', grade: 'A-' },
    { subject: 'DataBase', grade: 'B' },
    { subject: 'English', grade: 'A' },
    { subject: 'Computer Science', grade: 'A+' },
  ],
  attendance: { present: 18, total: 20 },
  messages: [
    { from: 'Admin', content: 'Reminder: Your next exam is on Friday!', date: '2025-01-05' },
    { from: 'Professor Smith', content: 'Your assignment on data structures is due next Monday.', date: '2025-01-03' },
    { from: 'Student Council', content: 'Join us for the student event this Friday evening!', date: '2025-01-02' },
  ],
};

export const fetchStudentData = createAsyncThunk('student/fetchData', async () => {
  return fakeStudentData;
});

const studentSlice = createSlice({
  name: 'student',
  initialState: {
    info: null,
    timetable: [],
    grades: [],
    attendance: { present: 0, total: 0 },
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudentData.fulfilled, (state, action) => {
        state.loading = false;
        state.info = action.payload.info;
        state.timetable = action.payload.timetable;
        state.grades = action.payload.grades;
        state.attendance = action.payload.attendance;
        state.messages = action.payload.messages;
      })
      .addCase(fetchStudentData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default studentSlice.reducer;