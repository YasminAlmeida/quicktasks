import React, {useEffect} from "react";
import * as S from "./styles";

import {api} from "../../services/api";
import {ICreateUser} from "../../types/typesInterface";
import {NewUser} from "../../components/newuser";

export const Users = () => {
  const [user, setUser] = React.useState<ICreateUser>({} as ICreateUser);
  const [reload, setReload] = React.useState(false);

  useEffect(() => {
    api.getUsers().then((response) => {
      setUser(response);
    });
  }, [reload]);
 
  return (
    <S.Container>
      <S.Title>User</S.Title>
      <NewUser 
      UsersCreated={user}
      setReload={setReload} 
      reload={reload}/>
    </S.Container>
  );
}
export default Users;