import { React, useState, useEffect } from "react";
import axios from "axios";
import { Card, Table } from "react-bootstrap";

function Post() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("./centr.json")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card className="verticalScroll">
      <Card.Body>
        <header
          className="App-header"
          style={{ display: loading ? "inherit" : "none" }}
          >
          {loading && "Data is loading..."}
        </header>
        <div className="title">
          <Card.Title className="title">{data[0].Plan}</Card.Title>
          <Card.Subtitle>{data[0].Run}</Card.Subtitle>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th className="titleColumn">Title</th>
              <th>Tested By</th>
              <th>Tested On</th>
              <th>Status</th>
            </tr>
          </thead>
          {data.map((_data, index) => (
            <tbody key={index}>
              <tr>
                <td>{_data.ID}</td>
                <td className="titleColumn">{_data.Title}</td>
                <td>{_data.TestedBy}</td>
                <td>{_data.TestedOn}</td>
                <td>{_data.Status}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Post;
