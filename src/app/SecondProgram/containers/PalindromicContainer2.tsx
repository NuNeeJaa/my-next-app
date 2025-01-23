import React from 'react';
import PalindromeComponent2 from '../components/PalindromicComponent2';
import usePalindrome2 from '../hooks/usePalindrome/usePalindrome2';

const PalindromeContainer2: React.FC = () => {
    // Get state and handlers from custom hook
    const {
        input,
        result,
        setInput,
        handleSubmit
    } = usePalindrome2();

    return (
        <PalindromeComponent2
            input={input}
            result={result}
            setInput={setInput}
            handleSubmit={handleSubmit}
        />
    );
};

export default PalindromeContainer2;