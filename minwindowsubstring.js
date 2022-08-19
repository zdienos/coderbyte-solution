function MinWindowSubstring(strArr) { 

    var N = strArr[0];
    var K = strArr[1];
  
    var substrArr = [];
    var smallest = N;
  
    var hashK = toHash(K);
  
    for (var i=0; i<N.length; i++) {
      for (var j=N.length; j>i; j--) substrArr.push(N.slice(i,j));
    }
  
    var substrArrHash = substrArr.map(val => toHash(val));
  
    for (var i in substrArrHash) {
      var substr = substrArr[i];
      var hash = substrArrHash[i];
      var passed = charCheck(hash);
      if (passed === true && substr.length < smallest.length) smallest = substr;
    }
  
    function toHash(str) {
      var hash = {};
      for (var i=0; i<str.length; i++) 
        hash[str[i]] === undefined ? (hash[str[i]]=1) : hash[str[i]]++;
      return hash;
    }
  
    function charCheck(hash) {
      for (x in hashK) {
        if (hash[x] < hashK[x] || hash[x]===undefined) return false;
      }
      return true;
    }
  
    return smallest;
  
  }
     
  // keep this function call here 
  console.log(MinWindowSubstring(readline()));


  // source === https://coderbyte.com/solution/Min%20Window%20Substring