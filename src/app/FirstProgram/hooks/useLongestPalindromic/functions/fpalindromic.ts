export function longestPalindromicSubstring(s: string): string {
    if (s.length < 2) return s;

    let start = 0;
    let maxLength = 1;

    // Helper function to expand around center
    function expandAroundCenter(left: number, right: number): void {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }

    // Check each position as potential center
    for (let i = 0; i < s.length; i++) {
        // For odd length palindromes
        expandAroundCenter(i, i);
        // For even length palindromes
        expandAroundCenter(i, i + 1);
    }

    return s.substring(start, start + maxLength);
}