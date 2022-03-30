# Product Backlog

## User Stories

**STELLAR-1 Create an Account**

Priority: Medium

Points: 5

As a user I want to be able to create an account so that I can save my own game data. 

Criteria of Satisfaction:
1. Users are able to pick their own username and password to create an account. 
2. An entry in the database for the user should be made to store their data.
3. Only after entering the correct username and password corresponding to the user, should the user be able to access the application from the homepage. 

**STELLAR-2 Select Category and Question**

Priority: High 

Points: 5

As a player of the game, I want to be able to select the category and question of my choice when it is my turn so that I can attempt to answer the question.

Criteria of Satisfaction: 

1. Track which player’s turn it is. 
2. On the respective player’s turn, let them choose the category of the questions and then select the question itself. 

**STELLAR-3 Attempt to Answer Question**

Priority: High 

Points: 8

As a player of the game, I want to be able to answer the question after picking it, so that I can get points if it is correct and continue to answer more questions. 

Criteria of Satisfaction: 

1. Show the selected question to the player.
2. Based on the pre-selected time per turn, start a timer for the player to answer the question within that time. 
3. The player should be able to enter the answer in a text-box and click submit for checking. 
4. The player should get points if it is correct and get no points if it’s wrong. With respect to the outcome of the answer, the turn should be tracked accordingly.

**STELLAR-4 Multiple Players**

Priority: High 

Points: 13

As a user, I want to be able to play with other players so there can be a competitive element to the game. 

Criteria of Satisfaction:

1. Multiple players should be able to connect to the same game/match. 
2. The backend should be able to handle multiple players in one instance of a game/match and appropriately synchronize the state of the game for everyone. (dis-regarding method of connection here) 

**STELLAR-5 Create Instance of Game** 

Priority: High 

Points: 13

As a user I should be able to create my own game/match with my preferred settings so that I can play the game.

Criteria of Satisfaction: 

1. A user should be able to create a match after picking their preferred settings for it. At the very least should include the following settings: 
    * Option to pick game board
    * Maximum number of players 
    * Timer limit  
    * Name of Match 
2. Once a match is created, it should be viewable to the public.

**STELLAR-6 Join a Public Match** 

Priority: high

Points: 8

As a user I want to be able to join a match not created by me so that I can play the game without having to create my own match.

Criteria of Satisfaction: 

1. Users should be able to see all public matches on the respective page.
2. Users should be able to join any of the viewable public matches.

**STELLAR-7 Generate Invitation Code for Private Matches**

Priority: Medium 

Points: 3

As the host/creator of a match I want to be able to create private matches so that I can invite people I want to play with. 

Criteria of Satisfaction: 


1. An user should now be able to select a private match as an option when creating a match. 
2. On selecting private, the back-end should generate a unique code for that particular match.


**STELLAR-8 Join a Private Match**

Priority: Medium 

Points: 3

As a user I want to be able to join a private match so that I can play with people I know or people I desire to play with. 

Criteria of Satisfaction:

1. User should be able to join a private match after entering the correct code corresponding to that match. 
2. The backend should authenticate that code and move the player to the correct match. 

**STELLAR-9 Play Game Without Account (Guest)**

Priority: High

Points: 5

As a player I want the ability to play the game without an account so that I don’t have to worry about remembering my password or username. 

Criteria of Satisfaction: 

1. The user should be able to join a private match directly from the home screen via the invitation code. 
2. The backend should create temporary credentials, allowing the user to play until they disconnect which should destroy those credentials. 
3. The user should also be able to view public matches and join them after choosing to play as a guest. 

**STELLAR-10 Create Custom Game Boards** 

Priority: Medium 

Points: 13

As a registered user, I want to be able to create my own game board so that I can include my own categories and questions. 

Criteria of Satisfaction: 

1. Gives users an easy to use UI to create their own custom game board. Let’s them choose things like: how many categories? How many questions? Create custom questions and answers. 
2. The custom board is saved on the database and is linked to the creator’s account. 

**STELLAR-11 Share Custom Game Board** 

Priority: Medium

Points: 3

As a creator of game boards, I want to be able to share my game boards with the public, so others can play them. 

Criteria of Satisfaction: 

1. User should be able to make their custom board viewable and playable for the public.
2. In the database the one instance of the game board should now be accessible for the creator and every other registered user. 

**STELLAR-12 Find and Filter Game Boards** 

Priority: Low 

Points: 5

As a user, I want to be able to search and filter for a particular public game board so that I can easily find a gameboard of my type. 

Criteria of Satisfaction: 

1. All public game boards should be viewable and should be searchable by using a search bar. 
2. Should be able to filter for boards by certain criteria, such as:
   * popularity
   *  rating
   *  theme
   *  difficulty

**STELLAR-13 Track rating, popularity, and difficulty of game boards**

Priority: Low 

Points: 8

As a user, I want to know more about public game boards so that I can make a decision on playing them or not. 

Criteria of Satisfaction: 

1. Each public game board should have a rating associated with it, and allows users to rate the boards. The average rating among users is displayed. 
2. Each board keeps track of the number of times the board has been played in a match (popularity). 
3. Each board has difficulty associated with it. Users can choose the difficulty and the average among users is displayed.

**STELLAR-14 Chat Function**

Priority: Medium

Points: 8

As a player I want to be able to text chat with the other players so that I can communicate with them. 

Criteria of Satisfaction: 

1. Players should be able to type in the chat box and send the message. The message should show up in every player's chat. 
2. Entire chat history must be maintained throughout the entire match. 

**STELLAR-15 “Close Enough” Request** 

Priority: Low 

Points: 3

As a player, I want to be able to put in a “close-enough” request for my answer, so that I can have a chance to get points. 

Criteria of Satisfaction: 

1. Request can be put in within some reasonable time period after the answer has been revealed to the question. 
2. The request should prompt the other players (not including requester) to vote on whether the answer given by the player is close enough to the actual answer to warrant an correct answer. 

**STELLAR-16 Spectate Matches**
 
Priority: Medium

Points: 3

As a user I want to be able to spectate matches so that I can watch others play the game. 

Criteria of Satisfaction:
 
1. Add spectator settings when creating a match. 
2. Any user joining a match after it has started will be put as a spectator, given that the match allows spectators. 
3. Spectators will be able to see a similar UI to the players, however will not be able to answer questions. 

**STELLAR-17 Host an Event (Multiple Private Matches)** 

Priority: Medium

Points: 8

As a host, I want to be able to create and manage multiple private matches, so that I can accommodate larger groups of people. 

Criteria of Satisfaction:

1. One player should be able to start multiple matches with their preferred settings. 
2. One invitation code should be generated per match. 
3. Host can choose to play in one match, or only spectate any match in the “event” without entering codes. 

**STELLAR-18 Host Privileges**
 
Priority: Medium

Pointa: 5

As a host, I want to be able to use special commands not available to players, so that I can manage private match(s). 

Criteria of Satisfaction:

1. Host privileges only apply to hosts of private matches.
2. Host should be able to do the following: 
   * Start a match without having the full capacity of players. 
   * End the match at any point in time. 
   * Kick any player (disconnect them from the match).
   * Choose to only spectate. 

**STELLAR-19 Add Animations and Sound Effects**

Priority: Low 

Points: 3

As a user I want to see animations and hear sound effects when I play the game so that the game is more immersive and attractive to play. 

Criteria of Satisfaction:
 
1. There should be animations added to the actions of selecting, answering, answer reveal, and point rewarding. 
2. Similarly, sound effects should occur on these actions. 

**STELLAR-20 Pick Colour Scheme of Custom Boards**

Priority: Low 

Points: 1

As a creator of boards, I want to be able to pick the colour scheme of my boards so that I can organize them better. 

Criteria of Satisfaction:

1. When creating custom boards, add settings to pick between pre-set colour schemes for the boards. 


**STELLAR-42 Create Database Schema for Questions and Answers**

Priority: High 

Points: 5

As a creator of boards, I want to be able store a question and its important information so that I can use it for the game UI in the front end. 

Criteria of Satisfaction:

1. Create a model for storing questions and answers
2. Create a field in the model for saving which game that question and answer is for

**STELLAR-44 Create a Login Page**

Priority: High 

Points: 5

As a creator of boards, I want to be able to input my login information so that I can be logged in into my account in the game. 

Criteria of Satisfaction:

1. Create a UI for the Login page
2. Setup user authentications so users can login to their account