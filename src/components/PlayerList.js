import React from 'react';
import Player from './Player';

const PlayerList = (props) => {
    const { playersData } = props;

    return(
        <div className="player-list">
            {
                playersData.map(item => {
                    return <Player key={item.id} item={item}  />
                })
            }
        </div>
    )
}

export default PlayerList;