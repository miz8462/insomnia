import { Dispatch, SetStateAction } from "react";
import { deleteRecord } from "../../../utils/supabaseFunctions";
import Button from "./atom/Button";

type Props = {
  id: number;
  setShow: Dispatch<SetStateAction<boolean>>;
};
const ModifyModal = (props: Props) => {
  const { id, setShow } = props;

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      // onClick={closeModal}
    >
      <div className="z-10 w-1/2 h-5/6 p-4 bg-sky-700 rounded-lg">
        <p>まどまど</p>
        <Button onClick={closeModal}>キャンセル</Button>
        <br />
        <Button onClick={() => deleteRecord(id)}>削除</Button>
      </div>
    </div>
  );
};

export default ModifyModal;
