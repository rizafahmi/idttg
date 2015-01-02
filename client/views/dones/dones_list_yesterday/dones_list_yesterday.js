/*****************************************************************************/
/* DonesListYesterday: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.DonesListYesterday.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.DonesListYesterday.helpers({
  'dones': function () {
      var todayDate = moment().startOf('day');
      var yesterdayDate = moment().add(-1, 'd').startOf('day');
      return Dones.find({
        userId: Meteor.userId(),
        dateCreated: {
          $lt: todayDate.toDate(),
          $gte: yesterdayDate.toDate()
        }
      });
    },
  'gratitudes': function () {
      var todayDate = moment().startOf('day');
      var yesterdayDate = moment().add(-1, 'd').startOf('day');
      return Gratitudes.find({
        userId: Meteor.userId(),
        dateCreated: {
          $lt: todayDate.toDate(),
          $gte: yesterdayDate.toDate()
        }
      });
    }
});

/*****************************************************************************/
/* DonesListYesterday: Lifecycle Hooks */
/*****************************************************************************/
Template.DonesListYesterday.created = function () {
};

Template.DonesListYesterday.rendered = function () {
};

Template.DonesListYesterday.destroyed = function () {
};
