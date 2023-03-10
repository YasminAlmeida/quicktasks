import { useState, useEffect } from "react";
import { api } from "../services/api";
import { ICreateUser,  IResponseTask} from "../types/typesInterface";
import useModal from "./useModal";

export const useUsers = () => {
  const [users, setUsers] = useState<ICreateUser[]>([]);
  const [loading, setLoading] = useState(false);
  const { modalSubmit, sent } = useModal();
  const [status, setStatus] = useState<IResponseTask["taskStatus"][]>([]);
  const [priorities, setPriority] = useState<IResponseTask["priorities"][]>([]);
  const [category, setCategory] = useState<IResponseTask["category"][]>(
    []
  );

  useEffect(() => {
    getUsers();
    getCategory()
  }, []);

  async function getUsers() {
    try {
      setLoading(true);
      const res = await api.getUsers();
      setUsers(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  }
  async function getCategory() {
    try{
      setLoading(true);
      const res = await api.getCategories();
      setCategory(res);
      setLoading(false);
    }
    catch(err){
      console.log(err);
      setLoading(true);
    }
  }
  async function newUsers(data: ICreateUser) {
    try {
      setLoading(true);
      getUsers().finally(() => {
        if (users.some(user => user.email === data.email)) {
          console.error("email já cadastrado");
          alert("Email já cadastrado");
        }
        else {
          api.postUsers(data);
          getUsers();
          modalSubmit();
        }
      });
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  }
  async function onSubmitFormUser(data: ICreateUser) {
    try {
      setLoading(true);
      await api.putUsers(data.id as number, data);
      getUsers();
      modalSubmit();
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  }

  return { users, loading, setLoading, newUsers, 
    onSubmitFormUser, sent, category, priorities, status, 
    setCategory, setPriority, setStatus };
};
export default useUsers;
