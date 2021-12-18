browser.browserAction.onClicked.addListener(function() {
  browser.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var activeTab = tabs[0];
    var activeTabUrl = activeTab.url;
    console.log(activeTabUrl)
    if(activeTabUrl.slice(0,23) == "https://www.amazon.com/") {
      console.log('Amazon tab!')
    }
    else {
      console.log('Not Amazon tab')
    }
    var final = "https://example.org"
    var creating = browser.tabs.create({
      url: final
    });
  });
});
