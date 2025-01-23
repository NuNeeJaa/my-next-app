import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { usePalindrome2 } from '../usePalindrome2';
import { longestPalindromicSubstring } from '../functions/longestPalindrom';

// Mock palindrome function
jest.mock('../functions/longestPalindrom');
const mockPalindrome = longestPalindromicSubstring as jest.MockedFunction<typeof longestPalindromicSubstring>;

describe('usePalindrome2', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Initialization Tests
    describe('initialization', () => {
        test('should initialize with empty values', () => {
            // Arrange & Act
            const { result } = renderHook(() => usePalindrome2());

            // Assert
            expect(result.current.input).toBe('');
            expect(result.current.result).toBe('');
        });
    });

    // Input Update Tests
    describe('input updates', () => {
        test('should update input value', () => {
            // Arrange
            const { result } = renderHook(() => usePalindrome2());

            // Act
            act(() => {
                result.current.setInput('racecar');
            });

            // Assert
            expect(result.current.input).toBe('racecar');
        });
    });

    // Submit Handling Tests
    describe('submit handling', () => {
        test('should handle normal palindrome case', () => {
            // Arrange
            const { result } = renderHook(() => usePalindrome2());
            mockPalindrome.mockReturnValue('bab');
    
            // Act - แยก act เป็น 2 ส่วน
            act(() => {
                result.current.setInput('babad');
            });
    
            act(() => {
                result.current.handleSubmit();
            });
    
            // Assert
            expect(mockPalindrome).toHaveBeenCalledWith('babad');
            expect(result.current.result).toBe('bab');
        });

        test('should handle empty input', () => {
            // Arrange
            const { result } = renderHook(() => usePalindrome2());
            mockPalindrome.mockReturnValue('');

            // Act
            act(() => {
                result.current.handleSubmit();
            });

            // Assert
            expect(mockPalindrome).toHaveBeenCalledWith('');
            expect(result.current.result).toBe('');
        });

        test('should handle single character case', () => {
            // Arrange
            const { result } = renderHook(() => usePalindrome2());
            mockPalindrome.mockReturnValue('a');

            // Act - แยก act เป็น 2 ส่วน
            act(() => {
                result.current.setInput('abc');
            });

            act(() => {
                result.current.handleSubmit();
            });

            // Assert
            expect(mockPalindrome).toHaveBeenCalledWith('abc');
            expect(result.current.result).toBe('a');
        });
    });
});