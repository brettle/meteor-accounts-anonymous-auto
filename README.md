# brettle:accounts-anonymous-auto

[![Build Status](https://travis-ci.org/brettle/meteor-accounts-anonymous-auto.svg?branch=master)](https://travis-ci.org/brettle/meteor-accounts-anonymous-auto)

Automatically create anonymous accounts for each new visitor to ensure that
the current user always has an account.

This also means that if a user signs out of their account, the package will
automatically sign them in to a newly created anonymous account.

This package is part of the `brettle:accounts-*` suite of packages. See
[`brettle:accounts-deluxe`](https://atmospherejs.com/brettle/accounts-deluxe)
for an overview of the suite and a live demo.

## Installation
```sh
meteor add brettle:accounts-anonymous-auto
```

## Removal
```sh
meteor remove brettle:accounts-anonymous-auto
```


## History and Acknowledgements

This is part of a friendly hard fork of the wonderful
[artwells:accounts-guest](https://github.com/artwells/meteor-accounts-guest)
package. I wanted to split out some of its features (like auto-login) into
separate packages. I didn't see any way to do that by changing
artwells:accounts-guest without breaking compatibility for existing users of
that package. Thus the hard fork.
