import React from 'react';
import List from './components/List.js';
import Stage from './components/Stage';
import './App.css'

class App extends React.Component {
  static defaultProps = {
    store: {
      participants: [ ],
      chatEvents : []
    },
  };


  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <div className="App-list">
          {store.participants.filter(participant=> (participant.inSession)).map(participant =>
            <List
              key={participant.id}
              name={participant.name}
              avatar={participant.avatar}
              inSession={participant.inSession}
              onStage={participant.onStage}
            />
          )}
          {store.participants.filter(participant=> (!participant.inSession)).map(participant =>
            <List
              key={participant.id}
              name={participant.name}
              avatar={participant.avatar}
              inSession={participant.inSession}
              onStage={participant.onStage}
            />
          )}
        </div>
      </main>
    );
  }
}

export default App;