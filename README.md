# Note-Taking App

This project is a simple note-taking application built using React.js and styled with Bootstrap CSS. The app allows users to create, edit, and delete notes. It also includes a dark mode toggle to switch between light and dark themes.

## Features

- **Create Notes**: Add new notes with a title and content.
- **Edit Notes**: Edit the title and content of existing notes.
- **Delete Notes**: Remove notes from the list.
- **Dark/Light Mode**: Switch between dark and light themes using a toggle switch.
- **Responsive Design**: The app is responsive and works well on different devices and screen sizes.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Bootstrap CSS**: A CSS framework for building responsive, mobile-first sites.
- **LocalStorage**: Browser's local storage to store notes data.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Project Structure

- `src/`: The source code directory.
  - `components/`: Contains the React components (`NoteForm.js`, `NoteList.js`).
  - `App.js`: The main component that holds the state and renders the application.
  - `style.css`: The main stylesheet.
  - `index.js`: Entry point for the React application.

## Code Overview

### `App.js`

This file contains the main component that manages the state and renders the `NoteForm` and `NoteList` components. Key functions include:

- `addNote`: Adds a new note to the state.
- `editNote`: Edits an existing note in the state.
- `deleteNote`: Deletes a note from the state.
- `toggleDarkMode`: Toggles between dark and light themes.

### `NoteForm.js`

This component renders a form for creating and editing notes. It includes logic to handle form submissions and updates the state based on the input.

### `NoteList.js`

This component renders a list of notes. Each note includes "Edit" and "Delete" buttons. The "Edit" button sets the note to be edited, while the "Delete" button removes the note from the list.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Additional Create React App Sections

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contributing

If you want to contribute to this project, please fork the repository and create a pull request with your changes. Contributions are welcome!

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgements

- [React.js](https://reactjs.org/)
- [Bootstrap CSS](https://getbootstrap.com/)