var arr = [];
var i;
for(i = 0; i < 3; i++){
  arr[i] = (function(n){
    return function(){
      console.log(n);
    };
  })(i);
}
arr[0]();
arr[1]();
arr[2]();
