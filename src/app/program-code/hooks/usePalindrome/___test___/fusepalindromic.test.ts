import { findLongestPalindromicSubstring } from '../functions/function2';

describe('findLongestPalindromicSubstring', () => {
    // 1. Regular Palindrome Search
    it('should return the longest palindromic substring when multiple possible palindromes exist', () => {
        const input = 'babad';
        const result = findLongestPalindromicSubstring(input);
        // Multiple valid answers are possible: 'bab' or 'aba'
        expect(['bab', 'aba']).toContain(result);
    });

    it('should return the longest palindromic substring when multiple valid answers are possible', () => {
        const input = 'cbbd';
        const result = findLongestPalindromicSubstring(input);
        expect(result).toBe('bb');
    });

    // 2. Full String Palindrome
    it('should return the entire string when the whole string is a palindrome', () => {
        const input = 'racecar';
        const result = findLongestPalindromicSubstring(input);
        expect(result).toBe('racecar');
    });

    // 3. No Multi-Character Palindrome
    it('should return the first character when no longer palindromes exist', () => {
        const input = 'abc';
        const result = findLongestPalindromicSubstring(input);
        expect(result).toBe('a');
    });

    // 4. Edge Cases
    it('should handle an empty string', () => {
        const input = '';
        const result = findLongestPalindromicSubstring(input);
        expect(result).toBe('');
    });

    it('should return the entire string when all characters are identical', () => {
        const input = 'aaaa';
        const result = findLongestPalindromicSubstring(input);
        expect(result).toBe('aaaa');
    });
});