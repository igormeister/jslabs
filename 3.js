const square = obj => {
  obj.res.value = 0.5 * Math.abs((obj.x1.value * obj.y2.value + obj.x2.value
    * obj.y3.value + obj.x3.value * obj.y1.value) - (obj.x2.value
      * obj.y1.value + obj.x3.value
      * obj.y2.value + obj.x1.value * obj.y3.value)).toFixed(2);
}