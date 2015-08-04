Meteor.startup(function(){
  Deps.autorun(function () {
    if (!Meteor.userId()) {
      AccountsAnonymous.login();
    }
  });
});
