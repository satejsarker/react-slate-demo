import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { Editor } from 'slate-react'
import { Value } from 'slate'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
})

class App extends Component {
  state = {
    value: initialValue,
  }
  onChange = ({ value }) => {
    this.setState({ value })
  }
  onKeyDown = (event, editor, next) => {
    if (event.key !== '&') return next()
    event.preventDefault()
    editor.insertText('and')
    console.log(event.key)
    return true
  }
  render() {
    return (
      <div className="App">
          <Header/>
        {/* <header className="App-header">
    

         
        </header> */}
        <Editor value={this.state.value} onChange={this.onChange}
        onKeyDown={this.onKeyDown} />
      </div>
    );
  }
}

export default App;
