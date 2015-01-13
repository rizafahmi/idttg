Template.LoginForm.events({
  'submit #loginForm': function (e, t) {
    e.preventDefault();
    var email = e.target.loginEmail.value,
      password = e.target.loginPassword.value;

    Meteor.loginWithPassword(email, password,
      function (err) {
        if (err) {
          throwError(err.reason);
        } else {
          throwNotification("Login succeeded!");
          App.track("Logged-in");
        }
      });
    return false;
  }
});


