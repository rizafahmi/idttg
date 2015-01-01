DonesIndexController = RouteController.extend({
  waitOn: function () {
    return [Meteor.subscribe('dones_index', Meteor.userId()),
            Meteor.subscribe('gratitudes', Meteor.userId())]
  },

  data: function () {
    return Notifications.find();
  },

  action: function () {
    this.render();
  }
});
