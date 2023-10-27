"use client";

import { Table } from "flowbite-react";

export default function TableHarga() {
  return (
    <div className=" w-full border-2 border-black rounded-xl">
      <Table>
        <Table.Head className="w-full border-b-2 border-black rounded-xl">
          <Table.HeadCell>Tahap</Table.HeadCell>
          <Table.HeadCell>Tanggal Pembayaran</Table.HeadCell>
          <Table.HeadCell>Jumlah</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 ">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-r-2 border-black">
              Uang Muka
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-r-2 border-black">
              17 September 2023
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Rp 6.000.000
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-r-2 border-black">
              Bayar ke-2
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-r-2 border-black">
              17 September 2023
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Rp 6.000.000
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-r-2 border-black">
              Bayar ke-3
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-r-2 border-black">
              17 September 2023
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Rp 6.000.000
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
