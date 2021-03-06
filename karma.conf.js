//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular/angular-resource.min.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app.js',
      'services/service.js',
      'components/holidayDetails/holidayDetail.js',
      'components/holidayDetails/holidayDetail.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
