/**
 * Finds the longest palindromic substring in a given string.
 * Uses expand around center approach to find palindromes.
 * 
 * @param s - The input string to search for palindromes
 * @returns The longest palindromic substring found
 * 
 * Time Complexity: O(n²) where n is string length
 * Space Complexity: O(1) constant extra space
 * 
 * @example
 * longestPalindromicSubstring("babad") // returns "bab" or "aba"
 * longestPalindromicSubstring("cbbd") // returns "bb"
 */
export function longestPalindromicSubstring(s: string): string {
    // Handle base cases
    if (s.length < 2) return s;

    let start = 0;
    let maxLength = 1;

    /**
     * Helper function to expand around center and find palindromes
     * @param left - Left pointer for expansion
     * @param right - Right pointer for expansion
     */
    function expandAroundCenter(left: number, right: number): void {
        // Expand while within bounds and characters match
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLength = right - left + 1;
            // Update if current palindrome is longer
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }

    // Check each position as potential palindrome center
    for (let i = 0; i < s.length; i++) {
        // Check for odd length palindromes
        expandAroundCenter(i, i);
        // Check for even length palindromes
        expandAroundCenter(i, i + 1);
    }

    // Return the longest palindromic substring found
    return s.substring(start, start + maxLength);
}