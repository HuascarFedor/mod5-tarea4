"use client";

import axios from 'axios';

interface RemoveBtnProps {
  id: number; // Suponiendo que el ID es un número
  onRemove: (id: number) => void; // Función para manejar la eliminación
}

export default function RemoveBtn({ id, onRemove }: RemoveBtnProps) {
    const removeProduct= async () => {
      const token = sessionStorage.getItem('token'); // Obtén el token de sesión
      try {
        // Verifica si el token existe
        if (!token) {
          throw new Error('Token not found');
        }

        const headers = { 
            'Authorization': `Bearer ${token}`,
            'Accept': '*/*'
        };

        // Realiza la solicitud DELETE
        const response = await axios.delete(`http://localhost:3000/api/products/${id}`, { headers });

        // Comprueba si la solicitud fue exitosa
        if (response.status === 200) {
          onRemove(id);
          console.log('Producto eliminado exitosamente.');
          // Actualiza la página después de eliminar el producto
        } else {
          console.error('Error al eliminar el producto.');
        }
      } catch (error) {
        console.error('Ocurrió un error al intentar eliminar el producto:', error);
      }
    };
    return (
      <button onClick={removeProduct} className="btn btn-error ml-2 remove">
        Eliminar
      </button>
    );
}