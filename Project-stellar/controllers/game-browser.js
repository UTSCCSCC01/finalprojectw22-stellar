const express = require('express')
const router = express.Router()
// const Queue = require('@supercharge/queue-datastructure')

let activeGames = new Object();

// Assign game ID and initialize game lobby
router.route('/getNewID').get((req, res) => {
    let gameID = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    
    while(!activeGames.hasOwnProperty(gameID)) {
        activeGames[gameID] = {Title: "Game Room", numPlayers: 0, 
            players: ['Empty', 'Empty', 'Empty', 'Empty'], 
            status: ['Not Ready', 'Not Ready', 'Not Ready', 'Not Ready'],
        }
        res.send(gameID)
    }
        
});

// Get all active games 
router.route('/getGames').get((req, res) => {

    res.send(activeGames)
        
});

// Get all players in the room
router.route('/getPlayers').post((req, res) => {

    console.log("GETPLAYERS")
    console.log(req.body)

    console.log(activeGames[req.body.room])

    res.send(activeGames[req.body.room].players)
        
});

// Add user to room
router.route('/newPlayer').post((req, res) => {

    activeGames[req.body.room].numPlayers += 1

    for (let index = 0; index < activeGames[req.body.room].players.length; index++) {
        if (activeGames[req.body.room].players[index] == 'Empty') {
            activeGames[req.body.room].players[index] = req.body.lobbyID
            break
        }
    }

    console.log(activeGames[req.body.room])
    res.send(activeGames[req.body.room].players)


});

// Remove user from room
router.route('/removePlayer').post((req, res) => {
    console.log("REMOVEPLAYER")

    activeGames[req.body.room].numPlayers -= 1

    for (let x = 0; x < activeGames[req.body.room].players.length; x++) {
        if (req.body.lobbyID == activeGames[req.body.room].players[x]) {       
          activeGames[req.body.room].players[x] = "Empty"
          activeGames[req.body.room].status[x] = "Not Ready"
          
        }
    }

    res.send({players: activeGames[req.body.room].players, status: activeGames[req.body.room].status})

        // REMOVE PLAYER ON DISCONNECT AND UPDATE STATUS ON CLICK FOR ALL
});

// Updates status of all players in the room
router.route('/changeStatus').post((req, res) => {

    console.log("changeStatus")
    console.log(req.body)

    console.log(activeGames[req.body.room].status)
    activeGames[req.body.room].status = req.body.status
    res.send(activeGames[req.body.room].status)


        
});

// Get status of all players in the room
router.route('/getStatus').post((req, res) => {

    console.log("GETStatus")

    console.log(activeGames[req.body.room])

    res.send(activeGames[req.body.room].status)


        
});

module.exports = router

// on disconnect -1 players. if players = 0 on server close room.