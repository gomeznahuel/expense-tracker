import { appendDataToSheet, getGoogleSheetsClient, readSheetData } from "../database/config";
import { Range } from "../types/dataTypes";
import dotenv = require('dotenv');

dotenv.config();

const clientEmail = process.env.CLIENT_EMAIL;
const privateKey = process.env.PRIVATE_KEY;
const spreadsheetId = process.env.SPREADSHEET_ID;

class ManageDepositDao {
  public async readSheetData(range: Range) {
    const client = await getGoogleSheetsClient(clientEmail, privateKey);
    const sheetData = await readSheetData(client, spreadsheetId, range);
    return sheetData;
  }

  public async appendGoogleSheet({ ...obj }, range: Range) {
    const client = await getGoogleSheetsClient(clientEmail, privateKey);
    const sheetData = await appendDataToSheet(client, spreadsheetId, range, { ...obj });
    return sheetData;
  }
}

const manageDepositDao = new ManageDepositDao();
export { manageDepositDao };