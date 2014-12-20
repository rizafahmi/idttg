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
  'submit .formNew': function (e, tmpl) {
    e.preventDefault();
    console.log("Hey, new done");
    var doneEntry = e.target.newDone.value;

    Dones.insert({
      entry: doneEntry,
      dateCreated: new Date()
    });

    e.target.newDone.value = "";

  }
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
