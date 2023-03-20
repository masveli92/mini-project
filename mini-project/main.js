let container = document.createElement('div');
container.classList.add ('userContainer');
document.body.appendChild(container);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users =>{
        for (const user of users) {
            const userBlock = document.createElement('div');
            userBlock.classList.add('userBlock');

            const userInfo = document.createElement('h4');
            userInfo.innerText = `${user.id}. ${user.name}`;
            userInfo.classList.add('userInfo')

            const userDetailsLink = document.createElement('a');
            userDetailsLink.href = `user-details.html?id=${user.id}`;
            userDetailsLink.innerText = 'user info';
            userDetailsLink.classList.add ('userDetailsLink');

            userBlock.append(userInfo, userDetailsLink);
            container.appendChild(userBlock);
        }
    });
