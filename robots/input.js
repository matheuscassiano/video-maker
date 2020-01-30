const readline = require('readline-sync')
const state = require('./state.js')

function robot(){
  const content = {
    maximumSentences: 7
  }
  
  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix(content.searchTerm)
  state.save(content)
  
  function askAndReturnSearchTerm(){
    return readline.question('Type a Wikipedia search term: ')
  }
  
  function askAndReturnPrefix(searchTerm){
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, `Chose one option for ${searchTerm}: `)
    const selectedPrefixText = prefixes[selectedPrefixIndex]
  
    return selectedPrefixText
  }
}

module.exports = robot