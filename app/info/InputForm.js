"use client";
import {useState} from 'react';

const InputForm = () => {
    const [name, setName] = useState('');

    return <p>
        
    <label htmlFor="name">Enter Your Name</label>
    <input 
        type="text" 
        onChange={e => setName(e.target.value)} 
        value={name} 
        id="name" 
        name="name" 
    />
</p>
}

export default InputForm;