import React, {useEffect, useState} from 'react'
import { io } from "socket.io-client";
import CodeBlockPage from './CodeBlockPage'; // Import the new component


const socket = io.connect('http://localhost:3001');
function App() {

  const [codeBlocks, setCodeBlocks]= useState([]);
  const [selectedCodeBlock, setSelectedCodeBlock] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/api");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setCodeBlocks(data.codeBlocks);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
  }, []);


  const handleCodeBlockClick = (cb)=>{
    setSelectedCodeBlock(cb);
  };

  return (
    <div>
      
      <h1>Choose code block</h1>
      <ul>
        {codeBlocks.map((cb) => (
          <li key={cb.id} onClick={() => handleCodeBlockClick(cb)}>
            {cb.title}
          </li>
        ))}
      </ul>

      {selectedCodeBlock ? (
        <CodeBlockPage codeBlock={selectedCodeBlock}/>
      ) : null }

    </div>
  )
}

export default App
