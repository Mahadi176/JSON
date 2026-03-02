const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        displayPost(json)
    })
}

const displayPost = (posts) => {
// 1.get the container and empty the container 
        const postsContainer = document.getElementById('posts-container')
        postsContainer.innerHTML = "";

    posts.forEach(post => {
        // 2. create element 
        const postCard = document.createElement('div')
        postCard.innerHTML =` 
                <div class="post-card">
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    </div>
        `
        // 3. add to the container 
        postsContainer.appendChild(postCard)
    })
}
loadPost()