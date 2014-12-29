/*****************************************************************************/
/* RegisterModalForm: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.RegisterModalForm.events({
  'click .loginButton': function (e, tmpl) {
    e.preventDefault();
  },
  'click .registerButton': function (e, tmpl) {
    // $(".login.modal").modal("hide");
    $(".register.modal").modal("show");

  }
});

Template.RegisterModalForm.helpers({
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
Template.RegisterModalForm.created = function () {
};

Template.RegisterModalForm.rendered = function () {
};

Template.RegisterModalForm.destroyed = function () {
};
