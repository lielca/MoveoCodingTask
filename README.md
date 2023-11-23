# Mentor-Student Coding Collaboration
Welcome to the Mentor-Student Coding Collaboration application! This web application allows a mentor (Tom) and a student (Josh) to collaborate in real-time on JavaScript code. The mentor can share code blocks, observe the student's changes in real-time, and provide guidance.

## Deployment
The application is deployed using the following platforms:

- Server: Render
- Client: Netlify
  - [Link to Client Deployment](https://moveotasklielcaspi.netlify.app/)

## Features
### Lobby Page
Shows a list of 4 code block items: "Async Case", "Promise Example", "Event Handling" and "Callback Function".
Clicking on an item takes the user to the corresponding code block page.

## Use Case: Async Case
In this use case, both the mentor and the student will explore an example code block titled "Async Case." The mentor will view the highlighted code, while the student will interact with a textarea to modify the provided solution.

### Code Block Details
- Title: Async Case
- Code:
const fetchData = () => {
  console.log("Fetching data..."); }
- Solution:
const fetchData = async () => {
  console.log("Fetching data..."); }
  
### Mentor's View
The mentor, having chosen the "Async Case," will enter the code block page and see the provided code in read-only mode. Syntax highlighting will be applied for a better understanding.

### Student's View
The student, selecting the "Async Case," will enter the code block page and find a textarea pre-populated with the provided solution. The student has the ability to modify the code in real-time, and any changes will be immediately visible to both the student and the mentor, fostering an interactive learning experience.

## Getting Started

1. Clone the repository:
   ```bash
  git clone https://github.com/lielca/MoveoCodingTask.git
  cd MoveoCodingTask
2. Install dependencies for both the server and client:
   cd server
npm install
cd ../client
npm install
3. Start the development server for both the server and client:
In the server directory: npm start
In the client directory: npm start
4. Open your browser and visit http://localhost:3000 to access the application.
