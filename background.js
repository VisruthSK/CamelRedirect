function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`)
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(function() {
  browser.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var activeTab = tabs[0];
    var activeTabUrl = activeTab.url;
    console.log(activeTabUrl)
    var final = "https://example.org"
    var creating = browser.tabs.create({
      url: final
    });
    creating.then(onCreated, onError);
  });
});
