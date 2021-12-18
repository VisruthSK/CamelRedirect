browser.browserAction.onClicked.addListener(function() {
  browser.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var activeTab = tabs[0];
    var activeTabUrl = activeTab.url;
    // console.log(activeTabUrl)
    //Add support for other countries from CCC website
    let amazonLinks = ['au', 'ca', 'fr', 'de', 'it', 'es', 'uk']
    if (activeTabUrl.slice(0, 22) == "https://www.amazon.com") {
      var ccTLD = amazonLinks.indexOf(activeTabUrl.slice(23, 25))
      var country = ''
      if (ccTLD != -1) {
        country = amazonLinks[ccTLD] + '.'
      }
      const skuIndex = activeTabUrl.indexOf('/B0') // Change to regex later?
      var sku = activeTabUrl.slice(skuIndex, skuIndex + 11)
      var final = "https://" + country + "camelcamelcamel.com/product" + sku
      console.log(final)
      var creating = browser.tabs.create({
        url: final
      });
    } else {
      // console.log('Not Amazon tab')
    }

  });
});
