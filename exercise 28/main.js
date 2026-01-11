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

async function dispayuserdata (){

   

    try{
         const user = await pr();
         console.log(user)
    }catch (err){
        console.log(err)
    }

}

dispayuserdata ()