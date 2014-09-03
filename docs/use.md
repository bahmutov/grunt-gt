# Use

## Testing BDD

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

