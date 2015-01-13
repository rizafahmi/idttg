Meteor.startup(function() {  
  smtp = {
    username: "postmaster@idttg.com",
    password: "95fba31687a0184844027c931b091a9d",
    server: "smtp.mailgun.org",
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

  Accounts.emailTemplates.from = 'IDTTG <no-reply@idttg.com>';
  Accounts.emailTemplates.siteName = 'IDTTG';

  Accounts.emailTemplates.verifyEmail.subject = function (user) {
    return "IDTTG Email Confirmation";
  };

  Accounts.onCreateUser(function(options, user) {
    user.profile = {};

    // we wait for Meteor to create the user before sending an email
    // Meteor.setTimeout(function() {
    //   Accounts.sendVerificationEmail(user._id);
    //   console.log("Send verification email...");
    // }, 2 * 1000);

    return user;
  });

  Accounts.emailTemplates.verifyEmail.text = function (user, url) {
    return 'click on the following link to verify your email address: ' + url;
  };

  Meteor.methods({
    resendVerificationEmail: function (userId) {
      console.log("Sending verification email...");
      Accounts.sendVerificationEmail(userId);

    },
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
