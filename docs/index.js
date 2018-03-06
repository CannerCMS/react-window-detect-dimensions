// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import WindowDimensions from '../src';
const rootEl = document && document.getElementById('root');

class DimensionDemo extends React.Component<{}> {
  render() {
    return (
      <WindowDimensions>
        { ({ windowWidth, windowHeight }) => (
          <div>
            width: {windowWidth}, 
            height: {windowHeight}
          </div>
        )}
      </WindowDimensions>
    );
  }
}

if (rootEl) {
  ReactDOM.render(<DimensionDemo/>, rootEl);
}
