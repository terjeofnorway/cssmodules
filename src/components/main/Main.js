
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import UserGreeting from '../userGreeting/UserGreeting';
import logo from './logo.svg';
import main from './Main.css';

class App extends Component {
  constructor() {
    super();
    this.state = { error: false, isExtraInformationVisible: false };
  }

  showExtraInformation = () => {
    this.setState({ isExtraInformationVisible: true });
  };

  render() {
    const { error, isExtraInformationVisible } = this.state;
    const { showExtraInformation } = this;
    if (error) { return <div>Error</div>; }

    return (
      <div className={main.Main}>
        <Grid container spacing={16}>
          <Grid item xs={12} className={main.MainHeader}>
            <img src={logo} className={main.MainLogo} alt="logo" />
            <h1 className={main.MainTitle}>Welcome to React</h1>
            <button type="button" onClick={showExtraInformation}>Tell me more!</button>
          </Grid>
          <Grid item xs={6}>
            <UserGreeting />
            <div className={main.MainIntro}>
              Welcome to the worlds spiffies webapp.
              { isExtraInformationVisible && <div>Some extra information goes here.</div>}
            </div>
          </Grid>
          <Grid item xs={6}>
            <UserGreeting />
            <Card>
              <CardContent>
                <Typography color="textSecondary">
                  Phrase of the Day
                </Typography>
                <Typography variant="headline" component="h2">
                  heeey, how are you?
                </Typography>
                <Typography color="textSecondary">
                  adjective
                </Typography>
                <Typography component="p">
                  &quot;please don&apos;t talk to me&quot;
                  <br />
                  {'(thin lipped smile)'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>

    );
  }
}

export default App;
