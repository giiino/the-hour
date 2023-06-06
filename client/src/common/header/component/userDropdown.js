import React, { useState, useEffect } from 'react'

import { Button, Menu, MenuItem } from '@material-ui/core'
import PersonIcon from '@mui/icons-material/Person'
import styled from 'styled-components'

export const UserDropdown = ({ userName, handleLogOut }) => {
  const [show, setShow] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    const handleShow = () => {
      if (window.innerWidth < 960) {
        setShow(false)
      } else {
        setShow(true)
      }
    }
    handleShow()
    window.addEventListener('resize', handleShow)

    return () => {
      window.removeEventListener('resize', handleShow)
    }
  }, [])

  if (!show) {
    return null
  }

  return (
    <div style={{ marginLeft: '15px' }}>
      <StyledButton
        disableRipple
        disableFocusRipple
        disableElevation
        onClick={handleOpenMenu}
      >
        <span>{userName}5555555</span>
        <PersonIcon />
      </StyledButton>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>My Favorite</MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu()
            handleLogOut()
          }}
        >
          Log out
        </MenuItem>
      </StyledMenu>
    </div>
  )
}

const StyledButton = styled(Button)`
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 90px;
    padding-top: 3px;
    margin-right: 10px;
  }
  > * {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  }
`

const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    top: 55px !important;
  }
`
