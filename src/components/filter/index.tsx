import React from "react";
import * as S from "./styles";

import { api, IParams } from "../../services/api";
import { IResponseTask } from "../../types/typesInterface";

type IProps = {
  filterType: string;
  setFilterType: (filterType: string) => void;
  params: IParams;
  setParams: (params: IParams) => void;
  ResetTheFilter: () => void;
  responseTask: IResponseTask[];
};

export const Filter = ({
  responseTask,
  filterType,
  setFilterType,
  params,
  setParams,
  ResetTheFilter,
}: IProps): JSX.Element => {
  const [user, setUser] = React.useState<IResponseTask["user"][]>([]);
  const [status, setStatus] = React.useState<IResponseTask["taskStatus"][]>([]);
  const [priorities, setPriority] = React.useState<
    IResponseTask["priorities"][]
  >([]);
  const [category, setCategory] = React.useState<IResponseTask["category"][]>(
    []
  );

  React.useEffect(() => {
    getuser();
    getStatus();
    getPriority();
    getCategory();
  }, [responseTask]);

  async function getuser() {
    const res = await api.getUsers();
    setUser(res);
  }
  async function getStatus() {
    const res = await api.getTasks();
    setStatus(res.taskStatus);
  }
  async function getPriority() {
    const res = await api.getTasks();
    setPriority(res.priorities);
  }
  async function getCategory() {
    const res = await api.getCategories();
    setCategory(res);
  }
  const DeleteInformation = () => {
    setFilterType("none");
    if (params !== null) {
      if (filterType === "none") {
        setParams({ ...params });
      }
      else if(filterType === "user") {
        setParams({ ...params, user_id: null });
      } else if (filterType === "status") {
        setParams({ ...params, status_id: null });
      } else if (filterType === "priority") {
        setParams({ ...params, priority_id: null });
      } else if (filterType === "category") {
        setParams({ ...params, category_id: null });
      }
      console.log(params)
    } else {
      ResetTheFilter();
    }
  };
  return (
    <S.ContainerFilter>
      <S.ContainerConfigurationFIlter>
        <S.Select
          onChange={(e) => setFilterType(e.target.value)}
          value={filterType}
        >
          <option value={"none"}>None</option>
          <option value={"user"}>User</option>
          <option value={"status"}>Status</option>
          <option value={"priority"}>Priorities</option>
          <option value={"category"}>Category</option>
        </S.Select>

        {filterType === "user" && (
          <S.Select
            onChange={(e) =>
              setParams({
                ...params,
                user_id: Number(e.target.value),
              })
            }
            value={Number(params.user_id)}
          >
            {user.map((client) => (
              <option
                key={client.id.toString() + client.name}
                value={client.id}
              >
                {client.name}
              </option>
            ))}
          </S.Select>
        )}
        {filterType === "status" && (
          <S.Select
            onChange={(e) =>
              setParams({
                ...params,
                status_id: Number(e.target.value),
              })
            }
          >
            <option value={1}>Open</option>
            <option value={2}>InProgress</option>
            <option value={3}>Closed</option>
          </S.Select>
        )}
        {filterType === "priority" && (
          <S.Select
            onChange={(e) =>
              setParams({
                ...params,
                priority_id: Number(e.target.value),
              })
            }
          >
            <option value={1}>Urgent</option>
            <option value={2}>Hitgh</option>
            <option value={3}>Normal</option>
            <option value={4}>Low</option>
          </S.Select>
        )}
        {filterType === "category" && (
          <S.Select
            onChange={(e) =>
              setParams({
                ...params,
                category_id: Number(e.target.value),
              })
            }
          >
            {category.map((category) => (
              <option
                key={category.id.toString() + category.name}
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </S.Select>
        )}
        {/* {filterType === "none" && <S.Btn onClick={ResetTheFilter}>Reset</S.Btn>} */}
        {params !== null && <S.Btn onClick={ResetTheFilter}>Reset</S.Btn>}

      </S.ContainerConfigurationFIlter>

      <S.ResultOfFilter>
        <h5>Filfer Active</h5>
        {Number(params.user_id) > 0 && params.user_id !== null && (
          <div>
            User
            <p onClick={DeleteInformation}>X</p>
          </div>
        )}
        {Number(params.status_id) > 0 && params.status_id !== null && (
          <div>
            Status
            <p onClick={DeleteInformation}>X</p>
          </div>
        )}
        {Number(params.priority_id) > 0 && params.priority_id !== null && (
          <div>
            Priority
            <p onClick={DeleteInformation}>X</p>
          </div>
        )}
        {Number(params.category_id) > 0 && params.category_id !== null && (
          <div>
            Category
            <p onClick={DeleteInformation}>X</p>
          </div>
        )}
      </S.ResultOfFilter>
    </S.ContainerFilter>
  );
};
export default Filter;
