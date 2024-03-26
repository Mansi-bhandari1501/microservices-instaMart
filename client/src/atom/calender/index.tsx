
// import { useState } from "react";
// import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
// import "./styles.css";

// const CustomCalender = () => {
//   const [startDate, setStartDate] = useState();
//   const [endDate, setEndDate] = useState();

//   function convertDate(inputFormat) {
//     function pad(s) {
//       return s < 10 ? "0" + s : s;
//     }
//     var d = new Date(inputFormat);
//     return [pad(d.getMonth() + 1), pad(d.getDate()), d.getFullYear()].join("-");
//   }

//   const onChangeDate = (e) => {
//     let startDate = convertDate(e.startDate);
//     let endDate = convertDate(e.endDate);
//     setStartDate(startDate);
//     setEndDate(endDate);
//   };

//   return (
//     <div className="container">
//       <DateRangePickerComponent onChange={onChangeDate() }/>
//       <div>
//         {startDate} - {endDate}
//       </div>
//     </div>
//   );
// };

// export default CustomCalender;
// export {}


// import * as ReactDOM from 'react-dom';
// import * as React from 'react';
// import { useEffect } from 'react';
// import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

// // import './calender.css';
// const CustomCalender = () => {

//     return (
//         <div className='control-pane'>
//             <div className='control-section'>
//                 <div className='daterangepicker-control-section'>
//                     <DateRangePickerComponent></DateRangePickerComponent>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default CustomCalender;
export {}