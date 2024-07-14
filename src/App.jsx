import { AccessAlarm, ThreeDRotation, Home } from '@mui/icons-material'
import Button from '@mui/material/Button'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
function App() {
  // console.log(count);

  return (
    <>
      <span>helloworld</span>

      <Typography variant="body2" color="text.secondary">Test Typography</Typography>

      <Button variant="contained">Hello world</Button>
      <Button variant="outlined">Hello world</Button>
      <Button variant="text">Hello world</Button>
      <br />
      <AccessAlarm />
      <ThreeDRotation />
      <br />
      <Home color="primary" />
      <Home color="secondary" />
      <Home color="success" />
      <Home color="action" />
      <Home color="disabled" />
      <Home sx={{ color: pink[500] }} />
    </>
  )
}

export default App
