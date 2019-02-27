var arr = [];
var i;
for(i = 0; i < 3; i++){
  arr[i] = function(){
    console.log(i);
  };
}
arr[0]();
arr[1]();
arr[2]();
