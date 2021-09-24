// Create a CLI app which would detect fake news. This app will take news as input and then source. If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?


// IMP NOTE:- This program is RUN  and OPEN on repelit.com . i share a link of my repel on  bottom of this promgram

var readlineSync = require('readline-sync')

var chalk = require("chalk")



var news = readlineSync.question(chalk.blue("enter your news "))
var source = readlineSync.question(chalk.yellow("enter your source "))


if(source.toLowerCase()=== "facebook" || source.toLowerCase() === "whatsapp" || source.toLowerCase() ==="telegram") {

console.log(chalk.red( "Don't believe things on FB and Whatsapp"))
  
}

//  my live repel link :--   https://replit.com/@ShubhamKumar55/sample-question#index.js