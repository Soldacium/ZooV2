# Zoo2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

App for imaginary Zoo in Krakow, mock payment system for tickets and simple blog with current events.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Connecting to backend

In order to connect to database go to `app.js` in `/backend` folder and change `mongo.connect` at line 16 to mongoose.connect(`INSERT_YOUR_MONGODB_DATABASE_CONNECTION`, { useNewUrlParser: true , useUnifiedTopology: true}). (there are free options ready at mongo site in 5 minutes so should be no problem).

After that delete `keys.js` from app.js imports as it does not exist.

With everything done, run `npm run startServer` in console to, well, start server.js

To access admin panel, take off `LoginGuard` from Admin routes in `app-routing` module, go to `/admin/users` in your browser and create new user for yourself. Now you can login at `/login` and enjoy all app features.

Alternative is not using just not using LoginGuard at all but be ready for bugs and problems.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
