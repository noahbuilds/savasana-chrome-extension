# Savasana Translator Extension

## Overview

The Savasana Translator Extension is a simple React component that allows you to translate words or phrases into different languages. This extension is designed to work as a part of the Plasmo platform and uses the savasana API for translation.

## Getting Started

To use the Savasana Translator Extension, follow these steps:

1.  **Installation**: First, run the development server:

```bash

pnpm  dev

# or

npm  run  dev

```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit ](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash

pnpm  build

# or

npm  run  build

```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

2.  **Usage**: You can include the `IndexPopup` component in your project to enable translation functionality. Here's an example of how to use it:

```javascript
import { useState } from "react"

import IndexPopup from "./IndexPopup"

function App() {
  return (
    <div>
      <IndexPopup />
    </div>
  )
}

export default App
```

3.  **Configuration**: Before using the extension, make sure that you have set the `process.env.PLASMO_PUBLIC_API_BASE_URL` variable with the base URL of the Your API.

4.  **Functionality**:

- Enter a word or phrase in the input field.

- Select a target language from the dropdown menu.

- Click the "Get Translation" button to request the translation.

## Features

- Translation: The extension allows you to translate words or phrases into different languages.

- Language Selection: You can choose the target language from a list of available options (English, French, Spanish).

## Component Details

The `IndexPopup` component contains the following elements:

- Input field for entering the word or phrase to be translated.

- Dropdown menu for selecting the target language.

- "Get Translation" button to initiate the translation.

- Display of the translation result.

- Link to view Plasmo documentation.

## Requirements

- React.js: Make sure you have React installed in your project.

## Dependencies

This extension uses the following external dependencies:

- React: For building the user interface.

- Fetch API: For making HTTP requests to the Plasmo Public API.

## Support and Documentation

For more information and support, please visit the Plasmo documentation:

[Plasmo Documentation](https://docs.plasmo.com)

## License

This extension is provided under the [MIT License](LICENSE).

## Author

This extension is authored by Noah.

If you have any questions or need further assistance, feel free to contact me.

---

.
