import { useState, useEffect } from "react";
import { api } from "../services/api";
import { IUpdateTask } from "../types/typesInterface";
import { useNavigate } from "react-router-dom";

export const useTasks = () => {
  const [user, setUser] = useState<IUpdateTask["user"][]>([]);
  const [categories, setCategories] = useState<IUpdateTask["category"][]>(
    []
  );
  const [task, setTask] = useState<IUpdateTask[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
    getCategory();
    setLoading(true);
  }, []);

  async function getUsers() {
    try{
      setLoading(true);
      const res = await api.getUsers();
      setUser(res);
      setLoading(false);
    }
    catch(err){
      console.log(err);
      setLoading(true);
    }
  }
  async function getCategory() {
    try{
      setLoading(true);
      const res = await api.getCategories();
      setCategories(res);
      setLoading(false);
    }
    catch(err){
      console.log(err);
      setLoading(true);
    }
  }

  async function onSubmiEdittFormTask(data: IUpdateTask) {
    try{
      setLoading(true);
      await api.putTasks(data.id as number, data);
      navigate("/");
      setLoading(false);
    }
    catch(err){
      console.log(err);
      setLoading(true);
    }
  }
  async function onSubmitCreateFormTask(data: IUpdateTask) {
    try{
      setLoading(true);
      const res = await api.postTasks(data);
      setTask(res); 
      setShowModal(false);
      setLoading(false);
    } catch(err){
      console.log(err);
      setLoading(true);
    }
  }  
  async function handleDeleteTask(id: number) {
    try {
    await  api.deleteTasks(id);
    } catch (err) {
      console.log(err)
    }
  }

  return{user, categories, loading, 
    onSubmiEdittFormTask, onSubmitCreateFormTask, 
    task, showModal, setShowModal, 
    handleDeleteTask};
}
export default useTasks;