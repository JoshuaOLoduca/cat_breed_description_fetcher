const request = require('request');
const breedName = process.argv[2];

request('https://api.thacatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
  if (error !== null) {
    console.log(error);
    console.log('Website Not Found');
    return;
  }
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log(breedName,'Not found');
    return;
  }

  const desc = data[0].description;
  console.log(desc);
});