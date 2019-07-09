var new_arr = []
var i = 0
function theBeatlesPlay(arr1,arr2) {
  for (i = 0; i < arr1.length; i++) {
    new_arr.push(`${arr1[i]} plays ${arr2[i]}`)
  }
   return new_arr
}


function johnLennonFacts(arr) {
  var newArr = []
var i = 0
  while (i < arr.length) {
    newArr.push(`${arr[i]}!!!`)
   i += 1
  }
  return newArr 
}

function iLoveTheBeatles(num) {
  var arr = []
  do {
    arr.push("I love the beatles!")
  } while (num < 15)
  return arr
}


