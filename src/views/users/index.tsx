import React, {useEffect} from "react";
import * as S from "./styles";

import {api} from "../../services/api";
import {ICreateUser} from "../../types/typesInterface";
import {NewUser} from "../../components/newuser";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/arrow.png";

export const Users = () => {
  const [user, setUser] = React.useState<ICreateUser>({} as ICreateUser);
  const [reload, setReload] = React.useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    api.getUsers().then((response) => {
      setUser(response);
    });
  }, [reload]);
 
  return (
    <S.Container>
      <S.Arrow src={Arrow} alt="" onClick={() => navigate(`/`)} />
      <S.Title>User</S.Title>
      <NewUser 
      UsersCreated={user}
      setReload={setReload} 
      reload={reload}/>
    </S.Container>
  );
}
export default Users;