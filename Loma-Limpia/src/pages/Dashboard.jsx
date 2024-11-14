import React, { useState, useEffect } from 'react'
import { useAuthContext } from '@/hooks/useAuthContext'
import { Card, Button } from 'react-bootstrap'
import { getSingleUserService } from '@/services/userServices' // Importa tu servicio para obtener un usuario

const Dashboard = () => {
  const { userPayload } = useAuthContext()
  const [userData, setUserData] = useState({})
  const [showUploadedData, setShowUploadedData] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      if (userPayload?.id) {
        try {
          // Utilizamos el servicio de Axios para obtener los datos del usuario
          const response = await getSingleUserService(userPayload.id) // Asegúrate de que este servicio esté correctamente configurado
          if (response.status === 200) { // Verificamos si la respuesta es correcta
            setUserData(response.data)
            console.log('Datos del usuario:', response.data) // Log para verificar la respuesta
          } else {
            console.error('Error al obtener datos del usuario, estado:', response.status)
          }
        } catch (error) {
          console.error('Ocurrió un error en Dashboard:', error.message)
        }
      } else {
        console.warn('No hay ID de usuario disponible en userPayload')
      }
    }

    fetchUserData()
  }, [userPayload?.id]) // Solo se ejecuta si `userPayload.id` cambia

  return (
    <div className='container mt-5'>
      <h1 className='mb-4 text-center'>¡Bienvenido al Dashboard!</h1>
      <h2 className='mb-4 text-center text-muted'>Esperamos que tengas un gran día.</h2>
      <Card style={{ maxWidth: '400px', margin: '0 auto', boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)' }}>
        <Card.Header>Información de la Cuenta</Card.Header>
        <Card.Body>
          {showUploadedData
            ? (
              <>
                <Card.Text>
                  <strong>Nombre:</strong> {userData.first_name || 'No disponible'} {userData.last_name || ''}
                </Card.Text>
                <Card.Text>
                  <strong>Género:</strong> {userData.gender || 'No disponible'}
                </Card.Text>
                <Card.Text>
                  <strong>Correo Electrónico:</strong> {userData.email || 'No disponible'}
                </Card.Text>
              </>
              )
            : (
              <Card.Text className='text-center text-muted'>
                Haga clic en "Mostrar Información" para ver los detalles de la cuenta.
              </Card.Text>
              )}
        </Card.Body>
        <Card.Footer>
          <Button
            variant='primary'
            onClick={() => setShowUploadedData(!showUploadedData)}
          >
            {showUploadedData ? 'Ocultar Información' : 'Mostrar Información'}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Dashboard
