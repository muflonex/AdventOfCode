fetch('input.txt')
  .then(response => response.text())
  .then(text => text
    .split(`\n`)
    .map(el => {
      const [times, letter, password] = el.split(' ')
      return {
        min: times.split('-')[0],
        max: times.split('-')[1],
        letter: letter[0],
        password: password.trim()
      };
    })
    .reduce((total, { min, max, letter, password }) => {
      const pattern = new RegExp(letter, 'g');
      const times = (password.match(pattern)||[]).length;
      return times >= min && times <= max ? total + 1 : total; 
    }, 0)
  )
  .then(result => console.log(result))
  .catch(error => console.error(error));
