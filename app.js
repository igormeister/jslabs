var express = require('express');
var app = express();

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const dist = (x, y, z) => {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2)).toFixed(3);
}

app.post('/', function (req, res) {
  res.json({
    "result": dist(req.body.x, req.body.y, req.body.z)
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});