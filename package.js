"use strict";

Package.describe({
  name: 'brettle:accounts-anonymous-auto',
  version: '0.3.0',
  // Brief, one-line summary of the package.
  summary: 'Automatically create anonymous accounts for each new visitor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/brettle/meteor-accounts-anonymous-auto.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4');
  api.use('brettle:accounts-anonymous@0.0.1');
  api.use('accounts-base');
  api.use('tracker');
  api.use('reactive-var');
  api.addFiles('meteor-accounts-anonymous-auto.js');
  api.export('AccountsAnonymousAuto');
});

Package.onTest(function(api) {
  api.versionsFrom('1.0.4');
  api.use('tinytest');
  api.use('brettle:accounts-anonymous-auto@0.1.0');
  api.use('brettle:accounts-multiple@0.1.0');
  api.use('accounts-base');
  api.addFiles('meteor-accounts-anonymous-auto-tests.js', 'client');
});
