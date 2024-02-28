"use client";
import React from "react";
import * as dayjs from "dayjs";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import {Chip} from "@nextui-org/chip";
import {User} from "@nextui-org/user";
import {Pagination} from "@nextui-org/pagination";
import {columns, users, statusOptions} from "@/Data";
import {
  AddRounded,
  ExpandMoreRounded,
  MoreVertRounded,
  SearchRounded,
} from "@mui/icons-material";

const statusColorMap: any = {
  deliverd: "success",
  returned: "danger",
  dispatched: "warning",
  canceled: "danger",
};
const INITIAL_VISIBLE_COLUMNS = [
  "id",
  "name",
  "orderDate",
  "price",
  "status",
  "actions",
];

function capitalize(str: any) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function OrdersTable() {
  return (
    <div className="shadow-none mb-0  grid place-items-center gap-10 w-screen px-5 sm:px-10 md:px-20  overflow-scroll">
      Orders page
    </div>
  );
}

export default OrdersTable;
