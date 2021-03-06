/**
 * @Author: Matthew Hale <matthale>
 * @Date:   2017-12-11T09:59:08-06:00
 * @Email:  mlhale@unomaha.edu
 * @Filename: environment.js
 * @Last modified by:   matthale
 * @Last modified time: 2018-02-27T12:39:56-06:00
 * @Copyright: Copyright (C) 2018 Matthew L. Hale
 */



/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    torii: {
      // a 'session' property will be injected on routes and controllers
      sessionServiceName: 'session',
      allowUnsafeRedirect: true,
      providers: {
        // 'facebook-oauth2': {
        //   apiKey:      '1128913990495754',
        //   redirectUri: '/index' // default is /torii/redirect.html
        // },
        'google-oauth2': {
          apiKey:      '563993081014-fqfdptsu4qm6p8n4e5knbejpj2brdpef.apps.googleusercontent.com',
          redirectUri: 'http://mentor.surgedisasters.com', // default is /torii/redirect.html
          scope:'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
        }
      }
    },
    modulePrefix: 'frontend',
    environment,
    rootURL: 'http://localhost/static/ember/',
    routerRootURL: '/',
    domainURL: 'http://localhost',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.rootURL = "http://mentor.surgedisasters.com/static/ember/";
    ENV.routerRootURL = '/';
    ENV.domainURL = 'http://mentor.surgedisasters.com';
  }

  return ENV;
};
