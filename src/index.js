exports.min = function min (array) {
  let minValue = 0;
  if (array && array.length > 0) {
    minValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (minValue > array[i])
            minValue = array[i];
    }
  }
    return minValue;
}

exports.max = function max (array) {
  let maxValue = 0;
  if (array && array.length > 0) {
  for (let i = 0; i < array.length; i++) {
      if (maxValue < array[i])
          maxValue = array[i];
  }
}
  return maxValue;
}

exports.avg = function avg (array) {
  let avgValue = 0;
  if (array && array.length > 0) {
    for (let i = 0; i < array.length; i++) {
        avgValue += array[i];
    }
    avgValue /= array.length;
  }
    return avgValue;
}
