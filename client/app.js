/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
  track: function (key, meta) {
    meta = meta || {};

    Deps.autorun(function () {
      if (!Meteor.loggingIn()) {

        var user = Deps.nonreactive(function () {
          return Meteor.user();
        });
        var email = '';
        
        if (user && user.emails.length > 0)
          email = user.emails[0].address;
        else
          email = 'anonymous';

        _.extend(meta, {
          path: location.pathname,
          email: email
        });

        mixpanel.track(key, meta);
      }
    });
  }
});

App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});

Deps.autorun(function () {
  var path = Iron.Location.get();
  App.track('Page Views');
});
