
import { useState } from 'react';
const Dropdown = () => {


    const [input, setInput] = useState("")
    return (
        <div class ="menu">
            <br />
            <br />
            <input type="text" value = { input } /> Friends! &nbsp;&nbsp;
            <br />
            <br />
            Greetings:
            <br />
            <select onClick={(e) => {
                setInput(e.target.value)
            }} >

                <option value="Kem Cho" selected>Kem Cho</option>
                <option value="Namastay">Namastay</option>
                <option value="Hellloo">Hellloo</option>
                <option value="Bonjour">Bonjour</option>
                
            </select>
        </div>
    );
}

export default Dropdown;

