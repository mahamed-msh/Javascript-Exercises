console.log('Blocking');


const blocking = ()=>{


    alert('click the `ok` button to see the user data');


    return {name: 'mahamed', batch: 3 };
}





console.log('user data: ',blocking());



console.log('Non-Blocking');


function non_blocking (callback){
        setTimeout(()=>{
        const user = {name: 'mahamed', batch: 3};

        callback(user);

        },2000);
};

non_blocking(function(user){
    console.log(user);
})

console.log('it,s not blocking')