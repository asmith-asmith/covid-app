const fetch = require('node-fetch');
/*
{
  updated: 1591782903866,
  cases: 7342359,
  todayCases: 31527,
  deaths: 414124,
  todayDeaths: 1152,
  recovered: 3619774,
  todayRecovered: 21016,
  active: 3308461,
  critical: 54015,
  casesPerOneMillion: 942,
  deathsPerOneMillion: 53.1,
  tests: 102586329,
  testsPerOneMillion: 13230.23,
  population: 7753933875,
  oneCasePerPeople: 0,
  oneDeathPerPeople: 0,
  oneTestPerPeople: 0,
  activePerOneMillion: 426.68,
  recoveredPerOneMillion: 466.83,
  criticalPerOneMillion: 6.97,
  affectedCountries: 215
}

*/

let todayUrl = 'https://disease.sh/v3/covid-19/all'

export function getTodayWorld() {
    return (
        fetch(todayUrl, {mode: 'cors'})
        .then(res => res.json())
    )
}
/*
returns array  JSON
[
  {
    "date": "2020-01-21",
    "cases": 1,
    "deaths": 0
  },
  {
    "date": "2020-01-22",
    "cases": 1,
    "deaths": 0
  },

*/

let USHistoricalUrl = 'https://disease.sh/v3/covid-19/nyt/usa'

export function getUnitedStatesHistorical() {
    return (
        fetch(USHistoricalUrl, {mode: 'cors'})
        .then(res => res.json())
    )
}

/*
return array of JSON
[
  {
    "country": "Italy",
    "county": null,
    "updatedAt": "2020-07-14 04:34:46",
    "stats": {
      "confirmed": 3328,
      "deaths": 466,
      "recovered": 2719
    },
    "coordinates": {
      "latitude": "42.35122196",
      "longitude": "13.39843823"
    },
    "province": "Abruzzo"
  },

*/

let allCountriesURL = 'https://disease.sh/v3/covid-19/jhucsse'

export function getAllCountries() {
    return (
        fetch(allCountriesURL, {mode: 'cors'})
        .then(res => res.json())
    )
}
/*
return array of JSON
[
{
    "date": "2020-01-26",
    "state": "Arizona",
    "fips": "04",
    "cases": 1,
    "deaths": 0
  },
  {
    "date": "2020-01-26",
    "state": "California",
    "fips": "06",
    "cases": 2,
    "deaths": 0
  },

*/

let statesHistoryURL = 'https://disease.sh/v3/covid-19/nyt/states'

export function getStatesHistory() {
    return (
        fetch(statesHistoryURL, {mode: 'cors'})
        .then(res => res.json())
    )
}

let currentStateURL = 'https://covidtracking.com/api/v1/states/current.json'

export function getCurrentState() {
  return (
    fetch(currentStateURL, {mode: 'cors'})
    .then(res => res.json())
)
}