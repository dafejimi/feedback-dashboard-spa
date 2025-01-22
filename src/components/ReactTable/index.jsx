import React from "react";
import { flexRender, getCoreRowModel, useReactTable, getSortedRowModel } from "@tanstack/react-table";

const baseStyles = {
  th: "text-left px-4 py-2 border-b bg-gray-100 text-sm font-semibold",
  td: "text-left px-4 py-2 border-b text-sm",
};

const sizes = {
  xs: "py-2 text-xs",
  sm: "py-3 text-sm",
  md: "py-4 text-base",
};

const ReactTable = ({
  columns,
  data = [],
  headerProps = {},
  headerCellProps = {},
  bodyProps = {},
  className = "",
  rowDataProps = { className: "" },
  cellProps = { className: "" },
  size,
  ...restConfig
}) => {
  const tableConfig = {
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...restConfig,
  };

  const table = useReactTable(tableConfig);

  return (
    <table className={className}>
      <thead {...headerProps}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                style={{ width: header.column.columnDef?.meta?.width }}
                className={`${baseStyles.th} ${size ? sizes[size] : ""} ${headerCellProps?.className || ""}`}
                {...header.column.columnDef?.meta}
                {...headerCellProps}
              >
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...bodyProps}>
        {table.getRowModel().rows.map((row) => (
          <tr {...rowDataProps} className={`${rowDataProps?.className}`} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                style={{ width: cell.column.columnDef?.meta?.width }}
                className={`${baseStyles.td} ${size ? sizes[size] : ""} ${cellProps?.className || ""}`}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ReactTable };
