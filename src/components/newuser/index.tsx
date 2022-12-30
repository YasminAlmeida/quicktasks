import React from "react";
import * as S from "./styles";

import { ICreateUser } from "../../types/typesInterface";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import Loading from "../loading";
type Props = {
  usersCreated: ICreateUser;
};

export const NewUser = ({ usersCreated }: Props): JSX.Element => {
  const [users, setUsers] = React.useState<ICreateUser[]>([]);
  const [actionType, setActionType] = React.useState<"create" | "update" | "list" >("create" as const);
  const [userSelected, setUserSelected] = React.useState<ICreateUser>({} as ICreateUser);
  const [loading, setLoading] = React.useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ICreateUser>();

  React.useEffect(() => {
    getUsers();
  }, [usersCreated]);

  async function getUsers() {
    const res = await api.getUsers();
    setUsers(res);
  }
  
  function newUsers(data: ICreateUser) {
    api.postUsers(data);
  }

  async function onSubmit(data: ICreateUser) {
   await api.putUsers(data.id as number, data);
   setLoading(true);
  }

  function handleSetUsetToEdit(id: string) {
    const user = users.find((user) => user.id === Number(id));
    if (user) {
      setUserSelected(user);
      reset(user);
    }else{
      setUserSelected({} as ICreateUser);
      reset({
        name: "",
        email: "",
        phone: "",
      });
    }
  }

  return (
    <S.Container>
      <S.ContainerRigth>
        <ul>
          <li onClick={()=>{setActionType("list")}}>
            <S.Pages>Existing users</S.Pages>
          </li>
          <li onClick={()=>{setActionType("create")}}>
            <S.Pages>Create users</S.Pages>
          </li> 
          <li onClick={()=>{setActionType("update")}}>
            <S.Pages>Update users</S.Pages>
          </li>
        </ul>
      </S.ContainerRigth>
      <S.ContainerLeft>
        {actionType === "list" && (
          <S.List>
            {users.map((user) => (
              <S.ContainerItems>
                <S.Item>User: {user.name}</S.Item>
                <S.Item>Email: {user.email}</S.Item>
                <S.Item>Phone: {user.phone}</S.Item>
              </S.ContainerItems>
            ))}
          </S.List> )}
        {actionType === "create" && (
        <S.Form onSubmit={handleSubmit(newUsers)}>
          <S.Input type="text" placeholder="Name" {...register("name")} />
          <S.Input type="text" placeholder="Email" {...register("email")} />
          <S.Input type="text" placeholder="Phone" {...register("phone")} />
          <S.Input
            type="text"
            placeholder="Password"
            {...register("password")}
          />
          {!loading  &&(
            <S.BtnSubmit type="submit" style={{height:"40px"}}>
              <Loading />
            </S.BtnSubmit>
          )}
          {loading && (
              <S.BtnSubmit type="submit">Create</S.BtnSubmit>
          )}
        </S.Form> )}
        {actionType === "update" && (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Select onChange={(e)=>{handleSetUsetToEdit(e.target.value)}} >
            <option value="">Select user</option>
            {users.map((client) => (
              <option
                key={client.id.toString() + client.name}
                value={client.id}
              >
                {client.name}
              </option>
            ))}
          </S.Select>
          <S.Input type="text" placeholder="Name" {...register("name")} />
          <S.Input type="text" placeholder="Email" {...register("email")} />
          <S.Input type="text" placeholder="Phone" {...register("phone")} />
          {!loading  &&(
            <S.BtnSubmit type="submit" style={{height:"40px"}}>
              <Loading />
            </S.BtnSubmit>
          )}
          {loading && (
              <S.BtnSubmit type="submit">Update</S.BtnSubmit>
          )}
        </S.Form>
        )}
      </S.ContainerLeft>
    </S.Container>
  );
};
