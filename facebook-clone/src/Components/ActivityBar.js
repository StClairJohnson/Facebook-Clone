import * as React from 'react'
import Paper from '@mui/material/Paper'

const paperStyle = {
  padding: '',
  height: '',
  width: 280,
  margin: '',
}

function ActivityBar () {

  return (
      <Paper elevation={0}  style={paperStyle} sx={{ p: 2, bgcolor: 'grey.200' }}>
      </Paper>
  );
}

export default ActivityBar;