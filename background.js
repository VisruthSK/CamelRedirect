// On extension icon click (or hotkey pressed), do the following
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    // Get the current tab's URL
    var activeTab = tabs[0];
    var activeTabUrl = activeTab.url;
    //Supported CCC amazon countries
    let amazonLinks = ['com.au', 'ca', 'fr', 'de', 'it', 'es', 'co.uk', 'com/']
    // Check if the current tab is an amazon tab
    if (activeTabUrl.slice(0, 19) == "https://www.amazon.") {
      var ccTLD = ''
      // Check for a match in the Country Code Top Level Domain so as to open the correct CamelCamelCamel reigonal webpage
      for (var x in amazonLinks) {
        if (activeTabUrl.slice(19, 27).includes(amazonLinks[x])) {
          // Save the correct Top Level Domain
          ccTLD = amazonLinks[x].slice(-2) + '.'
          break;
        }
      }
      // Unsupported country
      if (ccTLD == '') {
        console.log('Unsupported country');
      } else {
        // Amazon US
        if (ccTLD == 'm/.') {
          ccTLD = ''
        }
        // Find the product code/SKU
        const skuIndex = activeTabUrl.indexOf('/B0')
        const sku = activeTabUrl.slice(skuIndex, skuIndex + 11)
        // Create the final URL to be opened in a new tab
        const final = "https://" + ccTLD + "camelcamelcamel.com/product" + sku
        console.log(final)
        // Open in a new tab
        var creating = chrome.tabs.create({
          url: final
        });
      }
    } else {
      console.log('Not Amazon tab')
    }
  });
});
