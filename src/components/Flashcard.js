import React, { useState } from 'react';

const Flashcard = ({
  problem,
  category,
  difficulty,
  intuition,
  time_complexity,
  space_complexity,
  key_points,
  common_mistakes,
  brute_force_solution,
  optimized_solution
}) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="max-w-xl mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      <h2 className="text-3xl font-semibold text-white mb-3">{problem}</h2>
      <p className="text-sm text-gray-100 mb-2">
        Category: <span className="font-medium">{category}</span> | Difficulty: <span className="font-medium">{difficulty}</span>
      </p>
      <p className="mt-2 text-gray-100"><strong>Intuition: </strong>{intuition}</p>
      <p className="mt-2 text-gray-100"><strong>Time Complexity: </strong>{time_complexity}</p>
      <p className="mt-2 text-gray-100"><strong>Space Complexity: </strong>{space_complexity}</p>

      {/* Display Key Points */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg text-white mb-2">Key Points</h3>
        <ul className="list-none pl-6 space-y-2">
          {key_points.map((point, index) => (
            <li key={index} className="text-white text-md">
              <span className="inline-block bg-blue-700 text-white px-2 py-1 rounded-full">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Display Common Mistakes */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg text-white mb-2">Common Mistakes</h3>
        <ul className="list-none pl-6 space-y-2">
          {common_mistakes.map((mistake, index) => (
            <li key={index} className="text-white text-md">
              <span className="inline-block bg-red-700 text-white px-2 py-1 rounded-full">{mistake}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Show Solution Button */}
      <button 
        onClick={() => setShowSolution(!showSolution)} 
        className="mt-4 px-6 py-2 bg-white text-blue-500 rounded-full font-semibold transition-all duration-300 hover:bg-gray-100 hover:text-blue-700"
      >
        {showSolution ? 'Hide Solution' : 'Show Solution'}
      </button>

      {/* Solution Display */}
      {showSolution && (
        <div className="mt-6">
          <div>
            <h3 className="font-semibold text-lg text-white">Brute Force Solution</h3>
            <p className="text-white mb-4">{brute_force_solution.description}</p>
            <pre className="p-4 bg-gray-800 text-white rounded text-sm overflow-x-auto text-left">
              <code className="block">{brute_force_solution.code}</code>
            </pre>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg text-white">Optimized Solution</h3>
            <p className="text-white mb-4">{optimized_solution.description}</p>
            <pre className="p-4 bg-gray-800 text-white rounded text-sm overflow-x-auto text-left">
              <code className="block">{optimized_solution.code}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
