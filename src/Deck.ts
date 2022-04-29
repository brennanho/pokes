type Card = {
  suit: string;
  rank: string;
};

export class Deck {
  public deck: Array<Card> = [];

  constructor() {
    this._initialize();
    this.shuffle();
  }

  _initialize() {
    const suits = ["diamond", "heart", "clover", "spade"];
    const ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    for (const suit of suits) {
      for (const rank of ranks) {
        this.deck.push({ suit, rank });
      }
    }
  }

  _deal(numCards: number): Array<Card> {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.deck.pop());
    }
    return cards;
  }

  dealFlop(): Array<Card> {
    return this._deal(3);
  }

  dealTurnRiver(): Card {
    return this._deal(1)[0];
  }

  dealHand(plo: Boolean) {
    return this._deal(plo ? 4 : 2);
  }

  shuffle(): void {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }
}
