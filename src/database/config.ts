const { google } = require("googleapis");

// Function to authenticate and create a Google Sheets client
export async function getGoogleSheetsClient(clientEmail: string, privateKey: string) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const client = await auth.getClient();
  return client;
}

// Function to read data from a Google Sheet
export async function readSheetData(client: string, spreadsheetId: string, range: string) {
  const sheets = google.sheets({ version: "v4", auth: client });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId, range,
    });
    return response.data;
  } catch (error) {
    console.error("Error reading sheet data:", error);
    throw error;
  }
}

// Function to append data to a Google Sheet
export async function appendDataToSheet(client: string, spreadsheetId: string, range: string, {...obj}) { {
  const sheets = google.sheets({ version: 'v4', auth: client });

  try {
    const resource = {
      values: [Object.values(obj)],
    };

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource,
    });

      return response.data;
  
    } catch (error) {
      console.error("Error appending data to sheet:", error);
      throw error;
    }
  }
}