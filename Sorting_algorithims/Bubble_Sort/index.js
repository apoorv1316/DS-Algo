function bubbleSort(arr) {
  var noSwap;
  for (var i = arr.length; i > 0; i--) {
    noSwap = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}
// ES6 version
const bubbleSort = (arr) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

console.log(bubbleSort([5, 1, -2, 56, -40, 10]));
