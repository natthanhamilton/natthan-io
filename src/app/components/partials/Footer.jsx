import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import LazyLoad from 'react-lazy-load';

import locale from '../../../assets/locales/en-US/translations';

const Footer = (props) => {
	const { classes, t } = props;

	const list = locale.badges.map((tool, i) => {
		const name = t(`badges.${i}.tool`);
		return (
			<LazyLoad key={name} className={classes.lazyLoad}>
				<Tooltip title={name} placement="bottom">
					<a href={tool.link}>
						<img
							className={classes.badge}
							src={tool.image}
							alt={name}
						/>
					</a>
				</Tooltip>
			</LazyLoad>
		);
	});

	return (
		<Grid className={classes.root} container spacing={24}>
			<Grid className={classes.badges} item xs={12}>
				{list}
			</Grid>
			<Grid className={classes.git} item xs={12}>
				<a
					className={classes.gitLink}
					target="_new"
					href="https://github.com/natthanhamilton/natthan-io">
					<Button color="primary" variant="raised">
						{t(`github.linkText`)}
					</Button>
				</a>
			</Grid>
		</Grid>
	);
};

Footer.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func.isRequired,
};
Footer.defaultProps = {
	classes: {},
};

// Theme
const styles = (theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing.unit * 5,
		paddingLeft: 0,
		paddingRight: 0,
	},
	git: {
		textAlign: 'center',
	},
	gitLink: {
		textDecoration: 'none',
		padding: '0 5px',
	},
	badges: {
		textAlign: 'center',
	},
	badge: {
		padding: 5,
	},
	lazyLoad: {
		display: 'inline-block',
	},
});

export default withStyles(styles)(withTranslation()(Footer));
