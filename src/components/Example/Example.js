import React from 'react';

class Example extends React.Component {
  render() {
    return (
      <p>{this.props.content}</p>
    );
  }
}

Example.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Example;
