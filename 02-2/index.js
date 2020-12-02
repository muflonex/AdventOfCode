fetch('input.txt')
  .then(response => response.text())
  .then(text => text
    .split(`\n`)
    .map(el => {
      const [times, letter, password] = el.split(' ')
      return {
        pos1: times.split('-')[0] - 1,
        pos2: times.split('-')[1] - 1,
        letter: letter[0],
        password: password.trim()
      };
    })
    .reduce((total, { pos1, pos2, letter, password }) => {
      const isAtFirst = password.charAt(pos1) === letter;
      const isAtSecond = password.charAt(pos2) === letter;
      return isAtFirst !== isAtSecond ? total + 1 : total; 
    }, 0)
  )
  .then(result => console.log(result))
  .catch(error => console.error(error));
