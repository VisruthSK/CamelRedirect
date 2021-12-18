<<<<<<< HEAD
function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`)
}

function onGot(tabInfo) {
  console.log(tabInfo);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(function() {
  var creating = browser.tabs.create({
    url: "https://example.org"
  });
  // var test = currentWindow.getBrowser();
  // console.log(test)
  const gettingCurrent = browser.tabs.getCurrent();
  gettingCurrent.then(onGot, onError);
  creating.then(onCreated, onError);
=======
browser.browserAction.onClicked.addListener(function() {
  browser.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var activeTab = tabs[0];
    var activeTabUrl = activeTab.url;
    console.log(activeTabUrl)
  });
>>>>>>> bb4fef9e142745b189c4d8b5a72e6df4263be186
});
