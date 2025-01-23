import React from 'react';

interface PalindromicDisplayProps {
    input: string;
    result: string;
}

const PalindromicDisplay: React.FC<PalindromicDisplayProps> = ({ input, result }) => {
    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Longest Palindromic Substring Finder</h2>
            <p style={{ marginBottom: '0.5rem'}}>Input: {input}</p>
            <p>Longest Palindromic Substring: {result}</p>
        </div>
    );
};

export default PalindromicDisplay;