import { renderHook } from '@testing-library/react';
import { act } from 'react';  // Changed to import from 'react'
import usePalindrome from '../usePalindrome';
import { findLongestPalindromicSubstring } from '../functions/function2';

jest.mock('../functions/function2', () => ({
    findLongestPalindromicSubstring: jest.fn()
}));

const mockFindPalindrome = findLongestPalindromicSubstring as jest.Mock;

describe('usePalindrome', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockFindPalindrome.mockClear();
    });

    it('should initialize with empty input and result', () => {
        const { result } = renderHook(() => usePalindrome());
        expect(result.current.input).toBe('');
        expect(result.current.result).toBe('');
    });

    it('should update input value', () => {
        const { result } = renderHook(() => usePalindrome());

        act(() => {
            result.current.setInput('racecar');
        });

        expect(result.current.input).toBe('racecar');
    });

    it('should set result on handleSubmit', () => {
        // Setup
        const mockPalindrome = 'racecar';
        mockFindPalindrome.mockReturnValue(mockPalindrome);
        
        const { result } = renderHook(() => usePalindrome());
        const mockEvent = {
            preventDefault: jest.fn()
        } as unknown as React.FormEvent;

        // Act
        act(() => {
            result.current.setInput('racecar');
        });

        act(() => {
            result.current.handleSubmit(mockEvent);
        });

        // Assert
        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(mockFindPalindrome).toHaveBeenCalledWith('racecar');
        expect(result.current.result).toBe(mockPalindrome);
    });

    it('should handle empty input', () => {
        // Setup
        const mockPalindrome = '';
        mockFindPalindrome.mockReturnValue(mockPalindrome);
        
        const { result } = renderHook(() => usePalindrome());
        const mockEvent = {
            preventDefault: jest.fn()
        } as unknown as React.FormEvent;

        // Act
        act(() => {
            result.current.handleSubmit(mockEvent);
        });

        // Assert
        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(mockFindPalindrome).toHaveBeenCalledWith('');
        expect(result.current.result).toBe(mockPalindrome);
    });

    it('should handle input with no palindromes longer than 1 character', () => {
        // Setup
        const mockPalindrome = 'a';
        mockFindPalindrome.mockReturnValue(mockPalindrome);
        
        const { result } = renderHook(() => usePalindrome());
        const mockEvent = {
            preventDefault: jest.fn()
        } as unknown as React.FormEvent;

        // Act
        act(() => {
            result.current.setInput('abc');
        });

        act(() => {
            result.current.handleSubmit(mockEvent);
        });

        // Assert
        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(mockFindPalindrome).toHaveBeenCalledWith('abc');
        expect(result.current.result).toBe(mockPalindrome);
    });
});