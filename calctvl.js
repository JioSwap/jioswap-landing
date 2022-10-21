
const defiLamaUrl = "https://api.llama.fi/tvl/jioswap"; 

fetch(defiLamaUrl, { cache: "no-cache" })
    .then(function(response) {
          if(response.ok) { 
              response.json().then(function(data) { 
                console.log(data.tvl)
                  var tvl_USD = document.getElementById('jio-tvl');
                  var usdTvl = '$' + data.tvl.toFixed(2) + '';
                  tvl_USD.innerHTML += usdTvl;
              });
          } else { 
              console.log("response failed?");
          }
    });

