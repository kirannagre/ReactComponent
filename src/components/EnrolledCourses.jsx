import React from "react";
import { useCourses } from "/context/CourseContext";

const EnrolledCourses = () => {
  const { enrolled, dropCourse } = useCourses();

  return (
    <div className="card">
      <h2>Enrolled Courses</h2>
      {enrolled.length === 0 && <p>No courses enrolled</p>}
      {enrolled.map(course => (
        <div key={course.id} className="item">
          <span>{course.name}</span>
          <button className="danger" onClick={() => dropCourse(course.id)}>
            Drop
          </button>
        </div>
      ))}
    </div>
  );
};

export default EnrolledCourses;
