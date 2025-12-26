console.log('Properties and values of each person')

const people =[
   {
      name : 'ahmed',
      age : 25,
      city : 'hargeisa',
      boundary : '---'


   },
   {
      name : 'muse',
      age : 32,
      city : 'kismayo',
      boundary : '---'
   },
   {
      name : 'faisal',
      age : 28,
      city : 'mogadisho'
   }
]




for(let x of people){

for (let key in x){
   console.log(x[key])
}



}
