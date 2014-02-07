'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var AngularGrailsSimpleGenerator = module.exports = function AngularGrailsSimpleGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AngularGrailsSimpleGenerator, yeoman.generators.Base);

AngularGrailsSimpleGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

AngularGrailsSimpleGenerator.prototype.app = function app() {
  this.mkdir('src/angular');
  this.mkdir('src/angular/js');
  this.mkdir('src/angular/partials');

  this.mkdir('test/angular');
  this.mkdir('test/angular/js');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_bowerrc', '.bowerrc');
};

AngularGrailsSimpleGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('jshintrc', '.jshintrc');

  this.mkdir('grails-app');
  this.mkdir('grails-app/conf');
  this.copy('_AngularResources.groovy', 'grails-app/conf/AngularResources.groovy');
};
