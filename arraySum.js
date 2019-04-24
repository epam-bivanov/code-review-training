// `a` will be an array, containing integers, strings and/or arrays like itself.
// Sum all the integers you find, anywhere in the nest of arrays.   

function arrSum(a) {
  var s = 0;
  for(var i = 0; i <= arr.length; i++) {
      if (typeof a[i] === 'number') {
          s += a[i];
      }
      
      if(Object.prototype.toString.call(a[i]) === '[object Array]') {
s += arrSum(a[i]);

      //s+= arrSum(a[i]);
      }
  }
  return s;
}
