Minesweeper Styled Snake
https://www.loom.com/share/9c439f74905d4aeb8d86613b1d21b0a2

Minesweeper Styled Snake is a project that I currently have hosted on my personal portfolio website: https://ian-iversen-portfolio.vercel.app/

Once the user arrives at my retro styled site they should click into the snake icon on the left hand side of the fake desktop I have constructed. If you would just prefer to go to the game I have built, here is the link for that: https://ian-iversen-portfolio.vercel.app/snake

I was able to build this game using mostly TypeScript and JavaScript for the snake game logic and a Ruby on Rails Backend to post the scores to a "Rankings" leaderboard. The bulk of the code of interest I want to point out lives in client>pages>snkae.tsx and client>scripts>snakeLogic.js.

"snakeLogic.js" is conprised of how the game really works, when flags are 'eaten' then the snake grows and when the sanke hits a wall the game is over. "snake.tsx" contains the elements of the page, written in React, and controls the on/off functionality of the game logic as well as the POSTing of the final score and player name to the PostgreSQL DB.

!!!PLEASE NOTE!!!
I was not able to upload this project because it was too large. submit50 throught errors despite my workarounds. I will just be submitting the client side React/JS/TS code. I also removed "@next" from node_modules which may need to be re-added once the application is running on your environment.
