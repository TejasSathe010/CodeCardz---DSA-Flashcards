import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import { FaBars } from 'react-icons/fa'; // Import Hamburger icon

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("Array");
  const [problemsData, setProblemsData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to toggle sidebar

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const topicData = {
    Array: require('./data/array_problems.json'),
    Recursion: require('./data/recursion_problems.json'),
    // Queue: require('../data/queue_problems.json'),
    // Graph: require('../data/graph_problems.json'),
    // Tree: require('../data/tree_problems.json'),
  };

  useEffect(() => {
    setProblemsData(topicData[selectedTopic]);
  }, [selectedTopic, topicData]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

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

      <div className="flex-1 p-8 bg-gray-50 relative">
        <header className="flex justify-between items-center mb-4">
          <button
            className={`p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 z-50 ${sidebarOpen && ' hidden'}`}
            onClick={toggleSidebar}
          >
            <FaBars className="text-xl" />
          </button>

          <div className="flex-1 text-center">
            <h1 className="text-4xl font-bold text-gray-800">DSA Flashcards</h1>
            <p className="mt-2 text-gray-600 text-lg">
              Learn Data Structures and Algorithms interactively
            </p>
          </div>
        </header>

        <div className="mt-0">
          {problemsData ? (
            <FlashcardList problems={problemsData} />
          ) : (
            <p className="text-gray-600 text-center">
              Select a topic to view flashcards.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
