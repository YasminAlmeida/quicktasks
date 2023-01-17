import React, { useEffect, useState } from "react";
import * as S from "./styles";

import { IParams } from "../../services/api";
import { IResponseTask } from "../../types/typesInterface";
import useUsers from "../../hooks/useUsers";
import Select from 'react-select';

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
  const { users, category, priorities, status } = useUsers();

  useEffect(() => { }, [responseTask]);

  const DeleteInformation = () => {
    setFilterType("none");
    if (params !== null) {
      if (filterType === "none") {
        setParams({ ...params });
      }
      if (params.status_id) {
        setParams({ ...params, status_id: null });
      }
      if (params.user_id) {
        setParams({ ...params, user_id: null });
      }
      if (params.priority_id) {
        setParams({ ...params, priority_id: null });
      }
      if (params.category_id) {
        setParams({ ...params, category_id: null });
      }
    } else {
      ResetTheFilter();
    }
    console.log(params);
  };
  return (
    <>
      <S.ContainerFilter>
        <S.ContainerConfigurationFIlter>
          <S.Select
            onChange={(e) => setFilterType(e.target.value)}
            value={filterType}
          >
            <option value={"none"}>None</option>
            <option value={"user"}>User</option>
            <option value={"status"}>Status</option>
            <option value={"priorities"}>Priorities</option>
            <option value={"category"}>Category</option>
          </S.Select>

          {filterType === "user" && (
            <Select      
              name="colors"
              options={
                users.map((user) => {
                  return { value: user.id, label: user.name }
                })
              }
              onChange={(e) => {
                if (e === null) {
                  return;
                }
                setParams({
                  ...params,
                  user_id: e.value as any,
                })
              }}
              className="basic-multi-select"
              classNamePrefix="select"
            />
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
              <option value="">Select</option>
              <option value={1}>Open</option>
              <option value={2}>InProgress</option>
              <option value={3}>Closed</option>
            </S.Select>
          )}
          {filterType === "priorities" && (
            <S.Select
              onChange={(e) =>
                setParams({
                  ...params,
                  priority_id: Number(e.target.value),
                })
              }
            >
              <option value="">Select</option>
              <option value={1}>Urgent</option>
              <option value={2}>High</option>
              <option value={3}>Normal</option>
              <option value={4}>Low</option>
            </S.Select>
          )}
          {filterType === "category" && (
            <Select
              name="colors"
              options={
                category.map((category) => {
                  return { value: category.id, label: category.name }
                })
              }
              onChange={(e) => {
                if (e === null) {
                  return;
                }
                setParams({
                  ...params,
                  category_id: e.value as any,
                })
              }}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          )}
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
    </>

  );
};
export default Filter;
