import React from "react";
import { useState } from "react";

function Card() {
    const [algo, setAlgo] = useState(false)
    const [where, setWhere] = useState(false)
    
    const onChangeWhen = () =>{
      console.log('entro')
      setAlgo(!algo)
    }
    const onChangeWhere = () =>{
      console.log('entro')
      setWhere(!where)
    }
    
      return (
        <div className="card-container">
        <span className="pro">CASLA</span>
        <img src="https://ca.slack-edge.com/E0298TXCEJJ-U02CVQ944F3-99344737ecf9-192" alt="user"/>
        <h3>Soy el nau</h3>
        
        <p>Intento de <br/> front-end developer</p> full snack
    
        <h6>Vas a venir a mi cumple?</h6>
    
        <div className="buttons" >
            {/* <button className="when" onclick="location.href='https://www.youtube.com/watch?v=W9Wt7cBm75A&ab_channel=elpipisl'"> */}
           { !algo ? <button className="when" onClick={onChangeWhen}>
                CUANDO?
                <svg>
                  <rect x="0" y="0" fill="none"></rect>
                </svg>  
            </button> :
            <h3>Sabado 3 de Septiembre a las 21HS</h3>}
        <div className="buttons" >
        { !where ?
              <button className="where" onClick={onChangeWhere}>
                  DONDE?
                  <svg>
                    <rect x="0" y="0" fill="none"></rect>
                  </svg>  
              </button>:
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012.2692517566896!2d-64.17207976085541!3d-31.418139023919426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a3d1e466f771%3A0xc20de460093bb7f0!2zQ0FNUEnDkUEg4oCTIEJpcnJhICYgQW1pZ29z!5e0!3m2!1ses!2sar!4v1661861762115!5m2!1ses!2sar" width="300" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
        </div>
        <div className="skills">
            <h6>Mis skills</h6>
            <ul>
                <li>Viernes de Milanesa</li>
                <li>Coincido</li>
                <li>Gane la libertadores mas facil</li>
                <li>Kekekeke</li>
                <li>Papa papa</li>
                <li>Chess</li>
                <li>Memes</li>
                <li>Es un monton</li>
            </ul>
        </div>
    </div>
    </div>
      );
    }

export default Card;