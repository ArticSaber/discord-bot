require("dotenv").config();

const DiscordMusicBot = require("./lib/DiscordMusicBot");
const { exec } = require("child_process");

if (process.env.REPL_ID) {
  console.log(
    "Replit system detected, initiating special `unhandledRejection` event listener."
  );
  process.on("unhandledRejection", (reason, promise) => {
    promise.catch((err) => {
      if (err.status === 429) {
        console.log(
          "something went wrong whilst trying to connect to discord gateway, resetting..."
        );
        exec("kill 1");
      }
    });
  });
}

const client = new DiscordMusicBot();

console.log("Make sure tno fill in the config.js before starting the bot.");

client.on("ready", () => {
  console.log("Bot ready");
});
module.exports = client;
