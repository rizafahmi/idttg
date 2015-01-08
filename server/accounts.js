Accounts.config({
  sendVerificationEmail:true
});

Accounts.validateLoginAttempt(function(attempt){
  if (attempt.user && attempt.user.emails && !attempt.user.emails[0].verified ) {
    // Session.set('verified', "Email Not verified");

  }
  return true;
});
