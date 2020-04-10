const fetch = require('node-fetch');

function postRequest(data, credentials, url) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + credentials
        },
        body: JSON.stringify(data)
    })
        .then((response) => console.log(response.status))

        .catch((error) => {
            console.error('Error:', error)
        })
}


export {postRequest}