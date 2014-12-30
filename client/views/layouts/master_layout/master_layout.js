/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MasterLayout.events({
  'click .loginLink': function (e, tmpl) {
    $(".login.modal").modal("show");
  },

});

Template.MasterLayout.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterLayout.created = function () {
};

Template.MasterLayout.rendered = function () {
  $('.ui.dropdown')
    .dropdown({
      on: 'hover'
    });
};

Template.MasterLayout.destroyed = function () {
};
