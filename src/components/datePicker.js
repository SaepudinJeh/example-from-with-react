import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function DatePickerItem({checkInDate, handleCheckInDate}) {
  return (
    <>
      <div className="w-full md:w-1/3 mb-6 md:mb-0 mt-5">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="date">
          Masukan tanggal
        </label>
        <DatePicker
          selected={checkInDate}
          onChange={handleCheckInDate}
          required={true}
          id="date"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholderText='Klik untuk memilih tanggal'
        />
      </div>
    </>
  )
}

export default DatePickerItem;