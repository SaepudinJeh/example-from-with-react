function RadioFrom () {
  return (
    <>
      <div className='mt-5'>
        <label>Tipe Warga negara</label>
        <div className="flex items-center mt-2">
          <div className="form-check form-check-inline mr-4">
            <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="WNI" />
            <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">WNI ( Warga Negara Indonesi )</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="WNA" />
            <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio20">WNA ( Warga Negara Asing )</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default RadioFrom;


