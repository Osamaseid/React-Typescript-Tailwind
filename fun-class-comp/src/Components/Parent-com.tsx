import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <div>
      <ChildComponent name="Alice" id={2} />
      <ChildComponent name="Bob" id={3} />
    </div>
  );
}

export default ParentComponent;