import React, { useState } from "react";
import * as S from "./styles";

import { ICreateUser } from "../../types/typesInterface";
import { useForm } from "react-hook-form";
import useUsers from "../../hooks/useUsers";

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
  const [desable, setDesable] = useState(true);
  const [actionType, setActionType] = useState<"create" | "update" | "list">(
    "create" as const
  );
  const [userSelected, setUserSelected] = useState<ICreateUser>(
    {} as ICreateUser
  );
  const { users, loading, setLoading, newUsers, onSubmitFormUser, sent } =
    useUsers();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ICreateUser>();

  function handleSetUsetToEdit(id: string) {
    try {
      const user = users.find((user) => user.id === Number(id));
      setDesable(false);
      if (user) {
        setUserSelected(user);
        reset(user);
        setDesable(true);
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
            <S.Input
              type="text"
              placeholder="Name"
              {...register("name")}
              required
            />
            <S.Input
              type="text"
              placeholder="Email"
              {...register("email")}
              required
            />
            <S.Input
              type="text"
              placeholder="Phone"
              {...register("phone")}
              required
            />
            <S.Input
              type="text"
              placeholder="Password"
              {...register("password")}
              required
            />
            {!loading ? (
              <>
                <S.BtnSubmit type="submit">Create User</S.BtnSubmit>
                {sent === true && (
                  <S.ContainerDone>
                    <div>Done</div>
                  </S.ContainerDone>
                )}
              </>
            ) : (
              <S.BtnSubmit>Loading...</S.BtnSubmit>
            )}
          </S.Form>
        )}
        {actionType === "update" && (
          <S.Form onSubmit={handleSubmit(onSubmitFormUser)}>
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
            {desable === true ? (
              <>
                <S.Input
                  type="text"
                  placeholder="New Name"
                  {...register("name")}
                />
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
                    {sent === true && (
                      <S.ContainerDone>
                        <div>Done</div>
                      </S.ContainerDone>
                    )}
                  </>
                ) : (
                  <S.BtnSubmit>Loading...</S.BtnSubmit>
                )}
              </>
            ) : (
              <>
                <S.Input
                  disabled
                  type="text"
                  placeholder="New Name"
                  value=""
                />
                <S.Input
                  disabled
                  type="text"
                  placeholder="New Email"
                  value=""
                />
                <S.Input
                  disabled
                  type="text"
                  placeholder="New Phone"
                  value=""
                />
                  <S.BtnSubmit disabled>Loading...</S.BtnSubmit>      
              </>
            )}
          </S.Form>
        )}
      </S.ContainerLeft>
    </S.Container>
  );
};
