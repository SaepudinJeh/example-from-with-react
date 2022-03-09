import React, {useState} from 'react';
import RadioFrom from './components/radioForm';
import DatePickerItem from './components/datePicker';
import TextFieldComponent from './components/textFieldItems';


function App() {
  const [checkInDate, setCheckInDate] = useState(null);

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    const firstName = event.target.firstName;
    const lastName = event.target.lastName;
    const password = event.target.password;
    const city = event.target.city;
    const state = event.target.state;
    const pos = event.target.pos;
    const inlineRadioOptions = event.target.inlineRadioOptions;

    console.log(firstName.value);
    console.log(lastName.value)
    console.log(password.value)
    console.log(city.value)
    console.log(state.value)
    console.log(pos.value)
    console.log(inlineRadioOptions.value)

    alert('All data saved Successfully!')
  };

  return (
    <div className="mx-auto flex justify-center items-center w-[50rem] rounded-lg bg-white shadow py-12">
      <div>
        <div className='text-lg text-center my-8'>Contoh Form</div>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <TextFieldComponent />

          <DatePickerItem checkInDate={checkInDate} handleCheckInDate={handleCheckInDate} />

          <RadioFrom />
          
          <div className='mt-14'>
            <p className='text-italic'>*Pastikan semua data telah benar</p>
            <button type='submit' className='mt-2 px-8 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-500'>
              Selanjutnya
            </button>
          </div>
        </form>
      </div>


    </div>
  );
}

export default App;
