/*****************************************************************************/
/* DonesDaily: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.DonesDaily.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.DonesDaily.helpers({
  'getDate': function () {
    var date = Session.get("date");

    return moment(date).format('MMMM Do YYYY');
  },
  dones: function () {
    var date = Session.get('date');
    var startDate = moment(date).startOf('day');
    var endDate = moment(date).endOf('day');
    return Dones.find({
      dateCreated: {
        $gte: startDate.toDate(),
        $lte: endDate.toDate()
      }
    }, {sort: {dateCreated: -1}});
  },
  gratitudes: function () {
    var date = Session.get('date');
    var startDate = moment(date).startOf('day');
    var endDate = moment(date).endOf('day');
    return Gratitudes.find({
      dateCreated: {
        $gte: startDate.toDate(),
        $lte: endDate.toDate()
      }
    });
  },
  'options': function () {
    return {
      eventLimit: true,
      backgroundColor: 'yellow',
      textColor: 'black',
      height: 420,
      events: function (start, end, timezone, callback) {
        var events = [];

        var calendar = Dones.find({});

        if (calendar) {
          calendar.fetch().forEach( function (event) {
            eventDetail = {};
            for ( dateCreated in event ) {
              var dateFormatted = moment(event['dateCreated']).format('YYYY-MM-DD');
              eventDetail['start'] = dateFormatted;
              eventDetail['title'] = '✓';
              // eventDetail['title'] = dateFormatted;
            }

            var exist = false;
            events.forEach( function (item) {
              if (item['start'] === dateFormatted)
                exist = true;
              else
                exist = false;
            });

            if (!exist)
              events.push(eventDetail);
          });
        }
        callback(events);

      },
      dayClick: function (date, jsEvent, view) {
        var tgl = moment(date);
        console.log(tgl.month());
        Router.go('/daily' + "/" + tgl.date() + "/" + (tgl.month()+1) + "/" + tgl.year());
      }
    }
  },
});

/*****************************************************************************/
/* DonesDaily: Lifecycle Hooks */
/*****************************************************************************/
Template.DonesDaily.created = function () {
};

Template.DonesDaily.rendered = function () {
};

Template.DonesDaily.destroyed = function () {
};
