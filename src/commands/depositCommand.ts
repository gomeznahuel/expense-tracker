import TelegramBot = require("node-telegram-bot-api");
import { manageDepositDao } from "../dao/dao";
import { getCurrentDate } from "../utils/getDate";
import { Deposits } from "../types/dataTypes";

export function handleDepositCommand(bot: TelegramBot) {
  bot.onText(/\/deposit/, (msg, match) => {
    const chatId = msg.chat.id;

    // Extract parameters from the command.
    const depositParams = match.input.split(" ").slice(1).join("").split(",");

    if (depositParams.length !== 2) {
      bot.sendMessage(chatId, "Please provide the correct parameters (title, amount).");
      return;
    }

    const [title, amount] = depositParams;
    const amountValue = parseFloat(amount);

    if (isNaN(amountValue)) {
      bot.sendMessage(chatId, "The amount must be a valid number.");
      return;
    }

    if (amountValue <= 0) {
      bot.sendMessage(chatId, "The amount must be greater than 0.");
      return;
    }

    if (title === "") {
      bot.sendMessage(chatId, "The title must not be empty.");
      return;
    }

    const depositObj: Deposits = {
      date: getCurrentDate(),
      title,
      amount: amountValue,
    };

    try {
      manageDepositDao.appendGoogleSheet(depositObj, "deposit!A2:C2");
      bot.sendMessage(chatId, "Deposit registered!");
    } catch (error) {
      bot.sendMessage(chatId, "Error registering deposit.");
    }
  });
}
