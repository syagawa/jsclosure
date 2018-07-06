var closureFunc = function(){
  var arr = [];
  var i;
  for(i = 0; i < 3; i++){
    let num = i;
    arr[i] = function(){
      console.log(num);
    };
  }
  return arr;
}();

closureFunc[0](); // 0
closureFunc[1](); // 1
closureFunc[2](); // 2
// letはブロックスコープ内で有効となる ES2015以降で有効