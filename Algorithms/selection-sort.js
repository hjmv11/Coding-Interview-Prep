function selectionSort(array) {
  // Only change code below this line
  
  
  for(var i = 0; i < array.length - 1; i++){
    //makes a copy of the array starting from one position after the one that was just sorted
    var array2 = array.slice(i)
    
    //bubble sort the copy of the array 
    for(var j = 0; j < array2.length - 1; j++){
      console.log("First Loop started...")
      console.log("Iteration: "+ j)
      console.log("old array2: "+array2)
      console.log("array2["+j+"] = "+array2[j])
      console.log("array2["+(j+1)+"] = "+array2[j+1])
      //store number if sorted
      var temp = 0; 
      //if the first number is greater than the second number, sort
      if(array2[j] - array2[j+1] > 0) {
        temp = array2[j+1]
        //put first number in the next position
        array2[j+1] = array2[j]
        //set the first position as the second number
        array2[j] = temp
        console.log("new array2: "+array2+"\n")
      } 
      //checks the new or old array again 
      for(var k = 0; k < array2.length - 1; k++){
        console.log("Second Loop started...")
        console.log("Iteration: "+ k)
        console.log("old array2: "+array2)
        console.log("array2["+k+"] = "+array2[k])
        console.log("array2["+(k+1)+"] = "+array2[k+1])
        var temp2 = 0; 
        if(array2[k] - array2[k+1] > 0) {
          temp2 = array2[k+1];
          array2[k+1] = array2[k];
          array2[k] = temp2;
          console.log("new array2: "+array2)
        }
        console.log("\n")
      }
      
    console.log("\n")  
    }

    
    console.log("Third Loop started...")
    console.log("old array: "+array)
    console.log("array2: "+array2)
    console.log("array[i] = "+array[i])
    console.log("array2[0] = "+array2[0])
    console.log("index of "+array2[0]+" = "+array.indexOf(array2[0],i))
    //swap the first and lowest number of the copied array with the number at position i  
    array[array.indexOf(array2[0],i)] = array[i]
    array[i] = array2[0]
    
    console.log("new array: "+array+"\n")
  }
  return array;
  // Only change code above this line
}
console.log(selectionSort([1,4,3,2,1]))