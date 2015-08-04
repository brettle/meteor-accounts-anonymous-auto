Package.describe({
  name: 'brettle:accounts-anonymous-auto',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Automatically create anonymous accounts for each new visitor',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:brettle/meteor-accounts-anonymous-auto.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('brettle:accounts-anonymous');
  api.use('accounts-base');
  api.use('deps');
  api.addFiles('meteor-accounts-anonymous-auto.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('brettle:accounts-anonymous-auto');
  api.addFiles('meteor-accounts-anonymous-auto-tests.js', 'client');
});
