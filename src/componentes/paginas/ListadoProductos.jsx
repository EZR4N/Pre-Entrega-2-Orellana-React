import React from 'react'
import TarjetaProducto2 from './TarjetaProducto2'
import './ListadoProductos.scss'


const ListadoProductos = ({productos, titulo}) => {
  
  return (
    <>
    <div className='listadoProductosContainer'>
      <div className='listadoProductosFiltros'>
        <h3>Proximamente filtros de busqueda!</h3>
      </div>

      
      <div className="listadoProductosProductos">
      <div className="listadoProductosTitulo">
            <h2>{titulo}</h2>
            <h3>{productos.length} productos encontrados </h3>
      </div>
      {productos.map((producto) => (
          <TarjetaProducto2 key={producto.id} className="tarjetaListadoProductos" producto={producto}/> 
        )
        )}
        </div>
    </div>
    </>
  )
}

export default ListadoProductos
