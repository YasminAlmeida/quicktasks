import React from "react";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { IUpdateTask } from "../../types/typesInterface";
import { useNavigate } from "react-router-dom";

type Props = {
  tasksUpdate: IUpdateTask;
  setReload: (value: boolean) => void;
  reload: boolean;
};

export const PutTask = ({ tasksUpdate, setReload, reload }: Props): JSX.Element => {
  const [user, setUser] = React.useState<IUpdateTask["user"][]>([]);
  const [categories, setCategories] = React.useState<IUpdateTask["category"][]>(
    []
  );
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IUpdateTask>();

  React.useEffect(() => {
    getUsers();
    getCategory();
    setLoading(true);
    if (tasksUpdate) {
      reset(tasksUpdate);
    }
  }, [tasksUpdate, reset]);

  async function getUsers() {
    try{
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
      const res = await api.getCategories();
      setCategories(res);
      setLoading(false);
    }
    catch(err){
      console.log(err);
      setLoading(true);
    }
  }
  async function onSubmit(data: IUpdateTask) {
    try{
      await api.putTasks(data.id as number, data);
      setReload(!reload);
      navigate("/");
      setLoading(false);
    }
    catch(err){
      console.log(err);
      setLoading(true);
    }
  }
  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.ContainerLeft>
          <S.Label htmlFor="">User Name</S.Label>
          <S.Select id="" {...register("user.id")}>
            {user.map((user) => (
              <option
                key={user.id.toString() + user.name}
                value={user.id}
              >
                {user.name}
              </option>
            ))}
          </S.Select>
          <S.Label htmlFor="">Priority</S.Label>
          <S.Select id="" {...register("priorities")}>
            <option value="URGENT">Urgent</option>
            <option value="HIGH">High</option>
            <option value="NORMAL">Normal</option>
            <option value="LOW">Low</option>
          </S.Select>
          <S.Label htmlFor="">Status</S.Label>
          <S.Select id="" {...register("taskStatus")}>
            <option value="Open">Open</option>
            <option value="InProgress">InProgress</option>
            <option value="Closed">Closed</option>
          </S.Select>
          <S.Label htmlFor="">Category</S.Label>
          <S.Select id="" {...register("category.id")}>
            {categories.map((category) => (
              <option
                key={category.id.toString() + category.name}
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </S.Select>
        </S.ContainerLeft>

        <S.ContainerRigth>
          <S.Label htmlFor="">Description</S.Label>
          <S.InputDescription id="description" {...register("description")} />
          {!loading ? (
            <S.BtnSubmit type="submit" onClick={() => navigate(`/`)}>Submit Edition</S.BtnSubmit>
          ) : (
            <S.BtnSubmit type="submit">Loading...</S.BtnSubmit>
          )  
          }
        </S.ContainerRigth>
      </S.Form>
    </S.Container>
  );
};

export default PutTask;
