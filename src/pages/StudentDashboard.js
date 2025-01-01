import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentData } from '../redux/studentReducer';
import '../styles/StudentDashboard.css';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.students);

  useEffect(() => {
    if (!student.info && !student.loading) {
      dispatch(fetchStudentData());
    }
  }, [dispatch, student.info, student.loading]);

  if (student.loading) {
    return <div>Loading...</div>;
  }

  if (student.error) {
    return <div>Error: {student.error}</div>;
  }

  if (!student.info) {
    return <div>No student data available</div>;
  }

  return (
    <div className="student-dashboard">
      <header className="dashboard-header">
        <h2>Welcome, {student.info.name}</h2>
        <p>Major: {student.info.major}</p>
        <p>Age: {student.info.age}</p>
        <p>Email: {student.info.email}</p>
      </header>

      <section className="dashboard-section">
        <h3>Timetable</h3>
        <ul>
          {student.timetable.map((classItem, index) => (
            <li key={index}>
              {classItem.day}: {classItem.subject} ({classItem.time})
            </li>
          ))}
        </ul>
      </section>

      <section className="dashboard-section">
        <h3>Grades</h3>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {student.grades.map((gradeItem, index) => (
              <tr key={index}>
                <td>{gradeItem.subject}</td>
                <td>{gradeItem.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="dashboard-section">
        <h3>Attendance</h3>
        <p>
          Attendance: {student.attendance.present}/{student.attendance.total} (
          {((student.attendance.present / student.attendance.total) * 100).toFixed(2)}%)
        </p>
      </section>

      <section className="dashboard-section">
        <h3>Messages</h3>
        <ul>
          {student.messages.map((message, index) => (
            <li key={index}>{message.content}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default StudentDashboard;