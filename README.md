# aphelion-test-plugin

A test plugin for [Aphelion](https://github.com/jcore9/Aphelion). Its releases are test fixtures for `aphelion plugin update`: each one is built and attested by the release workflow that `bun run create:plugin` generates.

It logs its version when it starts and logs each approval request it receives. It does nothing else. Don't install it on a real Aphelion server.
