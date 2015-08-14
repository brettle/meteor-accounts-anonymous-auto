
Tinytest.addAsync('AccountsAnonymousAuto - auto-login', function (test, done) {
  AccountsAnonymousAuto._enabled.set(true);
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
    Meteor.logout(function (err) {
      test.isUndefined(err);
      Tracker.flush();
      Meteor.setTimeout(function () {
        checkLogin();
      }, 100);
    });
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
        AccountsAnonymousAuto._enabled.set(false);
        done();
      }
    });
  }
});
