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
    var doneEntry = e.target.newDone.value;

    if (doneEntry.length > 0) {
      Dones.insert({
        entry: doneEntry,
        dateCreated: new Date()
      });

      e.target.newDone.value = "";
    }

  },
  'click .remove': function () {
    Dones.remove(this._id);
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
