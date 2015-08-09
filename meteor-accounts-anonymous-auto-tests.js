Tinytest.addAsync('AccountsAnonymous - auto-login', function (test, done) {
  var loginFailureStopper = Accounts.onLoginFailure(function () {
      loginFailureStopper.stop();
      test.fail('Login failed');
  });
  if (Meteor.loggingIn()) {
      var checkLoginStopper = Accounts.onLogin(function () {
        checkLoginStopper.stop();
        checkLogin();
    });
  } else {
    checkLogin();
  }
  function checkLogin() {
    var initialId = Meteor.userId();
    test.isNotNull(initialId);

    Meteor.logout(function (err) {
      test.isUndefined(err);
      if (Meteor.loggingIn()) {
          var checkLoginAfterLogoutStopper = Accounts.onLogin(function () {
            checkLoginAfterLogoutStopper.stop();
            checkLoginAfterLogout();
        });
      } else {
        checkLoginAfterLogout();
      }
      function checkLoginAfterLogout() {
        var newId = Meteor.userId();
        test.notEqual(newId, initialId);
        done();
      }
    });
  }
});
