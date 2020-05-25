import React from 'react';

import { formatNumber } from './formatters';
import Table from 'react-bootstrap/Table';

function DataTable({ data }) {

    function formatCells(data) {
        return data.map(state => {
            return (
                <tr key={state.stateAbbreviation}>
                    <td>{state.stateName ? state.stateName : '-'}</td>
                    <td>{state.totalCases ? formatNumber(state.totalCases) : '-'}</td>
                    <td>{state.totalDeaths ? formatNumber(state.totalDeaths) : '-'}</td>
                    <td>{state.totalRecovered ? formatNumber(state.totalRecovered) : '-'}</td>
                    <td>{state.totalHospitalized ? formatNumber(state.totalHospitalized) : '-'}</td>
                    <td>{state.currentHospitalized ? formatNumber(state.currentHospitalized) : '-'}</td>
                    <td>{state.totalTests ? formatNumber(state.totalTests) : '-'}</td>
                </tr>
            );
        })
    }

    console.log(data)
    return (
        <Table bordered striped>
            <thead>
                <tr>
                    <th>State</th>
                    <th>Total Cases</th>
                    <th>Total Deaths</th>
                    <th>Total Recovered</th>
                    <th>Total Hospitalized</th>
                    <th>Current Hospitalized</th>
                    <th>Total Tested</th>
                </tr>
            </thead>
            <tbody>
                {formatCells(data)}
            </tbody>
        </Table>
    )
}

export default DataTable;
