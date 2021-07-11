
function getAnswer(question) {

  const relatedQuotes = quotes.filter(function(quote) {
    const matches = question.toLowerCase().split(/\s/).filter(function(word) {
      return word.length > 3 && 
        quote.quote.toLowerCase()
          .includes(word.replace(/[^\a-z]/, ''))
    })
    return matches.length > 0
  })

  if(relatedQuotes.length > 0) {
    return relatedQuotes[Math.floor(Math.random() * relatedQuotes.length)]
  } else {
    return quotes[Math.floor(Math.random() * quotes.length)]    
  }

}

const quotes = [

  {quote: "You can trivially pick up $5,000 in salary negotiations just by sucking less",
  url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/"},

  {quote: "Virtually any amount of money available to you personally is mouse droppings to your prospective employer",
  url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/"},

  {quote: "Resumes are an institution created to mean that no one has to read resumes",
  url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/"},

  {quote: "Negotiating never makes (worthwhile) offers worse",
  url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/"},

  {quote: "Never give a number",
  url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/"},

  {quote: "Of course you can",
  url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/"},

  {quote: "The price for anything (including you) is a function of the supply of it and demand for it",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "Software solves business problems",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},
