import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

export default function HighLight() {
  return (
    <Grid container sm={12}>
      <Grid item sm={4} xs={12}>
        {/* <p>số ca mắc</p> */}
        <Card>
          <CardContent>
            <Typography component='p' variant='body2'>Số ca mắc</Typography>
            <Typography component='span' variant='body2'>3000</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent>
            <Typography component='p' variant='body2'>Số ca khỏi</Typography>
            <Typography component='span' variant='body2'>3000</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardContent>
            <Typography component='p' variant='body2'>Số ca tử vong</Typography>
            <Typography component='span' variant='body2'>3000</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
