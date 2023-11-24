import React, {useEffect, useState} from 'react'
import { io } from 'socket.io-client';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierForestLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const socket = io.connect('http://localhost:3001');
//const socket = io.connect('https://moveocodingtask.onrender.com');

const CodeBlockPage = ({ codeBlock }) => {

    const [clientRole, setClientRole]= useState('');
    const [editedCode, setEditedCode]= useState('');
    const [showSmiley, setShowSmiley] = useState(false);


    useEffect(()=>{
        //when a change occur in the code block 
        setEditedCode(codeBlock.code);

        socket.emit('join_room', codeBlock.id);

        socket.on('mentor_assigned', (data) =>{
            if (data===true){
                setClientRole('mentor');
            }
            else {
                setClientRole('student');
            }
        });

        socket.on('code_update', (data) =>{ 
          //checking if im in the same code block
            if (data.room === codeBlock.id)
            {          
                setEditedCode(data.newCode)};
            });

        return () => {
            socket.emit('leave_room', codeBlock.id);
        };

    }, [codeBlock.id, codeBlock.code] );

    const handleCodeChange = (newCode) => {
        let room = codeBlock.id;
        //sending newcode to broadcast to the mentor if he is on the same code block
        socket.emit('code_update', {newCode, room})
        setEditedCode(newCode);
        if (newCode===codeBlock.solution){
            setShowSmiley(true);
        }
        else{
            setShowSmiley(false);
        }
    }

    const SmileyFace = () => (
        <div style={{ fontSize: '9em' }}>
          😀
        </div>
      );
  

  return (
    <div>
    <h1>{codeBlock.title}</h1>
    {clientRole === 'mentor' ? (
      <SyntaxHighlighter language="javascript" style={atelierForestLight}>
        {editedCode}
      </SyntaxHighlighter>
    ) : (
      <>
        <textarea
          rows="20" 
          cols="50"
          value={editedCode}
          onChange={(e) => handleCodeChange(e.target.value)}
        ></textarea>
        {showSmiley && <SmileyFace/> }
      </>
    )}
  </div>

  );
};

export default CodeBlockPage;
