module.exports = (grunt) => {

    var srcDir = 'src';
    var buildDir = 'www';

    // configure the tasks
    grunt.initConfig({
        clean: {
            all: {
                src: [buildDir, 'coverage', '*.tmp.txt']
            }
        },
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
        copy: {
            all: {
                cwd: srcDir,
                src: ['**', '!**/*-spec.js'],
                dest: buildDir,
                expand: true
            }
        },
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
        karma: {
            unit: {
                logLevel: 'ERROR',
                configFile: 'karma.conf.js'
            }
        },
        htmllint: {
            all: {
                options: {
                    force: true,
                    'id-class-style': false,
                    'attr-name-style': false,
                    'attr-req-value': false,
                    'tag-bans': []
                },
                src: [srcDir + '/**/*.xhtml']
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            all: [srcDir + '/**/*.js',
                '!' + srcDir + '/**/*.min.js',
                '!' + srcDir + '/**/*-min.js',
                '!' + srcDir + '/**/portal.js',
                '!' + srcDir + '/**/scripts/livereload.js',
                '!' + srcDir + '/**/*-spec.js',
                '!' + srcDir + '/**/plt-config.*'
            ]
        },
        strip_code: {
            options: {
                blocks: [{
                    start_block: '/* start-test-block */',
                    end_block: '/* end-test-block */'
                }, {
                    start_block: '<!-- start-html-test-code -->',
                    end_block: '<!-- end-html-test-code -->'
                }]
            },
            dist: {
                // se precisar do strip_code, inclua o arquivo no array abaixo
                src: []
            }
        },
        ts: {
            default: {
                tsconfig: true
            }
        },
        tslint: {
            options: {
                configuration: 'tslint.json',
                force: false,
                fix: false
            },
            files: {
                src: [
                    srcDir + '/**/*.ts'
                ]
            }
        },
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
        watch: {
            build: {
                files: [srcDir + '/**'],
                tasks: ['fastbuild']
            }
        },
        test: {
            files: [srcDir + '/**'],
            tasks: ['karma'],
            options: {}
        }
    });

    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-htmllint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-strip-code');

    // define the tasks
    grunt.registerTask(
        'build',
        'Compila todos os assets e copia os arquivos para o diretório de build.', ['clean', 'jshint', 'htmllint',
            'karma',
            'copy', 'cssmin', 'uglify'
        ]

    );

    grunt.registerTask(
        'fastbuild',
        'Compila todos os assets e copia os arquivos para o diretório de build.', ['clean', 'htmllint',
            // 'karma',
            'copy'
        ]
    );

    grunt.registerTask(
        'default',
        'Observa o projeto por mudanças, automaticamente contrói e executa o servidor.', ['fastbuild', 'connect', 'watch']
    );

    grunt.registerTask(
        'dist',
        'Gera o projeto em sua versão final removendo eventuais códigos de desenvolvimento.', ['build', 'strip_code']
    );

};