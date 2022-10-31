import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from 'uuid'; //npm i --save-dev @types/uuid
import { useNavigate, useParams } from "react-router-dom";


function TasksForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector(state => state.tasks)
  const [task, setTask] = useState({
    title: "",
    description: ""
  })

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(task);
    if (params.id) {
      dispatch(editTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id: uuid()
      }))
    }
    navigate('/task')
  }

  //para comprobar si debo editar ó crear un task
  useEffect(() => {
    // console.log('cargó'); //veo que estoy en el link form
    // console.log(params); //veo el params
    if (params.id) {
      setTask(
        tasks.find(task => task.id === params.id)
      )
    }
  }, [])

  return (
    <>
      TasksForm
      <form onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder="title" onChange={handleChange} value={task.title} />
        <textarea name='description' placeholder='description' onChange={handleChange} value={task.description} />
        <button onClick={handleSubmit}>Save</button>
      </form>
    </>
  )
}
export default TasksForm;