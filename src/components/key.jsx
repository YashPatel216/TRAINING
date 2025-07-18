//code for keys 
import React from 'react';
function NavMenu() {
    const menuItems = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'About' },
        { id: 3, name: 'Contact' }
    ];

    return (
        <nav>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </nav>
    );
}
export default NavMenu;