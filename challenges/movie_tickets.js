/*The new "Avengers" movie has just been released! There are a lot of people at the cinema 
box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. 
An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the 
tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand 
at that moment. Otherwise return NO.*/

function tickets(peopleInLine){
    let bills = {25:0,50:0,100:0}
    for (let i in peopleInLine) {
        if (peopleInLine[i] === 25) {
            bills[25] += 1;
        }
        else if (peopleInLine[i]===50) {
            bills[25] -= 1;
            bills[50] += 1;
        }
        else if (peopleInLine[i]===100) {
            if (bills[50] >= 1){
                bills[50] -= 1;
                bills[25] -= 1;
            }
            else {
                bills[25] -= 3;
            }
            bills[100] += 1;
        }
        if (bills[25] < 0 || bills[50] < 0) {
            return "NO";
        }
    }
    return "YES";
}

console.log(tickets([25, 25, 50, 50]), "YES");
console.log(tickets([25, 100]), "NO");
console.log(tickets([25,25,25,100,25,50,25,100,25,25,25,100,25,25,50,100,25,25,50,100]), "YES")
