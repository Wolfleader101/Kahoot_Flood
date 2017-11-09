const Kahoot = require('kahoot.js');
const clients = Array(100).fill().map(function() {
    return new Kahoot
});
const token = Number(process.argv[2]);


clients.forEach(function(client, index) {
  console.log("Joined Kahoot Quiz!");
    client.join(token, "BOT" + index);
});



//IGNORE THE FOLLOWING CODE:
//FOLLOWING CODE IN TESTING




//process.stdout.write(`\n\n\n\n Please Enter Kahoot Token >>`);
 /*
 var twirlTimer = (function() {
   var P = ["\\", "|", "/", "-"];
   var x = 0;
   return setInterval(function() {
     process.stdout.write("\r" + P[x++]);
     x &= 3;
   }, 250);
 })();

 */
