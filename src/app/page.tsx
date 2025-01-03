"use client";

import React from 'react';
import FormContainer from './program-code/containers/FormContainer';
import PalindromeContainer from './program-code/containers/PalindromeContainer';

const Page: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1>Form Page</h1>
      </div> 
      <div>
      <FormContainer />
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1>Palindrome</h1>
      </div> 
      <div>
      <PalindromeContainer />
      </div>
    </div>
  );
};

export default Page;