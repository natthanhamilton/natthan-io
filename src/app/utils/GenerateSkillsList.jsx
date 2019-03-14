import React from 'react';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';

import { cloudinary } from '../utils';

const cloudinaryOpts = {
	quality: 50,
	width: 48,
	crop: 'scale',
	secure: true,
};

const useStyles = makeStyles({
	skillImg: {
		display: 'inline-block',
		width: '48px !important',
		height: '48px !important',
		padding: '7 !important',
	},
});

const GenerateSkillsList = ({ data }) => {
	const { t } = useTranslation();
	const classes = useStyles();

	return data.map((skill) => {
		const path = skill.replace(/\s+/g, '-').toLowerCase();
		return (
			<Tooltip
				key={`skill-list-${skill}`}
				title={skill}
				placement="bottom"
				className={classes.skillImg}>
				<img
					src={cloudinary.url(`tools/${path}.png`, cloudinaryOpts)}
					alt={skill}
				/>
			</Tooltip>
		);
	});
};

export default GenerateSkillsList;
