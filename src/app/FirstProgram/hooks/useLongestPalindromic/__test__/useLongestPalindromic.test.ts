import { renderHook } from '@testing-library/react'; 
import useLongestPalindromicSubstring from '../useLongestPalindromic';
import { longestPalindromicSubstring } from '../functions/fpalindromic';

// Mock the palindrome function
jest.mock('../functions/fpalindromic');
const mockPalindrome = longestPalindromicSubstring as jest.MockedFunction<typeof longestPalindromicSubstring>;

describe('useLongestPalindromicSubstring', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Success Cases
    test('returns palindrome for valid input', () => {
        // Arrange
        mockPalindrome.mockReturnValue('aba');
        
        // Act
        const { result } = renderHook(() => 
            useLongestPalindromicSubstring('babad')
        );

        // Assert
        expect(mockPalindrome).toHaveBeenCalledWith('babad');
        expect(result.current).toBe('aba');
    });

    test('updates result when input changes', () => {
        // Arrange
        mockPalindrome
            .mockReturnValueOnce('bb')
            .mockReturnValueOnce('racecar');

        // Act
        const { result, rerender } = renderHook(
            ({ input }) => useLongestPalindromicSubstring(input),
            { initialProps: { input: 'cbbd' } }
        );

        // Assert initial render
        expect(result.current).toBe('bb');

        // Act - change input
        rerender({ input: 'racecar' });

        // Assert after change
        expect(result.current).toBe('racecar');
    });

    // Alternative Cases
    test('handles empty string', () => {
        // Arrange
        mockPalindrome.mockReturnValue('');

        // Act
        const { result } = renderHook(() => 
            useLongestPalindromicSubstring('')
        );

        // Assert
        expect(result.current).toBe('');
    });

    test('handles single character', () => {
        // Arrange
        mockPalindrome.mockReturnValue('a');

        // Act
        const { result } = renderHook(() => 
            useLongestPalindromicSubstring('a')
        );

        // Assert
        expect(result.current).toBe('a');
    });
});