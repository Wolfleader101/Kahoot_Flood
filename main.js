
const {token, Names, Amount} = require('./config.json')
const Kahoot = require("kahoot.js-updated");
const clients = Array(Amount).fill().map(() => {
  return new Kahoot;
});




clients.forEach((client, index) => {
  client.join(token, Names + index);
});

clients.forEach(client => {
  client.on("Joined", () => {
    console.log("I joined the Kahoot!" + client.clientId);
  });
})