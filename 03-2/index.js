fetch('input.txt')
  .then(response => response.text())
  .then(text => text.trim().split(`\n`))
  .then(route => {
    const width = route[0].length - 1;
    const shifts = [[1,1], [3,1], [5,1], [7,1], [1,2]];
    const move = (right, down, row = 0, col = 0) => 
      row < route.length 
        ? move(right, down, row + down, (col + right) % width) + (route[row][col] === '#' ? 1 : 0)
        : 0;
    const product = shifts.reduce((total, [right, down]) => move(right, down) * total, 1);
    console.log(product);
  })
