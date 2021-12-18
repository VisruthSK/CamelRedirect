chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var activeTab = tabs[0];
    var activeTabUrl = activeTab.url;
    //Supported CCC amazon countries
    let amazonLinks = ['com.au', 'ca', 'fr', 'de', 'it', 'es', 'co.uk', 'com/']
    if (activeTabUrl.slice(0, 19) == "https://www.amazon.") {
      var ccTLD = ''
      for (var x in amazonLinks) {
        if (activeTabUrl.slice(19, 27).includes(amazonLinks[x])) {
          ccTLD = amazonLinks[x].slice(-2) + '.'
          break;
        }
      }
      if (ccTLD == '') {
        console.log('Unsupported country');
      } else {
        if (ccTLD == 'm/.') {
          ccTLD = ''
        }
        const skuIndex = activeTabUrl.indexOf('/B0') // Change to regex later?
        var sku = activeTabUrl.slice(skuIndex, skuIndex + 11)
        var final = "https://" + ccTLD + "camelcamelcamel.com/product" + sku
        var creating = chrome.tabs.create({
          url: final
        });
      }
    } else {
      console.log('Not Amazon tab')
    }
  });
});
