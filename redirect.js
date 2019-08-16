/* Copyright (c) 2019 LukefaceLP. All rights reserved.
A simple extension that redirects all requests to www.reddit.com
to old.reddit.com. */


chrome.webRequest.onBeforeRequest.addListener(
    /*addListener automatically passes a dictionary containing info about the 
    current URL request into the function*/
    function(details){
        var result = details.url.replace("://www.","://old.");
        
        //We need to return this or else the new URL won't be used
        return {redirectUrl: result};
    },

    //webRequest's addListener() requires a filter:
    {urls: ["*://www.reddit.com/*"]},

    /*adding "blocking" in this extraInfoSpec means that the function
    is called synchronously. This means the request is blocked until
    the function is returned */
    ["blocking"]
    );