import request from 'request-promise';
import config from '../config';
import converter from '../utils/converter';
import start from '..';


const fetchData = async (url) => {
  const result = await request.get({ url, headers: config.headers });
  return result;
};

const getResults = async (url) => {
  const $ = await fetchData(url);

  const apartment = $
    .split('<script id=hdpApolloPreloadedData type="application/json">')[1]
    .split('</script><script id=hdpReduxPreloadedData type="application/json">')[0]
    .replace(/\\/g, '')
    .replace(/"."zpid":\d+}|"{"VariantQuery{"zpid":\d+}":|zpid":\d+}"/g, '');

  converter(JSON.parse(apartment), config.maxParserOutputDir);

  return apartment;
};

export default () => start(getResults);
