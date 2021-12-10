import React from 'react';

const PlayerInfo = (props) => {
    const { item } = props;

    return(
        <div className="player-info">
            <p>Height: {item.height_feet === null ? 'N/A' : null}</p>
            <p>Weight: {item.weight_pounds === null ? 'N/A' : null}</p>
            <p>Team: {item.team.full_name}</p>                
            <p>Position: {item.position}</p>
        </div>
    )
}

export default PlayerInfo;