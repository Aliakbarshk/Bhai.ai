import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";



function App() {
  const [question, setquestion] = useState(0)
  const [content, setContent] = useState("");  
  const [Loading, setLoading] = useState("");  


async function generateAnswer(){
  let loading = "Loading... It might take 10 seconds sometimes"
  console.log(loading)
  setContent(loading);



  
  const response = await axios({
    url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDFiWTcQK1D_TIMDyvf_NnCpSUy387qqrE",
    method: "post",
    data: {
      contents: [
        {
          parts: [
            {
              text: `${question},"So right now i am training you ok so you have to talk in this language Hinglish. 
              Hinglish: Definition: A mix of Hindi and English.
              Rule: Write Hindi sentences using English alphabets.
              Example: Write "Tum kahan ho?" instead of using Hindi script.
              Usage: Commonly used in daily conversations and on social media.
              This way, you use English letters to write Hindi words do not use the hindi language script again do not use Hindi alphabets And you are Created And trained by ALiakbar

                              And your Name is "BHAI AI"


                            Must follow this instruction:
              ⚠️Dont use hindi letters and Alphabets or hindi script⚠️

              
              "}] }],`,
            },
          ],
        },
      ],
    },
  });

  console.log(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  
  const text = response.data.candidates[0].content.parts[0].text;
    setContent("Loading your answer... \n It might take upto 10 seconds");
  setContent(text);

  const Textfix = content.trim()

}



  return (
    <>
      <div className="body">
        <div className="container">
          <h1>Bhai ai</h1>
          <h5 className="quote">Your pocket genius</h5>
        </div>

        <div className="content">
          <p>{content}</p>
        </div>

        <div className="inpt">
          <button onClick={generateAnswer}>
            <img
              src="https://cdn-icons-png.freepik.com/512/4414/4414831.png"
              alt=""
              srcset=""
            />
          </button>
          <input
            placeholder="Who was Pythogoras"
            value={question}
            onChange={(e) => setquestion(e.target.value)}
          ></input>
          <br />
        </div>
      </div>
      <h5 className="credit">Created and trained by Aliakbar Shaikh</h5>
    </>
  );



  

}

export default App
