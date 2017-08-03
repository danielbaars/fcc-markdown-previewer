import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

class MarkdownOutput extends Component {
  convertMarkdown() {
    return {
      __html: marked(this.props.input)
    };
  }
  render() {
    return (
      <div className="col-md-6">
        <h3 className="header">Markdown Output:</h3>
        <div dangerouslySetInnerHTML={this.convertMarkdown()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    input: state.input
  };
}

export default connect(mapStateToProps)(MarkdownOutput);
