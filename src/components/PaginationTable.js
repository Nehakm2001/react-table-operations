import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS, GROUPES_COLUMNS } from './columns'
import './table.css';

export const PaginationTable = () => {

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
    },
        usePagination)

    const { getTableProps,
        getTableBodyProps,
        headerGroups,  //group of headers
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        prepareRow,
    } = tableInstance

    const { pageIndex } = state

    return (
        <>
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

                        page.map(row => {
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


            </table><br />
            <div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span><br />
                <br />

<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>&nbsp;

                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>&nbsp;&nbsp;
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next Page</button>&nbsp;
       
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>

            </div>
        </>
    )
}
