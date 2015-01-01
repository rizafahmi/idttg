DonesIndexController = RouteController.extend({
  waitOn: function () {
    return [Meteor.subscribe('dones_index'),
            Meteor.subscribe('gratitudes')]
  },

  data: function () {
    return Notifications.find();
  },

  action: function () {
    this.render();
  }
});
