const { google } = require('googleapis');
const reporting = google.analyticsreporting('v4');

let scopes = ['https://www.googleapis.com/auth/analytics.readonly'];
const jwt = new google.auth.JWT(process.env.CLIENT_EMAIL, null, process.env.PRIVATE_KEY, scopes);

exports.getReports = async reports => {
  await jwt.authorize();

  const request = {
    headers: { 'Content-Type': 'application/json' },
    auth: jwt,
    resource: reports
  };

  return reporting.reports.batchGet(request);
};
