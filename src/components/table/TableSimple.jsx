import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const TableSimple = ({header,data}) => {
  return (
    <Wrapper>
       

       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              header&&header.map((tableHeading,index)=>(
                <TableCell key={`table-header-${index}`} >{tableHeading}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          
          {
            data&&data.map((tableData,index)=>(
              <>
            <TableRow
             key={`table-data-row-${index}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                  <TableCell  align="left" component="th" scope="row">
                  {index+1}
                  </TableCell>
                  {
                    Object.keys(tableData).map((tableRowKey,tableDataIndex)=>(
                      <TableCell key={`basic-table-datacell-${tableDataIndex}`} align="left">{tableData[tableRowKey]}</TableCell>
                    ))
                  }
                 
            </TableRow>
                  </>
                ))
              }
        
        </TableBody>
      </Table>
    </TableContainer>


    </Wrapper>
  )
}

export default TableSimple

const Wrapper = styled.div`
`