function tri(numbers,order){

  



    if(order=="asc"){
        numbers.sort(function(a, b) {
            return a - b;
          })
          console.log(numbers)
    }else{
        numbers.sort(function(a, b) {
            return b - a;
          });
          console.log(numbers)
    }
}
var numbers = [1, 4, 13, 3, 8, 16, 9];


tri(numbers,"asc");
tri(numbers,"sc");