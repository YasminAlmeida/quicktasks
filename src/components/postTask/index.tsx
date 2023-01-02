import React, { useState } from "react";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { ICreateTask } from "../../types/typesInterface";
import { useNavigate } from "react-router-dom";
import Loading from "../loading";
type Props = {
  tasksCreated: ICreateTask;
  setReload: (value: boolean) => void;
  reload: boolean;
};
export const PostTask = ({ tasksCreated ,setReload,
  reload}: Props): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = React.useState<ICreateTask["user"][]>([]);
  const [categories, setCategories] = React.useState<ICreateTask["category"][]>(
    []
  );
  const [loading, setLoading] = React.useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ICreateTask>();
  const navigate = useNavigate();

  React.useEffect(() => {
    getuser();
    getCategory();
    if (tasksCreated) {
      reset(tasksCreated);
    }
  }, [tasksCreated, reset]);
  async function getuser() {
    const res = await api.getUsers();
    setUser(res);
  }
  async function getCategory() {
    const res = await api.getCategories();
    setCategories(res);
  }
  async function onSubmit(data: ICreateTask) {
  await   api.postTasks(data);
  setReload(!reload);
    setShowModal(false);
    setLoading(true);
  }
  return (
    <>
      <S.TooltipCard onClick={() => setShowModal(true)}>
        <S.TooltipText>
          <h3>+</h3>
        </S.TooltipText>
        <S.TooltipBox>
          <p>Add Task</p>
        </S.TooltipBox>
      </S.TooltipCard>
      <div>
        {showModal && (
          <S.ContainerModal>
            <S.Modal>
              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.ContainerLeft>
                  <div>
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
                    <S.BtnUser type="button"  onClick={() => navigate(`/users`)}>Add User</S.BtnUser>
                  </div>
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
                  <S.InputDescription
                    id="description"
                    {...register("description")}
                  />
                  {!loading  &&(
                    <S.BtnSubmit type="submit" style={{height:"40px"}}>
                      <Loading />
                    </S.BtnSubmit>
                  )}
                  {loading && (
                    <S.BtnSubmit type="submit">Submit</S.BtnSubmit>
                  )}
                </S.ContainerRigth>
              </S.Form>
              <S.BtnModal onClick={() => setShowModal(false)}>X</S.BtnModal>
            </S.Modal>
          </S.ContainerModal>
        )}
      </div>
    </>
  );
};

export default PostTask;
