import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Record } from "../types/types";
import { Transform } from "stream";

const insomniaRecords: Record[] = [
  {
    id: 1,
    createdAt: "2023/08/29",
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
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("timeToBed", {
    header: "布団に入った時間",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("wakeUpTime", {
    header: "布団から出た時間",    
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("sleepTime", {
    header: "眠るまでの時間",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("numberOfAwaking", {
    header: "夜中に目覚めた回数",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("timeOfAwaking", {
    header: "夜中に目覚めていた時間",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("morningFeeling", {
    header: "起きた時の気分",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("qualityOfSleep", {
    header: "睡眠の質",
    cell: (info) => info.getValue(),
  }),
];

const RecordTable = () => {
  const [data, setData] = useState(() => [...insomniaRecords]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // const transposedTable = transpose(table);

  return (
    <div className="p-1">
      <table className="px-3 py-1 flex border-2 border-sky-600 rounded-lg">
        <thead className="px-2">
          {table.getHeaderGroups().map((headerGroup) => (
            <th key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <tr className="truncate" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </tr>
              ))}
            </th>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <th className="px-2 border-l-2 border-sky-600" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <tr key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </tr>
              ))}
            </th>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordTable;
