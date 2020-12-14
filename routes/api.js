'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let text = req.body.text;
      let locale = req.body.locale;
      let textRegex = /^\s*$/;
      let localeArray = ["american-to-british", "british-to-american"];
      
      if (textRegex.test(text)) {
        res.json({
          error: 'No text to translate'
        });
        return;
      } else if (!locale || !text) {
        res.json({
          error: 'Required field(s) missing'
        });
        return;
      } else if (!localeArray.includes(locale)) {
        res.json({
          error: 'Invalid value for locale field'
        });
        return;
      }

      let translation = translator.translate(text, locale);

      res.json({
        text: text,
        translation: translation
      })
    });
};
