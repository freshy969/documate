import React from "react";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

let possibleDocPaths = Object.keys(
  JSON.parse(process.env.REACT_APP_DOCUMATE_DOCSSOURCEMAP)
);

export default () => {
  let currentPathIndex = possibleDocPaths.indexOf(window.location.pathname);
  let previousPathLink = possibleDocPaths[currentPathIndex - 1] || null;
  let nextPathLink = possibleDocPaths[currentPathIndex + 1] || null;

  return (
    <div
      id="pagination"
      style={{
        backgroundColor: "rgb(40, 44, 52)",
        marginTop: 150,
        padding: "50px 0"
      }}
    >
      <Container>
        <Col md="8">
          <Row>
            {(previousPathLink && (
              <Col className="page-previous" md="6" sm="6" xs="6">
                <span
                  style={{
                    color: "#61dafb",
                    fontSize: 14
                  }}
                >
                  Previous Article
                </span>
                <br />
                <Link
                  className="pagination-link"
                  to={previousPathLink}
                  dangerouslySetInnerHTML={{
                    __html:
                      window.searchables[previousPathLink] &&
                      window.searchables[previousPathLink][0].title
                  }}
                />
              </Col>
            )) || <Col className="page-previous" md="6" sm="6" xs="6" />}
            {nextPathLink && (
              <Col
                className="page-next"
                style={{ textAlign: "right", float: "right" }}
                md="6"
                sm="6"
                xs="6"
              >
                <span
                  style={{
                    color: "#61dafb",
                    fontSize: 14
                  }}
                >
                  Next Article
                </span>
                <br />
                <Link
                  className="pagination-link"
                  to={nextPathLink}
                  dangerouslySetInnerHTML={{
                    __html:
                      window.searchables[nextPathLink] &&
                      window.searchables[nextPathLink][0].title
                  }}
                />
              </Col>
            )}
          </Row>
        </Col>
      </Container>
    </div>
  );
};
