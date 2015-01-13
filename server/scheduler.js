var sendEmail = function () {
  var body = "<h1>Hi! What'd you get done today?</h1>";
  body += "<h2>And what is your grateful for today?</h2>";
  body += "<p>Take 1 minute to write out what you got done today and what is your grateful for today. Click <a href='http://idttg.com/home'>this link</a> and start write it out all your done tasks and what your grateful for.</p>";

  var startDate = moment().add(-1, 'days').startOf('day').toDate();
  var endDate = moment().add(-1, 'days').endOf('day').toDate();

  Meteor.users.find({"emails.verified": true}).forEach(function (user) {
    body_dones = "";
    var yesterday = Dones.find({
      userId: user._id,
      dateCreated: {$gte: startDate, $lte: endDate}
    });
    if (yesterday.count() > 0) {
      body_dones += "<br><br><p>By the way this is what you've done yesterday:";
      body_dones += "<ul>";

      yesterday.fetch().forEach(function (done) {
        body_dones += "<li>";
        body_dones += done.entry;
        body_dones += "</li>";

      });

      body_dones += "</ul>";
    }

    var yesterdayGrat = Gratitudes.find({
      userId: user._id,
      dateCreated: {$gte: startDate, $lte: endDate}
    });
    if (yesterdayGrat.count() > 0) {
      body_dones += "<br><br><p>And this is what your gratitudes yesterday:";
      body_dones += "<ul>";

      yesterdayGrat.fetch().forEach(function (gratitude) {
        body_dones += "<li>";
        body_dones += gratitude.entry;
        body_dones += "</li>";

      });

      body_dones += "</ul>";
    }

    body = body + body_dones;
    body += "<br><br>";
    body += "Go to <a href='http://idttg.com/home'>IDTTG to start writing your dones and gratitudes for today</a>.";
    body_dones = "";

    // console.log(body);

    Meteor.call('emailFeedback', user.emails[0].address, body, {}, function (error, data) {
      if (error)
        console.log(error);
      // console.log(user.emails[0].address);
    });
  });

}

var cron = new Meteor.Cron({
    events: {
      "35 4 * * *": sendEmail
      // "* * * * *": sendEmail
    }
});
