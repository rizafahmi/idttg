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
    return data;
  },
  'getToday': function () {
    return moment().format('MMMM Do YYYY');
  },
  'getYesterday': function () {
    return moment().add(-1, 'd').format('MMMM Do YYYY');
  },
  'options': function () {
    return {
      eventLimit: true,
      events: function (start, end, timezone, callback) {
        var events = [];

        var calendar = Dones.find({});

        if (calendar) {
          calendar.fetch().forEach( function (event) {
            eventDetail = {};
            for ( dateCreated in event ) {
              var dateFormatted = moment(event['dateCreated']).format('YYYY-MM-DD');
              eventDetail['start'] = dateFormatted;
              // eventDetail['title'] = '✓';
              eventDetail['title'] = dateFormatted;
            }

            events.push(eventDetail);
          });
        }
        var uniqueEvents = [];
        for ( var i = 0; i < events.length - 1; i++ ) {
          if ( events[i+1]['start'] != events[i]['start'] ) {
            uniqueEvents.push(events[i]);
          }
        }
        callback(uniqueEvents);

      }
    }
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
