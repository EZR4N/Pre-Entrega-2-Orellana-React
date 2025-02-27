import React from 'react'
import ListadoProductos from '../ListadoProductos'

const HigienePersonal = ({productos}) => {
  let productosFiltrados = productos.filter(producto =>
    producto.categoria ==="higienePersonal"  
  )

  
  return (
    <>
    <ListadoProductos productos={productosFiltrados} titulo="Higiene personal"/>
    </>
  )
}

export default HigienePersonal
