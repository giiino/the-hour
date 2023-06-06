import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core'

export const ConfirmModal = ({ open, setOpen, url }) => {
  const handleClose = () => {
    setOpen(false)
  }

  const handleConfirm = () => {
    window.location.href = url
  }

  if (!url) {
    return null
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Security Reminder</DialogTitle>
        <DialogContent>
          Are you sure you want to navigate to an external website?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='inherit'>
            cancel
          </Button>
          <Button onClick={handleConfirm} color='primary'>
            confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
