var wordMap = {
  "old": "古",
  "tree": "木",
  "white": "白",
  "thousand": "千",
  "street": "丁",
  "town": "町"
};
 console.log(wordMap);
// set a timer for testing
var startTime = performance.now()

// join the words in the word map by "|" for RegExp
var wordMapJoin = Object.keys(wordMap).join('|');
var regex = new RegExp('\\b(' + wordMapJoin + ')\\b', 'ig');

// create a tree tree walker
var treeEnt = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
// initialize text nodes
var textNodes = [];
while (treeEnt.nextNode()){
  textNodes.push(treeEnt.currentNode);
}

// iterate over the text nodes and modify in place
for (var i = 0, len = textNodes.length; i < len; i++){

  // use String.replace() callback function to swap out words in wordMap
  textNodes[i].nodeValue = textNodes[i].nodeValue.replace(regex,
    function(match){
      console.log("the name of the match: " + match);
      return wordMap[match.toLowerCase()];
    });

}

// print the execution time to console
var executionTime = performance.now() - startTime;
console.log("mapped words in " + executionTime + " ms");
