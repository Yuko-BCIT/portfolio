const gameCode1 =
`generateSecretNumber: () => {
  // generates ramdom numbers, sort by levels
  if (player.level === "Easy") {
    game.secretNumber = Math.floor(Math.random() * 100) + 1;
  } else if (player.level === "Medium") {
    game.secretNumber = Math.floor(Math.random() * 500) + 1;
  } else {
    game.secretNumber = Math.floor(Math.random() * 1000) + 1;
  }
},`;
export default gameCode1;
