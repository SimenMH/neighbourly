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
      target: ['index.js', 'Gruntfile.js', 'controllers/*.js', 'helpers/*.js', 'models/*.js']
    },
    watch: {
      files: [
        'index.js', 
        'Gruntfile.js', 'controllers/*.js', 'helpers/*.js', 'models/*.js',
        '.eslintrc.json',
      ], 
      tasks: ['eslint'],
    },
  });

  grunt.registerTask('default', ['eslint']);
};
