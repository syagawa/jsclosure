var closureFunc = function(){
  var arr = [];
  var i;
  for(i = 0; i < 3; i++){
    arr[i] = function(num){
      return function(){
        console.log(num);
      };
    }(i);
  }
  return arr;
}();

closureFunc[0](); // 0
closureFunc[1](); // 1
closureFunc[2](); // 2
