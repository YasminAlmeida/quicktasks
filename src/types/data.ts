import { useCallback, useState } from "react";
import {api, IParams} from "../services/api";
export const useComplete = () => {

const [params, setParams] = useState<IParams>({
} as IParams);

 interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}
const [options, setOptions] = useState<ColourOption[]>([]);

 const promiseOptions = useCallback(async(inputValue: number)=>{
  const res = await api.getByUserAndStatusAndPriorityAndCategory({
  user_id :inputValue,
  status_id :inputValue, 
  priority_id :inputValue,
  category_id :inputValue,
  page: 0,
  limit : 9,
  });
  setOptions(res.data)
  return res.data.map((option: any) => ({
    value: option.id.toString(),
    label: option.name,
  }));
},[])
}
export default useComplete;