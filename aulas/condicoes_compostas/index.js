let num = [56,77,69]
num.sort()
num.push(1)
console.log(num)
num[3]= 0
console.log(`o valor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(69 )
if (pos == -1){
    console.log(`o valor não foi encontrado!`)
 }   else{
console.log(`o valor  está na posição ${pos}`)

}