//saves options to chrome.storage

function save_urls(){
    var oldurl = document.getElementById('oldurl').value;
    var newurl = document.getElementById('newurl').value;
    chrome.storage.sync.set(
        {
        old_url: oldurl,
        new_url: newurl
        }, function(){

        }
    )

}


function restore_options(){
    chrome.storage.sync.get(
        {
            old_url:'',
            new_url:''
        }
    )
}