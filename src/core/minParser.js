import request from 'request-promise';
import cheerio from 'cheerio';
import config from '../config';
import converter from '../utils/converter';
import start from '..';


const fetchData = async (url) => {
  const result = await request.get({ url, headers: config.headers });
  return cheerio.load(result);
};

const getResults = async (url) => {
  const $ = await fetchData(url);

  const apartment = {
    price: $(config.priceSelector).text(),
    type: $(config.typeSelector).text(),
    description: $(config.descriptionSelector).text(),
    image: $(config.imageSelector).attr('src'),
  };

  console.log(apartment);

  converter(apartment, config.minParserOutputDir);

  return apartment;
};

export default () => start(getResults);
