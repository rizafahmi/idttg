/*****************************************************************************/
/* DonesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('dones_index', function (userId) {
  return Dones.find({userId: userId});
});
