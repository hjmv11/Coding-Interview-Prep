function permAlone(str) {
  let array = str.split('');
  let perms = [];
  let no_repeats = 0;

  var swap = function(array, pos1, pos2){
    let temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  };

  var noRepeatsCount = function(a){
    let pattern = /(\w)\1+/gm;
    return pattern.test(a);
  };
  
  var makePerms = function(arr, size, results){
    if(size == 1) {
      results.push(arr.join(''));
      if(!noRepeatsCount(arr.join(''))){
        no_repeats++;
      }
    } else {
        for(let i = 0; i < size-1; i++){
          makePerms(arr, size-1, results);
          if(size%2 == 0){
            swap(arr, i, size-1);
          } else {
              swap(arr, 0, size-1);
          }          
        }
        makePerms(arr, size-1, results);
    }
  };

  makePerms(array, array.length, perms);
  console.log(no_repeats);
  return no_repeats;
  
}
permAlone('aab');