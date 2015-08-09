Meteor.startup(function(){
  Tracker.autorun(function () {
    if (!Meteor.userId()) {
      AccountsAnonymous.login();
    }
  });
});
