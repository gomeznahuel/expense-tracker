import TelegramBot = require("node-telegram-bot-api");
import { manageDepositDao } from "../dao/dao";

export function handleCurrentAmountCommand(bot: TelegramBot) {
  bot.onText(/\/currentAmount/, async (msg) => {
    const chatId = msg.chat.id;

    try {
      const values = await manageDepositDao.readSheetData('deposit!D2:D2');

      if (values.values && values.values[0]) {
        const [currentAmount] = values.values[0];
        bot.sendMessage(chatId, `Current amount: ${currentAmount}`);
      } else {
        bot.sendMessage(chatId, "No current amount found.");
      }
    } catch (error) {
      console.error(error);
    }
  });
}
