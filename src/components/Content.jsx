import {React, useState, useEffect} from "react";
import { Card, Container, Nav } from "react-bootstrap";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend } from "recharts";
import centrData from "../dataFiles/data";
import centr from "../dataFiles/centr";
import moment from 'moment';
import axios from "axios";

const Content = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios.get("./data.json")
    .then((response) => {
        setLoading(false);
        setData(response.data);
        console.log(response);
    })
    .catch((err) => console.log(err));
  }, []);

  // const dateTip = moment(data.date).slice(0, 6);

  return (
      <Card>
        <Card.Body>
          <LineChart width={1000} height={400} data={data} className="horizontalScroll">
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
  );
};

export default Content;

