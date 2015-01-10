/*****************************************************************************/
/* DonesDaily Publish Functions
/*****************************************************************************/

Meteor.publish('dones_daily', function (startDate, endDate) {
  return Dones.find({dateCreated: {$gt: startDate, $lte: endDate}});
});
