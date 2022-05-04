finalprojectw22-stellar

<h1 align="center"><span style="font-family:Papyrus; font-size:2em;">Stellar Jeopardy</span></h1>
<h4>Developer: Team Stellar</h4>

<p align="center">
  

## Description / How to play

Stellar Jeopardy is a Jeopardy-inspired game where traditionally three contestants compete in a game show where the contestants are provided with a question and must respond with the question's associated question in order to score the points for the question. A question is chosen from a board which consists of different categories and in each category, there are available selections of varying difficulties, with the more difficult ones providing more points. The contestant with the most points at the end is declared the winner of the match.

**A typical Jeopardy board in the middle of play:**

<p align="center">
<img src="https://cdn.discordapp.com/attachments/934508752940449876/936368084451729418/unknown.png" width="100%"></p>

[Video Source](https://youtu.be/dWjP99xjy_A) (YouTube Link)

Stellar Jeopardy is a Jeopardy-inspired webapp programmed in JavaScript, which is designed to let users play, host and join private and public matches. In addition to this, Stellar Jeopardy will support many unique features including:

- Create a User profile, allowing a user to create custom boards
- Host custom matches with desired game and players settings
- Host *Event* matches which allow for a user to host multiple matches for larger parties of players
- Browse publically uploaded boards and host a match using them
- Spectate on-going matches
- Chat with other players and spectators in a match
- **And more!**

## Motivation
We at Stellar were inspired to develop an easy-to-use webapp for a classic game which would let friends, co-workers, or even strangers to compete in a friendly match of Jeopardy designed to their own liking. Thus, it was decided to create Stellar Jeopardy where users are able to easily create accounts, create boards, and share them with whom they desire.

## Visuals

### The following are pages which will be used in the game:
- The default Webapp page will allow users to either login with their account, create an account, or join a game as a guest using a match-link.
- After login, the user will see the Stellar Jeopardy homepage where they may inspect their account, join a match using a match-link, spectate a match using a match-link, or host a game
- If hosting a game, the user may either select in-house boards, select a custom board (created by the user), or browse public boards to choose from
- The public board browse page will let the user sort public boards based on stats (most likes, difficulty, etc.)
- After selecting a board the user may edit match settings such as number of players, spectator limit, etc.
- The match page will display the selected board and let players play the match. A chat box will be available to chat with the players.

## Contributions

To contribute to the project follow the steps to get started:
1) Use `git clone` to clone the main directory of Stellar Jeopardy from it's [Github](https://github.com/UTSCCSCC01/finalprojectw22-stellar) page. Otherwise, use `git pull origin master` to ensure that your repository is up to date
2) Use `git checkout -b <branch name>` to create a branch in order to contribute to development. Create a branch for each feature
2) Before adding changes, run code in local environment to make sure that your code does not break other parts of the webapp
3) Use `git add` to add changed or new files. Use `git commit` to commit code; and write an appropriately descriptive commit message which clearly indicates the feature addition / changes being provided
4) When attempting to add changes to main branch, use GitHub's Pull Request option on the Project's GitHub page
5) Once the changes have been reviewed and accepted by atleast two team members, the changes will be pulled by the main branch

## Installation

The following are requirements to develop the web app:
1) [Node.js](https://nodejs.org/en/) is a runtime environment for executing JavaScript without a browser, and is used to create full-stack apps using Javascript.
2) [MongoDB](https://www.mongodb.com/) will be used to develop the Database
3) We will use [MERN.JS boilerplate](https://mern.js.org/) for the development. The download instructions can be found in the link provided

Installation instructions in order to run webapp locally on your machine:
1) Use `git clone` to clone the main directory of Stellar Jeopardy from it's [Github](https://github.com/UTSCCSCC01/finalprojectw22-stellar) page
2) Start Database
3) run `node App.js`
