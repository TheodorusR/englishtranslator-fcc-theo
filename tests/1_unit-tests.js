const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  suite('Translate to British', () => {
    const locale = "american-to-british";
    test('1', (done) => {
      let text = "Mangoes are my favorite fruit.";
      assert.equal(translator.translate(text, locale), "Mangoes are my <span class=\"highlight\">favourite</span> fruit.");
      done();
    });
    test('2', (done) => {
      let text = "I ate yogurt for breakfast.";
      assert.equal(translator.translate(text, locale), "I ate <span class=\"highlight\">yoghurt</span> for breakfast.");
      done();
    });
    test('3', (done) => {
      let text = "We had a party at my friend's condo.";
      assert.equal(translator.translate(text, locale), "We had a party at my friend's <span class=\"highlight\">flat</span>.");
      done();
    });
    test('4', (done) => {
      let text = "Can you toss this in the trashcan for me?";
      assert.equal(translator.translate(text, locale), "Can you toss this in the <span class=\"highlight\">bin</span> for me?");
      done();
    });
    test('5', (done) => {
      let text = "The parking lot was full.";
      assert.equal(translator.translate(text, locale), "The <span class=\"highlight\">car park</span> was full.");
      done();
    });
    test('6', (done) => {
      let text = "Like a high tech Rube Goldberg machine.";
      assert.equal(translator.translate(text, locale), "Like a high tech <span class=\"highlight\">Heath Robinson device</span>.");
      done();
    });
    test('7', (done) => {
      let text = "To play hooky means to skip class or work.";
      assert.equal(translator.translate(text, locale), "To <span class=\"highlight\">bunk off</span> means to skip class or work.");
      done();
    });
    test('8', (done) => {
      let text = "No Mr. Bond, I expect you to die.";
      assert.equal(translator.translate(text, locale), "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.");
      done();
    });
    test('9', (done) => {
      let text = "Dr. Grosh will see you now.";
      assert.equal(translator.translate(text, locale), "<span class=\"highlight\">Dr</span> Grosh will see you now.");
      done();
    });
    test('10', (done) => {
      let text = "Lunch is at 12:15 today.";
      assert.equal(translator.translate(text, locale), "Lunch is at <span class=\"highlight\">12.15</span> today.");
      done();
    });
  });

  suite('Translate to American', () => {
    const locale = "british-to-american";
    test('11', (done) => {
      let text = "We watched the footie match for a while.";
      assert.equal(translator.translate(text, locale), "We watched the <span class=\"highlight\">soccer</span> match for a while.");
      done();
    });
    test('12', (done) => {
      let text = "Paracetamol takes up to an hour to work.";
      assert.equal(translator.translate(text, locale), "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.");
      done();
    });
    test('13', (done) => {
      let text = "First, caramelise the onions.";
      assert.equal(translator.translate(text, locale), "First, <span class=\"highlight\">caramelize</span> the onions.");
      done();
    });
    test('14', (done) => {
      let text = "I spent the bank holiday at the funfair.";
      assert.equal(translator.translate(text, locale), "I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.");
      done();
    });
    test('15', (done) => {
      let text = "I had a bicky then went to the chippy.";
      assert.equal(translator.translate(text, locale), "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>.");
      done();
    });
    test('16', (done) => {
      let text = "I've just got bits and bobs in my bum bag.";
      assert.equal(translator.translate(text, locale), "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.");
      done();
    });
    test('17', (done) => {
      let text = "The car boot sale at Boxted Airfield was called off.";
      assert.equal(translator.translate(text, locale), "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.");
      done();
    });
    test('18', (done) => {
      let text = "Have you met Mrs Kalyani?";
      assert.equal(translator.translate(text, locale), "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?");
      done();
    });
    test('19', (done) => {
      let text = "Prof Joyner of King's College, London.";
      assert.equal(translator.translate(text, locale), "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.");
      done();
    });
    test('20', (done) => {
      let text = "Tea time is usually around 4 or 4.30.";
      assert.equal(translator.translate(text, locale), "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.");
      done();
    });
  });

  suite('Translation Highlight', () => {
    let locale1 = "american-to-british";
    test('1', (done) => {
      let text = "Mangoes are my favorite fruit.";
      assert.equal(translator.translate(text, locale1), "Mangoes are my <span class=\"highlight\">favourite</span> fruit.");
      done();
    });
    test('2', (done) => {
      let text = "I ate yogurt for breakfast.";
      assert.equal(translator.translate(text, locale1), "I ate <span class=\"highlight\">yoghurt</span> for breakfast.");
      done();
    });
    
    let locale2 = "british-to-american";
    test('23', (done) => {
      let text = "We watched the footie match for a while.";
      assert.equal(translator.translate(text, locale2), "We watched the <span class=\"highlight\">soccer</span> match for a while.");
      done();
    });
    test('24', (done) => {
      let text = "Paracetamol takes up to an hour to work.";
      assert.equal(translator.translate(text, locale2), "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.");
      done();
    });
  });
});
