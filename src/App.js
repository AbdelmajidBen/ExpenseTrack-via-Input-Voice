import React from 'react'
import Main from './components/Details/Main/Main';
import Details from './components/Details/Details';
import { Grid } from '@material-ui/core';
import useStyles from './styles'
import { PushToTalkButton,PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui';



const App = () => {
    const classes = useStyles();
  return (
    <div>
        <Grid className={classes.grid}container spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>
            <Grid items xs={12} sm={3}>
                <Details title="Income"/>
            </Grid>
            <Grid items xs={12} sm={4}>
              <Main />
            </Grid>
            <Grid items xs={12} sm={3}>
                <Details title="Expense"/>
            </Grid>
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
          
        </PushToTalkButtonContainer>
    </div>
  )
}

export default App