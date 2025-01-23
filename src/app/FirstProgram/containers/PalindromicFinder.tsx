import React, { useState } from 'react';
import useLongestPalindromicSubstring from '../hooks/useLongestPalindromic/useLongestPalindromic';
import PalindromicDisplay from '../components/PalindromicComponent';

const PalindromicFinder: React.FC = () => {
    const [input, setInput] = useState('');
    const result = useLongestPalindromicSubstring(input);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <div > 
            <div style={{ marginBottom: '1.5rem' }}>  
            <input type="text" value={input} onChange={handleChange} placeholder="Enter a string" />  
            </div>

            <PalindromicDisplay  input={input} result={result} />
        </div> 
    );
};

export default PalindromicFinder;