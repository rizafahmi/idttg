var world = function () {
  var body = "Hi! my name is <strong>Riza</strong>";
  Meteor.call('emailFeedback', body, {}, function (error, data) {
    if (error)
      console.log(error);
    console.log(data);
  });
}

var cron = new Meteor.Cron({
    events: {
      "* * * * *": world
    }
});
