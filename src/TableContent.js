import React from 'react'

import { Table, TableHead, TableCellHead, TableRowHead, TableBody, TableRow, TableCell } from '@dhis2/ui'

const TableContent = (props) => {
    
    let data = props.items;
    return(
        <Table dataTest="dhis2-uicore-table">
            <TableHead dataTest="dhis2-uicore-tablehead">
                 <TableRowHead dataTest="dhis2-uicore-tablerowhead">
                     <TableCellHead dataTest="dhis2-uicore-tablecellhead">Key</TableCellHead>
                     <TableCellHead dataTest="dhis2-uicore-tablecellhead">Value</TableCellHead>
                 </TableRowHead>
            </TableHead>
            <TableBody dataTest="dhis2-uicore-tablebody">
                <TableRow dataTest="dhis2-uicore-tablerow">
                    <TableCell dataTest="dhis2-uicore-tablecell">
                        id
                    </TableCell>
                    <TableCell dataTest="details-id">
                        {data.id}
                    </TableCell>
                </TableRow>
                <TableRow dataTest="dhis2-uicore-tablerow">
                    <TableCell dataTest="dhis2-uicore-tablecell">
                        name
                    </TableCell>
                    <TableCell dataTest="details-name">
                        {data.name}
                    </TableCell>
                </TableRow>
                <TableRow dataTest="dhis2-uicore-tablerow">
                    <TableCell dataTest="dhis2-uicore-tablecell">
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