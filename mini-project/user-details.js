let url = new URL (location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);

let div = document.createElement('div');
div.innerText= `All user information:`;
div.classList.add('userInfoDiv')
document.body.appendChild(div);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(info => {
        console.log(info);
        function explorer (obj) {
            let ul = document.createElement('ul');
            ul.classList.add('infoUl');
            div.appendChild(ul);
            for (const objKey in obj) {
                if (typeof obj[objKey] !== 'object') {
                    let li = document.createElement('li');
                    li.innerText = `${objKey}: ${(obj[objKey])}`;
                    li.classList.add('infoList');
                    ul.appendChild(li);
                } else {
                    explorer(obj[objKey]);
                }
            }
        }
        explorer (info);

        let button = document.createElement('button');
        button.classList.add('postButton');
        button.innerText = `post of current user`;
        button.onclick = function (e) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value => value.json())
                .then(posts => {
                    let postBox = document.createElement('div');
                    postBox.classList.add('postBox');
                    div.appendChild(postBox)
                    for (const post of posts) {
                        let postDiv = document.createElement('div');
                        postDiv.classList.add('postDiv');
                        postDiv.innerText = `${post.title} `;
                        postBox.appendChild(postDiv);

                        let a = document.createElement('a');
                        a.href = `post-details.html?id=${post.id}`;
                        a.innerText = 'go to post info';
                        a.classList.add ('postLink');
                        postDiv.appendChild(a);
                    }
                });
        }
        div.appendChild(button);
    });