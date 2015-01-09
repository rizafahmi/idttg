Template.RegistrationForm.events({
  'submit #regForm': function (e, t) {
    e.preventDefault();
    var email = e.target.regEmail.value,
      password = e.target.regPassword.value,
      confirmPassword = e.target.regConfirmPassword.value;

    if (password === confirmPassword) {
      $(".submit.teal.button").addClass("disabled");
      $(".submit.teal.button").addClass("loading");
      Accounts.createUser({email: email, password: password},
        function (err) {
          if (err) {
            throwError(err.reason);
            $(".submit.teal.button").removeClass("disabled");
            $(".submit.teal.button").removeClass("loading");
          } else {
            throwNotification("Your account has been created. Check your email for verified your email.");

          }
        });
    }
  }
});
