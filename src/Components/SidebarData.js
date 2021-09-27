import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Add",
        icon: <AddBoxIcon />,
        link: "/Add"
    },
    {
        title: "Learn",
        icon: <LibraryBooksIcon />,
        link: "/Learn"
    },    
]

export default SidebarData
