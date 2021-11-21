import React from 'react';
import PlayerInfo from './PlayerInfo';

const Player = (props) => {
    const { item } = props;

    return (
        <div className="player-card">
            <h3>{item.first_name} {item.last_name}</h3>
            <PlayerInfo item={item} />
        </div>
    );
}

export default Player;