export function findLongestPalindromicSubstring(s: string): string {
    if (s.length < 2) return s;

    let start = 0;
    let maxLength = 1;

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

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i); // For odd length palindromes
        expandAroundCenter(i, i + 1); // For even length palindromes
    }

    return s.substring(start, start + maxLength);
}