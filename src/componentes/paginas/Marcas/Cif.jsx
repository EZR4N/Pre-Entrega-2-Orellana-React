import React from 'react'
import ListadoProductos from '../ListadoProductos'

const Cif = ({productos}) => {
  let productosFiltrados = productos.filter(producto =>
    producto.marca=="Cif"
  )
  return (
    <ListadoProductos productos={productosFiltrados} titulo="Cif"/>
  )
}

export default Cif
