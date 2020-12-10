fetch('input.txt')
  .then(response => response.text())
  .then(text => text
    .trim()
    .split(`\n`)
    .filter(item => {
      const pattern = /(\d*)-(\d*) (\w): (\S*)/;
      const [_, min , max, letter, password] = item.match(pattern);
      const charCount = [...password].filter(char => char === letter).length;
      return charCount >= parseInt(min) && charCount <= parseInt(max)
    }).length
  )
  .then(result => console.log(result))
  .catch(error => console.error(error));
