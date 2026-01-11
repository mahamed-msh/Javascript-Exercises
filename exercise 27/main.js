const pr = ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let success = true;

            if(success){
                resolve({name: 'mahamed', batch : 3});
            }
            else{
                reject('failed to fetch user data');
            }
        } ,2000)
    })
}

pr()
.then(data =>console.log('User data: ', data))
.catch(err=>console.error(err,))