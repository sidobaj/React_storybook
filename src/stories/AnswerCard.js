import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './answercard.css'
import axios from "axios"
import { Vote } from './Vote';
import { AcceptAnswer } from './AcceptAnswer';
// import PropTypes from 'prop-types';

export const AnswerCard = ({
  backgroundColor = "#f8f8f8",
  display= "flex",
  fontfamily = "serif", 
  size= "high"|"medium"|"low"
  }) =>{
    
    const [items, setItems] = useState([{
      id:"",
      user_img_src: "",
      question_type:"",
      name: "",
      designation: "",
      answered_date: "",
      last_modified: "",
      answer: "",
      img_src:"",
      comment:[]
    }]);

    const [visible, setVisible] = useState(3);

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    useEffect(()=>{
      getData();
    },[])
    
    const getData = async (length) =>{
      console.log("length",length)
      const response = await axios.get("http://localhost:3003/users");
      // const data = await response.json();
      console.log(response.data)
      setItems(response.data)
    }
    
    

    // const [comment, setComment] = useState([])
    console.log(date,time)

    
    const showMoreItems = () =>{
        setVisible((preValue)=> preValue + 3)
    }
    console.log("value", items)
    return (
        <>
        {items.map((cItem, index) =>{
          console.log(cItem)
          return (
            <>
          <div className="container"
           style={backgroundColor && {backgroundColor} ||{fontfamily}}
           key= {index}>
          <div>
          <img src={cItem.user_img_src} className="user"/>
          <text className="top_side">{cItem.question_type}</text><br />
          <h className="user_name"><b>{cItem.name}</b><span className="user_details"> | {cItem.designation}</span></h>
          </div>
          <div className="main_body_usser">
            <p className="update_time">Answered: <b><span>{date}</span></b>  Last modified: <b><span>{time}</span></b></p>
            
          </div>
          <div className="answer_container">
            <div className="icon_container"><Vote/> <AcceptAnswer/> </div>
            <div className="paragraph_container"><p className="answer_details">{cItem.answer}</p></div>
          </div>
          <div className="feature">
          <i className="fa fa-share-alt update_share"><span className="update_share_text">Share</span></i>
          <i className="fa fa-edit"><span className="update_edit_text">Edit</span></i>
          <i className="fa fa-user-plus"><span className="update_fquestion_text">Follow Question</span></i>
          <button className="user_button_comment">Comment</button>
          </div>
          <div className="user_comment">
            {cItem.comment.slice(0,visible).map((cValue, index) => {
              return (<>
              
              <p>{cValue}</p><hr/>
              </>)
            })}
            </div>
            <a className="show_comment" onClick={showMoreItems}>{cItem.comment.length - visible < 0 ? <>Show Less Comment</> : <>Show {cItem.comment.length - visible} More Comments</>} </a>
            {/* <h3>this answer is not valid</h3><hr/> */}
            
        </div><hr />
            </>
          )
        })}
        {/* <div className="container"
           style={backgroundColor && {backgroundColor}}>
          <div>
          <img src="http://placehold.it/400x200" className="user"/>
          <text className="top_side">CRYPTO</text><br />
          <h className="user_name"><b>Ankit Gupta</b><span className="user_details"> | Lead Developer at Bis Research</span></h>
          </div>
          <div className="main_body_usser">
            <p className="update_time">Answered: <b><span>{date}</span></b>  Last modified: <b><span>{time}</span></b></p>
            <p className="answer_details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="feature">
          <i className="fa fa-share-alt update_share"><span className="update_share_text"> share</span></i>
          <i className="fa fa-edit"><span className="update_edit_text"> edit</span></i>
          <i className="fa fa-user-plus"><span className="update_fquestion_text"> Follow Question</span></i>
          <button className="user_button_comment">Comment</button>
          </div>
          <div className="user_comment">
            {comment.slice(0,visible).map((cValue, index) => {
              return (<>
              
              <p>{cValue}</p><hr/>
              </>)
            })}
            </div>
            <a className="show_comment" onClick={showMoreItems}>Show {comment.length - visible} More Comments</a>
            <h3>this answer is not valid</h3><hr/>
            
        </div> */}
        </>
    )
}