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
  optimized_solution,
}) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{problem}</h2>

      <div className="text-sm text-gray-500 mb-4">
        <span className="mr-4">Category: <span className="font-medium text-gray-700">{category}</span></span>
        <span>Difficulty: <span className={`font-medium ${difficulty === 'Hard' ? 'text-red-500' : difficulty === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>{difficulty}</span></span>
      </div>

      <p className="text-gray-700 text-base leading-relaxed mb-4"><strong>Intuition:</strong> {intuition}</p>
      <p className="text-gray-700 text-base leading-relaxed mb-4"><strong>Time Complexity:</strong> {time_complexity}</p>
      <p className="text-gray-700 text-base leading-relaxed mb-4"><strong>Space Complexity:</strong> {space_complexity}</p>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Key Points</h3>
        <ul className="space-y-2">
          {key_points.map((point, index) => (
            <li key={index} className="text-gray-700 text-sm bg-gray-100 p-2 rounded">
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Common Mistakes</h3>
        <ul className="space-y-2">
          {common_mistakes.map((mistake, index) => (
            <li key={index} className="text-gray-700 text-sm bg-red-100 p-2 rounded">
              {mistake}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full font-semibold shadow hover:bg-blue-600 transition duration-300"
      >
        {showSolution ? 'Hide Solution' : 'Show Solution'}
      </button>

      {showSolution && (
        <div className="mt-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">Brute Force Solution</h3>
            <p className="text-gray-700 text-sm mb-4">{brute_force_solution.description}</p>
            <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto text-sm">
              <code>{brute_force_solution.code}</code>
            </pre>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Optimized Solution</h3>
            <p className="text-gray-700 text-sm mb-4">{optimized_solution.description}</p>
            <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto text-sm">
              <code>{optimized_solution.code}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcard;