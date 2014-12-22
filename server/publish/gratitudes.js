/*****************************************************************************/
/* Gratitutes Publish Functions
/*****************************************************************************/

Meteor.publish('gratitudes', function () {
  return Gratitudes.find();
});
