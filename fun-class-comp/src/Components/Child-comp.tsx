import React from 'react';

class ChildComponent extends React.Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default ChildComponent;