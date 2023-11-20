function makeRequest(method, path, callback) {
    let xml = new XMLHttpRequest();

    xml.addEventListener('readystatechange', function () {
        if (xml.readyState === 4) {
            if (xml.status === 200) {
                let data = JSON.parse(xml.responseText);
                callback(null, data); 
            } else {
                callback('Failed request', null);
            }
        }
    });

    xml.open(method, path, true);
    xml.send();
}

const requestMethod = 'GET';
const requestPath = 'path/to/data.json'; 

function dataCallback(error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log("Data:", data);
    }
}

makeRequest(requestMethod, requestPath, dataCallback);
