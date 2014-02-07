modules = {
  // If we're not running in the development environment, use minified JS and CSS files.
  boolean isDevEnv = (Environment.current == Environment.DEVELOPMENT)
  String useMin = (isDevEnv) ? '' : 'min.'

  lodash {
    resource url: "/vendor/lodash/dist/lodash.compat.${useMin}js", exclude: ['minify']
  }

  jQuery {
    resource url: "/vendor/jquery/jquery.${useMin}js", exclude: ['minify']
  }

  angular {
    dependsOn 'jQuery'

    resource url: "/vendor/angular/angular.${useMin}js", exclude: ['minify']
    resource url: "/vendor/angular-resource/angular-resource.${useMin}js", exclude: ['minify']
    resource url: "/vendor/angular-route/angular-route.${useMin}js", exclude: ['minify']
  }

  bootstrap {
    resource url: "/vendor/bootstrap/dist/css/bootstrap.${useMin}css", exclude: ['minify'], disposition: 'head'
    resource url: "/vendor/bootstrap/dist/js/bootstrap.${useMin}js", exclude: ['minify']
  }
}