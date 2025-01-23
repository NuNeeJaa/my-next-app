import React from 'react';

interface PalindromeComponentProps {
    input: string;
    result: string;
    setInput: (value: string) => void;
    handleSubmit: () => void;
}

const PalindromeComponent2: React.FC<PalindromeComponentProps> = ({
    input,
    result,
    setInput,
    handleSubmit
}) => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Palindrome Checker</h3>
            <div className="space-y-4">
                <div style={{ marginBottom: '1.5rem' }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter text to check"
                    />
                </div>
                <button style={{ marginBottom: '2rem' }}
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Check Palindrome
                </button>
                {result && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        <h3 style={{ marginBottom: '0.5rem' }} className="text-2xl font-bold mb-4 text-gray-800">Show Result</h3>
                        <p className="text-gray-800">{result}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PalindromeComponent2; 