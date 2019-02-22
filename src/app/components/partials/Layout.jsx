import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';

import locale from '../../../assets/locales/en-US/translations';

const Layout = (props) => {
	const { children, classes, t } = props;

	const skillsExperienced = t(`skillsExperienced`).map((d) => d);
	const skillsFamiliar = t(`skillsFamiliar`).map((d) => d);
	const skillsLearning = t(`skillsLearning`).map((d) => d);

	return (
		<Grid
			container
			className={classes.root}
			alignItems="flex-start"
			justify="center">
			<Grid item className={classes.container} xs={12} sm={10} md={8}>
				{children}
			</Grid>

			<Helmet>
				<title>{t('site.title')}</title>
				<meta
					name="description"
					content={
						skillsExperienced + skillsFamiliar + skillsLearning
					}
				/>
				<meta name="author" content={t('site.author')} />

				<meta property="og:title" content={t('seo.og.title')} />
				<meta
					property="og:description"
					content={t('seo.og.description')}
				/>
				<meta property="og:url" content={t('seo.og.url')} />
				<meta property="og:image" content={t('seo.og.image')} />

				<meta name="twitter:card" content={t('seo.twitter.card')} />
				<meta name="twitter:site" content={t('seo.twitter.site')} />
				<meta
					name="twitter:creator"
					content={t('seo.twitter.creator')}
				/>
				<meta name="twitter:title" content={t('seo.twitter.title')} />
				<meta
					name="twitter:description"
					content={t('seo.twitter.description')}
				/>
				<meta name="twitter:image" content={t('seo.twitter.image')} />
			</Helmet>
		</Grid>
	);
};

Layout.propTypes = {
	classes: PropTypes.object,
	children: PropTypes.array,
	t: PropTypes.func.isRequired,
};
Layout.defaultProps = {
	classes: {},
	children: [],
};

//Theme
const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	container: {
		padding: theme.spacing.unit * 2,
	},
});

export default withStyles(styles)(withTranslation()(Layout));
