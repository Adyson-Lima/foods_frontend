import { Link, useNavigate, useParams } from "react-router-dom";
import React,{useState, useEffect} from "react";
import api from '../../services/api';

export default function Foods(){

  const[my_foods, setFoods] = useState([]);
  const navigate = useNavigate();

  // READ, carrega dados da api
  useEffect(() => {
    api.get('api/v1/foods',{})
    .then(response => {setFoods(response.data)})
  },[]);

  // UPDATE, atualiza dados na api
  async function updateFood(id){
    try {
      navigate(`/newupdate/${id}`);
    } catch (error) {
      alert("Erro ao atualizar!");     
    }
  }

  // DELETE, remove dados na api
  async function deleteFood(id){
    try {
      await api.delete(`api/v1/foods/${id}`,{});
      setFoods(my_foods.filter(food => food.id !== id));
    } catch (error) {
      alert("Erro ao excluir!");      
    }
  }

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Foods Crud
      </div>
      <div className="card-body">

      <Link data-testid="mylink" className="btn btn-success" 
      style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

      <table data-testid="mytable" className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Description</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {my_foods.map(food => (
            <tr key={food.id}>
              <th scope="row">{food.id}</th>
                <td>{food.name}</td>
                <td>{food.description}</td>
                <td>

                  <button data-testid="mybtn1" type="button"
                  className="btn btn-outline-info" style={{margin: '2px'}}
                  onClick={() => updateFood(food.id)}>Editar</button>

                  <button data-testid="mybtn2" type="button"
                  className="btn btn-outline-danger" style={{margin: '2px'}}
                  onClick={() => deleteFood(food.id)}>Excluir</button>

                </td>
            </tr>
          ))}
          
        </tbody>
      </table>

      </div>
    </div>

  );
}