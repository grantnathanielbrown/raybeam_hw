import React, { useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import convertedAverages from '../data/convertedAverages.json';

export default function PlayerVsPlayer() {
    const barColors: string[] = ['red', 'blue', 'purple', 'green', 'orange'];
    const [dataSubjects, setDataSubjects] = React.useState<string[]>([]);
    useEffect( () => {
        // Collect the names of all the players and the team, and store them in dataSubjects.
        const subjects = Object.keys(convertedAverages[0]);
        subjects.shift();
        setDataSubjects(subjects);
    },[]);

  return (

    <div className="pvp-container">
      <h2>2017 Batting Averages</h2>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          width={500}
          height={300}
          data={convertedAverages}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Split" padding={{ left: 30, right: 30 }}/>
          <YAxis />
          <Tooltip />
          <Legend />
            {dataSubjects.map( (subject, index) => {
                return <Line type="monotone" key={subject} dataKey={subject} stroke={barColors[index]} strokeWidth={3} activeDot={{ r: 8 }} />
            })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
