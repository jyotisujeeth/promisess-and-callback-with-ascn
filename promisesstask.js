const create4thPost = (post)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let time = new Date().getHours() +":"+ new Date().getMinutes() + ":" + new Date().getSeconds();
            if (true) {
                Post.push({ ...post, createdAT: new Date().getTime() });
                resolve(time);
            }
            else
                reject('error')
        }, 1000)
    });
}

// create4thPost({ title: 'post 4th', body: 'this is post 4' });

const User = {
    name : 'jyotisujeeth' , lastUpdatedAt : new Date().getHours() +":"+ new Date().getMinutes() + ":" + new Date().getSeconds()
}


let updateLastUserActivityTime = ()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
                let someCondition = false;
                let temp = User.lastUpdatedAt;
                if(!someCondition)
                    resolve('user activity time '+temp);
                else
                    reject('something went wrong');

        }, 1000)
     }
    )
}

Promise.all([  create4thPost({ title: 'post 4th', body: 'this is post 4' })
,updateLastUserActivityTime()])

.then(([first , second]) =>{ 
    // console.log(first)
    console.log(second);
})
.catch(err=> console.log(err));
