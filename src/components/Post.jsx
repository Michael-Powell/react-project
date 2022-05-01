import { React, useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Nav, Row, Table } from "react-bootstrap";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend } from "recharts";

function Post() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

   useEffect(() => {
     axios.get("./centr.json")
     .then((response) => {
         setLoading(false);
         setData(response.data);
         console.log(response);
     })
     .catch((err) => console.log(err));
   }, []);

  return (
    <Card className="card text-center m-3">
      <header className="App-header" style={{display : loading ? 'inherit' : 'none'}}>{loading && "Data is loading..."}</header>
            <Card.Title>
                <h2>
                Title Header Here  
                </h2>
                <h4>
                    Tenant
                </h4>
            </Card.Title>
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
    </Card>
  );
}

export default Post;
