(function($, w) {
  // 初始化
  var gabin = {};
  gabin.extend = function(a, b) {
    for (key in b) {
      a[key] = b[key];
    }
    return a;
  };
} (jQuery, window));
