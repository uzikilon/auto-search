## Setup

Run `npm install` to install dependencies

## Development server

Run `npm start` for a dev server which will also run the server side API express server.
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

** Please note: ** the username and password are pre populated for ease of use, but it's functional on the server and would not sign in with the wrong credinarials

## TODO
##### *(Things I would have done better having more time and better understanding of the angulare way of doing things)*

- [ ] The current abstraction is at the form level with some reusable code configuring auto complete - I would break it further away to have a generic autocomplete standalone component.
- [ ] Add a seperate router to diffreniate between the login form and the car search form
- [ ] Make the login session persitent on the client side
- [ ] Better error handling both on the login form and on the search form

#### The usual stuff...
- [ ] Better look and feel
- [ ] Better naming of things (aka refactor)
- [ ] Unit אests
- [ ] e2e tests
