"use strict";

function getSentanceInformation() {
  var wordCount = 0;
  var letterCount = 0;
  var sentanceCount = 0;

  for (var _len = arguments.length, sentances = new Array(_len), _key = 0; _key < _len; _key++) {
    sentances[_key] = arguments[_key];
  }

  for (var i in sentances) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = sentances[i][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var letter = _step.value;

        if (letter !== " ") {
          letterCount++;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    wordCount += sentances[i].split(" ").length;
    sentanceCount++;
  }

  ;
  return {
    wordCount: wordCount,
    letterCount: letterCount,
    sentanceCount: sentanceCount
  };
}

sentance = getSentanceInformation("Hello world", "ababa", "This isnt good");
console.log(sentance.wordCount);
console.log(sentance.letterCount);