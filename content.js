var wordMap = {
'word': '言葉',
'tree': '木',
'walk': '歩く'
};

var regex = new RegExp('\\b(' + Object.keys(wordMap).join('|') + ')\\b', 'ig');

/* tree walker */
var treeWalker = document.createTreeWalker (
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
);

/* text nodes */
var textNodes = [];

while (treeWalker.nextNode())
{
    textNodes.push(treeWalker.currentNode);
}

/* iterate text nodes and modify in place */
for (var i = 0, len = textNodes.length; i < len; i++)
{
	// using a callback function as a paramter:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
    textNodes[i].nodeValue = textNodes[i].nodeValue.replace(regex,
        function(match)
        {
            var replacementWord = wordMap[match.toLowerCase()];

            /* match capitalization -- wordMap is all lowercase */

            if (match != match.toLowerCase())
            {
                if (match == match.toLowerCase().charAt(0).toUpperCase())
                {
                    replacementWord = replacementWord.charAt(0).toUpperCase() + replacementWord.slice(1);
                }
                else if (match == match.toUpperCase())
                {
                    replacementWord = replacementWord.toUpperCase();
                }
            }

            console.log('replacing ' + match + ' with ' + replacementWord);
            return replacementWord;
        }
    );
}
