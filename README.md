# RTKizer
Chrome extension for changing Heisig RTK keywords to Japanese kanji

### ToDo

+ create some tests: test page with known issue words, non utf8 characters, etc.

+ pull wordMap from JSON, https://developer.chrome.com/extensions/runtime#method-sendMessage

+ select input by RTK chapter, RTK index, possibly JLPT level

### Known issues

+ Finding text that has the word `true` on the webpaged translates to `undefined`

+ Iñupiak from the wikipedia page on trees is evaulating to undefined

+ maybe try printing the regex and running it through regex101

+ the green highlight behind kanji needs to be opaque

+ `I'm` returns undefined

+ text inside tables doesn't trasnlate

+ I googled the word "apparently" and it messed up google really bad and forced it to reload repeatedly
possibly from adding text nodes to search box?  

### Suspected Issues

+ What happens when I load pages with textArea?