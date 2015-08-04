Tinytest.addAsync('AccountsAnonymous - auto-login', function (test, done) {
  var initialId = Meteor.userId();
  test.isNotNull(initialId);

  Meteor.logout(function(err) {
    test.isUndefined(err);
    var newId = Meteor.userId();
    test.notEqual(newId, initialId);
    done();
  });
});
