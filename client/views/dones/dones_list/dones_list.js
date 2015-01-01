/*****************************************************************************/
/* DonesList: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.DonesList.events({
  'submit .formNew': function (e, tmpl) {
    e.preventDefault();
    var doneEntry = e.target.newDone.value;

    if (doneEntry.length > 0) {
      Dones.insert({
        entry: doneEntry,
        userId: Meteor.userId(),
        dateCreated: new Date()
      });

      e.target.newDone.value = "";
    }

  },
  'click .donesRemoveButton': function () {
    Dones.remove(this._id);
  },
  'click .gratefulReomveButton': function () {
    Gratitudes.remove(this._id);
  },
  'submit .formNewGratitude': function (e, tmpl) {
    e.preventDefault();
    var gratitudeEntry = e.target.newGratitude.value;

    if (gratitudeEntry.length > 0) {
      Gratitudes.insert({
        entry: gratitudeEntry,
        userId: Meteor.userId(),
        dateCreated: new Date()
      });

      e.target.newGratitude.value = "";
    }
  }
});

Template.DonesList.helpers({
  dones: function () {
    var startDate = moment().startOf('day');
    return Dones.find({
      dateCreated: {
        $gte: startDate.toDate()
      }
    }, {sort: {dateCreated: -1}});
  },
  gratitudes: function () {
    var startDate = moment().startOf('day');
    return Gratitudes.find({
      dateCreated: {
        $gte: startDate.toDate()
      }
    });
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
