import react from "react";
import { Container, Row, Card } from "react-bootstrap";
import Content from "../components/Content";
import Post from "../components/Post";

const Web = () => {
  return (
    <div className="App">
      <div className="pageContainer">
          <Content />
          <Post />
      </div>
    </div>
  );
};

export default Web;
