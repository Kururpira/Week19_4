function clear(){
	document.getElementById('title').value ='';
	document.getElementById('body').value = '';
}
function onBtnClick(){
	const title = document.getElementById('title').value;
	const body = document.getElementById('body').value;
	const h2 = document.createElement('h2');
	h2.innerText = title;
	const span = document.createElement('span');
    span.innerText = body;
	const div = document.getElementById('addPost');
    div.appendChild(h2);
    div.appendChild(span);
	createPost(title, body);

    clear();
}

function createPost(title, body) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: title,
        body: body,
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json))
}
