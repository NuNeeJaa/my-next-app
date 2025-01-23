import { useState } from 'react';
import { longestPalindromicSubstring } from './functions/longestPalindrom';

interface UsePalindrome2Return {
    input: string;
    result: string;
    setInput: (value: string) => void;
    handleSubmit: () => void;
}

export const usePalindrome2 = (): UsePalindrome2Return => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleSubmit = () => {
        const palindrome = longestPalindromicSubstring(input);
        setResult(palindrome);
    };

    return {
        input,
        result,
        setInput,
        handleSubmit
    };
};

export default usePalindrome2;