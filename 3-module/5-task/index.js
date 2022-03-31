function getMinMax(str) {
 let arr = str.split(' ').filter(item => isFinite(item)).map(item => Number(item));
 let result =  {
      min : Math.min.apply(null, arr),
      max : Math.max.apply(null, arr)
    };
    return result
}
