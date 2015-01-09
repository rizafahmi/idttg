/*****************************************************************************/
/* EmailNotifications: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.EmailNotifications.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.EmailNotifications.helpers({
  'emailIsValidated': function () {
    if (Meteor.user() && Meteor.user().emails[0].verified === true)
      return true;
    else
      return false;
  }
});

/*****************************************************************************/
/* EmailNotifications: Lifecycle Hooks */
/*****************************************************************************/
Template.DonesIndex.created = function () {
};

Template.DonesIndex.rendered = function () {
};

Template.DonesIndex.destroyed = function () {
};
