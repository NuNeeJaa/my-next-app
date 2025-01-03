import React from 'react';

interface PalindromeComponentProps {
  input: string;
  result: string;
  setInput: (input: string) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

const PalindromeComponent: React.FC<PalindromeComponentProps> = ({ input, result, setInput, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem', display: 'flex' }}>
          <label htmlFor="input" style={{ marginLeft: '1rem',width: '65px' }}>Input:</label>
          <input
            type="text"
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginBottom: '1rem', marginLeft: '5rem' }}>Find Longest Palindromic Substring</button>
      </form>
      {result && (
        <div>
          <h2>Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default PalindromeComponent;