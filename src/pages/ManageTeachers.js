
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacherData } from '../redux/teacherReducer';
import '../styles/ManageTeachers.css';

const TeacherDashboard = () => {
  const dispatch = useDispatch();
  const teacher = useSelector((state) => state.teachers);

  const {
    info = null,
    classes = [],
    attendanceRecords = [],
    messages = [],
    loading = false,
    error = null
  } = teacher || {};

  useEffect(() => {
    if (!info && !loading) {
      dispatch(fetchTeacherData());
    }
  }, [dispatch, info, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!info) {
    return <div>No teacher data available</div>;
  }

  return (
    <div className="teacher-dashboard">
      <header className="dashboard-header">
        <h2>Welcome, {info.name}</h2>
        <p>Department: {info.department}</p>
        <p>Email: {info.email}</p>
      </header>

      <section className="dashboard-section">
        <h3>Classes</h3>
        <ul>
          {classes.map((classItem, index) => (
            <li key={index}>
              {classItem.subject} ({classItem.time})
            </li>
          ))}
        </ul>
      </section>

      <section className="dashboard-section">
        <h3>Attendance Records</h3>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Present</th>
              <th>Total</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.class}</td>
                <td>{record.present}</td>
                <td>{record.total}</td>
                <td>{((record.present / record.total) * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="dashboard-section">
        <h3>Messages</h3>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message.content}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TeacherDashboard;
