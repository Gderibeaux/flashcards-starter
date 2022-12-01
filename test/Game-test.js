const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');
const data = require('../src/data');

describe('Game', function(){

  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let turn;
  let newRound;
  let myGame;
  let prototypeQuestions;

  beforeEach(() => {
  const prototypeQuestions = data.prototypeData;
  card1 = new Card(1, 'What is Gustavo\'s favorite animal', ['rhino', 'dog', 'snake'], 'rhino');
  card2 = new Card(14, 'What is the capital of Florida?', ['Denver', 'Tallahssee', 'Athens'], 'Tallahssee');
  card3 = new Card(12, 'Which is a DC superhero', ['Batman', 'Iron Man', 'Dr. Strange'], 'Batman');
  cards = [card1, card2, card3];
  deck = new Deck(cards);
  round = new Round(deck);
  turn = new Turn();
  myGame = new Game()
  myGame.makeCards();
  myGame.makeDeck();
  myGame.makeRound();
  })


  it('Should create an instance of card', function(){
    expect(myGame.cards[0]).to.be.an.instanceof(Card)
  })

  it('Should create an instance of deck', function(){
    expect(myGame.deck).to.be.an.instanceof(Deck)
  })

  it('Should create an instance of round', function(){
    expect(myGame.round).to.be.an.instanceof(Round)
  })
})