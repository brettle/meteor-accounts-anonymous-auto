# accounts-anonymous-auto
=========================

Automatically create anonymous accounts for each new visitor to ensure that
there is always an account associated with the current user.

This also means that if a user logs out of their account, they will
automatically be logged in to a newly created anonymous account.

This package uses brettle:accounts-anonymous to actually log the user into new
anonymous accounts. All that this package does is automatically call
`AccountsAnonymous.login()` whenever `Meteor.user()` is null.

## Installation
```sh
meteor add brettle:accounts-anonymous-auto
```

## Removal
```sh
meteor remove brettle:accounts-anonymous-auto
```


## History and Acknowledgements

This is part of a friendly hard fork of the excellent
[artwells:accounts-guest](https://github.com/artwells/meteor-accounts-guest)
package. I wanted to split out some of its features (like auto-login) into
separate packages. I didn't see any way to do that by changing
artwells:accounts-guest without breaking compatibility for existing users of
that package. Thus the hard fork.
