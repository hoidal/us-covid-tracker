import React from 'react'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function SummaryGraph({ data }) {

    return (
        <div>
           <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="totalCases" stroke="#8884d8" dot={false} />
                <CartesianGrid stroke="#ccc" />
                <Tooltip />
                <XAxis dataKey="date" />
                <YAxis />
            </LineChart>
        </div>
    )
}

export default SummaryGraph;
