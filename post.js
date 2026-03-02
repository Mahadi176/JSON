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

// 1.get the container 
const postContainer = document.getElementById('post-Container')
        console.log(postContainer)

    posts.forEach((post) => {
        const li = document.createElement('li')
        li.innerText = post.title
        postContainer.appendChild(li)
        
    })
}