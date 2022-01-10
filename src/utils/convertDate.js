export default function convertDate(rawTimestamp){
    const timestamp = new Date(rawTimestamp*1000)

    const date ={
        day: timestamp.getUTCDate(),
        month: timestamp.getMonth()+1,
        year: timestamp.getFullYear(),
        hour: timestamp.getUTCHours(),
        minute: timestamp.getUTCMinutes()+"0"
    };

    if (date.day <= 9){
        date.day = "0" + date.day;
    }
    if(date.month <= 9){
        date.month = "0" + date.month;
    }
    if(date.hour === 12){
        date.hour = date.hour + ":" + date.minute + "pm"
    }else if(date.hour > 12){
        date.hour = date.hour - 12 + ":" + date.minute + "pm"
    }else if(date.hour === 0){
        date.hour = `12:${date.minute}am`
    }else{
        date.hour = date.hour + ":" + date.minute + "am"
    }


    return `${date.month}/${date.day}/${date.year} @ ${date.hour} `
}