import React, {useId} from "react";
import { IResponseTask } from "../../types/typesInterface";
import * as S from "./styles";
import Dots from "../assets/dots.svg";
import Tool from "../assets/tool.gif"
import { useNavigate } from "react-router-dom";


type Props = {
  tasks: IResponseTask[];
};
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

export const Tasks = ({ tasks }: Props): JSX.Element => {
  const id = useId();
  const navigate = useNavigate();
  return (
    <S.SectionContainerTask>
      <S.TasksContainer>
        {tasks.map((tasks) => {
          return (
            <>
              {tasks.category.id === 1 && (
                <>                  
                  <S.ContainersTasks  
                    onClick={() => navigate(`/task/${tasks.id}`)}
                    key={id}
                    style={{
                      backgroundImage: `url(${Dots})`,
                      objectFit: "cover",
                    }}
                  >
                    <S.ContainerAbsolut>
                      <S.NameCategory>{tasks.category.name}</S.NameCategory>
                      <S.Btn><img src={Tool} alt="tool" /></S.Btn>
                    </S.ContainerAbsolut>
                    
                    <S.LeftContainer>
                      <S.TextStatus
                        color={modificationOfColorDependesOfResponseTaskStatus(
                          tasks
                        )}
                      >
                        {tasks.taskStatus}
                      </S.TextStatus>
                      <p>{tasks.client.name}</p>
                    </S.LeftContainer>
                    <div>
                      <p>{tasks.description}</p>
                    </div>

                  </S.ContainersTasks>
                </>
              )}
              {tasks.category.id === 2 && (
                <>
                  <S.ContainersTasks
                    onClick={() => navigate(`/task/${tasks.id}`)}
                    key={id}
                    style={{
                      backgroundImage: `url(${Dots})`,
                      objectFit: "cover",
                    }}
                  >
                    <S.LeftContainer>
                      <S.TextStatus
                        color={modificationOfColorDependesOfResponseTaskStatus(
                          tasks
                        )}
                      >
                        {tasks.taskStatus}
                      </S.TextStatus>
                      <p>{tasks.client.name}</p>
                    </S.LeftContainer>
                    <div>
                      <p>{tasks.description}</p>
                    </div>
                  </S.ContainersTasks>
                </>
              )}
              {tasks.category.id === 3 && (
                <>
                  <S.ContainersTasks
                    onClick={() => navigate(`/task/${tasks.id}`)}
                    key={id}
                    style={{
                      backgroundImage: `url(${Dots})`,
                      objectFit: "cover",
                    }}
                  >
                    <S.LeftContainer>
                      <S.TextStatus
                        color={modificationOfColorDependesOfResponseTaskStatus(
                          tasks
                        )}
                      >
                        {tasks.taskStatus}
                      </S.TextStatus>
                      <p>{tasks.client.name}</p>
                    </S.LeftContainer>
                    <div>
                      <p>{tasks.description}</p>
                    </div>
                  </S.ContainersTasks>
                </>
              )}
            </>
          );
        })}
      </S.TasksContainer>
    </S.SectionContainerTask>
  );
};

export default Tasks;
