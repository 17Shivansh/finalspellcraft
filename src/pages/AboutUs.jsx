import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import girlImage1 from '../assets/images/Girl-images.png';


// Export as an object
export const images = {
  girlImage1,
};


const AboutUs = () => {
  return (
    <div className="bg-[#E8F5E9] py-8">
<div className="container mx-auto w-[90%] lg:w-[80%] p-6 bg-gradient-to-r from-[#E0F7FA] to-[#B2EBF2] rounded-lg shadow-lg">
  <div className="flex flex-wrap justify-center items-center">
    {/* Left Side: Content */}
    <motion.div
      className="w-full lg:w-3/4 p-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <h2 className="text-[#00796B] text-4xl font-bold mb-4">Who We Are</h2>
      <p className="text-[#424242] text-lg leading-relaxed mb-4">
        SkillShare India is the leading educational consultancy for schools across India. Our goal is to provide professional assistance to all educational stakeholders.
      </p>
      <p className="text-[#424242] text-lg leading-relaxed">
        We aim to deliver quality audit services, competency mapping for teachers, and training tailored to the immediate needs of educational institutions. Additionally, we conduct national Olympiads and offer consultancy services to enhance school management and admissions.
      </p>
    </motion.div>

    {/* Right Side: Image */}
    <motion.div
      className="w-full lg:w-1/4 p-6 flex justify-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.img
        src={images.girlImage1} // Replace with your actual image path
        alt="Educational Consultancy"
        className="max-w-full h-auto transition-transform duration-500 transform hover:scale-105 rounded-lg shadow-md"
        initial={{ opacity: 0, y: -30 }} // Start slightly above
        animate={{ opacity: 1, y: 0 }} // Slide in from the top
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </motion.div>
  </div>
</div>




      {/* Mission and Vision Sections */}
      <div className="flex flex-col md:flex-row items-center justify-center py-8 space-y-8 md:space-y-0 md:space-x-8">
  {/* Our Mission Section */}
  <motion.section
    className="bg-gradient-to-r from-[#B2DFDB] to-[#E0F7FA] rounded-3xl shadow-xl p-10 w-11/12 md:w-1/3 h-auto flex flex-col justify-between transition-transform transform hover:scale-105 duration-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-2xl font-bold mb-2 text-[#00796B] text-center">Our Mission</h3>
    <ul className="list-disc list-inside mb-6 text-gray-800 text-center text-base">
      <li className="font-medium">
        In a world where gaining knowledge is impossible without mastery of language, we have taken this initiative to build a strong foundation for young learners' future growth.
      </li>
      <li className="font-medium">We strive to boost students' confidence and elevate their standards by encouraging greater participation.</li>
    </ul>
  </motion.section>

  {/* Our Vision Section */}
  <motion.section
    className="bg-gradient-to-r from-[#B2DFDB] to-[#E0F7FA] rounded-3xl shadow-xl p-10 w-11/12 md:w-1/3 h-auto flex flex-col justify-between transition-transform transform hover:scale-105 duration-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-2xl font-bold mb-2 text-[#00796B] text-center">Our Vision</h3>
    <ul className="list-disc list-inside mb-6 text-gray-800 text-center text-base">
      <li className="font-medium">To empower students by equipping them with superior language skills.</li>
      <li className="font-medium">To make language learning a joyous process and thereby help students learn complex subjects simply.</li>
    </ul>
  </motion.section>
</div>




      {/* Result Summary Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-[90%] mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-semibold mb-4 text-center text-[#1976D2]">Result Summary</h3>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          {/* Left: Result Summary List */}
          <div className="md:w-1/2 flex justify-center items-center">
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-4">Customized result summary showcasing their strengths and weaknesses.</li>
              <li className="mb-4">This summary helps in setting goals and fosters continuous improvement.</li>
              <li className="mb-4">Targeted assignments for areas of concern shall be provided.</li>
            </ul>
          </div>

          {/* Right: Single Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="./src/assets/images/spellcraft.jpg" // Replace with your actual image path
              alt="Summary Image"
              className="w-[280px] h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.section className="bg-[#E8F5E9] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#00796B]">Why Choose Us?</h1>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#1976D2]">Comprehensive Assessment</h2>
            <ul className="list-disc ml-6 mb-6 text-gray-700">
              <li className="mb-2">
                <strong>Comprehensive Assessment:</strong> Our Olympiad begins with a thorough evaluation to pinpoint each child's strengths, areas for development, and concerns regarding English language proficiency.
              </li>
              <li className="mb-2">
                <strong>Targeted Support:</strong> Based on the initial assessment, students are categorized into.
              </li>
              <li className="mb-2">
                <strong>Strength Zone:</strong> Where the child excels.
              </li>
              <li className="mb-2">
                <strong>Developing Zone:</strong> Where the child requires more practice.
              </li>
              <li className="mb-2">
                <strong>Concern Zone:</strong> Where the child needs focused intervention.
              </li>
              <li className="mb-2">
                <strong>Continuous Development:</strong> We offer personalized support to meet the specific needs of every student, ensuring ongoing enhancement of their language skills. Through this approach, we cultivate a spirit of healthy competition among students and broaden their intellectual horizons.
              </li>
            </ul>
          </div>
        </div>
      </motion.section>





      <div className="flex flex-col items-start justify-start p-10 bg-gray-100">
  <h2 className="text-4xl font-extrabold text-indigo-600 mb-10 text-left">
    Awards
  </h2>

  {/* Line Animation and Award Elements */}
  <div className="flex flex-col md:flex-row items-center justify-center relative"> {/* Use flex-col for mobile and flex-row for larger screens */}
    {/* Animated Line */}
    <motion.div
      className="absolute top-16 h-1 bg-gray-300 left-0 hidden md:block" // Hide on mobile
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 4, ease: "easeInOut" }}
      style={{ zIndex: 1 }}
    />

    {/* Award 1: Gold Medal */}
    <motion.div
      className="relative flex flex-col items-center text-center z-10 mb-10 md:mb-0 md:mr-10" // Added margin for separation in md
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <motion.div
        className="rounded-full w-32 h-32 bg-yellow-500 flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <strong className="text-white text-2xl">Gold Medal</strong>
      </motion.div>
      <p className="mt-4 text-gray-600 text-sm md:text-base">
        Presented to the top achiever in each class for their outstanding efforts.
      </p>
    </motion.div>

    {/* Award 2: Medal of Excellence */}
    <motion.div
      className="relative flex flex-col items-center text-center z-10 mb-10 md:mb-0 md:mr-10" // Added margin for separation in md
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <motion.div
        className="rounded-full w-32 h-32 bg-blue-500 flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <strong className="text-white text-2xl">Excellence</strong>
      </motion.div>
      <p className="mt-4 text-gray-600 text-sm md:text-base">
        Awarded to the 2nd and 3rd runners-up in each class for commendable performance.
      </p>
    </motion.div>

    {/* Award 3: Participation Certificate */}
    <motion.div
      className="relative flex flex-col items-center text-center z-10"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3, duration: 0.8 }}
    >
      <motion.div
        className="rounded-full w-32 h-32 bg-green-500 flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <strong className="text-white text-2xl">Certificate</strong>
      </motion.div>
      <p className="mt-4 text-gray-600 text-sm md:text-base">
        Given to all participants to acknowledge their enthusiasm and involvement.
      </p>
    </motion.div>
  </div>
</div>







      






    </div>
  );
};

export default AboutUs;
