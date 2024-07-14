import { AccessAlarm, ThreeDRotation, Home } from '@mui/icons-material'
import Button from '@mui/material/Button'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'

function App() {
  // console.log(count);

  function ModeToggle() {
    const { mode, setMode } = useColorScheme()
    return (
      <Button
        onClick={() => {
          setMode(mode === 'light' ? 'dark' : 'light')
        }}
      >
        {mode === 'light' ? 'Turn dark' : 'Turn light'}
      </Button>
    )
  }

  return (
    <>
      <ModeToggle />
      <hr />
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
