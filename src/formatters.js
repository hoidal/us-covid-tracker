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

export const formatStateData = data => {
    const formattedData = [];
    for(let i=0; i < data.length; i++) {
        const stateDataObj = {
            stateAbbreviation: data[i].state,
            stateName: getStateName(data[i].state),
            totalCases: data[i].positive,
            totalDeaths: data[i].death,
            totalRecovered: data[i].recovered,
            currentHospitalized: data[i].hospitalizedCurrently,
            totalHospitalized: data[i].hospitalizedCumulative,
            totalTests: data[i].totalTestResults
        };
        formattedData.push(stateDataObj);
    }
    return formattedData;
}

const getStateName = stateAbbreviation => {
    const stateObj = {
        'AK': 'Alaska',
        'AL': 'Alabama',
        'AR': 'Arkansas',
        'AZ': 'Arizona',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DC': 'Washington D.C.',
        'DE': 'Delaware',
        'FL': 'Florida',
        'GA': 'Georgia',
        'HI': 'Hawaii',
        'IA': 'Iowa',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'MA': 'Massachussetts',
        'MD': 'Maryland',
        'ME': 'Maine',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MO': 'Missouri',
        'MS': 'Mississippi',
        'MT': 'Montana',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'NE': 'Nebraska',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexico',
        'NV': 'Nevada',
        'NY': 'New York',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PA': 'Pennsylvania',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VA': 'Virginia',
        'VT': 'Vermont',
        'WA': 'Washington',
        'WI': 'Wisconsin',
        'WV': 'West Virginia',
        'WY': 'Wyoming',
        'PR': 'Puerto Rico',
        'AS': 'American Samoa',
        'GU': 'Guam',
        'MP': 'North Mariana Islands',
        'VI': 'U.S. Virgin Islands',
    };
    return stateObj[stateAbbreviation];
}