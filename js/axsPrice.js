const axios = require('axios').default;

axios.get('https://api.coingecko.com/api/v3/simple/price?ids=axie-infinity&vs_currencies=bnb')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});