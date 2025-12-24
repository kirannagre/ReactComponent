import React from "react";
import { useCourses } from "../context/CourseContext";

const CourseList = () => {
  const { initialCourses, enrollCourse } = useCourses();

  return (
    <div className="card">
      <h2>Available Courses</h2>
      {initialCourses.map(course => (
        <div key={course.id} className="item">
          <span>{course.name}</span>
          <button onClick={() => enrollCourse(course)}>Enroll</button>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
