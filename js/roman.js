function getNum()
 {
     var decimal = document.getElementById("askNum").value;
     document.getElementById("result").innerHTML = convertToRoman(decimal);

     decimal.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
  event.preventDefault();
  document.getElementById("submit").click();
}
});
 }



function convertToRoman(decimal) {
  let lo=0;
  let mid=0;
  let hi=0;
  let roman=0;
  let romArr=[];
  let str=decimal.toString();
  let arr=str.split('');
  //Flag any entry that isnt 1 to 3999
  if(decimal>3999 || decimal<1 || /\D/.test(decimal) == 1){
    return "Error!"
  }
  for(let i=arr.length-1;i>=0;i--){
  switch(i){
  case 0:
    lo='I';
    mid='V';
    hi='X';
    break;
  case 1:
      lo='X';
      mid='L';
      hi='C';
      break;
  case 2:
      lo='C';
      mid='D';
      hi='M';
      break;
  case 3:
      lo='M';
      break;
    }
  switch(arr[arr.length-1-i]){
    case '1': roman=lo;
    break;
    case '2': roman=lo+lo;
    break;
    case '3': roman=lo+lo+lo;
    break;
    case '4': roman=lo+mid;
    break;
    case '5': roman=mid;
    break;
    case '6': roman=mid+lo;
    break;
    case '7': roman=mid+lo+lo;
    break;
    case '8': roman=mid+lo+lo+lo;
    break;
    case '9': roman=lo+hi;
    break;
    case '0': roman='';
    break;
    }
    romArr.push(roman);
  }
  let romNum=romArr.join('');
   return romNum;
}
