/*****************************************************************************/
/* LoginModalForm: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.LoginModalForm.events({
  'click .registerButton': function (e, tmpl) {
    $(".register.modal").modal("show");

  },
  'click .forgetLink': function (e, tmpl) {
    $(".forget.modal").modal("show");

  },
  'submit .loginForm': function (e, tmpl) {
    e.preventDefault();
    var email = e.find('.emailLogin').val(),
        password = tmpl.find('.passwordLogin').val();

    console.log(email);
  }
});

Template.LoginModalForm.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* LoginModal: Lifecycle Hooks */
/*****************************************************************************/
Template.LoginModalForm.created = function () {
};

Template.LoginModalForm.rendered = function () {
};

Template.LoginModalForm.destroyed = function () {
};
