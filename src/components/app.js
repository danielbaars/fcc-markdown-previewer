import React, { Component } from 'react';

import MarkdownInput from '../containers/markdown_input';
import MarkdownOutput from '../containers/markdown_output';

export default class App extends Component {
  render() {
    return (
      <div>
        <MarkdownInput />
        <MarkdownOutput />
      </div>
    );
  }
}
