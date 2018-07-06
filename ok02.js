var closureFunc = function(){
  var arr = [];
  var i;
  var func = function(num){
    return function(){
      console.log(num);
    };
  };
  for(i = 0; i < 3; i++){
    arr[i] = func(i);
  }
  return arr;
}();

closureFunc[0](); // 0
closureFunc[1](); // 1
closureFunc[2](); // 2
// line 6は参照しているだけだから？