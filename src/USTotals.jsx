import React, { Component } from 'react'
import SummaryDataTable from './SummaryDataTable';
import SummaryGraph from './SummaryGraph';

import { formatGraphData } from './formatters';

const currentTotalsURL = 'https://covidtracking.com/api/v1/us/current.json';
const historicalTotalsURL = 'https://covidtracking.com/api/v1/us/daily.json';

class USTotals extends Component {

    state = {
        currentTotalData: [],
        historicalTotalData: []
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
    }

    render() {
        return (
            <div>
                <SummaryDataTable data={this.state.currentTotalData}/>
                <SummaryGraph data={this.state.historicalTotalData} />
            </div>
        )
    }
}

export default USTotals;
