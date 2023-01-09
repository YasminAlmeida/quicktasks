import { useState } from "react";

export const useModal = () => {
  const [sent, setSent] = useState(false);

  function modalSubmit(){
    setTimeout(() => {    
      setSent(false);
    }, 1000);    
    setSent(true);
  }
  return { modalSubmit, sent };
}
export default useModal;