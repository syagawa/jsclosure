var closureFunc = function(){
  var arr = [];
  for(let i = 0; i < 3; i++){
    arr[i] = function(){
      console.log(i);
    };
  }
  return arr;
}();

closureFunc[0](); // 0
closureFunc[1](); // 1
closureFunc[2](); // 2
