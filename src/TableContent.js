import React from 'react'

import { Table, TableHead, TableCellHead, TableRowHead, TableBody, TableRow, TableCell } from '@dhis2/ui'

const TableContent = (props) => {
    
    let data = props.items;
    return(
        <Table>
            <TableHead>
                 <TableRowHead>
                     <TableCellHead>Key</TableCellHead>
                     <TableCellHead>Value</TableCellHead>
                 </TableRowHead>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        id
                    </TableCell>
                    <TableCell dataTest="details-id">
                        {data.id}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        name
                    </TableCell>
                    <TableCell dataTest="details-name">
                        {data.name}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        created
                    </TableCell>
                    <TableCell dataTest="details-created">
                        {data.created}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
} 
export default TableContent