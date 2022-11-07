function cardGame(input) {
  let playerCards = {};

  for (const line of input) {
    let [name, cards] = line.split(': ');
    if (!playerCards.hasOwnProperty(name)) {
      playerCards[name] = [];
    }
    let element = cards.split(', ')
    for (const el of element) {
      if (!playerCards[name].includes(el)) {
        playerCards[name].push(el);
      }
    }
  }
  let playerPoints = {};

  function cardPoints(playerCards) {
    for (const player in playerCards) {
      let points = 0;
      let allPlayerCards = Object.values(playerCards[player]);
      for (const card of allPlayerCards) {
        let arrCard = card.split('')
        let type = arrCard.pop();
        let power = arrCard.join('');

        if (isNaN(power)) {
          switch (power) {
            case 'J':
              power = 11;
              break;
            case 'Q':
              power = 12;
              break;
            case 'K':
              power = 13;
              break;
            case 'A':
              power = 14;
              break;

          }
        }
        if (isNaN(type)) {
          switch (type) {
            case 'S':
              type = 4;
              break;
            case 'H':
              type = 3;
              break;
            case 'D':
              type = 2;
              break;
            case 'C':
              type = 1;
              break;
          }
        }
        points += Number(power) * type;
        playerPoints[player] = points;
      }
    }
  }
  cardPoints(playerCards)
  for (const player in playerPoints) {
    console.log(`${player}: ${playerPoints[player]}`);
  }
}
cardGame([
  'Peter: 2C, 4H, 9H, AS, QS',
  'Tomas: 3H, 10S, JC, KD, 5S, 10S',
  'Andrea: QH, QC, QS, QD',
  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
  'Andrea: QH, QC, JS, JD, JC',
  'Peter: JD, JD, JD, JD, JD, JD'
]
)