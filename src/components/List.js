import React from 'react';
import './List.css'

function List(props) {

    let userStatus="";
    let color="";
    if(props.onStage){
        userStatus="on stage";
        color="dot green";
    }else{
        userStatus= ((props.inSession)?"in session" : "left session");
        color=((props.inSession)?"dot green" : "dot grey");
    }

    return (
        <section className='List'>
            <img className='userAvatar' src={props.avatar} alt={props.name}/>
            <div className='userContainer'>
            <h3 className='userName'>{props.name}</h3>

            <span className={color}></span>
            <span className='stageStatus'>{userStatus}</span>

            </div>
        </section>

    );

}

export default List;