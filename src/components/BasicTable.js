import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS, GROUPES_COLUMNS } from './columns'
import './table.css';

export const BasicTable = () => {

    //usetable hook recommends to memoise by using useMemo hook
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    //hook is simplyn a function which is called within a component
    // useTable({
    //     columns: COLUMNS,
    //     data: MOCK_DATA
    // })

    const tableInstance = useTable({
        columns,
        data
    })

    const { getTableProps,
        getTableBodyProps,
        headerGroups,  //group of headers
        footerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {/*  headerGroups -> headerGroup -> headers -> column -> Header */}
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}

            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    // rows -> cells -> cell -> Cell (each cell from MOCK_DATA)
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                                <td>

                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
            <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map((column) => (
                                    <td {...column.getFooterProps}>{column.render('Footer')}</td>
                                ))}
                        </tr>
                    ))}
            </tfoot>

        </table>
    )
}
