import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setInput } from '../actions';

class MarkdownInput extends Component {
  onInputChange(event) {
    this.props.setInput(event.target.value);
  }
  render() {
    var inputStyling = {
      marginBottom: 24
    };
    return (
      <div style={inputStyling} className="col-md-6">
        <h3 className="header">Markdown Input:</h3>
        <textarea
          rows="22"
          placeholder="Type away..."
          className="form-control"
          value={this.props.input}
          onChange={this.onInputChange.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    input: state.input
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setInput }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownInput);
