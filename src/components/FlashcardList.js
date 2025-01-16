import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';  // Import react-icons
import Flashcard from './Flashcard';

const FlashcardList = ({ problems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < problems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first card
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(problems.length - 1); // Loop to the last card
    }
  };

  return (
    <div className="relative p-6 bg-gray-900 min-h-screen">
      {/* Left Arrow */}
      <button
        onClick={prevCard}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
      >
        <FaArrowLeft className="text-3xl" />
      </button>

      {/* Flashcard */}
      {problems.length > 0 && (
        <div className="flex justify-center">
          <Flashcard {...problems[currentIndex]} />
        </div>
      )}

      {/* Right Arrow */}
      <button
        onClick={nextCard}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
      >
        <FaArrowRight className="text-3xl" />
      </button>
    </div>
  );
};

export default FlashcardList;
