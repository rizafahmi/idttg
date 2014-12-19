DonesIndexController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('dones_index')
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
