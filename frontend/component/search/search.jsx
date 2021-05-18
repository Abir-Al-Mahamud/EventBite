import React, { useEffect, useState } from 'react';
import { useCombobox } from 'downshift';
import { Input } from 'antd';

function Search() {
    const [inputItems, setInputItems] = useState([])
    const [users, setUsers] = useState([])
    const [singleUser, setSingleUser] = useState('')

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
    }, [])

    const {isOpen, getMenuProps, getInputProps, getComboBoxProps, highlightedIndex, getItemProps} = useCombobox({
        items: inputItems,
        onInputValueChange: ({inputValue}) => {
            setInputItems(
                users.filter((item) => 
                item.name.toLowerCase().startsWith(inputValue.toLowerCase())
            )
        )
    
        }
    })

    return (
        <div>
            <h2>Current User: {singleUser}</h2>
            <div {...getComboBoxProps()}>
                <Input {...getInputProps()}
                placeholder="Search"
                enterButton="Search"
                size="large"
                />
            </div>
            <ul {...getMenuProps()}>
                {isOpen && 
                    inputItems.map((item, index) => (
                        <span key={item.id} {...getItemProps({item, index})} onClick={() => setSingleUser(item.name)}>
                            <li style={highlightedIndex === index ? {background: "#ede"} : {}}>
                                <h4>{item.name}</h4>
                            </li>
                        </span>
                    ))
                }
            </ul>
        </div>
    )
}

export default Search;