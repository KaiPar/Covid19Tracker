import React from 'react';

export const Apps = (props) => (
    <div className="App">     
        <header className="App-header">                       
        <h1>List of our apps:</h1>
        </header>
        <div className="App-body">
            <table>
                <tr>
                    <td>1.</td>
                    <td><a className="App-link" href="http://quiz.hashincorp.com:5000" target="_blank" rel="noopener noreferrer">QUIZ</a></td>
                </tr>
            </table>
            <br />
            <hr />
            <br />
        </div>
    </div>
)