import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { withTranslation } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import { cloudinary } from '../../utils';

const GenerateSkillsList = (props) => {
	const { classes, data, item, t } = props;

	return data.map((skill, i) => {
		const title = t(`${item}.${i}`);
		const path = skill.replace(/\s+/g, '-').toLowerCase();
		const key = `skill-list-${title}-${i}`;

		return (
			<LazyLoad key={key} className={classes.skillImg}>
				<Tooltip title={title} placement="bottom">
					<img
						src={cloudinary.url(
							`tools/${path}.png`,
							cloudinaryOpts,
						)}
						alt={title}
					/>
				</Tooltip>
			</LazyLoad>
		);
	});
};

GenerateSkillsList.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func.isRequired,
	data: PropTypes.array,
	item: PropTypes.string,
};
GenerateSkillsList.defaultProps = {
	classes: {},
	data: [],
	item: null,
};

// Cloudinary Options
const cloudinaryOpts = {
	quality: 50,
	width: 48,
	crop: 'scale',
	secure: true,
};

//Theme
const styles = (theme) => ({
	skillImg: {
		display: 'inline-block',
		width: '48px !important',
		height: '48px !important',
		padding: '7 !important',
	},
});

export default withStyles(styles)(withTranslation()(GenerateSkillsList));
