var closureFunc = function(){
  var arr = [];
  var i;
  for(i = 0; i < 3; i++){
    arr[i] = function(i){
      console.log(i);
    };
  }
  return arr;
}();

closureFunc[0](); // undefined
closureFunc[1](); // undefined
closureFunc[2](); // undefined
// 引数を渡してないため