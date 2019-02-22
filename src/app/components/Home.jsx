import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Layout, Portfolio, SkillsBreakdown, Skills, Experience, Person, About, Education, Footer } from './partials';

const Home = props => {
  const { classes } = props;

  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={5}>
          <Person />
          <About />
          <Skills />
        </Grid>

        <Grid item xs={12} sm={7}>
          <Experience />
          <Education />
        </Grid>

        <Grid item xs={12}>
          <Portfolio />
        </Grid>

        <SkillsBreakdown />
      </Grid>
      <Footer />
    </Layout>
  );
};

Home.propTypes = {
  classes: PropTypes.object
};
Home.defaultProps = {
  classes: {}
};

// Theme
const styles = () => ({
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
  iconLarge: {
    width: 25,
    height: 25
  },
  iconSmall: {
    width: 10,
    height: 10
  },
  section: {
    padding: '10px 0 10px 0',
    '@media (min-width: 960px)': {
      paddingLeft: '40px'
    }
  }
});

export default withStyles(styles)(Home);
