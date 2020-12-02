fetch('input.txt')
  .then(response => response.text())
  .then(text => text.split(`\n`).map(el => parseInt(el)))
  .then(data => { 
    return data.reduce((obj, itm, idx, arr) => {
      arr.splice(idx, 1)[0];
      const itemFound = arr.find(el => el + itm === 2020);
      if(itemFound){
        obj[`found`] = itm * itemFound; 
      }
      return obj
    }, {});
  })
  .then(result => console.log(result.found));
