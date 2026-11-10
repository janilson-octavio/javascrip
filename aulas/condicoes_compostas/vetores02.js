let valores = [78,98,69,45]
valores.sort()


//console.log(valores)

/*
console.log(valores[78])

for(let pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}

*/





for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}