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
        <>
            <div className="flex justify-center items-center gap-8">
                <textarea
                    rows={3}
                    cols={30}
                    placeholder="Enter keyword..."
                    className="border-2 border-green-300 rounded-md px-4 py-2 outline-none"
                    value={typedInput}
                    onChange={(e) => setTypedInput(e.target.value)}
                />
                <button
                    onClick={handleAnalysis}
                    className="outline-none p-3 bg-slate-600 text-white text-lg rounded-md cursor-pointer"
                >
                    Analyze
                </button>
            </div>
            {mood && (
                <h2 className="text-2xl capitalize m-8" style={{ color: moodMap[mood].color }}>
                    User mood is {mood} {moodMap[mood].emoji}
                </h2>
            )}
        </>
    );
};

export default UserMoodAnalyzer;
