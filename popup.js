let downloads_list = document.getElementById('downloads_list')

chrome.downloads.search({}, function(res) {
    let i = 0
    let cnt = 0
    
    while (cnt < 5)
    {
        if (res[i].error !== undefined)
        {
            ++i
            continue
        }

        let path = res[i].filename
        console.log(res[i])

        // https://stackoverflow.com/questions/423376/how-to-get-the-file-name-from-a-full-path-using-javascript
        let filename = path.replace(/^.*[\\\/]/, '')

        // chrome.downloads.open(res[i].id)

        // opening.then(() => {console.log('opened')}, (error) => {console.log('error')})

        // <li><a href="file://${path}" target="_blank">${filename}</a></li> is not allowed because cannot access
        // local files, but may be useful for input type=file
        downloads_list.innerHTML += `<li><img src="file://${path}" target="_blank">${filename}</a></li>`

        ++i
        ++cnt
    }

    console.log(res)
})

