var nonsense = function(string) {
  var blab = function() {
    alert(string);
  }
  return blab;
}

blabLater = nonsense('later')
blabLater()
blabAgainLater = nonsense('again')
blabAgainLater()


var lastNameFunc = function(firstName) {
  var realFirstName = firstName;

  var firstNameFunc = function(lastName) {
    console.log(realFirstName + ' ' + lastName)
  }
  return firstNameFunc;
}

first = lastNameFunc('Jim')
first('Jones')
newFirst = lastNameFunc('Hank')
newFirst('Hill')


var storyWriter = function(){
  var story = ''
  return {
    addWords: function(words) {
      story = story + words
      return story
    },
    erase: function() {
      story = ''}
  }
}