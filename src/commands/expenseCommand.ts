import TelegramBot = require("node-telegram-bot-api");
import { getCurrentDate, getCurrentTime } from "../utils/getDate";
import { manageDepositDao } from "../dao/dao";
import { Category, Expense } from "../types/dataTypes";

export function handleExpenseCommand(bot: TelegramBot) {
  bot.onText(/\/expense/, (msg, match) => {
    const chatId = msg.chat.id;

    // Extract parameters from the command.
    const expenseParams = match.input.split(' ').slice(1).join('').split(',');

    if (expenseParams.length !== 3) {
      bot.sendMessage(chatId, 'Please provide the correct parameters (title, amount, category).');
      return;
    }

    const [title, amount, category] = expenseParams as [string, string, Category]; 
    const amountValue: number = parseInt(amount);
    const message: string = 'The amount must be a valid number.';

    if (isNaN(amountValue)) {
      bot.sendMessage(chatId, message);
      return;
    }

    const validCategories: Category[] = Object.values(Category);

    if (!validCategories.includes(category)) {
      bot.sendMessage(chatId, `The category must be a valid category. Valid categories are: ${validCategories.join(', ')}`);
      return;
    }

    const expenseObj: Expense = {
      title,
      amount: amountValue,
      category,
      date: getCurrentDate(),
      time: getCurrentTime(),
    };

    try {
      manageDepositDao.appendGoogleSheet(expenseObj, 'expenses!A2:E2');
      bot.sendMessage(chatId, 'Expense registered!');
    } catch (error) {
      bot.sendMessage(chatId, 'Error registering expense.');
    }
  });
}