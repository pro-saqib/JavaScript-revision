const team = {
    _players: [
      {
        firstName: 'Saqib',
        lastName: 'Hayat',
        age: 25
      },
      {
        firstName: 'Sufyan',
        lastName: 'Hayat',
        age: 17
      },
      {
        firstName: 'Zeeshan',
        lastName: 'Hayat',
        age: 15
      }],
    _games: [
      {
        opponent: 'Ind',
        teamPoints: 12,
        opponentPoints: 14
        },
      {
        opponent: 'Ind',
        teamPoints: 9,
        opponentPoints: 19
        },
      {opponent: 'Bang',
      teamPoints: 3,
      opponentPoints: 13
      }
    ],
    get players(){
      return this._players
    },
    get games(){
      return this._games
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        newLastName: newLastName,
        newAge: newAge
      }
    this.players.push(player)
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        oponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
        this.games.push(game)
    }
  };
  team.addPlayer('Ali', "Muhammad", 17)
  console.log(team._players)
  team.addGame('Aus', 22, 19)
  console.log(team._games)
  