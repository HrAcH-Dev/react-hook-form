import { useForm } from 'react-hook-form'
import "./App.scss"

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }
  return (
    <div className="App">
      <div className="App-Container">
        <div className="App-text">
          <h1>React-Hook-Form Work</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="App-Container-valid">
            <label>First Name:</label>
            <input
              className='inp-text'
              placeholder='name'
              {...register('firstName', {
                required: "required",
                minLength: {
                  value: 5,
                  message: 'Minimum charachter 5'
                }
              })}
            />
            {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
          </div> 
          <div className="App-Container-valid">
            <label>Last Name:</label>
            <input
              className='inp-text'
              placeholder='lastname'
              {...register('lastName', {
                required: "required",
                minLength: {
                  value: 5,
                  message: 'Minimum charachter 5'
                }
              })}
            />
            {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
          </div>
          

          <input 
            className='inp-submit'
            type='submit' 
            value='submit' 
          />
        </form>
      </div>
    </div>
  );
}

export default App;
