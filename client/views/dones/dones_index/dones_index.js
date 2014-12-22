/*****************************************************************************/
/* DonesIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.DonesIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.DonesIndex.helpers({
  dates: function () {
    var dones = Dones.find();
    var data = [];
    dones.fetch().forEach(function (item) {
      var dateFormat = moment(item.dateCreated).format("MMM Do YY");
      // if (data.indexOf({date: dateFormat}) < 0) {
      if (!_.findWhere(data, {dateFormat: dateFormat})) {
        data.push({
          dateFormat: dateFormat,
          date: item.dateCreated
        });
      }
    });
    console.log(data);
    return data;
  }
});

/*****************************************************************************/
/* DonesIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.DonesIndex.created = function () {
};

Template.DonesIndex.rendered = function () {
};

Template.DonesIndex.destroyed = function () {
};
