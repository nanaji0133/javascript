function switchfn(num) {
    var answer;
    switch (num) {
        case 1:
            answer = "one";
            break;
        case 2:
            answer = "two";
            break;
        case 3:
        case 4:
        case 5:
            answer = "three";
            break;
        default:
            answer = "returing default value";
            break;
    }

    return answer
}

console.log(switchfn(3))


// playing card example

var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = "hold";
    if (count > 0) {
        holdbet = "bet"
    }
    return count + " " + holdbet
}

cc(10); cc(5); cc(6); cc("K"); cc("A");

console.log(cc("Q"))