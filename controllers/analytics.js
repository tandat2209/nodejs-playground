const express = require('express');

const router = express.Router();
const gaServices = require('../services/ga');

router.get('/', (req, res) => {
  const basicReport = {
    reportRequests: [
      {
        viewId: '194627569',
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [{ expression: 'ga:sessions' }],
        dimensions: [{ name: 'ga:date' }]
      }
    ]
  };

  gaServices.getReports(basicReport)
    .then(data => res.json(data))
    .catch(e => res.status(404, e));
});

router.get('/visits', (req, res) => {
  const visitReport = {
    reportRequests: [
      {
        viewId: '194627569',
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [{ expression: 'ga:users' }, { expression: 'ga:newUsers' }],
      }
    ]
  };

  gaServices.getReports(visitReport)
    .then(data => res.json(data))
    .catch(e => res.status(404, e));
});


router.get('/devices', (req, res) => {
  const deviceReport = {
    reportRequests: [
      {
        viewId: '194627569',
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [{ expression: 'ga:users' }],
        dimensions: [{ name: 'ga:deviceCategory' }]
      }
    ]
  };

  gaServices.getReports(deviceReport)
    .then(data => res.json(data))
    .catch(e => res.status(404, e));
});


module.exports = router;
