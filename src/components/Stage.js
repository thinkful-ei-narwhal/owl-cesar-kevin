import React from 'react';

function Stage(props) {
  let participants = props.participants.filter((participant =>
    participant.onStage === true));
  return (
    <div className='stage'>
      {participants.map((participant) => 
        <GenerateMainStage
          key={participant.id}
          avatar={participant.avatar}
          name={participant.name}
        />
      )}
    </div>
  )
}

function GenerateMainStage() {
  return (
    <div className='individual-view'>
      <img className = 'avatar' src = {prop.avatar} />
      <section>
        <p className = 'name'>{props.name}</p>
        <div className = 'volume-bar'></div>
        <button type = 'button' className = 'mute-button'></button>
      </section>
    </div>
  )
}

export default Stage;