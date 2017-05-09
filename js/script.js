// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//generate a randomColor
function getRandomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var color = "rgb(" + red + "," + green + "," + blue + ")";
  return color;
}
  

// A variable to store already viewed quotes
var viewedQuotes = [];

// A function that selects a random quote object from the quotes array
function getRandomQuote(){  
  
  // Create a random number between 0 and quotes.length, that will act as an index
  var randomNumber = Math.floor(Math.random() * quotes.length);    
  
  // This uses the randomNumber index to splice the corresponding element from the quotes array, 
  // and stores it in the splicedQuote variable
  var splicedQuote = quotes.splice(randomNumber, 1)[0];
  viewedQuotes.push(splicedQuote);    // pushes the splicedQuote into the viewedQuotes array
  
  // Check if quotes array is empty, if so restore its content by assigning viewedQuotes to it
  // restore the viewedQuotes array to its original value [];
  if (quotes.length === 0) {
    quotes = viewedQuotes;
    viewedQuotes = [];
  }
  
  return splicedQuote;
} // end getRandomQuote() 

// A function that prints the quote to the document
function printQuote(){
  // Call the getRandomQuote function and assign it to randomQuote variable 
  var randomQuote = getRandomQuote();

  // Construct the quote string
  var quoteText = '<p class="quote">' + randomQuote.quote + '</p>';
  quoteText += '<p class="source">' + randomQuote.source;
    // Check if citation and year properties exist, if they do, concat them
    if (randomQuote.citation !== undefined){
      quoteText += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if (randomQuote.year !== undefined) { 
      quoteText += '<span class="year">' + randomQuote.year + ' </span>';
    }
  quoteText += '</p>';

  quoteText += '<p class="tags">tags: ' + randomQuote.tags.join(", ") + '</p>';
  
  // Print the quote
  document.getElementById('quote-box').innerHTML = quoteText;
  
  // Change background color
  document.body.style.backgroundColor = getRandomColor();     
}

//This line executes the printQuote function every 10 seconds automatically
setInterval(printQuote, 10000);