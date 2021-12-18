browser.browserAction.onClicked.addListener(function() {
  browser.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var activeTab = tabs[0];
    var activeTabUrl = activeTab.url;
    console.log(activeTabUrl)
    if (activeTabUrl.slice(0, 23) == "https://www.amazon.com/") {
      console.log('Amazon tab!')
      var sku = activeTabUrl.slice(activeTabUrl.indexOf('/B0')) // Maybe remove the 0? Change to regex later?
      console.log(sku)
      var final = "https://camelcamelcamel.com/product/"
      final.concat(sku)
      console.log(final)
      var creating = browser.tabs.create({
        url: final
      });
    } else {
      console.log('Not Amazon tab')
    }
  });
});
