function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      array.push("I am " + i + " strange loop.")
    }
    else {
      array.push("I am " + i + " strange loops.")
    }
  }
  return array
}

function doWhileLoop(n){
  do {
    console.log(n)
    n = n-1
  }
  while (n >= 0)
  return "done"
}


let i=0

function incrementVariable() {
  i = i + 1;
  return i;
}

doWhileLoop(num) {
do {
  console.log("I run once regardless.");
} while (incrementVariable() < num)
}
