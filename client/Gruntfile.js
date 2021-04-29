module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json',
        fix: true,
      },
      target: ['App.js', 'Gruntfile.js', 'components/*.js', 'screens/*.js', 'services/*.js']
    },
    watch: {
      files: [
        'App.js', 'Gruntfile.js', 'components/*.js', 'screens/*.js', 'services/*.js', 'app.json',
        '.eslintrc.json',
      ], 
      tasks: ['eslint'],
    },
  });

  grunt.registerTask('default', ['eslint']);
};
