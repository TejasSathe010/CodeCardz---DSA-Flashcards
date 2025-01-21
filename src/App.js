import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import { FaBars, FaRandom } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("Array");
  const [problemsData, setProblemsData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [shuffledProblems, setShuffledProblems] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const topicData = {
    Array: require('./data/array_problems.json'),
    Recursion: require('./data/recursion_problems.json'),
  };

  useEffect(() => {
    setProblemsData(topicData[selectedTopic]);
  }, [selectedTopic, topicData]);

  useEffect(() => {
    if (problemsData) {
      setShuffledProblems([...problemsData]);
    }
  }, [problemsData]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const shuffleCards = () => {
    const shuffled = [...shuffledProblems].sort(() => Math.random() - 0.5);
    setShuffledProblems(shuffled);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <div
        className={`w-64 bg-white shadow-md fixed h-full transition-transform duration-300 ease-in-out transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 p-6 border-b border-gray-200">
          Topics
        </h2>
        <ul className="space-y-2 px-6">
          {Object.keys(topicData).map((topic) => (
            <li
              key={topic}
              onClick={() => {
                setSelectedTopic(topic);
                setSidebarOpen(false);
              }}
              className={`cursor-pointer py-3 px-4 rounded-lg transition-all duration-200 ${
                selectedTopic === topic
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={toggleSidebar} 
        ></div>
      )}

      <motion.div
        className="flex-1 p-8 bg-gray-50 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <header className="flex justify-between items-center mb-8">
          <button
            className={`p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 z-50 ${sidebarOpen && ' hidden'}`}
            onClick={toggleSidebar}
          >
            <FaBars className="text-xl" />
          </button>

          <div className="flex-1 text-center">
            <img
              src="/codeCardz-logo.svg"
              alt="CodeCardz Logo"
              className="w-12 h-12 inline-block mb-2"
            />
            <h1 className="text-4xl font-bold text-gray-800">CodeCardz</h1>
            <p className="mt-2 text-gray-600 text-lg">
              Learn Data Structures and Algorithms interactively
            </p>
          </div>

          <button
            onClick={shuffleCards}
            className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 z-50"
          >
            <FaRandom className="text-xl" />
          </button>
        </header>

        <div className="mt-6">
          {shuffledProblems ? (
            <FlashcardList problems={shuffledProblems} />
          ) : (
            <p className="text-gray-600 text-center">
              Select a topic to view flashcards.
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default App;
