var closureFunc = function(){
  var arr = [];
  var i;
  for(i = 0; i < 3; i++){
    arr[i] = function(){
      console.log(i);
    };
  }
  return arr;
}();

closureFunc[0](); // 3
closureFunc[1](); // 3
closureFunc[2](); // 3

// line 7が line 3 を見ているため