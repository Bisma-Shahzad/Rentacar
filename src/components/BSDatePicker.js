// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function BSDatePicker(props) {
//     const { label, defaultvalue,onChange } = props;

//     const [value, setValue] = React.useState(dayjs('2022-04-17'));

//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DemoContainer components={['DatePicker', 'DatePicker']}>
//                 <DatePicker label={label} defaultValue={dayjs(defaultvalue)} onChange={onChange} />
//             </DemoContainer>
//         </LocalizationProvider>
//     );
// }

{/* <BSDatePicker label="Select Data" defaultvalue='2022-02-17' /> */ }

// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function BSDatePicker() {
//   const [value, setValue] = React.useState(dayjs('2022-04-17'));

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DatePicker', 'DatePicker']}>
//         <DatePicker
//           label="Controlled picker"
//           value={value}
//           onChange={(newValue) => setValue(newValue)}
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }