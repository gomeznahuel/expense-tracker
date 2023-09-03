import TelegramBot = require("node-telegram-bot-api");

export function handleHelpCommand(bot: TelegramBot) {
  const text = `Here are the available commands:

/deposit - Register a deposit.
/expense - Register an expense.
/currentAmount - Check the current amount.
/help - See the available commands.`;

  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      text,
      { parse_mode: "Markdown" }
    );
  });
}