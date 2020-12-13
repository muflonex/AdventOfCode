fetch('input.txt')
  .then(response => response.text())
  .then(text => text.split(`\n`).map(el => parseInt(el)))
  .then(data => { 
    return data.reduce((result, itm, idx, arr) => {
      const validPair = arr.find((el, pairIdx) => (idx !== pairIdx) && el + itm === 2020);
      return validPair ? itm * validPair : result
    }, null);
  })
  .then(result => console.log(result));
