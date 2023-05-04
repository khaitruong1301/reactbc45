import React, { Component } from 'react'

const result = [
    { id: 1, username: 'nguyenvana', avatar: `https://i.pravatar.cc?u=1`, age: 20, phone: '09090909' },
    { id: 2, username: 'nguyenvanb', avatar: `https://i.pravatar.cc?u=2`, age: 20, phone: '09090909' },
    { id: 3, username: 'nguyenvanc', avatar: `https://i.pravatar.cc?u=3`, age: 20, phone: '09090909' },
]

export default class RenderWithMap extends Component {

    // renderUser = () => {
    //     let output = []; //[<tr></tr>,<tr></tr>]
    //     for(let user of result) {
    //         let jsxTR = <tr key={user.id}>
    //             <td>{user.username}</td>
    //             <td><img src={user.avatar} alt="..." width={50} height={50} /></td>
    //             <td>{user.age}</td>
    //             <td>{user.phone}</td>
    //         </tr>;
    //         output.push(jsxTR); // [<tr></tr>,<tr></tr>,<tr></tr>]
    //     }
    //     return output;
    // }

    renderUser = () => {
        let output = result.map((user) => {
            return <tr key={user.id}>
                <td>{user.username}</td>
                <td><img src={user.avatar} alt="..." width={50} height={50} /></td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
            </tr>;
        })

        return output;
    }

    renderCardUser = () => {

        return result.map((user, index) => {
            return <div className='col-4' key={index}>
                <div className='card'>
                    <img src={user.avatar} alt={user.username} />
                    <div className='card-body'>
                        <h3>{user.username}</h3>
                        <p>Age: {user.age}</p>
                    </div>
                </div>
            </div>
        })
    }

    render() {
        return (
            <div className='container'>
                <h3>List user</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>username</th>
                            <th>avatar</th>
                            <th>age</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUser()} {/* [<tr></tr>,<tr></tr>] */}
                    </tbody>
                </table>
                <hr />
                <h3>List member</h3>
                <div className='row'>
                    {this.renderCardUser()}
                </div>
            </div>

        )
    }
}



// console.log();
// console.error();
// console.warn('')