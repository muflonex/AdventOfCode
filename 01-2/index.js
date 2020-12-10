fetch('input.txt')
  .then(response => response.text())
  .then(text => text.split(`\n`).map(el => parseInt(el)))
  .then(data => { 
    return k_combinations(data, 199).reduce((obj, arr) => {
      const sums2020 = arr.reduce((total, current) => total + current, 0) === 2020;
      if( sums2020 )
        obj['found'] = arr.reduce((total, current) => total * current) 
      return obj;
    },{});
  })
  .then(result => console.log(result.found))
  .catch(error => console.error(`${error} -- No such combination`));

function k_combinations(dataSet, combinationSize) {
  let combinations = [];
  
  // i.e. A set of 4 won't produce 5-sized subsets
  if (combinationSize > dataSet.length || combinationSize <= 0)
    return [];
  
  // K-sized set has only one K-sized subset.
  if (combinationSize === dataSet.length) 
    return [dataSet];
  
  // There is N 1-sized subsets in a N-sized set.
  if (combinationSize === 1) {
    for (element of dataSet) {
      combinations.push([element]);
    }
    return combinations;
  }
  
  // Assert {1 < k < set.length}
  
  // Algorithm description:
  // To get k-combinations of a set, we want to join each element
  // with all (k-1)-combinations of the other elements. The set of
  // these k-sized sets would be the desired result. However, as we
  // represent sets with lists, we need to take duplicates into
  // account. To avoid producing duplicates and also unnecessary
  // computing, we use the following approach: each element i
  // divides the list into three: the preceding elements, the
  // current element i, and the subsequent elements. For the first
  // element, the list of preceding elements is empty. For element i,
  // we compute the (k-1)-computations of the subsequent elements,
  // join each with the element i, and store the joined to the set of
  // computed k-combinations. We do not need to take the preceding
  // elements into account, because they have already been the i:th
  // element so they are already computed and stored. When the length
  // of the subsequent list drops below (k-1), we cannot find any
  // (k-1)-combs, hence the upper limit for the iteration:
  for (let i = 0; i <= dataSet.length - combinationSize; i++) {
    // head is a list that includes only our current element.
    let head = dataSet.slice(i, i + 1);
    // We take smaller combinations from the subsequent elements
    let tailcombs = k_combinations(dataSet.slice(i + 1), combinationSize - 1);
    // For each (k-1)-combination we join it with the current
    // and store it to the set of k-combinations.
    for (let j = 0; j < tailcombs.length; j++) {
      combinations.push(head.concat(tailcombs[j]));
    }
  }
  return combinations;
}
