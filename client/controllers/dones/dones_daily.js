DonesDailyController = RouteController.extend({
  waitOn: function () {
    var date = this.params.date;
    var month = this.params.month;
    var year = this.params.year;
    month = ( '0' + month ).slice(-2);
    date = ( '0' + date ).slice(-2);
    Session.set("date", year + "-" + month + "-" + date);

    return [Meteor.subscribe('dones_index', Meteor.userId()),
            Meteor.subscribe('gratitudes', Meteor.userId())]

  },

  data: function () {

  },

  action: function () {
    this.render();
  }
});
