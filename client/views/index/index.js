/*****************************************************************************/
/* Index: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Index.events({
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
          Router.go('/home');
        }
      });
    return false;
  }
});

Template.Index.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Index: Lifecycle Hooks */
/*****************************************************************************/
Template.Index.created = function () {
};

Template.Index.rendered = function () {
  $(".idttg").popup();
};

Template.Index.destroyed = function () {
};
