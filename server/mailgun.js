Meteor.startup(function() {  
  Meteor.methods({
    emailFeedback: function (to, body, any_variable) {
      console.log("Sending email...");

      // Don't wait for result
      this.unblock();

      // Define the settings
      var postURL = process.env.MAILGUN_API_URL + '/' + process.env.MAILGUN_DOMAIN + '/messages';
      var options =   {
        auth: "api:" + process.env.MAILGUN_API_KEY,
        params: {
          "from":"Time To IDTTG <info@idttg.com>",
          "to":[to],
          "subject": 'Time to IDTTG.',
          "html": body,
        }
      }
      var onError = function(error, result) {
        if(error) {console.log("Error: " + error)}
      }

      // Send the request
      Meteor.http.post(postURL, options, onError);
    },
  });
});
