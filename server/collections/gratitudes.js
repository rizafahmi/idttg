/*
 * Add query methods like this:
 *  Gratitutes.findPublic = function () {
 *    return Gratitutes.find({is_public: true});
 *  }
 */
Gratitudes.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});

Gratitudes.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
