module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ["source/jquery.getscripts.js"]
    },

    uglify: {
      options: {
        compress: true,
        mangle: true,
        banner: '/**\n' +
                '* <%= pkg.title %> v<%= pkg.version %>\n' +
                '* <%= pkg.homepage %>\n' +
                '*\n' +
                '* <%= pkg.description %>\n' +
                '*\n' +
                '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
                '*\n' +
                '* Released Under the Following Licenses\n' +
                '* <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
                '*\n' +
                '* Date: <%= grunt.template.date(Date.now(), "isoDateTime") %>\n' +
                '*/\n'
      },
      all: {
        files: {
          'dist/jquery.getscripts.min.js': ['source/jquery.getscripts.js'],
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('dist', ['jshint', 'uglify']);
  grunt.registerTask('default', ['dist']);
};
