"use client";

import React from 'react';
import PalindromicFinder from './FirstProgram/containers/PalindromicFinder';
import PalindromicFinder2 from './SecondProgram/containers/PalindromicContainer2';

const Page: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1>PalindromicFinder 1 </h1>
      </div> 
      <div>
      <PalindromicFinder />
      </div> 
      <div style={{ marginBottom: '1.5rem' }}></div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1>PalindromicFinder 2 </h1>
      </div> 
      <div>
      <PalindromicFinder2 />
      </div> 
    </div>
  );
};

export default Page;