import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import averages from '../averages.json';
import test from '../test.json';

export default function PlayerVsPlayer() {

    const players = ["Joe Mauer", "Byron Buxton"]

  return (

    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={test}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Split" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={`${players[0]} BA`} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey={`${players[1]} BA`} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
  )
}
