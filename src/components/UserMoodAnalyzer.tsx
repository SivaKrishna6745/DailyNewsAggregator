import { useState } from 'react';
import useMoodAnalysis from '../hooks/useMoodAnalysis';
import { moodMap } from '../constants/constants';

const UserMoodAnalyzer = () => {
    const [typedInput, setTypedInput] = useState<string>('');
    const [userInput, setUserInput] = useState<string>('');
    const handleAnalysis = () => {
        setUserInput(typedInput);
    };
    const { mood } = useMoodAnalysis(userInput);

    return (
        <div className="p-8">
            <div className="my-8 text-left flex flex-col gap-6">
                <h3 className="text-2xl">Keywords or Topic</h3>
                <p className="text-lg">Search with Keywords or Topic to know your mood today</p>
                <input
                    type="text"
                    placeholder="Enter keyword..."
                    className="border-2 border-green-300 rounded-md px-4 py-2 outline-none"
                    value={typedInput}
                    onChange={(e) => setTypedInput(e.target.value)}
                />
            </div>
            <button
                onClick={handleAnalysis}
                className="w-full outline-none p-3 mt-8 bg-slate-600 text-white text-lg rounded-md cursor-pointer"
            >
                Analyze
            </button>
            {mood && userInput !== '' && (
                <h2 className="text-2xl capitalize m-8" style={{ color: moodMap[mood].color }}>
                    User mood is {mood} {moodMap[mood].emoji}
                </h2>
            )}
        </div>
    );
};

export default UserMoodAnalyzer;
