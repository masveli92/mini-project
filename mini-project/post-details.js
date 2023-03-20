let url = new URL (location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resp => resp.json())
    .then(post => {
        console.log(post);
        let container = document.createElement('div');
        container.classList.add('postContainer');
        document.body.appendChild(container);

        let postDataBox = document.createElement('div');
        postDataBox.innerText= `All info about the post:`;
        postDataBox.classList.add('postDataBox');
        container.appendChild(postDataBox);

        for (const postElement in post) {
            let p = document.createElement('p');
            p.innerText= `${postElement} - ${(post[postElement])}`;
            p.classList.add('postElement');
            postDataBox.appendChild(p);
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(resp => resp.json())
            .then(comments => {
                let commentBox= document.createElement('div');
                commentBox.classList.add('commentBox');
                container.appendChild(commentBox);
                for (const comment of comments) {
                    let ul = document.createElement('ul');
                    ul.classList.add('divComment');
                    commentBox.appendChild(ul);
                    for (const commentKey in comment) {
                        let li = document.createElement('li');
                        li.innerText = `${commentKey}: ${(comment[commentKey])}`;
                        li.classList.add('dataComment');
                        ul.appendChild(li);
                    }

                }
            })
    })
