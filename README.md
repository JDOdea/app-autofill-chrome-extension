# AutoFill Extension

## Description
A Chrome extension that autofills application pages with saved user information such as name, email, and phone number.

## Features
- Save user details via a popup UI.
- Automatically fill forms on application pages.
- Works across all websites.

## Installation
1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the project folder.
5. The extension is now installed and ready to use!

## Usage
1. Click the extension icon to open the popup.
2. Enter your **Name, Email, and Phone Number** in the provided fields.
3. Click **Save** to store the information.
4. When visiting a form, the extension will autofill relevant fields.

## Project Structure
/autofill-extension │── manifest.json # Extension configuration │── popup.html # UI for user input │── popup.js # Handles saving user input │── content.js # Autofills form fields on websites │── background.js # Handles extension events │── icon.png # Extension icon │── README.md # Project documentation


## Permissions
- `storage`: Saves user information for autofill.
- `scripting`: Injects autofill functionality into web pages.
- `host_permissions`: Required to interact with all websites.

## Future Enhancements
- Add support for additional form fields.
- Customize autofill settings for different websites.
- Allow importing/exporting saved data.

## License
This project is licensed under the MIT License.

---

### 🚀 Happy Coding!
