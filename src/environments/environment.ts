// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB1M2a0EkfmROW8LcQt-wmS0NR89seWB9Q',
    authDomain: 'angular-with-jsonplaceholder.firebaseapp.com',
    databaseURL: 'https://angular-with-jsonplaceholder.firebaseio.com',
    projectId: 'angular-with-jsonplaceholder',
    storageBucket: 'angular-with-jsonplaceholder.appspot.com',
    messagingSenderId: '786554783811'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
