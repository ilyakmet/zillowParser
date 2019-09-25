import readlineSync from 'readline-sync';

export default (source) => {
  console.log('\nWelcome to Zillow Parser!');
  const listingUrl = readlineSync.question('\nInput Listing URL: ');
  source(listingUrl);
};
