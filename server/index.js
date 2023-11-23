const express = require("express");
const app = express();
const http= require("http");
const {Server} = require("socket.io")
const cors = require("cors");

app.use(cors());

const server = http.createServer(app)
const io= new Server (server, {
    cors:{
        //origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

const socketRoles = {};

io.on("connection", (socket) =>{

    socket.on("join_room", (room)=>{
        socket.join(room);

        console.log(socketRoles)
        // Check if there's already a mentor assigned
        if (Object.keys(socketRoles).length === 0) {
            socketRoles[socket.id] = "mentor";
            socket.emit("mentor_assigned", true);
        } 
        if(!socketRoles[socket.id]){
            // Assign the new client as the mentor
            socket.emit("mentor_assigned", false);
        }
    });
    
    socket.on("code_update", (data)=>{
        socket.to(data.room).emit("code_update", data)
    })

    socket.on("leave_room", (room) => {
        socket.leave(room);
      });
})

app.get("/api", (req, res)=> {
    res.json({
        codeBlocks : [
            { id: 1, title: 'Async Case', code: 'const fetchData = () => { console.log("Fetching data...") }', solution: 'const fetchData = async () => { console.log("Fetching data...") }' },
            { id: 2, title: 'Promise Example', code: 'const result = fetchData().then(console.log(response)', solution: 'const result = fetchData().then(response => console.log(response))' },
            { id: 3, title: 'Event Handling', code: 'document.getElementById(myButton)', solution: 'document.getElementById("myButton")' },
            { id: 4, title: 'Callback Function', code:'function fetchData(callback) { callback("Data received") ', solution: 'function fetchData(callback) { callback("Data received") }' }
        ]
    });
});



server.listen(3001, ()=> {console.log("server is listening on port 3001")})