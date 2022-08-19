var N = strArr[0];
  var K = strArr[1];
  var min = null;

  for (var i=0; i<N.length; i++) {
    for (var j=i+1; j<=N.length; j++) {
      var sub = N.slice(i,j);
      if(cek(sub, K)) {
        if (min === null || sub.length < min.length) {
          min = sub;
        }
      }
    }
  }

  return min;

  function cek(sub, k) {
    var h = k.split('');
    for (var i=0; i<sub.length; i++) {
      var char = sub[i];
      var index = h.indexOf(char)
      if(index>-1) {
        h.splice(index, 1);
      }
    }

    if (h.length === 0) {
      return true;
    } else {
      return false
    }
  }
  