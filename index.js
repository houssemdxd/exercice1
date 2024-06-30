const dataArray = require('./sData.js');

function countSurveysPerDay(dataArray) {
  const surveyCounts = {};

  dataArray.forEach(survey => {
    const date = new Date(survey.createdDate * 1000).toISOString().split('T')[0];

    if (!surveyCounts[date]) {
      surveyCounts[date] = 1;
    } else {
      surveyCounts[date]++;
    }
  });

  return surveyCounts;
}

const surveyCountsPerDay = countSurveysPerDay(dataArray);

console.log(surveyCountsPerDay);
