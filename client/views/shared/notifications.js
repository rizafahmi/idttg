Notifications = new Meteor.Collection(null);

throwNotification = function (message) {
  Notifications.insert({message: message, seen: false})
}

clearNotifications = function () {
  Notifications.remove({seen: true})
}

Template.notifications.helpers({
  notifications: function () {
    return Notifications.find({seen: false});
  }
});

Template.notification.rendered = function () {
  var notification = this.data;
  Meteor.setTimeout(function () {
    Notifications.update(notification._id, {$set: {seen: true}});
  }, 3000);
}
