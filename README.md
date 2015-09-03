# grunt-gt v0.1.6

> Grunt task for GT - node test runner for QUnit with code coverage

[![NPM][grunt-gt-icon] ][grunt-gt-url]

[![Build status][grunt-gt-ci-image] ][grunt-gt-ci-url]
[![dependencies][grunt-gt-dependencies-image] ][grunt-gt-dependencies-url]
[![devdependencies][grunt-gt-devdependencies-image] ][grunt-gt-devdependencies-url]

[grunt-gt-icon]: https://nodei.co/npm/grunt-gt.png?downloads=true
[grunt-gt-url]: https://npmjs.org/package/grunt-gt
[grunt-gt-ci-image]: https://travis-ci.org/bahmutov/grunt-gt.png?branch=master
[grunt-gt-ci-url]: https://travis-ci.org/bahmutov/grunt-gt
[grunt-gt-dependencies-image]: https://david-dm.org/bahmutov/grunt-gt.png
[grunt-gt-dependencies-url]: https://david-dm.org/bahmutov/grunt-gt
[grunt-gt-devdependencies-image]: https://david-dm.org/bahmutov/grunt-gt/dev-status.png
[grunt-gt-devdependencies-url]: https://david-dm.org/bahmutov/grunt-gt#info=devDependencies



Grunt wrapper for [gt](https://github.com/bahmutov/gt)

### Install

`npm install grunt-gt --save-dev`

## Use

### Testing BDD

```js
grunt.initConfig({
  gt: {
    bdd: {
      options: {
        bdd: true,
        cover: 'cover'
      },
      src: ['test/spec.js']
    }
  }
});
```

`grunt gt` runs unit tests and outputs coverage into `cover` folder.




### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/grunt-gt/issues) on Github



## MIT License

The MIT License (MIT)

Copyright (c) 2014 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



