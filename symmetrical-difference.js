function sym(...args) {
  var symArray = [];
  var newSymArray = [];

  for(let j = 0; j < args[0].length;){
    if(args[1] && args[1].indexOf(args[0][j]) == -1){
      if(symArray.indexOf(args[0][j]) == -1){
        symArray.push(args[0][j]);
      } 
    }
    j++;    
  }
  for(let k = 0; k < args[1].length;){
    if(args[0].indexOf(args[1][k]) == -1){
      if(symArray.indexOf(args[1][k]) == -1){
        symArray.push(args[1][k]);
      }
    }
    k++;
  }

  if(args.length > 2 && symArray.length > 0){
    for(let i = 2; i < args.length; i++){
      for(let m = 0; m < symArray.length;){
        if(args[i].indexOf(symArray[m]) == -1){
          if(newSymArray.indexOf(symArray[m]) == -1){
            newSymArray.push(symArray[m]);
          }    
        }
        m++; 
      }
      for(let n = 0; n < args[i].length;){
        if(symArray.indexOf(args[i][n]) == -1){
          if(newSymArray.indexOf(args[i][n]) == -1){
            newSymArray.push(args[i][n]);
          }        
        }
        n++; 
      }
    symArray = newSymArray;
    newSymArray = [];
    }
  } else {
      symArray = args[i];
      i++;
  }
  return symArray.sort();
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))