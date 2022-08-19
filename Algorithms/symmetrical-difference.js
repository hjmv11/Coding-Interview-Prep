function sym(...args) {
  //create blank array for the current symmetrical difference and the new symm diff
  var symArray = [];
  var newSymArray = [];

  //loop through the first argument 
  for(let j = 0; j < args[0].length;){
    //check if any number in first argument is not in the second argument 
    if(args[1] && args[1].indexOf(args[0][j]) == -1){
      //check if the non-existing number is in the symm diff already 
      if(symArray.indexOf(args[0][j]) == -1){
        symArray.push(args[0][j]);
      } 
    }
    j++;    
  }
  //loop through the second argument 
  for(let k = 0; k < args[1].length;){
    //check if any number in the second argument is not in the first argument 
    if(args[0].indexOf(args[1][k]) == -1){
      //check if non-existing number is in the sym diff already 
      if(symArray.indexOf(args[1][k]) == -1){
        symArray.push(args[1][k]);
      }
    }
    k++;
  }
  //there must be two arguments
  //now the symmetrical difference will act like the first argument, and the next argument will be the second argument 
  //after we will have a new symmetrical difference to compare to the next argument, if possible

  //checks if there are more than two arguments and the symmetrical differences from the first two is not blank 
  if(args.length > 2 && symArray.length > 0){
    //loop through rest of arguments starting at the third  
    for(let i = 2; i < args.length; i++){
      //loop through existing symm diff
      for(let m = 0; m < symArray.length;){
        //check if any number in the exisiting symm diff is not in argument #i
        if(args[i].indexOf(symArray[m]) == -1){
          //check if non-existing number is not in the new symm diff
          if(newSymArray.indexOf(symArray[m]) == -1){
            newSymArray.push(symArray[m]);
          }    
        }
        m++; 
      }
      //loop through argument #i
      for(let n = 0; n < args[i].length;){
        //check if any number in the argument #i is not in the existing symm diff
        if(symArray.indexOf(args[i][n]) == -1){
          //check if non-existing number is not in the new symm diff
          if(newSymArray.indexOf(args[i][n]) == -1){
            newSymArray.push(args[i][n]);
          }        
        }
        n++; 
      }
    //once done with argument #i set the new symm diff as the existing and clear the new symm diff for the next argument
    //if there is no more arguments it will return the last symm diff
    symArray = newSymArray;
    newSymArray = [];
    }
  }
  return symArray.sort();
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]))
