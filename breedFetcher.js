const request = require('request');
// const breedName = process.argv[2];


const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error !== null) {
      callback(error);
      return;
    }
    
    const data = JSON.parse(body);
    
    if (data.length === 0) {
      callback('Error: ', breedName + ' breed Not found');
      return;
    }
    
    const desc = data[0].description;
    callback(null, desc);
  });
  
};

// const breedDescription = fetchBreedDescription(breedName, (error, description) => {

// });
module.exports = { fetchBreedDescription };