import { FavoriteRounded, Home, Person } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useEffect, useState } from 'react'

function MyBottomNavigationAction() {

    const [activeBottomNavigation, setActiveBottomNavigation ] = useState<number>(0)

    useEffect(() => {

        console.log("Bottom Navigation mounted")
    }, [])
  return (
    <div>
        <BottomNavigation sx={{width: "100%", position: "fixed", bottom: "0px"}} value={activeBottomNavigation}

        onChange={(event, newActiveBottomNavigation) => setActiveBottomNavigation(newActiveBottomNavigation)}
        >
            <BottomNavigationAction label="Home" icon={<Home/>} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteRounded/>} />
            <BottomNavigationAction label="Profile" icon={<Person/>} />
        </BottomNavigation>
    </div>
  )
}

export default MyBottomNavigationAction