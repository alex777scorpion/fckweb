import React, { Component } from 'react';
import './App.css';
import './TextBox.css'
import './Button.css'
class App extends Component {
    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <p className="p1">
                        First Name:
                    <input type="Text" className="defaultTextBox advancedSearchTextBox" />
                    </p>
                </header>
                <header className="Down">
                    <p className="p">
                        Second Name:
                        <input type="Text" className="defaultTextBox advancedSearchTextBox" />
                    </p>
                </header>
                <header className="App-header">
                    <p className="buttonRight">
                        <button className="button">Submit</button>
                    </p>
                </header>
            </div>
        )
    }
}

export default App;