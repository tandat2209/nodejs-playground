const gaServices = require('../services/ga');

exports.getAnalytics = (req, res) => {
  const basicReport = {
    reportRequests: [
      {
        viewId: '194627569',
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [{ expression: 'ga:users' }]
      }
    ]
  };

  gaServices.getReports(basicReport)
    .then(data => res.json(data))
    .catch(e => res.status(404, e));
};
