/*****************************************************************************/
/* LoginModalForm: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.LoginModalForm.events({
  'click .ui.button.registerButton': function (e, tmpl) {
    // e.preventDefault();
    console.log("Something happen");
    $(".login.modal").modal("hide");

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
