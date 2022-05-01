import {React, useState, useEffect} from "react";
import { Card, Container, Nav } from "react-bootstrap";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend } from "recharts";
import data from "../dataFiles/data";
import centr from "../dataFiles/centr";
import axios from "axios";

const Content = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  // useEffect(() => {
  //   getData();
  // }, []);

    useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4bef8838c2fd078bd13d7127d8dedcd4&language=en-US&page=1"
      )
      .then(({ data: { results } }) => {
        setLoading(false);
        setTimeout(() => setLoading(false), 5000);
        console.log(results);
        setData(results);
      })
      .catch((err) => console.log(err));

    console.log(data, 'data');
  }, []);

  return (
    <Container>
      <Card>
        <Card.Body>
          <LineChart width={1000} height={500} data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip />
            <Legend verticalAlign="bottom" height={36}/>
            <Line type="monotone" dataKey="Failed" stroke="#f1888f" />
            <Line type="monotone" dataKey="Retest" stroke="#edee81" />
            <Line type="monotone" dataKey="Blocked" stroke="#d0d0d0" />
            <Line type="monotone" dataKey="Passed" stroke="#95d96d" />
          </LineChart>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Content;


