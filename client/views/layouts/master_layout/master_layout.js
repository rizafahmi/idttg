/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MasterLayout.events({
  'click .logoutButton': function (e, tmpl) {
    Meteor.logout( function (err) {
      if (err) {
        throwError(err.reason);
      } else {
        throwNotification("You are now logged out.");
        Router.go("/");
      }
    });
  }

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
