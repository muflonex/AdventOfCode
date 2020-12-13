fetch('input.txt')
  .then(response => response.text())
  .then(text => text.trim().split(`\n`))
  .then(route => {
    const width = route[0].length - 1;
    const move = (row = 0, col = 0) =>  
      row < route.length 
        ? move(row + 1, (col + 3) % width) + (route[row][col] === '#' ? 1 : 0)
        : 0;
  
    console.log(move());
  })

  
