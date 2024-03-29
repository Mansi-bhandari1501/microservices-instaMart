import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Stack, Typography } from '@mui/material';
import PaginationRounded from '../orderListNumber';
import OrderHeader from '../orderHeader';

const columns: GridColDef[] = [
  { field: 'productName', headerName: 'Product ', width: 300 },
  { field: 'id', headerName: 'Order ID', width: 200 },
  { field: 'Date', headerName: 'Date', width: 250, align: 'left' },
  // { field: 'id', headerName: 'Order ID', width: 70 },
  { field: 'customerName', headerName: 'Customer Name', width: 300 },
  {
    field: 'Amount', headerName: ' Amount', sortable: false, type: 'string', width: 300
  },
  {
    field: 'Status', headerName: 'Status', type: 'string', width: 180,
  },
];

const rows = [
  { id: 1, customerName: 'Snow', productName: 'Jon', Status: "pending", Amount: 100, Date: "mar 7,2024" },
  { id: 2, customerName: 'Lannister', productName: 'Cersei', Status: "pending", Amount: 12200 },
  { id: 3, customerName: 'Lannister', productName: 'Jaime', Status: "pending", Amount: 10550 },
  { id: 4, customerName: 'Stark', productName: 'Arya', Status: "pending", Amount: 1200 },
  { id: 5, customerName: 'Targaryen', productName: 'Daenerys', Status: "pending", Amount: 2100 },
  { id: 6, customerName: 'Melisandre', productName: null, Status: "pending", Amount: 1200 },
  { id: 7, customerName: 'Clifford', productName: 'Ferrara', Status: "pending", Amount: 14500 },
  { id: 8, customerName: 'Frances', productName: 'Rossini', Status: "pending", Amount: 10054 },
  { id: 9, customerName: 'Roxie', productName: 'Harvey', Status: "pending", Amount: 1002 },
  { id: 10, customerName: 'Targaryen', productName: 'Daenerys', Status: "pending", Amount: 1020 },
  { id: 11, customerName: 'Melisandre', productName: null, Status: "pending", Amount: 1070 },
  { id: 12, customerName: 'Clifford', productName: 'Ferrara', Status: "pending", Amount: 100 },
  { id: 13, customerName: 'Frances', productName: 'Rossini', Status: "pending", Amount: 1070 },
  { id: 14, customerName: 'Roxie', productName: 'Harvey', Status: "pending", Amount: 1070 },
  { id: 15, customerName: 'Targaryen', productName: 'Daenerys', Status: "pending", Amount: 1800 },
  { id: 16, customerName: 'Melisandre', productName: null, Status: "pending", Amount: 1070 },
  { id: 17, customerName: 'Clifford', productName: 'Ferrara', Status: "pending", Amount: 1080 },
  { id: 18, customerName: 'Frances', productName: 'Rossini', Status: "pending", Amount: 1800 },
  { id: 19, customerName: 'Roxie', productName: 'Harvey', Status: "pending", Amount: 10440 },
  { id: 20, customerName: 'Frances', productName: 'Rossini', Status: "pending", Amount: 10420 },
  { id: 9, customerName: 'Roxie', productName: 'Harvey', Status: "pending", Amount: 10720 },
  { id: 5, customerName: 'Targaryen', productName: 'Daenerys', Status: null, Amount: 107270 },
  { id: 6, customerName: 'Melisandre', productName: null, Status: "pending", Amount: 10410 },
  { id: 7, customerName: 'Clifford', productName: 'Ferrara', Status: "pending", Amount: 100 },
  { id: 8, customerName: 'Frances', productName: 'Rossini', Status: "pending", Amount: 10044 },
  { id: 9, customerName: 'Roxie', productName: 'Harvey', Status: "pending", Amount: 100147 },
];

export default function OrderList() {

  return (
    <Box height={"70vh"}>

<OrderHeader/>
      <Stack flexDirection={"column"} sx={{
        flexGrow: 1,
        backgroundColor: "white",
        height: "70vh", width: "78vw", marginLeft: "15px", marginTop: "10px",
        borderRadius: "20px"
      }}>
        <Typography margin={"20px"} fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>Recent Purchases</Typography>
        <div style={{ height: 660, width: '100%' }}>
          <DataGrid sx={{ margin: "10px", fontFamily: "Open sans", fontWeight: 600, fontSize: "15px" }}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
            hideFooter={true}
            checkboxSelection
          />
        </div>
      </Stack>
      <PaginationRounded />
    </Box>
  );
}