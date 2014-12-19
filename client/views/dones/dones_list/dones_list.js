/*****************************************************************************/
/* DonesList: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.DonesList.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.DonesList.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  dones: function () {
    return Dones.find();
  }
});

/*****************************************************************************/
/* DonesList: Lifecycle Hooks */
/*****************************************************************************/
Template.DonesList.created = function () {
};

Template.DonesList.rendered = function () {
};

Template.DonesList.destroyed = function () {
};
