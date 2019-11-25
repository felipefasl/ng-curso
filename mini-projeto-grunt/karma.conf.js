// Karma configuration

// Generated on Mon Nov 28 2016 16:31:49 GMT-0200 (BRST)



module.exports = function(config) {

    config.set({

        hostname: 'localhost',



        // base path that will be used to resolve all patterns (eg. files, exclude)

        basePath: './',



        // frameworks to use

        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter

        frameworks: ['jasmine'],



        // list of files / patterns to load in the browser

        files: [

            // Para permitir a execução dos testes em ambiente de integração contínua, é necessário incluir os as

            // bibliotecas JavaScript necessárias para a execução da aplicação neste ponto

            {

                pattern: 'https://desenv.estatico.bb.com.br/gaw-commons/libs/angular/1.5.9/angular.js',

                watched: false

            },

            {

                pattern: 'https://desenv.estatico.bb.com.br/gaw-commons/libs/angular-sanitize/1.5.9/angular-sanitize.js',

                watched: false

            },

            {

                pattern: 'https://desenv.estatico.bb.com.br/gaw-commons/libs/angular-mocks/1.5.9/angular-mocks.js',

                watched: false

            },

            {

                pattern: 'https://desenv.estatico.bb.com.br/gaw-commons/libs/underscore/1.8.3/underscore.js',

                watched: false

            },

            {

                pattern: 'https://desenv.estatico.bb.com.br/gaw-commons/libs/openajax-hub/2.0.7/release/all/OpenAjaxManagedHub-all.js',

                watched: false

            },

            {

                pattern: 'src/app/spas/documento-fiscal/documento-fiscal-app.ts',

                watched: false

            },

            {

                pattern: 'src/app/spas/pagamento/pagamento-app.ts',

                watched: false

            },

            {

                pattern: 'src/app/spas/pagamento/pagamento-services.ts',

                watched: false

            },

            'src/app/**/*.js'

        ],



        // list of files to exclude

        exclude: [],



        // preprocess matching files before serving them to the browser

        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

        preprocessors: {

            '**/*.ts': ['karma-typescript'],

        },



        karmaTypescriptConfig: {

            coverageOptions: {

                exclude: [/\-(d|spec|test)\.ts$/i]

            },

            reports: {

                'html': 'coverage',

                'lcovonly': {

                    'directory': 'coverage/typescript',

                    'subdirectory': 'lcov',

                    'filename': 'lcov.info',

                },

            }

        },



        // test results reporter to use

        // possible values: 'dots', 'progress'

        // available reporters: https://npmjs.org/browse/keyword/karma-reporter



        reporters: ['progress', 'karma-typescript'],



        // web server port

        port: 9876,



        // enable / disable colors in the output (reporters and logs)

        colors: true,



        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO

        // || config.LOG_DEBUG

        logLevel: config.LOG_INFO,



        // enable / disable watching file and executing tests whenever any file changes

        // autoWatch: true,



        // start these browsers

        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher



        browsers: ['phanthomjsWithoutSecurity'],

        // browsers: ['chromeWithoutSecurity'],

        // browsers: ['chromeHeadless'],



        customLaunchers: {

            phanthomjsWithoutSecurity: {

                base: 'PhantomJS',

                flags: ['--ignore-ssl-errors=true', '--web-security=false']

            },

            chromeWithoutSecurity: {

                base: 'Chrome',

                flags: ['--ignore-certificate-errors']

            },

            chromeHeadless: {

                base: 'Chrome',

                flags: ['--ignore-certificate-errors',

                    '--disable-gpu',

                    '--headless',

                    '--no-sandbox',

                    '--remote-debugging-port=9222'
                ]

            }

        },



        // Continuous Integration mode

        // if true, Karma captures browsers, runs the tests and exits

        singleRun: true



        // Concurrency level

        // how many browser should be started simultaneous

        // concurrency: Infinity

    });

};