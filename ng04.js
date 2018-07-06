var closureFunc = function(){
  var arr = [];
  var i;
  for(i = 0; i < 3; i++){
    arr[i] = function(){
      var num = i;
      console.log(num);
    };
  }
  return arr;
}();

closureFunc[0](); // 2
closureFunc[1](); // 2
closureFunc[2](); // 2
// line 6は参照しているだけだから？