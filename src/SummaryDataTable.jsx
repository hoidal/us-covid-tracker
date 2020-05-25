import React from 'react'
import { formatNumber } from './formatters';

import Table from 'react-bootstrap/Table';

function SummaryDataTable({ data }) {
    
    const totalCases = data.length === 0 ? '-' : formatNumber(data[0].positive);
    const totalDeaths = data.length === 0 ? '-' : formatNumber(data[0].death);
    const totalRecovered = data.length === 0 ? '-' : formatNumber(data[0].recovered);
    const totalTested = data.length === 0 ? '-' : formatNumber(data[0].totalTestResults);

    return (
        <div>
            <h1>Current Totals</h1>
            <Table bordered striped>
                <thead>
                    <tr>
                        <th>Total Cases</th>
                        <th>Total Deaths</th>
                        <th>Total Recovered</th>
                        <th>Total Tests</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{totalCases}</td>
                        <td>{totalDeaths}</td>
                        <td>{totalRecovered}</td>
                        <td>{totalTested}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default SummaryDataTable;
