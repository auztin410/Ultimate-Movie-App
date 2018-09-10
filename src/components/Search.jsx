import React from 'react';

const Search = props => {
    if (props.user) {
		return (
			<div className="Search">
				<p>Current User:</p>
                <p>{props.user.local.username}</p>
			</div>
		)
	} else {
		return (
			<div className="Search">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	}
}

export default Search;