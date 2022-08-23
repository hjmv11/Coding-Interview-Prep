function pairwise(arr, arg) {
  //create numeric element variables, sum of indices, copy of array, and array with indices pairs 
  num1 = 0
  num2 = 0 
  copy_arr = arr.slice(0)
  sum_of_indices = 0
  index_pairs = []

  //loop through each element of copied array 
  for(let i = 0; i < copy_arr.length; i++){
    current_pairs = []
    //if i is 0 create a temporary array with first element sliced out 
    if (i == 0){      
      temp_arr = copy_arr.slice(0,1)
      temp_arr.splice(0,0,'')
    } else {
      temp_arr = copy_arr.slice(i)
      temp_arr.splice(i,0,'')
    }
    //set first numeric to the element of copied array[i]
    num1 = copy_arr[i]
    if(num1 != ''){
      //loop through temporary array 
      for(let j = 0; j < temp_arr.length; j++){
        //set second numeric to the element of temporary arry[j]
        num2 = temp_arr[j]
        //if second numberic not the blank in temporary array 
        if(num2 != ''){
          //if sum of numerics equal arg, push to current pairs 
          if(num1 + num2 == arg){
            current_pairs.push([copy_arr.indexOf(num1), copy_arr.indexOf(num2)])
          }  
        }
      }
    }
    //if a pair was found for this element 
    if(current_pairs.length > 0){
      //sort current pairs and push first pair 
      index_pairs.push(current_pairs.sort()[0])
      //remove the elements at indices from current pair, from copied array 
      copy_arr.splice(current_pairs[0][0],1,'')
      copy_arr.splice(current_pairs[0][1],1,'')
    }
    
    
    
  }

  //loop through index pairs
  for(let i = 0; i < index_pairs.length; i++){
    //add the pairs total to sum 
    sum_of_indices += (index_pairs[i][0] + index_pairs[i][1])
  }
  
  console.log(sum_of_indices)
  return sum_of_indices;
}

pairwise([1,4,2,3,0,5], 7);