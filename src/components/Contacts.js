import React from 'react'

export default function Contacts(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 

    const weldone =()=>{
        alert("Thank You for your vaulable feedback.");
    }
    
    return (
        <div className="contanier" style={{color: props.mode=== 'light'?'#042743':'white'}}>
            <center>
                <h1 className="my-4" style={{color: props.mode=== 'light'?'#042743':'white'}}>Contact Us</h1>
            </center>
            <center>
                <h6>Please feel free to contact us. We appreciate your feedback in case you have a technical problem, have a suggestion for a new functionality or a change to an existing one. Contact us here: abc@gmail.com</h6>
            </center>
            <center>
                <h2 className="my-3">Feedback</h2>   
            </center>
            <div className="mb-3">         
                <textarea className="form-control" id="mybox" rows="8" placeholder="Please write your valuable feedback"></textarea>
            </div>
            <div>
                <button className="btn btn-primary mx-1 my-2" onClick={weldone}>Send Feedback</button>                   
            </div>
        </div>
    )
}
