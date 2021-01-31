let json = '{"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false}';
let parsedJSON = JSON.parse(json);

document.getElementById("user").innerHTML = parsedJSON.userId;
document.getElementById("id").innerHTML = parsedJSON.id;
document.getElementById("title").innerHTML = parsedJSON.title;
document.getElementById("comp").innerHTML = parsedJSON.completed;