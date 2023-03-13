function binarySearch(searchList, value, path = []) {

  //console.log(searchList);
  //console.log(searchList.length);

  // get middle index
  let middle = Math.floor((searchList.length-1)/2);

  // create left and right side arrays
  let right = searchList.slice(middle+1);
  let left = searchList.slice(0,middle);

  //insert the middle number into the path array
  path.push(searchList[middle]);
  //console.log("array path: " + arrayPath);

  //once value is found, show path array
  if (searchList[middle] == value){
    return path;
  } 

  // if middle is less than value search the right side array
  if (searchList[middle] < value){
    return binarySearch(right, value, path);
  }

  //if middle is greater than value search the left side array, if not return value not found
  if (searchList[middle] > value){          
    return binarySearch(left, value, path);        
  } else{
    return "Value Not Found";
  }
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70],70));