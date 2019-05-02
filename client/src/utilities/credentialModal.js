import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

import {
    Dialog, 
    DialogTitle, 
    DialogActions, 
    DialogContent, 
    DialogContentText,
    Button
} from '@material-ui/core'

export const CredentialFail = () => {
    const [isOpen, setIsOpen] = useState(true)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Dialog open={isOpen} onClose={handleToggle}>
                <DialogTitle>Try Again</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Check your Username or Password
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleToggle}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export const CredentialSuccess = () => {
    const [isOpen, setIsOpen] = useState(true)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Dialog open={isOpen} onClose={handleToggle}>
                <DialogTitle>Account Created!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please click on the link below to go to the Sign-in page
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button 
                        component={NavLink} 
                        to="/signin"
                        variant="contained"
                        color="primary"
                    >Sign In Here</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}