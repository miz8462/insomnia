import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { getAllRecords } from "../../../utils/supabaseFunctions";
import { Record } from "../types/types";

const insomniaRecords: Record[] = [
  {
    id: 1,
    createdAt: "2023/08/2",
    timeToBed: "00:00",
    wakeUpTime: "08:00",
    sleepTime: 30,
    numberOfAwaking: 2,
    timeOfAwaking: 30,
    morningFeeling: 3,
    qualityOfSleep: 3,
  },
  {
    id: 2,
    createdAt: "2023/08/30",
    timeToBed: "01:00",
    wakeUpTime: "07:00",
    sleepTime: 0,
    numberOfAwaking: 1,
    timeOfAwaking: 10,
    morningFeeling: 4,
    qualityOfSleep: 5,
  },
];

const columnHelper = createColumnHelper<Record>();

const columns = [
  columnHelper.accessor("createdAt", {
    header: "日付",
    cell: (props) => props.getValue().slice(5, 10).replace("-", "/"),
  }),
  columnHelper.accessor("timeToBed", {
    header: "布団に入った時間",
    cell: (props) => props.getValue().slice(0, 5),
  }),
  columnHelper.accessor("wakeUpTime", {
    header: "布団から出た時間",
    cell: (props) => props.getValue().slice(0, 5),
  }),
  columnHelper.accessor("sleepTime", {
    header: "眠るまでの時間",
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor("numberOfAwaking", {
    header: "夜中に目覚めた回数",
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor("timeOfAwaking", {
    header: "夜中に目覚めていた時間",
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor("morningFeeling", {
    header: "起きた時の気分",
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor("qualityOfSleep", {
    header: "睡眠の質",
    cell: (props) => props.getValue(),
  }),
];

const RecordTable = () => {
  const [data, setData] = useState<Record[]>([]);
  useEffect(() => {
    const getRecords = async () => {
      const records = await getAllRecords();
      setData(records!);
    };
    getRecords();
  }, [data]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-1">
      <table className="px-3 py-1 flex border-2 border-sky-600 rounded-lg">
        <thead className="px-2">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="truncate flex " key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="flex">
          {table.getRowModel().rows.map((row) => (
            <tr className="px-3 border-l-2 border-sky-600" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <th className="flex flex-col" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordTable;
