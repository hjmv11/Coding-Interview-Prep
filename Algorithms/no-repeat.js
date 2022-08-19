function permAlone(str) {
  // split str into an array 
  let array = str.split('');
  //create count of permutations that do not repeat
  let no_repeats = 0;

  //swap function rearranges the position of the array 
  var swap = function(array, pos1, pos2){
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  };

  //noRepeats function returns false if no repeated character found
  var noRepeats = function(a){
    let pattern = /(\w)\1+/gm;
    return pattern.test(a);
  };

  //makePerms creates all possible permutations and calls noRepeats function 
  var makePerms = function(arr, size){
    //if current permutation has swapped all but one letter 
    if(size == 1) {
      //if noRepeats returns false for current permutation increment count
      if(!noRepeats(arr.join(''))){
        no_repeats++;
      }
    } else {
        //creates n permutations for size-1 
        for(let i = 0; i < size-1; i++){
          makePerms(arr, size-1);
          //if even use iterator
          if(size%2 == 0){
            swap(arr, i, size-1);
          } //if odd use 0 for pos1
            else {
              swap(arr, 0, size-1);
          }          
        }
        //creates new permutation where size will be 1 
        makePerms(arr, size-1);
    }
  };

  //begins creation of permutations
  makePerms(array, array.length);

  //returns count
  return no_repeats;
  
}
permAlone('aab');