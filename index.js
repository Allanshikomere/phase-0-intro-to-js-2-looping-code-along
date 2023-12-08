// Code your solutions in this file
const namesToAdd = ["Guadalupe", "Ollie", "Aki"]
const eventToHappen = "surprise !"

function writeCards(name,event){
    const messages =[];
    for (let i = 0; i < name.length; i++) {
        const message  = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}
writeCards(namesToAdd,eventToHappen);

function countDown(n){
    let j = n;
    while(n >=0){
        console.log(n);
        n -= 1;
    }
    return n;
}
countDown(10);