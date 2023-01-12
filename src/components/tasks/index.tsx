import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

import { IResponseTask } from "../../types/typesInterface";

import Dots from "../../assets/dots.svg";
import DeleteIcon from "../../assets/delete.png";
import EditIcon from "../../assets/pen.png";

import useTasks from "../../hooks/useTasks";
type Props = {
  tasks: IResponseTask[];
  setReload: (value: boolean) => void;
  reload: boolean;
};

export const Tasks = ({ tasks, setReload,
  reload, }: Props): JSX.Element => {
  const { handleDeleteTask } = useTasks();
  const randomNumber = getRandomNumber();
  const navigate = useNavigate();
  
  function modificationOfColorDependesOfResponseTaskStatus(
    tasks: IResponseTask
  ): string {
    if (tasks.taskStatus === "Open") {
      return "#90be6d";
    } else if (tasks.taskStatus === "InProgress") {
      return "#f9ae4c";
    } else if (tasks.taskStatus === "Closed") {
      return "#F94144";
    } else {
      return "#B2B2B2";
    }
  }
  function getRandomNumber() {
    return Math.floor(Math.random() * (36 - 2 + 1) + 2);
  }

  const deleteTask = async (id: number) => {
    await handleDeleteTask(id);
    setReload(!reload);
  }
  
  return (
    <S.SectionContainerTask>
      <S.TasksContainer>
        {tasks.map((tasks) => {
          return (
            <section key={tasks.id.toString()+randomNumber}>
              <div>
                {tasks.category.id === 1 && (
                  <S.ContainersTasks
                    key={tasks.moment.toString()+randomNumber}
                    style={{
                      backgroundImage: `url(${Dots})`,
                      objectFit: "cover",
                    }}
                  > <S.DeleteIcon
                      src={DeleteIcon}
                      onClick={() => {
                        deleteTask(tasks.id);
                      }}
                    />
               
                    <S.ContainerAbsolut>       
                      <S.NameCategory>{tasks.category.name}</S.NameCategory>
                      <S.Btn>
                        <img src={EditIcon} alt="tool" />
                      </S.Btn>
                    </S.ContainerAbsolut>

                    <S.LeftContainer
                       onClick={() => navigate(`/task/${tasks.id}`)}>
                      <div>
                        <S.TextStatus
                        color={modificationOfColorDependesOfResponseTaskStatus(
                          tasks
                        )}
                      >
                        {tasks.taskStatus}
                      </S.TextStatus>
                      <p>{tasks.user.name}</p>
                      <p>{tasks.priorities.toLocaleLowerCase()}</p>
                      </div>
                      
                    <div>
                      <p>{tasks.description}</p>
                    </div>
                    </S.LeftContainer>
                  </S.ContainersTasks>
                )}
              </div>

              <div>
                {tasks.category.id === 2 && (
                  <S.ContainersTasks
                    key={tasks.moment.toString()+randomNumber}
                    style={{
                      backgroundImage: `url(${Dots})`,
                      objectFit: "cover",
                    }}
                  >
                    <S.DeleteIcon
                      src={DeleteIcon}
                      onClick={() => {
                        deleteTask(tasks.id);
                      }}
                    />
                    <S.ContainerAbsolut
                      onClick={() => navigate(`/task/${tasks.id}`)}
                    >
                      <S.NameCategory>{tasks.category.name}</S.NameCategory>
                      <S.Btn>
                        <img src={EditIcon} alt="tool" />
                      </S.Btn>
                    </S.ContainerAbsolut>
                    <S.LeftContainer
                       onClick={() => navigate(`/task/${tasks.id}`)}>
                      <div>
                        <S.TextStatus
                        color={modificationOfColorDependesOfResponseTaskStatus(
                          tasks
                        )}
                      >
                        {tasks.taskStatus}
                      </S.TextStatus>
                      <p>{tasks.user.name}</p>
                      <p>{tasks.priorities.toLocaleLowerCase()}</p>
                      </div>
                    <div>
                      <p>{tasks.description}</p>
                    </div>
                    </S.LeftContainer>
                  </S.ContainersTasks>

                )}
              </div>

              <div>
                {tasks.category.id === 3 && (
                  <S.ContainersTasks
                    key={tasks.moment.toString()+randomNumber}
                    style={{
                      backgroundImage: `url(${Dots})`,
                      objectFit: "cover",
                    }}
                  > <S.DeleteIcon
                      src={DeleteIcon}
                      onClick={() => {
                        deleteTask(tasks.id);
                      }}
                    />
                    <S.ContainerAbsolut
                      onClick={() => navigate(`/task/${tasks.id}`)}
                    >
                      <S.NameCategory>{tasks.category.name}</S.NameCategory>
                      <S.Btn>
                        <img src={EditIcon} alt="tool" />
                      </S.Btn>
                    </S.ContainerAbsolut>
                    <S.LeftContainer
                       onClick={() => navigate(`/task/${tasks.id}`)}>
                      <div>
                        <S.TextStatus
                        color={modificationOfColorDependesOfResponseTaskStatus(
                          tasks
                        )}
                      >
                        {tasks.taskStatus}
                      </S.TextStatus>
                      <p>{tasks.user.name}</p>
                      <p>{tasks.priorities.toLocaleLowerCase()}</p>
                      </div>
                      
                    <div>
                      <p>{tasks.description}</p>
                    </div>
                    </S.LeftContainer>
                  </S.ContainersTasks>
                )}
              </div>
            </section>
          );})}
      </S.TasksContainer>
    </S.SectionContainerTask>
  );
};

export default Tasks;
