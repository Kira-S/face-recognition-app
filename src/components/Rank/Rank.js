import React from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {
    return (
        <div className="Rank">
            <div>
                {`${name}, your current entry count is...`}
            </div>
            <div className="Rank-number">
                {entries}
            </div>
        </div>
    )
}

export default Rank;