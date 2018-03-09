function calc(x, y, k, a, b) {

	// validate parameters
  
  if (!Array.isArray(a) || !Array.isArray(b) || (a.length == 0) || (b.length == 0) ) {
  	return false;
  }
  
  // assume that length of both array is same
  
  var N = a.length; // length of array
  
  var x1 = 0, y1 = 0; // initial values 
  
  var cakes = []; // array of cakes
  
  var cake; 
  
  for (var i = 0; i<= N; i ++) {
  
   if (i == N ) {
   	b[i] = y
   }
   			for ( var j = 0; j <= N; j ++) {
      if (j == N) {

      	cake  = (x - x1) * ( b[i] - y1);
        cakes.push(cake);
        x1 = 0;

      } else {

        cake = (a[j] - x1) * (b[i] - y1);

        cakes.push(cake);

        x1 = a[j];
      }
    }
    
    y1 =  b[i];
  }
  
  cakes.sort(function(a, b) {
    return b - a;
  });
  console.log(cakes);
  console.log(cakes[k-1]);
  
}

calc( 35, 38,  15, [1,3, 6, 11, 24, 26,32], [1,5, 8,13,16,22,26]);
