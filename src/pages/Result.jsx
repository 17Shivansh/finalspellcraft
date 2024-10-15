import React from 'react';
import { motion } from 'framer-motion';

const Result = () => {
  // Array of schools with their names and student data
  const schools = [
    {
      name: "School Name Here 1",
      students: [
        {
          name: "John Doe",
          class: "5th Grade",
          rank: 1,
          image: "./src/assets/images/images-1.jpg", // Replace with the actual image path
        },
        {
          name: "Jane Smith",
          class: "6th Grade",
          rank: 2,
          image: "./src/assets/images/images-2.jpeg", // Replace with the actual image path
        },
        {
          name: "Alice Johnson",
          class: "7th Grade",
          rank: 3,
          image: "./src/assets/images/images-3.jpeg", // Replace with the actual image path
        },
        {
          name: "Bob Brown",
          class: "8th Grade",
          rank: 4,
          image: "./src/assets/images/images-4.jpeg", // Replace with the actual image path
        },
        // Add more students as needed
      ],
    },
    {
      name: "School Name Here 2",
      students: [
        {
          name: "Emily Davis",
          class: "5th Grade",
          rank: 1,
          image: "./src/assets/images/images-5.jpg", // Replace with the actual image path
        },
        {
          name: "Michael Wilson",
          class: "6th Grade",
          rank: 2,
          image: "./src/assets/images/images-6.jpeg", // Replace with the actual image path
        },
        {
          name: "Sophia Brown",
          class: "7th Grade",
          rank: 3,
          image: "./src/assets/images/images-7.jpeg", // Replace with the actual image path
        },
        {
          name: "Liam Johnson",
          class: "8th Grade",
          rank: 4,
          image: "./src/assets/images/images-8.jpeg", // Replace with the actual image path
        },
        // Add more students as needed
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 pt-10">
      {/* Heading Section */}
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-4">
        SpellCraft Olympiad
      </h1>

      {/* Map through each school to display sections dynamically */}
      {schools.map((school, schoolIndex) => (
        <div key={schoolIndex} className="mt-10">
          <h1 className="text-3xl font-bold mb-4">{school.name}</h1> {/* School Name */}
          <div className="flex flex-wrap justify-center gap-8 p-4 border-2 border-gray-300 rounded-lg shadow-md bg-white">
            {school.students.map((student, studentIndex) => (
              <motion.div
                key={studentIndex}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-80 transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              >
                <motion.img
                  src={student.image}
                  alt={student.name}
                  className="w-32 h-32 rounded-full mb-4 transition-transform duration-300 transform hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <h2 className="text-xl font-semibold text-gray-800">{student.name}</h2>
                <p className="text-gray-600">Class: {student.class}</p>
                <p className="text-gray-800 font-bold">Rank: {student.rank}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Result;
