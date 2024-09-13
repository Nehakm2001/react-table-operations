import { format } from 'date-fns';
import ColumnFilter from './ColumnFilter';

//default filter for search is declared in filteringTable hence commented here
export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        // Filter: ColumnFilter
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
        // Filter: ColumnFilter
    },
    // {
    //     Header: 'Email Address',
    //     Footer: 'Email Address',
    //     accessor: 'email',
    //     Filter: ColumnFilter
    // },
    // {
    //     Header: 'Gender',
    //     accessor: 'gender'
    // },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
        // Filter: ColumnFilter
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
        // Filter: ColumnFilter
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
        // Filter: ColumnFilter
        // Cell: ({ value }) => { return format(new date(value, 'dd/MM/yyyy'))}
    }
]

export const GROUPES_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            },
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Email Address',
                Footer: 'Email Address',
                accessor: 'email'
            },
            // {
            //     Header: 'Gender',
            //     accessor: 'gender'
            // },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country'
            },
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'phone'
            },
            {
                Header: 'Date of Birth',
                Footer: 'Date of Birth',
                accessor: 'date_of_birth'
            }
        ]
    }
]