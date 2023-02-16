const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post two", body: "This is post two" },
  ];
  
  function getPost() {
    setTimeout(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
      });
  
      document.body.innerHTML = output;
    }, 1000);
  }
  
  function createPost(post) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              posts.push(post);
  
              const error = false;
              if(!error){
                  resolve();
              }
              else{
                  reject('Error something went wrong');
              }
          }, 2000);
      });
    
  }
  
  //Sharpener task --> creating delete post 
  function deletePost(){
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              posts.pop();
  
              const error1 = false;
              if(!error1){
                  resolve();
              }
              else{
                  reject('Array is empty now. You dont have to use for loop as there are only 3 posts . Just call delete post 3 times.');
              }
          }, 1000);
      });
  }
  
  createPost({title: 'Post three', body: 'This is post three'})
      .then(getPost)
      .catch(err => console.log(err));
  
  
  deletePost()
      .then(getPost)
      .catch(err => console.log(err));
  
