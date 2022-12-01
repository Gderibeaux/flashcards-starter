const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function(){

  let card1;
  let card2;
  let card3;
  let cards;
  let deck;

  beforeEach(() => {
    card1 = new Card(1, 'What is Gustavo\'s favorite animal', ['rhino', 'dog', 'snake'], 'rhino');
    card2 = new Card(14, 'What is the capital of Florida?', ['Denver', 'Tallahssee', 'Athens'], 'Tallahssee');
    card3 = new Card(12, 'Which is a DC superhero', ['Batman', 'Iron Man', 'Dr. Strange'], 'Batman');
    cards = [card1, card2, card3];
    deck = new Deck(cards)
  })

  it('Should start with an array of cards', function(){
    expect(deck.cards).to.be.a('array');
  })

  it('Should know how many cards are in the deck', function(){
    expect(deck.countCards()).to.equal(3)
  })
})