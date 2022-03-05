const inputDate = process.argv;
console.log(inputDate[2]);
data = inputDate[2];
getDayInfo(data);

function getDayInfo(inputDate){
    let numbers =  inputDate.split('.');    //в js предусмотрен формат записи даты в виде 1970-01-01
    let parsedDate = numbers[2]+"-"+numbers[1]+"-"+numbers[0];// Поэтому парсим дату в нужный формат
    let unixTime = Date.parse(parsedDate);

    let finalDate = new Date(unixTime);// получили строку, строку приводим к типу object,
    //в нашем случае требуется создать экземпляр класса Date
    let day,month;
    switch (finalDate.getDay()){
        case 0:  day = "Воскресенье";break;
        case 1:  day = "Понедельник";break;
        case 2:  day = "Вторник";break;
        case 3:  day = "Среда";break;
        case 4:  day = "Четверг";break;
        case 5:  day = "Пятница";break;
        case 6:  day = "Суббота";break;
    }
    switch (finalDate.getMonth()){
        case 0:  month = "Января";break;
        case 1:  month = "Февраля";break;
        case 2:  month = "Марта";break;
        case 3:  month = "Апреля";break;
        case 4:  month = "Мая";break;
        case 5:  month = "Июня";break;
        case 6:  month = "Июля";break;
        case 7:  month = "Августа";break;
        case 8:  month = "Сентября";break;
        case 9:  month = "Октября";break;
        case 10:  month = "Ноября";break;
        case 11:  month = "Декабря";break;
    }
    let week = Math.ceil(numbers[0]/7);

    console.log(day + ", "+week+" неделя "+month+" "+ finalDate.getFullYear()+" года");
}
