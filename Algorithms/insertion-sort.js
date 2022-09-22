function insertionSort(array) {
  // Only change code below this line
  //begin sorted array from first element 
  var sorted_arr = array.slice(0,1)

  //loop through array
  for(let i = 1; i < array.length; i++){
    console.log("i = "+i)
    console.log("array[i] = "+array[i])
    //loop through sorted array
    for(let j = sorted_arr.length -1; j >= 0; j--){
      console.log("j = "+j)
      console.log("sorted_arr[j] = "+sorted_arr[j])
      console.log("j+1 = "+(j+1))
      //if the element from array is greater than the last element of sorted_arr, add the element at the end of sorted_arr, if not skip 
      if(array[i] > sorted_arr[j]){
        sorted_arr.splice(j+1,0,array[i])
        //if the element from array is inserted to sorted array, go to next array element
        break
      }
      else{
        if(j==0){
          sorted_arr.splice(j,0,array[i])
          //if element from array is inserted to the front of sorted_arr, go to next array element 
          break  
        }
        else{
          continue
        }
        
      }
    }
  console.log("new sorted_arr: "+sorted_arr)
  console.log("\n")
  }  
  return sorted_arr;
  // Only change code above this line
}

console.log(insertionSort([5, 4, 33, 2, 8]))