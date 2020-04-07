import React from 'react';
import Stage from './components/Stage';

class App extends React.Component {
  static defaultProps = {
    store: {
      participants: [],
      chatEvents: {}
    }
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        
      </main>
    );
  }
}

export default App;