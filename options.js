//saves options to chrome.storage

function save_urls(){
    //first we take the new values from options.html
    var oldurl = document.getElementById('oldurl').value;
    var newurl = document.getElementById('newurl').value;
   // Then we put them into an object
    var new_redirect_definition = {oldurl: newurl};

    // Then we get the stored array of redirect objects
    var redirect_object_array = chrome.storage.local.get(
        {
            redirect_definitions: {}
        });
    //if the array is nonexistent, then create one, then add the new redirect object

    //Else we just push() the new defition into the array
    redirect_object_array.push(new_redirect_definition);

    //After which we store the updated array.
    chrome.storage.local.set(
        {
            redirect_definitions: redirect_object_array
        });
}


function restore_options(){
    chrome.storage.local.get(
        {
            redirect_definitions: {}
        }
    );
    //TODO we got the derfintions from storage, nowp ut them to use
}