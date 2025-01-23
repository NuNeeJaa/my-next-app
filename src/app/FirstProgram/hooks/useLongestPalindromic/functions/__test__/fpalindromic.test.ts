import { longestPalindromicSubstring } from '../fpalindromic';

describe('longestPalindromicSubstring', () => {
    test('returns the longest palindromic substring for a given string', () => {
        expect(longestPalindromicSubstring('babad')).toBe('bab'); // 'aba' is also a valid answer
        expect(longestPalindromicSubstring('cbbd')).toBe('bb');
        expect(longestPalindromicSubstring('a')).toBe('a');
        expect(longestPalindromicSubstring('ac')).toBe('a'); // 'c' is also a valid answer
    });

    test('returns the entire string if it is a palindrome', () => {
        expect(longestPalindromicSubstring('racecar')).toBe('racecar');
        expect(longestPalindromicSubstring('madam')).toBe('madam');
    });

    test('returns the first character if no palindromic substring is found', () => {
        expect(longestPalindromicSubstring('abc')).toBe('a'); // 'b' or 'c' are also valid answers
    });

    test('handles empty string input', () => {
        expect(longestPalindromicSubstring('')).toBe('');
    });

    test('handles string with all identical characters', () => {
        expect(longestPalindromicSubstring('aaaa')).toBe('aaaa');
    });
});