import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import useFetch from '../hooks/useFetch'


const Chart = () => {

    const [data] = useFetch('http://localhost:5000/api/players')
    console.log(data)

    return (
        <div>
            <BarChart
                width={1000}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={false} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="searches" fill="#8884d8" />
                
            </BarChart>
        </div>
    )
}

export default Chart


