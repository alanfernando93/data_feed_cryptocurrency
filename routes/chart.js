var express = require('express');
var router = express.Router();
var defaultResponseHeader = {
	"Content-Type": "text/plain",
	'Access-Control-Allow-Origin': '*'
};

/* GET home page. */
router.get('/config', function (req, res, next) {
  var config = {
    supports_search: true,
    supports_group_request: false,
    supports_marks: true,
    supports_timescale_marks: true,
    supports_time: true,
    exchanges: [
      {
        value: "",
        name: "All Exchanges",
        desc: ""
      },
      {
        value: "NasdaqNM",
        name: "NasdaqNM",
        desc: "NasdaqNM"
      },
      {
        value: "NYSE",
        name: "NYSE",
        desc: "NYSE"
      },
      {
        value: "NCM",
        name: "NCM",
        desc: "NCM"
      },
      {
        value: "NGM",
        name: "NGM",
        desc: "NGM"
      },
    ],
    symbols_types: [
      {
        name: "All types",
        value: ""
      },
      {
        name: "Stock",
        value: "stock"
      },
      {
        name: "Index",
        value: "index"
      }
    ],
    supported_resolutions: ["D", "2D", "3D", "W", "3W", "M", '6M']
  };
  res.send('respond with a resource');
});
router.get('/symbol_info', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/symbols', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/search', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/history', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/marks', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/timescale_marks', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/time', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/quotes', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
