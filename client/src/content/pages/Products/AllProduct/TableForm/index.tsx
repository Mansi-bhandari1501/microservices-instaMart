import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../../../../app/hooks';

interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

// const columns: readonly Column[] = [
//     { id: 'name', label: 'Name', minWidth: 170 },
//     { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//     {
//         id: 'population',
//         label: 'Population',
//         minWidth: 170,
//         align: 'right',
//         format: (value: number) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'size',
//         label: 'Size\u00a0(km\u00b2)',
//         minWidth: 170,
//         align: 'right',
//         format: (value: number) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'density',
//         label: 'Density',
//         minWidth: 170,
//         align: 'right',
//         format: (value: number) => value.toFixed(2),
//     },
// ];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

function createData(
    name: string,
    code: string,
    population: number,
    size: number,
): Data {
    const density = population / size;
    return { name, code, population, size, density };
}

// const rows = [
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767),
// ];



function TableForm() {
const publications=[
    {
      "id": "1",
      "name": "Product Name"
    },
    {
      "id": "2",
      "name": "Description"
    },
    {
      "id": "3",
      "name": "Regular Price"
    },
    {
      "id": "4",
      "name": "Sale Price"
    },
    {
      "id": "5",
      "name": "Quantity"
    },
    {
      "id": "6",
      "name": "SKU"
    }
  ]
    const publicationsData = useAppSelector(state => state.product.products)
console.log(publicationsData)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (

        <Paper sx={{ width: '100%', height:"auto" }}>



<TableContainer component={Paper}>
        <TableHead>
          <TableRow >
            {publications.map((item) => (
              <TableCell key={item?.id}  sx={{width:"500PX",fontFamily:"rubik",fontSize:"22px",fontWeight:1000}}>{item?.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className='table'>
          {publicationsData.map((publication) => (
            <TableRow key={publication.uuId}>
              <TableCell sx={{fontFamily:"rubik",fontSize:"18px",fontWeight:800}}>{publication.productName}</TableCell>
              <TableCell sx={{fontFamily:"rubik",fontSize:"18px",fontWeight:300}}>{publication.description}</TableCell>
              <TableCell sx={{fontFamily:"rubik",fontSize:"18px",fontWeight:520}}>{publication.regularPrice}</TableCell>
              <TableCell sx={{fontFamily:"rubik",fontSize:"18px",fontWeight:520}}>{publication.salePrice}</TableCell>
              <TableCell sx={{fontFamily:"rubik",fontSize:"18px",fontWeight:520}}>{publication.quantity}</TableCell>
              <TableCell sx={{fontFamily:"rubik",fontSize:"18px",fontWeight:520}}>{publication.sku}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="table"
                count={publicationsData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default TableForm