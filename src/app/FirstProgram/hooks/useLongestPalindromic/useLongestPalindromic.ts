import { useState, useEffect } from 'react';
import { longestPalindromicSubstring } from './functions/fpalindromic';

const useLongestPalindromicSubstring = (input: string): string => {
    const [result, setResult] = useState('');

    useEffect(() => {
        setResult(longestPalindromicSubstring(input));
    }, [input]);

    return result;
};

export default useLongestPalindromicSubstring;