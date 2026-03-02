// const person = {
//     name : "babul",
//     father : "abul",
//     place : "kabul",
//     friend :"Rahul"
// }

// console.log(person, typeof person)

// const personJson = JSON.stringify(person)
// console.log(personJson, typeof personJson)

// const parseJson = JSON.parse(personJson)
// console.log(parseJson, typeof parseJson)



const loadData = () =>{
          fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(res => res.json())
                .then(json => console.log(json))
      }

      
      const loadPost = () => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(json => displayPost(json))

      }

      const displayPost = (posts) =>{
            posts.forEach(post => console.log(post))
      }