var closureFunc = function(){
  var arr = [];
  var i;
  for(i = 0; i < 3; i++){
    var num = i;
    arr[i] = function(){
      console.log(num);
    };
  }
  return arr;
}();

closureFunc[0](); // 2
closureFunc[1](); // 2
closureFunc[2](); // 2
// ブロックスコープが利かないので line 5 はline 3 とほぼ同じ、3までは回らないので2となる