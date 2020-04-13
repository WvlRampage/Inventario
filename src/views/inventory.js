import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

const Inventory = () => {
  /**
   * @Autor Yeison
   * @Method Cambios ene  para la tabla
   */
  let columnsTitle = [
    { title: "Id", field: "id" },
    { title: "Nombre de producto", field: "productName" },
    { title: "Referencia", field: "reference" },
    { title: "Precio", field: "price" },
    { title: "Peso", field: "weight" },
    { title: "Categoría", field: "category" },
    { title: "Stock", field: "stock" },
    { title: "Fecha de creación", field: "creationDate" },
    { title: "Fecha de última venta", field: "lastSellData" },
  ]

<<<<<<< HEAD
  const [posts, setPosts] = useState({
    columns: columnsTitle,
    data: [],
  });

  /**
   * @Autor Solicitudes  a la DB
   */

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/posts'
    })
      .then(res => {
        console.log("estamos aca")
        console.log(res.data)
        setPosts({

          columns: posts.columns,
          data: res.data
=======
    let columnsTitle = [
        { title: "Id", field: "id" },
        { title: "Nombre de producto", field: "productName" },
        { title: "Referencia", field: "reference" },
        { title: "Precio", field: "price" },
        { title: "Peso", field: "weight" },
        { title: "Categoría", field: "category" },
        { title: "Stock", field: "stock" },
        { title: "Fecha de creación", field: "creationDate" },
        { title: "Fecha de última venta", field: "lastSellData" },
      ]
    
      const [posts, setPosts] = useState({
        columns: columnsTitle,
        data: [],
      });
      
      //Get the result of all items and saved into posts
      useEffect(() => {
        axios({
          method: 'GET',
          url: 'http://localhost:3000/posts'
    
>>>>>>> 8bf822ac734b74c304c084caea691a5d3a1b4878
        })

      }).catch(function (error) {
        console.log(error);
        console.log("estamos aca hay error")
      })
  }, []);

  /**
   * @Autor Yeison
   * @Method Se iniciao template por default
   */
  return (
    <>


      <div className='header'>
        Esta aplicacion tiene la finalidad de mostrar un CRUD para manejar artículos...
          </div>
<<<<<<< HEAD
=======
        <MaterialTable
          title="Inventario de productos"
          columns={posts.columns}
          data={posts.data}
          editable={{
              //Add a new row and update the state
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    setPosts(prevState => {
                        return { ...prevState, newData };
                      });
                    axios.post('http://localhost:3000/posts/', {
                        newData 
                    } )
                  }
                  resolve()
                }, 1000)
              }),
              //update the row and update the state
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = posts.data;
                    const index = data.indexOf(oldData);
                    data[index] = newData;
                    setPosts(prevState => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(newData), 1);
                        return { ...prevState, newData };
                      });
                    axios.put('http://localhost:3000/posts/', {
                        id: '2',
                        weight: 'Tophat Cat'
                    })
                  }
                  resolve()
                }, 1000)
              }),
              //Delete the row and update the state
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                 
                    console.log(oldData)
                    setPosts(prevState => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                      });
                    axios.delete('http://localhost:3000/posts/', {
                       id: '1' 
                       })
                  }
                  resolve()
                }, 1000)
              }),
          }}
        />
        </>
      )
  }
>>>>>>> 8bf822ac734b74c304c084caea691a5d3a1b4878



      <MaterialTable
        title="Inventario de productos"
        columns={posts.columns}
        data={posts.data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  setPosts(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(newData), 1);
                    return { ...prevState, data };
                  });
                  axios.post('http://localhost:3000/posts/',
                    newData
                  )
                }
                console.log("Estamos esperando datos")
                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = posts.data;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  setPosts({ data }, () => resolve());
                }
                resolve()
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {

                  console.log(oldData)
                  setPosts(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                  axios.delete('http://localhost:3000/posts/', {
                    id: '1'
                  })
                }
                resolve()
              }, 1000)
            }),
        }}
      />
    </>
  )
}

export default Inventory