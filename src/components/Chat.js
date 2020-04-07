import React from 'react';

function message(props) {
    return (
    <div>
    <img className='userAvatar' src={props.avatar} alt={props.name}/>
    <h3 className='userName'>{props.name}</h3>
    <span className='time'>{props.time}</span>
    </div>
    )
}

function interaction(props) {
    let action="";
    if(props.type==='thumbs-up' || props.type==='thumbs-down'||props.type==='raise-hand'){
        action="gave a"
    }
    return (
    <div>
    <h3 className='userName grey'>{props.name}</h3>    
    <span className='action'>{action} {props.type.split('-').join(" ")}</span>
    </div>
    )
}

function Chat(props) {
    return (
        <section className='Chat'>
            {(props.type==='message')?message(props):""}
            {(props.type!=='message')?interaction(props):""}
        </section>
    );
}

export default Chat;