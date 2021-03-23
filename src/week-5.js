const score = 0;
let output = ''
switch (score) {
    case 0:
        output += 'So '
    case 1:
        output += 'How ';
        output += 'Old ';
    case 2:
        output += 'are ';
    case 3:
        output += 'you ?'
        console.log(output)
        break;
    case 4:
        output += '!!';
        console.log(output);
        break;
    default:
        console.log('Please pick a number from 0 to 4')
}

let gradStudent = 67
    // instead of taking para of gradStudent by using true
    //this comparing the true boolean to the result of each case like gradStudent >= 90 is true or false
switch (true) {
    case (gradStudent >= 90):
        console.log('My grade is A+')
        break;
    case (gradStudent >= 80):
        console.log('My grade is B+')
        break;
    case (gradStudent >= 70):
        console.log('My grade is C+')
        break;
    case (gradStudent >= 60):
        console.log('My grade is D+')
        break;
    default:
        console.log('Fail')
}