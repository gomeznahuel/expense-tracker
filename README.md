## Telegram Bot: Expense Tracker

This is a TypeScript project a Telegram bot using the `node-telegram-bot-api` library.

### Dependencies
- `node-telegram-bot-api`
- `dotenv`
- `googleapis`

### Usage

1. Install the required dependencies using `npm install`, `yarn install` or your preferred package manager.
2. Create a `.env` file and add complete the lines with the required information. You can use the `.env.example` file as a template.
3. Run the bot using `npm run start`, `yarn start` or your preferred package manager.

### Commands

- `/start` - Starts the bot.
- `/help` - Shows the help message.
- `expenseCommand` - Adds an expense to the database.
- `depositCommand` - Adds a deposit to the database.

### Google Sheets API Integration Guide

To seamlessly integrate the Google Sheets API into your project, follow these step-by-step instructions:

1. **Enable Google Sheets API:** Start by enabling the Google Sheets API within the Google Cloud Platform Console.

2. **Create a Service Account:** Generate a service account and obtain the necessary credentials in the form of a JSON file.

3. **Prepare JSON File:** Once you have the JSON file, condense it into a single-line format for ease of use.

4. **Store Credentials:** Safeguard the reformatted JSON file by storing it in your project's `.env` file.

5. **Sheet ID Configuration:** Inside the `.env` file, include the Spreadsheet ID.

6. **Grant Permissions:** Add the email address associated with the service account to the desired spreadsheet to enable access.

7. **Share the Spreadsheet:** Lastly, ensure the spreadsheet is shared with the aforementioned service account email address to facilitate seamless collaboration.

Following these steps will enable you to effectively utilize the Google Sheets API in your project.