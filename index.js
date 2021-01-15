// Add your code here

function submitData(name, email) {
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    }

return fetch("http://localhost:3000/users", configObj)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(obj) {

        const p = document.createElement('p')
        p.innerHTML = obj.id
        document.body.appendChild(p)

    })
    .catch(function(err) {
        alert("OH NO")
        const p = document.createElement('p')
        p.innerHTML = err.message
        document.body.appendChild(p)

    });
}

submitData("what's", "up")












// const url = 'http://localhost:3000/users'
//     function submitData(name, email) {
//         const configObj = {
//             method: 'POST',
//             headers: {
//               "Content-Type": "application/json",
//               "Accept": "application/json"
//             },
//             body: JSON.stringify({ 'name': name, 'email': email })
//           };
//         return fetch(url, configObj)
//             .then(function(response) {
//             return response.json();
//             })
//             .then(function(body) {
//                 const p = document.createElement('p');
//                 p.innerHTML = body.id;
//                 document.body.appendChild(p);
//             })
//             .catch(function(error) {
//             alert("Error:");
//                 const p = document.createElement('p');
//                 p.innerHTML = error.message;
//                 document.body.appendChild(p);
//             });
//         }