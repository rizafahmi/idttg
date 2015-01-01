Template.RegistrationForm.events({
  'submit #regForm': function (e, t) {
    e.preventDefault();
    var email = e.target.regEmail.value,
      password = e.target.regPassword.value,
      confirmPassword = e.target.regConfirmPassword.value;

    if (password === confirmPassword) {
      Accounts.createUser({email: email, password: password},
        function (err) {
          if (err) {
            throwError(err.reason);
          } else {
            throwNotification("Your account has been created.");
          }
        });
    }
  }
});
