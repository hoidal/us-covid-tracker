import React, { Component } from 'react'
import SummaryDataTable from './SummaryDataTable';
import SummaryGraph from './SummaryGraph';
import DataTable from './DataTable';

import { formatGraphData, formatStateData } from './formatters';

const currentTotalsURL = 'https://covidtracking.com/api/v1/us/current.json';
const historicalTotalsURL = 'https://covidtracking.com/api/v1/us/daily.json';
const currentStateTotalsURL = 'https://covidtracking.com/api/v1/states/current.json';

class USTotals extends Component {

    state = {
        currentTotalData: [],
        historicalTotalData: [],
        currentStateTotals: []
    }

    componentDidMount() {
        // Daily US Summary API Call
        fetch(currentTotalsURL)
        .then(response => response.json())
        .then(summaryData => this.setState({ currentTotalData: summaryData }))

        // Historical US Summary API Call
        fetch(historicalTotalsURL)
        .then(response => response.json())
        .then(historicalData => this.setState({ historicalTotalData: formatGraphData(historicalData) }))

        // Current State Data API Call
        fetch(currentStateTotalsURL)
        .then(response => response.json())
        .then(stateData => this.setState({ currentStateTotals: formatStateData(stateData) }))
    }

    render() {
        return (
            <div>
                <SummaryDataTable data={this.state.currentTotalData}/>
                <SummaryGraph data={this.state.historicalTotalData} />
                <DataTable data={this.state.currentStateTotals} />
            </div>
        )
    }
}

export default USTotals;
