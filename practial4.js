const days =["sun" , "mon",  "tue", "wed", "thr", "fri", "sat" ];
  document.write(days+"  ");
  document.write("<br/>");
  days.shift();//.shift remove the value of first index.
  days.unshift("weeks:")//.unshift add value in the first index.
  document.write("<br/>");
  days.pop();//.pop remove the value of last index.
  days.push("Good");//.push add the value in the last index.
  days.splice(1,1,"ABC");//.splice add the value in middle......splice(in ehich index you want to enter,how many charater,character you want to entre)
  function loopArray() {
    let arr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  
    for (let index in arr) {
      document.write(arr[index]);  // Access the element using its index
    }
  }
  document.write("<br/>");
  
  loopArray();
  document.write("<br/>");
  function Array() {
    let arr = ['Item 1', 'Item 2', 'Item 3',
        'Item 4', 'Item 5'];

    for (element of arr) {
       document.write(element);
    }
}

Array();