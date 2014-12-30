/*****************************************************************************/
/* LoginModalForm: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.LoginModalForm.events({
  'click .loginButton': function (e, tmpl) {
    e.preventDefault();
  },
  'click .registerButton': function (e, tmpl) {
    $(".register.modal").modal("show");

  },
  'click .forgetLink': function (e, tmpl) {
    $(".forget.modal").modal("show");

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
