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
});
