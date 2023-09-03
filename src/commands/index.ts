import TelegramBot = require("node-telegram-bot-api");

import { handleExpenseCommand } from "./expenseCommand";
import { handleDepositCommand } from "./depositCommand";
import { handleHelpCommand } from "./helpCommand";
import { handleCurrentAmountCommand } from "./currentAmount";

export function setupCommands(bot: TelegramBot) {
  handleDepositCommand(bot);
  handleExpenseCommand(bot);
  handleCurrentAmountCommand(bot);
  handleHelpCommand(bot);
}