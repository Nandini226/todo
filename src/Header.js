import React from 'react';
import { render } from '@testing-library/react';
function Header(){
return(
    <header style={headerStyle}>
        <h1>Todo List</h1>
    </header>
)


}
 const headerStyle={
    background:'black',
    padding:'10px',
    color:'white',
    textAlign:'center'
}
export default Header;