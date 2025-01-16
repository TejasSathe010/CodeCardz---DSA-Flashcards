import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import { FaBars } from 'react-icons/fa';  // Import Hamburger icon

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("Array");
  const [problemsData, setProblemsData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);  // State to toggle sidebar

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const topicData = {
    Array: require('./data/array_problems.json'),
    // Stack: require('../data/stack_problems.json'),
    // Queue: require('../data/queue_problems.json'),
    // Graph: require('../data/graph_problems.json'),
    // Tree: require('../data/tree_problems.json'),
  };

  useEffect(() => {
    setProblemsData(topicData[selectedTopic]);
  }, [selectedTopic, topicData]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`w-1/4 bg-blue-800 text-white p-6 fixed h-full transition-transform duration-300 ease-in-out transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <h2 className="text-2xl font-semibold mb-6">Topics</h2>
        <ul>
          {Object.keys(topicData).map((topic) => (
            <li
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`cursor-pointer p-2 mb-2 rounded-md hover:bg-blue-700 ${
                selectedTopic === topic ? 'bg-blue-600' : ''
              }`}
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay to close sidebar when clicked outside */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}  // Close sidebar when clicked outside
        ></div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 ml-1/4 p-6 bg-gray-900 relative">
        <header className="flex justify-between items-center text-white mb-6">
          {/* Hamburger Icon */}
          <button
            className="p-3 bg-blue-800 rounded-full hover:bg-blue-700"
            onClick={toggleSidebar}
          >
            <FaBars className="text-white text-2xl" />
          </button>

          <div className="text-center flex-1">
            <h1 className="text-4xl">DSA Flashcards</h1>
            <p className="mt-2">Learn Data Structures and Algorithms in an interactive way!</p>
          </div>
        </header>

        {problemsData && <FlashcardList problems={problemsData} />}
      </div>
    </div>
  );
};

export default App;
