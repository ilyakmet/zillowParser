import fs from 'fs';

export default (results, path) => {
  const jsonString = JSON.stringify(results, null, 4);
  fs.writeFile(path, jsonString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`JSON saved to ${path}`);
    }
  });
};
