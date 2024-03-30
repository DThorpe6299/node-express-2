const oClock = "o'clock";
function convertToWords(num){
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen', 'nineteen']

    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty']

    if(num<20){
        return ones[num];
    }
    else{
        const onesDigit= ones[(num%10)];
        const tensDigit = tens[(Math.floor(num/10))];
        return `${tensDigit} ${onesDigit}`
    }
}

/**
 * test edges cases (lowest and highest values possible)
 * test for minutes between 1-9 for 'oh'
 * have a specific conditional for zero minutes (adding o'clock to the time string)
 * have a conditional for midnight and noon (no am or pm on the time string)
 * 
 */
function convertTime(time24h){
    if(time24h==='00:00'){
        return 'midnight';
    }
    if(time24h==='12:00'){
        return 'noon'
    }
    const time = time24h.split(":")
    let hours = parseInt(time[0]);
    const minutes = parseInt(time[1]);

    //determines before or after noon
    let period = (hours<12) ? "am" : "pm";

    //Converting to 12h time format
     //this will make the first hour equal 12
    if(hours === 0){
        hours = 12;
    }else if (hours>12){
        hours = (hours - 12) //changes 24 hour time to 12 hour time
    }
    const hoursToWords = convertToWords(hours);
    let minutesToWords = convertToWords(minutes);
    if(minutes===0){
        minutesToWords = oClock
    }
    if(minutes>=1 && minutes <=9){
        minutesToWords = `oh ${minutesToWords}` 
    }
    const timeInWords = `${hoursToWords} ${minutesToWords} ${period}`
    return timeInWords
}

module.exports = { convertTime, convertToWords };