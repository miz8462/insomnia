import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Record } from "../types/types";

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
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("timeToBed", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("wakeUpTime", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("sleepTime", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("numberOfAwaking", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("timeOfAwaking", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("morningFeeling", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("qualityOfSleep", {
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

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
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
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordTable;
