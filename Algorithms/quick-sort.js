function quickSort(array) {
  // Only change code below this line
  console.log(`quickSort(${array})`)

  //base case 
  if(array.length == 0){
    return [];
  } else {
    //create pivot
    var pivot_index = Math.floor(Math.random()*array.length);
    var pivot = array[pivot_index];
    console.log(`Pivot index: ${pivot_index} \nPivot: ${pivot}\n`)
    
    //create two sides and pivot array
    const less_array = [], grtr_array = [], pivot_array = [];

    //loop through array values, set to one of the arrays
    for(let n of array){
      if(n < pivot){
        less_array.push(n);
      } else if(n > pivot){
        grtr_array.push(n);
      } else {
        pivot_array.push(n);
      }
    }
    console.log(`less: ${less_array}\npivot: ${pivot_array}\ngrtr : ${grtr_array}\n`);
    //recursive call, using spread syntax inside an array to show each value as a single array
    //does not show undefined/blank arrays 
    return [...quickSort(less_array),...pivot_array,...quickSort(grtr_array)];
  }
  // Only change code above this line
}
quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])