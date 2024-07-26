// src/App.jsx
import React from 'react';
import AutoFetch1 from './components/AutoFetch1';
import AutoFetch2 from './components/AutoFetch2';
import AutoFetch3 from './components/AutoFetch3';


const App = () => {
  return (
    <>
      <h1>Auto Fetching....</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <AutoFetch1 />
        <br />
        <AutoFetch2 />
        <br />
        <AutoFetch3 />
      </div>
    </>
  );
};

export default App;
