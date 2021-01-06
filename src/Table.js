import React, {Component } from 'react';
class Table_had extends Component{
    render(){
    return(
        <table>
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Roll No</th>
                    <th>Class</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dikshita</td>
                    <td>385</td>
                    <td>SYIT</td>
                </tr>
                <tr>
                    <td>Nikita</td>
                    <td>386</td>
                    <td>SYCS</td>
                </tr>
            </tbody>
        </table>
    )
    }

}

const Table = () => {
    return(

        <h1>This is function.</h1>
    );

}

export default Table_had;
export {
    Table
}