browser.browserAction.onClicked.addListener(function() {
  browser.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var activeTab = tabs[0];
    var activeTabUrl = activeTab.url;
    console.log(activeTabUrl)
    //Add support for other countries from CCC website
    let amazonLinks = ['https://www.amazon.com.au', 'https://www.amazon.com.ca', 'https://www.amazon.com.fr', 'https://www.amazon.com.de', 'https://www.amazon.com.it', 'https://www.amazon.com.es', 'https://www.amazon.com.uk', 'https://www.amazon.com']
    if (activeTabUrl.slice(0, 23) == "https://www.amazon.com/") {
      console.log('Amazon tab!')
      const skuIndex = activeTabUrl.indexOf('/B0') // Maybe remove the 0? Change to regex later?
      var sku = activeTabUrl.slice(skuIndex, skuIndex + 11)
      console.log(sku)
      var final = "https://camelcamelcamel.com/product"
      final = final.concat(sku)
      console.log(final)
      var creating = browser.tabs.create({
        url: final
      });
    } else {
      console.log('Not Amazon tab')
    }

  });
});
