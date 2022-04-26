// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function App() {
  const [resultdiv,setresult] = useState(false)
  const [resultText,setText] = useState("")
  const [renderNext,setNext] = useState(0)
  const [styleText,setStyle] = useState("")
  const [marks,setMarks] = useState(0)
  const [questions,setquestion] = useState([
    {
      question: "React is also known as _____.",
      answer: [{answerOption:"ReactJS",correctOption:true},{answerOption:"js",correctOption:false},{answerOption:"Both A. and B.",correctOption:false},{answerOption:"None of these",correctOption:false}]
    },
    {
      question: "React is a _________.",
      answer: [{answerOption:"Web development Framework",correctOption:false},{answerOption:"JavaScript Library",correctOption:true},{answerOption:"jQuery",correctOption:false},{answerOption:"Web Server",correctOption:false}]
    },
    {
      question: "Which ReactJS function renders HTML to the web page?",
      answer: [{answerOption:"render()",correctOption:false},{answerOption:"ReactDOM.render()",correctOption:true},{answerOption:"renders()",correctOption:false},{answerOption:"ReactDOM.renders()",correctOption:false}]
    },
    {
      question: "JSX stands for _____.",
      answer: [{answerOption:"JSON",correctOption:false},{answerOption:"JSON XML",correctOption:false},{answerOption:"JavaScript XML",correctOption:true},{answerOption:"JavaScript and AngularJS",correctOption:false}]
    },
    {
      question: "JSX allows us to write _____.",
      answer: [{answerOption:"jQuery in React",correctOption:false},{answerOption:"Angular Code in React",correctOption:false},{answerOption:"MySQL in React",correctOption:false},{answerOption:"HTML in React",correctOption:true}]
    },
    {
      question: " What is the correct syntax to write expression in JSX?",
      answer: [{answerOption:"[ expression ]",correctOption:false},{answerOption:"{ expression }",correctOption:true},{answerOption:"{{ expression }}",correctOption:false},{answerOption:"_expression",correctOption:false}]
    },
    {
      question: "A class component must include the _______ statement.",
      answer: [{answerOption:"extends React.Component",correctOption:true},{answerOption:"extends React",correctOption:false},{answerOption:"extends Component",correctOption:false},{answerOption:"extends React.Component.All",correctOption:false}]
    },
  ])
  let renderquestion = (pera)=>{
    if(pera){
      setMarks(marks+1);
    }
    const nextQuestion = renderNext + 1;
    if (nextQuestion < questions.length) {
			setNext(nextQuestion);
		} else {
			setresult(true);
		}
  }
  return (
    <div className='container my-5'>
      {resultdiv ? <div className='text-center fs-3 border bg-primary rounded shadow text-white'>
      {(marks*100 /questions.length)>=70?<div>You are successfully Passed</div>: <div>You are failed</div> }
      <div className='fw-bold'>{(marks*100 /questions.length).toFixed(2)} %</div>
      </div>  :
        <div className='text-center rounded'>
          <div className="d-flex justify-content-between bg-info px-5 py-3 border">
              <div className='fs-5 fw-bold'>Questions:</div>
              <div className='fs-5 fw-bold '>{renderNext+1}/{questions.length}</div>
          </div>
          <div className='bg-info border'>
            <div className='fs-4 fw-bold p-2'>
            {renderNext+1}. {questions[renderNext].question}
            </div>
             </div>
             <div className='row p-2 d-flex justify-content-between'>
             {questions[renderNext].answer.map((e,i)=>{
               return(
                 <button className={('col-md-5 m-1 btn btn-outline-primary rounded-pill fs-5 text-center')} key={i} onClick={()=>{renderquestion(e.correctOption)}} >{e.answerOption}</button>
                 );
                 
                })}
        </div>
                </div>
      }

      
    </div>
  );
}

export default App;
