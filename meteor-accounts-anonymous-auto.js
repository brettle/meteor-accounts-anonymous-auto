AccountsAnonymousAuto = {
  _enabled: new ReactiveVar(true)
};

if (Meteor.isClient) {
  Meteor.startup(function(){
    Tracker.autorun(function () {
      if (! Meteor.userId() && AccountsAnonymousAuto._enabled.get()) {
        console.log('Logging in anonymously');
        AccountsAnonymous.login();
      }
    });
  });
}
