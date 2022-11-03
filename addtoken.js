const tokenAddress = '0xd42AcEEb77F916e926AA25FB6BE69828bA806B9B';
const tokenSymbol = 'OSM';
const tokenDecimals = 18;
const tokenImage = 'https://assets.codepen.io/4625073/1.jpeg';

async function addTokenFunction() {

try {
  
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', 
      options: {
        address: tokenAddress, 
        symbol: tokenSymbol, 
        decimals: tokenDecimals, 
        image: tokenImage, 
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('OSM has not been added');
  }
} catch (error) {
  console.log(error);
}
}