const axios = require('axios').default;

axios.get('https://api.coingecko.com/api/v3/coins/axie-infinity')
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