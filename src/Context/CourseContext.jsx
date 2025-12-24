import React, { createContext, useContext, useEffect, useState } from "react";

const CourseContext = createContext();

const initialCourses = [
  { id: 1, name: "Mathematics" },
  { id: 2, name: "Computer Science" },
  { id: 3, name: "Physics" },
  { id: 4, name: "English" }
];

export const CourseProvider = ({ children }) => {
  const [enrolled, setEnrolled] = useState(() => {
    const saved = localStorage.getItem("enrolledCourses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
  }, [enrolled]);

  const enrollCourse = (course) => {
    if (!enrolled.find(c => c.id === course.id)) {
      setEnrolled([...enrolled, course]);
    }
  };

  const dropCourse = (id) => {
    setEnrolled(enrolled.filter(course => course.id !== id));
  };

  return (
    <CourseContext.Provider
      value={{ initialCourses, enrolled, enrollCourse, dropCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => useContext(CourseContext);
