

 const CustomDate = () => {

        var today = new Date();
        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var dayIndex = today.getDay();
        var dayName = weekdays[dayIndex];
        var date = today.getDate();
        var month = today.getMonth() + 1;
        var Month
        Month = month < 10 ? '0' + month : month;
        var year = today.getFullYear();
        var todayDateString = dayName + ", " + date + "/" + Month + "/" + year;
        return (todayDateString);
    }
    export default CustomDate
    