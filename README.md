# Node.js Task Manager

This is a simple Task Manager application built using Node.js and Express. The application allows you to create, view, edit, and rename tasks, which are stored as text files on the server.

## Features

- **Create Tasks:** You can create new tasks with a title and details. Each task is saved as a `.txt` file.
- **View Tasks:** The homepage lists all the tasks with an option to view more details about each task.
- **Edit Task Filename:** You can rename the filename of any existing task.
- **View Task Details:** Click on a task to view its full details.

## Technologies Used

- **Node.js**
- **Express.js**
- **EJS (Embedded JavaScript Templating)**
- **Tailwind CSS** (for styling)

## Project Structure

    ```plaintext
    ├── files/               # Directory where task files are stored
    │   ├── Haresh.txt
    │   ├── Mayur.txt
    │   └── Milan.txt
    ├── views/               # EJS template files for rendering UI
    │   ├── edit.ejs
    │   ├── index.ejs
    │   └── show.ejs
    ├── node_modules/        # Project dependencies (installed via npm)
    ├── index.js             # Main server file
    ├── package.json         # Project metadata and dependencies
    └── README.md            # Project documentation
    ```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/hareshvegad/Node-Task-Manager.git
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    node index.js
    ```

5. Open your browser and go to `http://localhost:3000` to use the application.

## Usage

- **Home Page:** Displays all tasks in the `files` directory. You can create a new task using the form provided.
- **View Task:** Click on "Read More" to view the details of a task.
- **Edit Task:** Click on "Edit Filename" to rename the task file.

## Dependencies

- [Express](https://expressjs.com/) - Web framework for Node.js.
- [EJS](https://ejs.co/) - Embedded JavaScript templates.

## License

This project is licensed under the ISC License.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
