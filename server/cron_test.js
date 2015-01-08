var sendEmail = function () {
  var body = "<h1>Hi! What'd you get done today?</h1>";
  body += "<h2>And what is your grateful for today?</h2>";
  body += "<p>Take 1 minute to write out what you got done today and what is your grateful for today. Click <a href='http://idttg.com'>this link</a> and start write it out all your done tasks and what your grateful for.</p>";

  Meteor.users.find({}).forEach(function (user) {
    Meteor.call('emailFeedback', user.emails[0].address, body, {}, function (error, data) {
      if (error)
        console.log(error);
      console.log(user.emails[0].address);
    });
  });
}

var cron = new Meteor.Cron({
    events: {
      "0 16 * * *": sendEmail
    }
});
