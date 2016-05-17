function collect_same_elements(collection_a, collection_b) {

  var sameElements = [];

  collection_a.forEach(function (element) {
    if (findSameElement(element, collection_b)) {
      sameElements.push(element);
    }
  });

  return sameElements;
}

function findSameElement(element, collection_b) {

  for (var i = 0; i < collection_b.length; i++) {
    if (element === collection_b[i]) {
      return true;
    }
  }
}

module.exports = collect_same_elements;
