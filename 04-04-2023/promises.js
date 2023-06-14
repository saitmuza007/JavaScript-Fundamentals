function getUsers(callback) {
    setTimeout(() => {
      callback([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  }
  
  function findUser(username, callback) {
    getUsers((users) => {
      const user = users.find((user) => user.username === username);
      callback(user);
    });
  }
  
  findUser('john', console.log);


function getUsers()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve([
                {
                    username:'john',email:"john@test.com"
                }
            ]);
        },1000)
    })
}


function onFullfilled(users)
{
    console.log(users)
}
const promise=getUsers();
promise.then(onFullfilled)