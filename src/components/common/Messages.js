import React, {Component} from 'react';

const Messages = ({ messages }) => {
    return (
        <div>
            <div className="space"></div>
                <h1>&emsp;Hello Mr. Wayne</h1>
                <br />
                <h4 style={{textAlign:'center'}}>Messages recieved</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            messages.map((message, index) => (
                                    <tr>
                                        <td>
                                            {message.name}
                                        </td>
                                        <td>
                                            {message.email}
                                        </td>
                                        <td>
                                            {message.phone}
                                        </td>
                                        <td>
                                            {message.message}
                                        </td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
    )
};

export default Messages;
