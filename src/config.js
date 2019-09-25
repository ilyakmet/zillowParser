export default {
  minParserOutputDir: './output/minParserOutput.json',
  maxParserOutputDir: './output/maxParserOutput.json',
  headers: {
    'User-Agent': 'Mozilla/5.0',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  priceSelector: '#ds-container > div.ds-data-col.ds-white-bg > div.ds-chip > div > div.ds-summary-row-container > div > div > h3 > span > span',
  typeSelector: '#ds-container > div.ds-data-col.ds-white-bg > div.ds-chip > div > div.ds-chip-removable-content > div > span.ds-status-details',
  descriptionSelector: '.character-count-text-fold-container > div',
  imageSelector: '#ds-container > div.ds-media-col.ds-media-col-hidden-mobile > ul > li.media-stream-tile.media-stream-tile--prominent > picture > img',
};
