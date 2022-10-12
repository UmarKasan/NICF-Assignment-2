fetch('user.json')
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
    var mainContainer = document.getElementById("updateUsername");
    var div = document.createElement("a");
    div.innerHTML = data[0].username;
    mainContainer.appendChild(div);
}

// const listItem = document.querySelector("li:last-child");
// const newItem = document.createElement('li');
// newItem.innerHTML = '<a href="/products">Products</a>';
// listItem.parentNode.replaceChild(newItem, listItem);

// original
// function appendData(data) {
//     var mainContainer = document.getElementById("updateUsername");
//     for (var i = 0; i < data.length; i++) {
//         var div = document.createElement("a");
//         div.innerHTML = 'Name: ' + data[i].username + ' ' + data[i].password;
//         mainContainer.appendChild(div);
//     }
// }
