import React from 'react';
import PalindromeComponent from '../components/PalindromeComponent';
import usePalindrome from '../hooks/usePalindrome/usePalindrome';

const PalindromeContainer: React.FC = () => {
  const { input, result, setInput, handleSubmit } = usePalindrome();

  return (
    <PalindromeComponent
      input={input}
      result={result}
      setInput={setInput}
      handleSubmit={handleSubmit}
    />
  );
};

export default PalindromeContainer;