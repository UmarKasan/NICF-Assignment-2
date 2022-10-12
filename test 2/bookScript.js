fetch('people.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    // function appendData(data) {
    //     var mainContainer = document.getElementById("myData");
    //     var div = document.createElement("table");
    //     div.innerHTML = 'Name: ' + data[0].firstName + ' ' + data[0].lastName;
    //     mainContainer.appendChild(div);
function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("table");
        div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
        mainContainer.appendChild(div);
    }
}
