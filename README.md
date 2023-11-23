Mentor-Student Coding Collaboration
Welcome to the Mentor-Student Coding Collaboration application! This web application allows a mentor (Tom) and a student (Josh) to collaborate in real-time on JavaScript code. The mentor can share code blocks, observe the student's changes in real-time, and provide guidance.

Deployment
The application is deployed using the following platforms:

Server: Render

Link to Server Deployment
Client: Netlify

Link to Client Deployment
Features
Lobby Page
The lobby page doesn't require authentication.
It displays a title "Choose Code Block" and a list of at least 4 code block items.
Each item represents a code block with a unique title (e.g., "Async Case").
Clicking on an item takes the user to the corresponding code block page.
Code Block Page
Both mentor and student users enter this page.
The first user to open the code block page is considered the mentor; subsequent users are students.
The mentor sees the chosen code block in read-only mode.
Students can view and modify the code block in real-time.
Code changes are synchronized using Socket.io for real-time collaboration.
Syntax highlighting is implemented using Highlight.js, supporting JavaScript code only.
Code Block Data Structure
Code blocks are created manually, and no external API or UI is used.
Each code block has the following fields:
title: The title of the code block.
code: A string representing JavaScript code.
