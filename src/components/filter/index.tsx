import React from "react";
import * as S from "./styles";

import { api } from "../../services/api";
import { IResponseTask } from "../../types/typesInterface";

type IProps = {
  filterType: string;
  setFilterType: (filterType: string) => void;
  filterValue: string;
  setFilterValue: (filterValue: string) => void;
  handleSearch : () =>void;
  ResetTheFilter: () => void;
};

export const Filter = ({
  filterType,
  setFilterType,
  filterValue,
  handleSearch,
  setFilterValue,
  ResetTheFilter
}: IProps): JSX.Element => {
  const [clients, setClients] = React.useState<IResponseTask["client"][]>([]);
  const [status, setStatus] = React.useState<IResponseTask["taskStatus"][]>([]);
  const [priorities, setPriority] = React.useState<IResponseTask["priorities"][]>(
    []
  );
  const [category, setCategory] = React.useState<IResponseTask["category"][]>(
    []
  );
 
  React.useEffect(() => {
    getClients();
    getStatus();
    getPriority();
    getCategory();
  }, []);

  

  async function getClients() {
    const res = await api.getUsers();
    setClients(res);
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
  return (
    <S.ContainerFilter>
      <S.Select onChange={(e) => setFilterType(e.target.value)} value={filterType}>
        <option value={"none"}>None</option>
        <option value={"users"}>User</option>
        <option value={"status"}>Status</option>
        <option value={"priority"}>Priorities</option>
        <option value={"category"}>Category</option>
      </S.Select>
      {filterType === "users" && (
        <S.Select onChange={(e) => setFilterValue(e.target.value)}>
          {clients.map((client) => (
            <option key={client.id.toString() + client.name} value={client.id}>
              {client.name}
            </option>
          ))}
        </S.Select>
      )}
      {filterType === "status" && (
        <S.Select onChange={(e) => setFilterValue(e.target.value)}>
          <option value={1}>Open</option>
          <option value={2}>InProgress</option>
          <option value={3}>Closed</option>
        </S.Select>
      )}
      {filterType === "priority" && (
        <S.Select onChange={(e) => setFilterValue(e.target.value)}>
          <option value={1}>Urgent</option>
          <option value={2}>Hitgh</option>
          <option value={3}>Normal</option>
          <option value={4}>Low</option>
        </S.Select>
      )}
      {filterType === "category" && (
        <S.Select onChange={(e) => setFilterValue(e.target.value)}>
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
      {filterType !== "none" && <S.Btn onClick={handleSearch} >Buscar</S.Btn>}
      {filterType === "none" && <S.Btn onClick={ResetTheFilter} >Reset</S.Btn>}
    </S.ContainerFilter>
  );
};
export default Filter;
