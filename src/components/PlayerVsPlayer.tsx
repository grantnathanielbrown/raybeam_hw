import React, { useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import convertedAverages from '../data/convertedAverages.json';

interface dataSubject {
  description: string;
  displayed: boolean;
}

export default function PlayerVsPlayer() {
    const subjectColors: string[] = ["red", "blue", "purple", "green", "orange"];
    const subjectImages: string[] = ["https://i.imgur.com/VgQoNtH.jpg", "https://i.imgur.com/Cfa8dp0.jpg", "https://i.imgur.com/ZsU7i8f.jpg", "https://i.imgur.com/2qoUvIj.jpg", "https://i.imgur.com/X4QQ12H.png"]
    const [dataSubjects, setDataSubjects] = React.useState<dataSubject[]>([]);
    useEffect( () => {
        // Collect the names of all the players and the team, and store them in dataSubjects.
        const subjects: string[] = Object.keys(convertedAverages[0]);
        subjects.shift();
        const dataSubjects: dataSubject[] = subjects.map((subject: string) => {
            return {
                description: subject,
                displayed: true
            }
        })
        setDataSubjects(dataSubjects);
    },[]);

    function toggleSubjectVisibility(event: React.ChangeEvent<HTMLInputElement>, index: number): void {
      const clone = structuredClone(dataSubjects);
      clone[index].displayed = event.target.checked;
      setDataSubjects(clone);

    }

  return (

    <div className="pvp-container">
      <h2>2017 Batting Averages</h2>
      <ResponsiveContainer width="100%" height="75%">
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
          {/* <Legend /> */}
            {dataSubjects.map( (subject, index) => {
                return <Line type="monotone" key={subject.description} dataKey={subject.displayed ? subject.description : ""} stroke={subjectColors[index]} strokeWidth={3} activeDot={{ r: 8 }} />
            })}
        </LineChart>
      </ResponsiveContainer>
      {dataSubjects.map( (subject, index) => {
        return <>
          <img height="64px" width="64px" src={subjectImages[index]} alt={subject.description} />
          <input checked={subject.displayed} onChange={(e) => toggleSubjectVisibility(e,index)} type="checkbox" name={subject.description} id="" key={subject.description}/>
          <label style={{color: subjectColors[index]}} htmlFor={subject.description}>{subject.description}</label>
        </>
      })}
    </div>
  )
}
