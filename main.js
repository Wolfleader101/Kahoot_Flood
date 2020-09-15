const Kahoot = require("kahoot.js-updated");
const clients = Array(60).fill().map(() => {
  return new Kahoot;
});
const token = Number(process.argv[2]);



clients.forEach((client, index) => {
  client.join(token, "BOT" + index, "kahoot.js");
});

clients.forEach(client => {
  client.on("Joined", () => {
    console.log("I joined the Kahoot!" + client.clientId);
  });
})