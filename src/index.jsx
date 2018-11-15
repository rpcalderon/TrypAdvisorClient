import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import Qanda from './components/QandA/Qanda.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log('render', this.state.questions);
    return (
      <div>
        <Qanda />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
