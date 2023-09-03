import TelegramBot = require("node-telegram-bot-api");
import dotenv = require("dotenv");
import { setupCommands } from "./commands";

// Load environment variables from the .env file
dotenv.config();

// Get the Telegram bot token from environment variables
const TOKEN = process.env.TELEGRAM_TOKEN;

async function main() {
  try {
    if (!TOKEN) throw new Error("Telegram token not found in environment variables.");

    // Create a bot instance
    const bot = new TelegramBot(TOKEN, { polling: true });

    // Check if the bot instance is null.
    if (bot == null) throw new Error("Bot is null");

    // Setup all the commands
    setupCommands(bot);

    // Log bot is running
    console.log("Bot is running...");
  } catch (error) {
    console.error(error.message);
    process.exit(1); // Terminate the application with an error code
  }
}

main();