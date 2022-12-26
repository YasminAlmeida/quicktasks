import React, {useEffect} from "react";
import * as S from "./styles";

import {api} from "../../services/api";
import {ICreateUser} from "../../types/typesInterface";
import {NewUser} from "../../components/newuser";

export const Users = () => {
  const [user, setUser] = React.useState<ICreateUser>({} as ICreateUser);

  useEffect(() => {
    api.getUsers().then((response) => {
      setUser(response);
    });
  }, []);
 
  return (
    <S.Container>
      <S.Title>Create User</S.Title>
      <NewUser usersCreated={user}/>
    </S.Container>
  );
}
export default Users;