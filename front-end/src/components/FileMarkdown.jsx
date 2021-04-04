import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

export class FileMarkdown extends Component {
  state = { text: "Loading" };

  componentDidMount() {
    fetch(this.props.file)
      .then((response) => response.text())
      .then((text) => this.setState({ text }));
  }

  render() {
    const { text } = this.state;

    return <ReactMarkdown source={text} />;
  }
}

FileMarkdown.propTypes = {
  file: PropTypes.object.isRequired,
};
