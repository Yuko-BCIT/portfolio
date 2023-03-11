const gameCode2 =
`$("#enter").on("click", () => {
    game.playerGuess = Number($("#guess").val()); 
    // if non-number was entered or input was empty,
    if (isNaN(game.playerGuess) || !game.playerGuess) {
      $("#alert2").css("visibility", "visible"); // warn
      $("#guess").on("click", () => {
        $("#guess").val(""); // clear the input field so it doesn't reduce lives
        $("#alert2").css("visibility", "hidden");
      });
      // if number was provided, but out of range
    } else if (
      (player.level === "Easy" &&
        (game.playerGuess < 1 || game.playerGuess > 100)) ||
      (player.level === "Medium" &&
        (game.playerGuess < 1 || game.playerGuess > 500)) ||
      (player.level === "Hard" &&
        (game.playerGuess < 1 || game.playerGuess > 1000))
    ) {
      $("#alert2").css("visibility", "visible");
      $("#guess").on("click", () => {
        $("#guess").val("");
        $("#alert2").css("visibility", "hidden");
      });
      // if correct guess was made, finally compares to the secret number
    } else {
      game.checkSecretNumber();
      $("#guess").val("");
    }
  });
`;

export default gameCode2