import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent name="Child 1" age={10} />
        <ChildComponent name="Child 2" age={15} />
        <ChildComponent name="Child 3" age={8} />
      </div>
    );
  }
}

export default ParentComponent;