fetch('input.txt')
  .then(response => response.text())
  .then(text => text.split(`\n`).map(element => parseInt(element)))
  .then(numbers => { 
    numbers.sort((a,b)=> a - b);

    const findTarget = (target, head = 0, tail = numbers.length - 1) => {
      const headNum = numbers[head];
      const tailNum = numbers[tail];
      const sum = headNum + tailNum;
      // Recursive search with narrowing candidates
      return head >= tail 
        ? null
        : sum === target
          ? headNum * tailNum
          : sum < target
            ? findTarget(target, head + 1)
            : findTarget(target, head, tail -1 )
    } 
    // To add 3rd num, we need to get 2 nums work for smaller sum
    const validCombination = numbers.filter(num => findTarget(2020 - num)) 
    // We multiply the resulting array by its elements
    const finalProduct = validCombination.reduce((product, num) => product * num, 1);
    console.log(validCombination, finalProduct);
  })
