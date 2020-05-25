import React from 'react'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function SummaryGraph({ data }) {

    return (
        <div id="graph-summary-container">
            <div>
                <h1>Total Cases</h1>
                <LineChart width={800} height={300} data={data} className="line-chart">
                    <Line name="Total Cases" type="monotone" dataKey="totalCases" stroke="black" strokeWidth="3" dot={false} />
                    <CartesianGrid stroke="#ccc" />
                    <Tooltip />
                    <XAxis dataKey="date" />
                    <YAxis />
                </LineChart>
            </div>
            <div> 
                <h1>Total Deaths</h1>
                <LineChart width={800} height={300} data={data} className="line-chart">
                    <Line name="Total Deaths" type="monotone" dataKey="totalDeaths" stroke="red" strokeWidth="3" dot={false} />
                    <CartesianGrid stroke="#ccc" />
                    <Tooltip />
                    <XAxis dataKey="date" />
                    <YAxis />
                </LineChart>
            </div>
            <div>
                <h1>Total Tests</h1>
                <LineChart width={800} height={300} data={data} className="line-chart">
                    <Line name="Total Tests" type="monotone" dataKey="totalTests" stroke="green" strokeWidth="3" dot={false} />
                    <CartesianGrid stroke="#ccc" />
                    <Tooltip />
                    <XAxis dataKey="date" />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    )
}

export default SummaryGraph;
