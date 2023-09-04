import { Dispatch, SetStateAction } from "react";
import { supabase } from "../../../utils/supabase";

type Props = {
  id: number;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};
const ModifyModal = (props: Props) => {
  const { id, show, setShow } = props;

  const closeModal = () => {
    setShow(false);
  };

  const onClickDelete = async () => {    
    await supabase.from("INSOMNIA_RECORDS").delete().eq("id", id);
  };

  if (show) {
    return (
      <div
        id="overlay"
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
        onClick={closeModal}
      >
        <div
          id="content"
          className="z-10 w-1/2 h-5/6 p-4 bg-sky-700 rounded-lg"
        >
          <p>まどまど</p>
          <button onClick={() => setShow(false)}>LOVE</button>
          <br />
          <button onClick={onClickDelete}>削除</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ModifyModal;
