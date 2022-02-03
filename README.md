<h1 align="center">
Dataminr Feature Flag Challenge
</h1>

### Table of contents

[Project structure](#project-structure)

[Installation](#installation)

[Configuration](#configuration)

[Technologies used](#technologies-used)

### Project structure

```
build/
src/
|- index.js _______________________________ # Application entry
|  |- app/index.js _________________________________ # Application init
|  |- components/
|    |- dashboard/
|       |- index.js _______________________ # Sample component
|       |- styles.js _______________________ # Styles for component
|  |- tests/
|  |- mocks/
|  |- assets/
|  |- shared/
```

### Installation

1- Clone the boilerplate repo

`git clone https://github.com/rodrigo-tavares/dataminr-challenge.git`

2- `npm install` to install npm packages

3- start dev server using `npm start`, then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

3- build and bundling your resources for production `npm build`.

4- Launches the test runner in the interactive watch mode.
`npm test`

#### Technologies used

- [React](https://github.com/facebook/react) `17.0.2`
- [Jest](https://github.com/facebook/jest) [ Unit test]
- [Eslint](https://github.com/eslint/eslint/)
- [Prettier](https://github.com/prettier/prettier) [ Code formatter ]
