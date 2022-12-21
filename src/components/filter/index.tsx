import React from "react";
import * as S from "./styles";

import { api } from "../../services/api";
import { IResponseTask } from "../../types/typesInterface";

type IProps = {
  filterType: string;
  setFilterType: (filterType: string) => void;
  filterValue: string;
  setFilterValue: (filterValue: string) => void;
};

export const Filter = ({
  filterType,
  setFilterType,
  filterValue,
  setFilterValue,
}: IProps): JSX.Element => {
  const [clients, setClients] = React.useState<IResponseTask["client"][]>([]);

  React.useEffect(() => {
    getClients();
  }, []);

 async function getClients() {
    const res = await api.getUsers();
    setClients(res);
    console.log(res)
  }

  return (
    <S.COntainerFilter>
      <S.Select onChange={(e) => setFilterType(e.target.value)}>
        <option value={"none"}>Nenhum</option>
        <option value={"users"}>Usiario</option>
      </S.Select>

      {filterType === "users" && (
        <S.Select onChange={(e) => setFilterValue(e.target.value)}>
          {clients.map((client) => (
            <option key={client.id.toString() + client.name} value={client.id}>{client.name}</option>
          ))}
        </S.Select>
      )}
      {filterType !== "none" && (
        <button  >Buscar</button>
      )}
    </S.COntainerFilter>
  );
};
export default Filter;
