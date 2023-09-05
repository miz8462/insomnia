import { Dispatch, SetStateAction } from "react";
import {
  deleteRecord,
  getNewSevenRecords,
} from "../../../utils/supabaseFunctions";
import { Record } from "../types/types";
import Button from "./atom/Button";

type Props = {
  id: number;
  setShow: Dispatch<SetStateAction<boolean>>;
  setRecords: Dispatch<SetStateAction<Record[]>>;
};

const ModalForm = (props: Props) => {
  const { id, setShow, setRecords } = props;

  const closeModal = () => {
    setShow(false);
  };

  const deleteRecordModal = async () => {
    deleteRecord(id);
    setShow(false);
    const newRecords: any = await getNewSevenRecords();
    setRecords(newRecords);
  };

  return (
    <div
      className="text-white fixed top-0 left-0 w-full h-full flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        className="z-10 w-1/2 h-5/6 p-4 bg-sky-700 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <p>まどまど</p>
        <Button onClick={closeModal}>キャンセル</Button>
        <br />
        <Button onClick={deleteRecordModal}>削除</Button>
      </div>
    </div>
  );
};

export default ModalForm;
