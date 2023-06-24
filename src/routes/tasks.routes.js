import { Router } from "express";
import { createTask, deleteTask, getTask, getTasks, updateTasks } from "../controllers/tasks.controller";

const router = Router();

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.put('tasks/:id', updateTasks);
router.delete('tasks/:id', deleteTask);
router.get('/tasks/:id', getTask);

export default router;