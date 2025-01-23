import { longestPalindromicSubstring } from '../longestPalindrom';

describe('longestPalindromicSubstring', () => {
    // Regular Palindrome Search
    test('returns the longest palindromic substring for a given string', () => {
        // Cases with multiple possible palindromes in one string
        expect(longestPalindromicSubstring('babad')).toBe('bab'); // 'aba' is also a valid answer
        expect(longestPalindromicSubstring('cbbd')).toBe('bb');
    });

    test('handles strings with multiple palindromes of different lengths', () => {
        expect(longestPalindromicSubstring('abbracecarxx')).toBe('racecar');
    });

    // Full String Palindrome
    test('returns full string when entire string is a palindrome', () => {
        expect(longestPalindromicSubstring('racecar')).toBe('racecar');
        expect(longestPalindromicSubstring('aaa')).toBe('aaa');
    });

    // No Multi-Character Palindrome
    test('returns first character when no longer palindromes exist', () => {
        expect(longestPalindromicSubstring('abc')).toBe('a');
        expect(longestPalindromicSubstring('xyz')).toBe('x');
    });

    // Edge Cases
    test('handles empty string', () => {
        expect(longestPalindromicSubstring('')).toBe('');
    });

    test('handles single character string', () => {
        expect(longestPalindromicSubstring('a')).toBe('a');
    });

    test('handles string with all identical characters', () => {
        expect(longestPalindromicSubstring('aaaa')).toBe('aaaa');
        expect(longestPalindromicSubstring('bbb')).toBe('bbb');
    });

    // Additional Complex Cases
    test('handles complex palindrome patterns', () => {
        expect(longestPalindromicSubstring('abaxxaba')).toBe('abaxxaba');
        expect(longestPalindromicSubstring('abcdefggfedcba')).toBe('abcdefggfedcba');
    });
});