function bubbleSort(array) {
  // Only change code below this line
  for(var i = 0; i < array.length - 1; i++){
    console.log("Loop started...")
    console.log("Iteration: "+ i)
    console.log("old array: "+array)
    console.log("array["+i+"] = "+array[i])
    console.log("array["+(i+1)+"] = "+array[i+1])
    //store number if sorted
    var temp = 0; 
    //if the first number is greater than the second number, sort
    if(array[i] - array[i+1] > 0) {
      temp = array[i+1]
      //put first number in the next position
      array[i+1] = array[i]
      //set the first position as the second number
      array[i] = temp
      console.log("new array: "+array+"\n")
    } 
    //checks the new or old array again 
    for(var j = 0; j < array.length - 1; j++){
      console.log("Second Loop started...")
      console.log("Iteration: "+ j)
      console.log("old array: "+array)
      console.log("array["+j+"] = "+array[j])
      console.log("array["+(j+1)+"] = "+array[j+1])
      var temp2 = 0; 
      if(array[j] - array[j+1] > 0) {
        temp2 = array[j+1];
        array[j+1] = array[j];
        array[j] = temp2;
        console.log("new array: "+array)
      }
      console.log("\n")
    }
    
  console.log("\n")  
  }
  return array;
  // Only change code above this line
}

console.log(bubbleSort([3,2,1]));