import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { IResponseTask } from "../../types/typesInterface";

import Dots from "../../assets/dots.svg";
import Tool from "../../assets/tool.gif";
import DeleteIcon from "../../assets/delete.png";

type Props = {
  tasks: IResponseTask[];
  setReload: (value: boolean) => void;
  reload: boolean;
};

export const Tasks = ({ tasks, setReload,
  reload, }: Props): JSX.Element => {
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
  function handleDeleteTask(id: number) {
    try{
      api.deleteTasks(id);
      setReload(!reload);
    } catch(err){
      console.log(err)
    }
  }
  return (
    <S.SectionContainerTask>
      <S.TasksContainer>
        {tasks.map((tasks) => {
          return (
            <section>
              <div>
                {tasks.category.id === 1 && (
                  <>
                    <S.ContainersTasks
                      onClick={() => navigate(`/task/${tasks.id}`)}
                      key={tasks.id.toString()}
                      style={{
                        backgroundImage: `url(${Dots})`,
                        objectFit: "cover",
                      }}
                    > <S.DeleteIcon
                      src={DeleteIcon}
                      onClick={() => {
                        handleDeleteTask(tasks.id);
                      }}
                    />
                      <S.ContainerAbsolut>
                        <S.NameCategory>{tasks.category.name}</S.NameCategory>
                        <S.Btn>
                          <img src={Tool} alt="tool" />
                        </S.Btn>
                      </S.ContainerAbsolut>

                      <S.LeftContainer>
                        <S.TextStatus
                          color={modificationOfColorDependesOfResponseTaskStatus(
                            tasks
                          )}
                        >
                          {tasks.taskStatus}
                        </S.TextStatus>
                        <p>{tasks.user.name}</p>
                      </S.LeftContainer>
                      <div>
                        <p>{tasks.description}</p>
                      </div>
                    </S.ContainersTasks>
                  </>
                )}
              </div>

              <div>
                {tasks.category.id === 2 && (
                  <>
                    <S.ContainersTasks
                      onClick={() => navigate(`/task/${tasks.id}`)}
                      key={tasks.id.toString()}
                      style={{
                        backgroundImage: `url(${Dots})`,
                        objectFit: "cover",
                      }}
                    >
                      <S.DeleteIcon
                      src={DeleteIcon}
                      onClick={() => {
                        handleDeleteTask(tasks.id);
                      }}
                    />
                      <S.ContainerAbsolut>
                        <S.NameCategory>{tasks.category.name}</S.NameCategory>
                        <S.Btn>
                          <img src={Tool} alt="tool" />
                        </S.Btn>
                      </S.ContainerAbsolut>
                      <S.LeftContainer>
                        <S.TextStatus
                          color={modificationOfColorDependesOfResponseTaskStatus(
                            tasks
                          )}
                        >
                          {tasks.taskStatus}
                        </S.TextStatus>
                        <p>{tasks.user.name}</p>
                      </S.LeftContainer>
                      <div>
                        <p>{tasks.description}</p>
                      </div>
                    </S.ContainersTasks>
                  </>
                )}
              </div>

              <div>
                {tasks.category.id === 3 && (
                  <>
                    <S.ContainersTasks
                      onClick={() => navigate(`/task/${tasks.id}`)}
                      key={tasks.id.toString()}
                      style={{
                        backgroundImage: `url(${Dots})`,
                        objectFit: "cover",
                      }}
                    > <S.DeleteIcon
                      src={DeleteIcon}
                      onClick={() => {
                        handleDeleteTask(tasks.id);
                      }}
                    />
                      <S.ContainerAbsolut>
                        <S.NameCategory>{tasks.category.name}</S.NameCategory>
                        <S.Btn>
                          <img src={Tool} alt="tool" />
                        </S.Btn>
                      </S.ContainerAbsolut>
                      <S.LeftContainer>
                        <S.TextStatus
                          color={modificationOfColorDependesOfResponseTaskStatus(
                            tasks
                          )}
                        >
                          {tasks.taskStatus}
                        </S.TextStatus>
                        <p>{tasks.user.name}</p>
                      </S.LeftContainer>
                      <div>
                        <p>{tasks.description}</p>
                      </div>
                    </S.ContainersTasks>
                  </>
                )}
              </div>
            </section>
          );
        })}
      </S.TasksContainer>
    </S.SectionContainerTask>
  );
};

export default Tasks;
