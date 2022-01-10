export default function convertTime(){
    let time ={
        hour: new Date().getHours(),
        min: new Date().getMinutes()
    }
    if(time.min <= 9){
        time.min = "0" + time.min
    }
    if(time.hour <=9){
        time.hour = "0" + time.hour
    }
    return `${time.hour}:${time.min}`
}