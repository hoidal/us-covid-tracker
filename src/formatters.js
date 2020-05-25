export const formatNumber = number => {
    if(!number) {
        return null;
    } else if(typeof number === 'string') {
        return number.toLocaleString();
    } else {
        return parseInt(number).toLocaleString();
    }
}

export const formatGraphData = data => {
    const formattedData = [];
    for(let i = data.length - 1; i >= 0; i--) {
        const newDataObj = {
            date: formatDate(data[i].date),
            totalCases: data[i].total,
            totalDeaths: data[i].death,
            totalRecovered: data[i].recovered,
            totalTests: data[i].totalTestResults
        };
        formattedData.push(newDataObj);
    }
    return formattedData;
}

const formatDate = date => {
    const dateString = date.toString();
    const year = dateString.slice(0, 4);
    const month = getMonth(dateString.slice(4, 6));
    const day = dateString.slice(6);
    return `${month} ${day}, ${year}`;
}

const getMonth = monthString => {
    switch(monthString) {
        case '01':
            return 'January';
        case '02':
            return 'February';
        case '03':
            return 'March';
        case '04':
            return 'April';
        case '05':
            return 'May';
        case '06':
            return 'June';
        case '07':
            return 'July';
        case '08':
            return 'August';
        case '09':
            return 'September';
        case '10':
            return 'October';
        case '11':
            return 'November';
        case '12':
            return 'December';
        default:
            return;
    }
}