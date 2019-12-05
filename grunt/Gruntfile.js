module.exports = function(grunt) {

    // Pasta onde se encontra os códigos do seu projeto
    var srcDir = 'src';

    // Pasta para onde deseja cobiar os códigos do build para execução no browser
    var buildDir = 'www';

    grunt.initConfig({

        // https://github.com/gruntjs/grunt-contrib-clean
        clean: {
            all: {
                src: [buildDir]
            }
        },

        // https://github.com/gruntjs/grunt-contrib-connect
        connect: {
            server: {
                options: {
                    port: 8300,
                    base: buildDir,
                    hostname: '*',
                    middleware: (connect, options, middlewares) => {
                        middlewares.unshift((req, res, next) => {
                            res.setHeader('Access-Control-Allow-Origin', '*');
                            res.setHeader('Access-Control-Allow-Methods', '*');
                            return next();
                        });
                        return middlewares;
                    }
                }
            }
        },

        // https://github.com/gruntjs/grunt-contrib-copy
        copy: {
            all: {
                cwd: srcDir,
                src: ['**', '!**/*-spec.js'],
                dest: buildDir,
                expand: true
            }
        },

        // https://github.com/gruntjs/grunt-contrib-cssmin
        cssmin: {
            all: {
                files: [{
                    expand: true,
                    cwd: srcDir,
                    src: '**/*.css',
                    dest: buildDir,
                    ext: '.min.css'
                }]
            }
        },

        // https://github.com/htmllint/grunt-htmllint
        htmllint: {
            all: {
                options: {
                    force: true,
                    'id-class-style': false,
                    'attr-name-style': false,
                    'attr-req-value': false,
                    'tag-bans': []
                },
                src: [srcDir + '/**/*.html']
            }
        },

        // https://github.com/gruntjs/grunt-contrib-jshint
        // Mais detalhes sobre a configuração do arquivo .jshintrc em http://jshint.com/docs/
        jshint: {
            options: {
                jshintrc: true
            },
            all: [srcDir + '/**/*.js',
                '!' + srcDir + '/**/*.min.js',
                '!' + srcDir + '/**/*-min.js',
                '!' + srcDir + '/**/*-spec.js'
            ]
        },

        // https://github.com/gruntjs/grunt-contrib-uglify
        uglify: {
            all: {
                files: [{
                    expand: true,
                    cwd: buildDir,
                    src: ['**/*.js', '!**/*-spec.js'],
                    dest: buildDir,
                    ext: '.min.js'
                }]
            }
        },

        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            build: {
                files: [srcDir + '/**'],
                tasks: ['fastbuild']
            }
        },

        // https://github.com/karma-runner/grunt-karma
        karma: {
            unit: {
                logLevel: 'ERROR',
                configFile: 'karma.conf.js'
            }
        }
    });

    // Carregamento das tarefas já definidas pelo grunt
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-htmllint');
    grunt.loadNpmTasks('grunt-karma');

    // definição de tarefas
    grunt.registerTask(
        'build',
        'Compila todos os assets e copia os arquivos para o diretório de build.', ['clean', 'jshint', 'karma', 'copy', 'cssmin', 'uglify']
    );

    grunt.registerTask(
        'fastbuild',
        'Compila todos os assets e copia os arquivos para o diretório de build.', ['clean', 'jshint', 'karma', 'copy']
    );

    grunt.registerTask(
        'default',
        'Observa o projeto por mudanças, automaticamente contrói e executa o servidor.', ['fastbuild', 'connect', 'watch']
    );
};