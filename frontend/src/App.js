import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}hello`);
      console.log(process.env.REACT_APP_API_BASE_URL);
      
      const text = await response.text();
      setMessage(text);
    } catch (err) {
      setMessage("Error connecting to backend");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <button onClick={handleClick}>Say Hello</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
