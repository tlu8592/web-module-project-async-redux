import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlayerData } from './actions';
import PlayerList from './components/PlayerList';
import './App.css';

function App(props) {
  const { players, getPlayerData } = props;
  
  useEffect(() => {
    getPlayerData();
  }, []);


  return (
    <div className="App">
      <h1>NBA Players</h1>
      <PlayerList playersData={players} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    players: state.getPlayers
  }
}

export default connect(mapStateToProps, { getPlayerData })(App);