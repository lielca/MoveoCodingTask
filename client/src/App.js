import React, {useEffect, useState} from 'react'
import CodeBlockPage from './CodeBlockPage'; // Import the new component

function App() {

  const [codeBlocks, setCodeBlocks]= useState([]);
  const [selectedCodeBlock, setSelectedCodeBlock] = useState(null); 

  useEffect(() => {
    //whenever the website is uploading we fetch the codeblocks data from the server
    const fetchData = async () => {
        try {
          const response = await fetch("https://moveocodingtask.onrender.com/api");
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
    //when clicking on a code block it's content appears on the screen
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
