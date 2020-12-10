fetch('input.txt')
  .then(response => response.text())
  .then(text => text
    .trim()
    .split(`\n`)
    .filter(item => {
      const pattern = /(\d*)-(\d*) (\w): (\S*)/;
      const [_, index1 , index2, letter, password] = item.match(pattern);
      const char1Valid = password[index1 - 1] === letter;
      const char2Valid = password[index2 - 1] === letter;
      
      return char1Valid !== char2Valid; 
    }).length
  )
  .then(result => console.log(result))
