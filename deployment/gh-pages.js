var ghpages = require('gh-pages');

ghpages.publish('dist', function (error) {
  if (!error) return;

  console.log('Error', error);
});
