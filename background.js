// Array that contains URL patterns of various ad servers which are to be blocked by the extension
const defaultFilters = [
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://*.doubleclick.net/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    "*://*.pubads.g.doubleclick.net/*",
    "*://*.partner.googleadservices.com/*",
    "*://*creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*"
]

// The chrome.webRequest.onBeforeRequest.addListener() method is used to intercept and cancel requests from the browser. It sets up an event listener that triggers before each network request is made. 
// This method takes three arguments:
// 1. A callback function that will be called when the event is triggered. It can return an object with a cancel property set to true to cancel the request.
// 2. An object that defines the URL patterns to match against.
// 3. An array of extra options to pass to the listener. In this case, we’re using the blocking option to indicate that the request should be blocked.
// chrome.webRequest.onBeforeRequest.addListener(
//     function (details){
//         return {cancel: true};
//     },
//     {urls: defaultFilters},
//     ["blocking"]
// )