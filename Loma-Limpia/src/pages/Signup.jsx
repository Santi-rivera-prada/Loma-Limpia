import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { registerUserService } from '@/services/userServices'
import '@/styles/form.css'
import logo from '@/assets/images/logo.jpg'

const Signup = () => {
  // usamos el hook useNavigate para redireccionar al usuario
  const navigate = useNavigate()

  // Paso 1: crear un objeto con valores iniciales:
  const datos = {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: ''
  }

  // Paso 2: Creo la función que se ejecutara al enviar el formulario
  const sendData = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 201) {
        console.log('Usuario creado exitosamente')
        navigate('/login')
      }
    } catch (error) {
      console.error('Ocurrio un error en Signup', error.message)
    }
  }

  // Paso 3: Hacer uso de mi custom hook
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt='' width='150' height='150' />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            value={input.first_name}
            onChange={handleInputChange}
            placeholder='John'
          />
          <label htmlFor='first_name'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            value={input.last_name}
            onChange={handleInputChange}
            placeholder='Doe'
          />
          <label htmlFor='last_name'>Last Name</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            value={input.gender}
            onChange={handleInputChange}
          >
            <option value=''>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={input.email}
            onChange={handleInputChange}
            placeholder='name@example.com'
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={input.password}
            onChange={handleInputChange}
            placeholder='Password'
          />
          <label htmlFor='password'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign up</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
      </form>
    </main>
  )
}
export default Signup
