import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { motion } from 'framer-motion';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

const Brochure = () => {
  // Correct path for accessing the PDF from the public folder
  const brochureUrl = './public/Others/Brochure for web.pdf'; // Access the PDF from public folder

  // Toolbar plugin to add PDF controls like zoom, print, etc.
  const toolbarPluginInstance = toolbarPlugin();

  // Animation variants for different elements
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center py-10 px-4 bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Page Title */}
      <motion.h2
        className="text-3xl font-bold mb-6"
        variants={fadeIn}
      >
        Our Brochure
      </motion.h2>

      {/* PDF Viewer */}
      <motion.div
        className="border shadow-lg p-4 w-full max-w-4xl md:max-w-2xl sm:max-w-full overflow-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={brochureUrl} plugins={[toolbarPluginInstance]} />
        </Worker>
      </motion.div>

      {/* Download Button */}
      <motion.a
        href={brochureUrl}
        download="Brochure.pdf"
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      >
        Download Brochure
      </motion.a>
    </motion.div>
  );
};

export default Brochure;
