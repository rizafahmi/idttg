/*****************************************************************************/
/* Gratitutes Publish Functions
/*****************************************************************************/

Meteor.publish('gratitudes', function (userId) {
  return Gratitudes.find({userId: userId});
});
