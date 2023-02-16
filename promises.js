const posts =[
    {title:'Post One', body:'this is a post one'},
    {title:'Post Two', body:'this is a post two'}
];

function getPosts() {
    setTimeout(()=> {
        let output="123355";
        posts.forEach((posts, index) => {
            output += `<p>${posts.title}</p>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function  createPosts(posts) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        posts.push({title: 'POST3'}); 
        const error =false;
        if(!error) {
            resolve();}
            else {
                reject('Error: something went wrong');
            }
    }, 2000);
});
}

// createPosts({title:'post three', body: 'post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// Promise.all: 
const Promise1 = Promise.resolve('hello world');
 const promise2 =10;
 const promise3 =new Promise((resolve, reject) => 
 setTimeout( resolve, 2000, 'goodbye world'));
 const promises4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

 Promise.all([Promise1, promise2, promise3, promises4]).then(values => console.log(values));
 
