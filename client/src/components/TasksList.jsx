import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteTask} from '../features/tasks/taskSlice';

function TasksList() {
  const tasks = useSelector(state => state.tasks);
  // console.log(tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
    // console.log(id);
  }
  return (
    <>
      {/* TasksList */}
      <header>
        <h1>Tasks {tasks.length}</h1>
      <Link to={'/create_task'}> Create Task </Link>

      </header>

      {tasks.map(task => {
        return (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <Link to={`/edit_task/${task.id}`}>Edit</Link>
          </div>
        )
      })}
    </>
  )
}
export default TasksList;