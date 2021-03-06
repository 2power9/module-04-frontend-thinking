import { Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './Header.css';
import { useDataLayerValue } from '../../helper';

function Header() {
	const [{ user }] = useDataLayerValue();

	return (
		<div className="header">
			<div className="header-left">
				<Search/>
				<input placeholder='Artists, songs, or podcasts' type="text"/>
			</div>
			<div className="header-right">
				<Avatar src={user?.images[0].url} alt="An"/>
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
}

export default Header;