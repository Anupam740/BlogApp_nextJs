import React from 'react';

function DataDisplay({ data }) {
  return (
    <div>
      <h1>JSON Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataDisplay;


