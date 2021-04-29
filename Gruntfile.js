module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    eslint: {
    server: {
      options: {
        configFile: './server/.eslintrc.json',
        fix: true,
      },
      target: [
        'server/**/*.js',
      ],
    },
    react: {
      options: {
        configFile: './client/.eslintrc.json',
        fix: true,
      },
      target: [
        'client/**/*.js',
      ],
    }},
    watch: {
      files: [
        'Gruntfile.js',
        '.eslintrc.json',
        'server/**/*.js',
        'client/**/*.js',
      ],
      tasks: ['eslint'],
    },
  });

  grunt.registerTask('default', ['eslint']);
};
