import React from 'react'
function ChildComponent(props) {
  return (
  <h1>Hello, {props.name} {props.id}!</h1>
  );
}

export default ChildComponent;