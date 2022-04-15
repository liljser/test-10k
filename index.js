import { writeFile } from 'fs/promises';

const promises = [];

Array.from(new Array(10000)).forEach((_, index) => {
  const object = {
    id: `index_${index}`,
    name: `name_${index}`,
  };
  const promise = writeFile(`data/${index}.json`, JSON.stringify(object));
  promises.push(promise);
});

Promise.all(promises)
  .then(() => console.log('end'))
  .catch((error) => console.error(error));
