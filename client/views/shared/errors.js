Errors = new Meteor.Collection(null);

throwError = function (message) {
  Errors.insert({message: message, seen: false})
}

clearErrors = function () {
  Errors.remove({seen: true});
}

Template.errors.helpers({
  errors: function () {
    return Errors.find({seen: false});
  }
});

Template.error.rendered = function () {
  var error = this.data;
  Meteor.setTimeout(function () {
    Errors.update(error._id, {$set: {seen: true}});
  }, 3000);
}
