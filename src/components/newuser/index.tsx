import React from "react";
import * as S from "./styles";

import { ICreateUser } from "../../types/typesInterface";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { setInterval } from "timers/promises";

type Props = {
  UsersCreated: ICreateUser;
  setReload: (value: boolean) => void;
  reload: boolean;
};

export const NewUser = ({
  UsersCreated,
  setReload,
  reload,
}: Props): JSX.Element => {
  const [users, setUsers] = React.useState<ICreateUser[]>([]);

  const [actionType, setActionType] = React.useState<
    "create" | "update" | "list"
  >("create" as const);
  const [userSelected, setUserSelected] = React.useState<ICreateUser>(
    {} as ICreateUser
  );
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ICreateUser>();

  React.useEffect(() => {
    getUsers();
    setLoading(true);
    
  }, [UsersCreated, reset]);

  
  async function getUsers() {
    try {
      const res = await api.getUsers();
      setUsers(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  }

  async function newUsers(data: ICreateUser) {
    try {
      await api.postUsers(data);
      setLoading(true);
      setReload(!reload);
      modalSubmit();
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  }

  async function onSubmit(data: ICreateUser) {modalSubmit();
    try {
      await api.putUsers(data.id as number, data);
      setLoading(true);
      setReload(!reload);
      modalSubmit();
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  }

  function modalSubmit(){
    setTimeout(() => {    
      setSent(false);
    }, 1000);    
    setSent(true);

  }

  function handleSetUsetToEdit(id: string) {
    try {
      const user = users.find((user) => user.id === Number(id));
      if (user) {
        setUserSelected(user);
        reset(user);
      } else {
        setUserSelected({} as ICreateUser);
        reset({
          name: "",
          email: "",
          phone: "",
        });
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  }

  return (
    <S.Container>
      <S.ContainerRigth>
        <ul>
          <li
            onClick={() => {
              setActionType("list");
            }}
          >
            <S.Pages>Existing users</S.Pages>
          </li>
          <li
            onClick={() => {
              setActionType("create");
            }}
          >
            <S.Pages>Create users</S.Pages>
          </li>
          <li
            onClick={() => {
              setActionType("update");
            }}
          >
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
          </S.List>
        )}
        {actionType === "create" && (
          <S.Form onSubmit={handleSubmit(newUsers)}>
            <S.Input type="text" placeholder="Name" {...register("name")} />
            <S.Input type="text" placeholder="Email" {...register("email")} />
            <S.Input type="text" placeholder="Phone" {...register("phone")} />
            <S.Input type="text" placeholder="Password" {...register("password")}/>
            {!loading ? (
              <>                
              <S.BtnSubmit type="submit">Create User</S.BtnSubmit>
              {!loading && sent===true && (
                <S.ContainerDone>
                  <div>
                    Done
                  </div>
                </S.ContainerDone>
              )}
            </>
            ) : (
              <S.BtnSubmit>Loading...</S.BtnSubmit>
            )}
          </S.Form>
        )}
        {actionType === "update" && (
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.Select
              onChange={(e) => {
                handleSetUsetToEdit(e.target.value);
              }}
            >
              <option value="">Select user</option>
              {users.map((user) => (
                <option key={user.id.toString() + user.name} value={user.id}>
                  {user.name}
                </option>
              ))}
            </S.Select>
            <S.Input type="text" placeholder="New Name" {...register("name")} />
            <S.Input
              type="text"
              placeholder="New Email"
              {...register("email")}
            />
            <S.Input
              type="text"
              placeholder="New Phone"
              {...register("phone")}
            />
            {!loading ? (
               <>                
               <S.BtnSubmit type="submit">Submit Edtion</S.BtnSubmit>
               {!loading && sent===true && (
                 <S.ContainerDone>
                   <div>
                     Done
                   </div>
                 </S.ContainerDone>
               )}
             </>
            ) : (
              <S.BtnSubmit>Loading...</S.BtnSubmit>
            )}
          </S.Form>
        )}
      </S.ContainerLeft>
    </S.Container>
  );
};
