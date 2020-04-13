import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

const Inventory = () => {

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
      

      useEffect(() => {
        axios({
          method: 'GET',
          url: 'http://localhost:3000/posts'
    
        })
          .then(res => {
              console.log(res.data)
            
           setPosts({
             columns: posts.columns,
             data: res.data
           })
          }).catch(function (error) {
            console.log(error);
          })
      }, []);


      return (
          <>
          <div className='header'>
            Esta aplicacion tiene la finalidad de mostrar un CRUD para manejar artículos
          </div>
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