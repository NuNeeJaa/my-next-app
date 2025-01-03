import { useState } from 'react';
import { findLongestPalindromicSubstring } from './functions/function2';

const usePalindrome = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const longestPalindrome = findLongestPalindromicSubstring(input);
    setResult(longestPalindrome);
  };

  return { input, result, setInput, handleSubmit };
};

export default usePalindrome;