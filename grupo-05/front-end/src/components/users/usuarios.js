import React, {useEffect, useState} from 'react'
import {Button,Table} from '@material-ui/core'

export default function Usuarios() {

    //Paso 1
    // Definir variable de usuarios con useState
    const[usuarios, setUsuarios] = useState ([]);

   //Paso 2
   //Cargar los datos del API on mount "Cuando se monta el componente"
   useEffect (() => {
     const cargarUsuarios = async () => {
    try {
        //Realizar una solicitud de GET (Usando axios para llegar al endpoint)
        //Reemplazar 'tu link' con el url del API
       const respuesta = await axios.get('tulink.com/usuarios')
       setUsuario = (respuesta.data)
        }
        catch (error)
        {
            console.error('revisen el link pls', error)
        }
     }
     cargarUsuarios()
   },[] );

    //Paso 3 Crear el resto de la logica del crud
    //handleUpdate
   const handleUpdate = async (userId, usuarioActualizado) => {
    try{
     await axios.put(`milink.com/usuarios/${userId}`, usuarioActualizado);
     setUsuarios(usuarios.map((user) => (user.id === userId ? usuarioActualizado : user)));
   } catch (error){
    console.log("link de error ", error);
   }
   };

     //Create POST de nuevos usuarios
   const handleCreate = async (nuevoUsuario) =>{
    try{
        const respuesta = await axios.post('tulink/usuario', nuevoUsuario)

        setUsuarios([...usuarios ,respuesta.data])
    }catch (error){
        console.error('link error', error)
    }
   }


 //Handle Delete (Manejo de eliminacion de datos desde el API
   const handleDelete = async (userId) => {
    try{
        await axios.delete(`tulink/usuario/${userId}`)

        setUsuarios(usuarios.filter((user)=> user.id !==userId));

    }catch (error){
        console.log('error', error)
    }
   };

  return (
    <div>    </div>
  )
}
