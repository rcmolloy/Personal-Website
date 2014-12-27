/*
Robert Cory Molloy
Random Quote Generator
Version 1.0
Copyright 2014
*/

// Address Quote & Author Array

var quote = [];
var author = [];

// Quote 1

quote[0] = "Success is when preparation meets opportunity";
author[0] = "Anonymous";

// Quote 2

quote[1] = "Life is 10% what happens to you and 90% how you react to it.";
author[1] = "Charles R. Swindoll";

// Quote 3 
quote[2] = "Failure is the key to success; each mistake teaches up something.";
author[2] = "Morihei Ueshiba";

// Quote 4 
quote[3] = "We keep moving forward, opening new doors, and doing new things, because we're curious and curiousity keeps leading us down new paths.";
author[3] = "Walt Disney";

// Quote 5
quote[4] = "The best revenge is massive success.";
author[4] = "Frank Sinatra";

// Quote 6
quote[5] = "There's always a light at the end of the tunnel. But because of the odd twists and turns, you sometimes just can't see it.";
author[5] = "Anonymous";


// Calculate Random Number
var calcNumb = Math.floor(Math.random() * quote.length);

// Show Quotation

var quoteFinal = quote[calcNumb];
var authorFinal = author[calcNumb];

//Script Done
