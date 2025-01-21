import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Flashcard from './Flashcard';
import { motion } from 'framer-motion';

const FlashcardList = ({ problems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % problems.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + problems.length) % problems.length);
  };

  return (
    <div className="relative p-4 min-h-screen flex items-center justify-center">
      <button
        onClick={prevCard}
        className="fixed left-10 top-1/2 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full hover:bg-gray-200 transition duration-300 z-50"
      >
        <FaArrowLeft className="text-gray-700 text-xl" />
      </button>

      {problems.length > 0 && (
        <motion.div
          key={currentIndex}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <Flashcard {...problems[currentIndex]} />
        </motion.div>
      )}

      <button
        onClick={nextCard}
        className="fixed right-10 top-1/2 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full hover:bg-gray-200 transition duration-300 z-50"
      >
        <FaArrowRight className="text-gray-700 text-xl" />
      </button>
    </div>
  );
};

export default FlashcardList;
