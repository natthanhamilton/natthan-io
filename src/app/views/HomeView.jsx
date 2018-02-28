import React from 'react';
import PropTypes from 'prop-types';

import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Snackbar from 'material-ui/Snackbar';

import GroupWork from 'material-ui-icons/GroupWork';

import {Layout, Portfolio, PortfolioModal, SkillsBreakdown, Skills, Experience, Person, About, Education, Footer} from './partials';
import locale from '../../assets/locale/en_us';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0
  },
  container: {
    margin: 0,
    padding: 12,
    width: '100% !important'
  },
  divider: {
    margin: '10 0'
  },
  iconLarge: {
    width: 25,
    height: 25
  },
  iconSmall: {
    width: 10,
    height: 10
  },
  section: {
    paddingLeft: '40px !important'
  },
  padding: {
    paddingTop: 2.5,
    paddingBottom: 2.5
  },
  snackbar: {
    color: '#fff'
  }
});

const HomeView = (props) => {
  const c = props.classes;

    return (<Layout>
      <Paper>
        <Grid container className={c.root} spacing={0} alignItems="flex-start" direction="row" justify="flex-start">
          <Grid item xs={12} sm={5}>
            <Person c={c} />
            <About c={c} />
            <Skills c={c} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Experience c={c} />
            <Education c={c} />
          </Grid>

          <Grid item xs={12}>
            <Portfolio c={c} />
          </Grid>

          <SkillsBreakdown c={c} />
        </Grid>
      </Paper>
      <Footer />
      {/*}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={s.snackbar}
        autoHideDuration={20000}
        onClose={closeSnackbar()}
        message={<Typography className={c.snackbar} variant="body1">Hello! Thank you for visiting my digital home! This site is currently under active development and content curation. If you would like to connect, please visit my LinkedIn. Thanks!</Typography>}
        action={<Button color="primary" onClick={closeSnackbar()}>Close</Button>}
      />
      */}
      <PortfolioModal />
    </Layout>);
}

HomeView.propTypes = {
  classes: PropTypes.object
}
HomeView.defaultProps = {
  classes: {}
};
export default withStyles(styles)(HomeView);
