function mergeSort(array) {
  // Only change code below this line

  console.log(`MergeSort([${array}])`);

  var middle = 0;

  //get middle and create left and right arrays
  middle = (array.length/2).toFixed(0);
  const left = array.slice(0,middle);
  const right = array.slice(middle);
  
  console.log(`Middle: ${middle}`);
  console.log(`Left: ${left}`);
  console.log(`Right: ${right}\n`);

  //if both sub arrays are a single item return them sorted and merged
  if (left.length <= 1 && right.length <= 1){
    if(left[0] < right[0]){
      return merge(left,right);
    } else {
      return merge(right,left);
    }
    //if more than 1 item, swap the higher numbers to the right 
  } else {
    for(let i = 0; i < left.length; i++){
      for(let j = 0; j < right.length; j++){
        if (left[i] > right[j]) {
          let temp = left[i];
          left[i] = right[j];
          right[j] = temp;
        }
      }
    }
    //recursive call that merges the sorted left and the sorted right 
    return(merge(mergeSort(left),mergeSort(right)));
  }

  // Only change code above this line
}

//take two arrays, return the elements of both merged
function merge(arr1 = [], arr2 = []){
  const merge = [...arr1,...arr2];
  return merge;
}

console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));