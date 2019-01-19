import React, { Component } from "react";
import { Container, Col } from "reactstrap";

const TopnavSourceMap = JSON.parse(
  process.env.REACT_APP_DOCUMATE_TOPNAVSOURCEMAP
);

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentWillMount() {
    const {
      location: { pathname }
    } = this.props;
    let contentPath =
      pathname !== "/"
        ? TopnavSourceMap[pathname]
        : TopnavSourceMap[Object.keys(TopnavSourceMap)[0]];

    fetch(contentPath)
      .then(d => d.text())
      .then(t => this.setState({ content: t }))
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div
        style={{ paddingTop: 90 }}
        md="8"
        dangerouslySetInnerHTML={{ __html: this.state.content }}
      />
    );
  }
}
