So to test this i would set a bare minium on cypress tests for every scoped feature

aka (login, search, bookmar, navigate) with their appropriate failing counterparts

I would also test the above using react testing library and jest mocks

Then I would snapshot stylesheet files and unit test helper functions using jest

And write more involved unit tests for eg the search bar and the event item component
since its relied upon in more places.

For CI/CD it would depend on team size but if it was just me i'd probably use github actions and deploy via ssh to digital ocean ( see the deploy script in json)
