import  { ReactNode } from 'react';

import styled from '@emotion/styled'

type TableProps = {
    children: ReactNode;

}
const TableWrapper = styled.div`
    margin: 0 auto;
    overflow: scroll;
`;
const Table = styled.table`
    font-family: monospace;
    font-size: 1rem;
    line-height: 1.3;
     border-left: 1px solid #E7E7E7;

    & thead {
         background-color: rgba(5, 5, 5, 0.06);
         height: 2rem;

    }
    & tr {
        transition: .3s;
        height: 2rem;

        &:hover {
            background-color: rgba(5, 5, 5, 0.06);

        }
    }
    & td {
        border-bottom: 1px solid #E7E7E7;
        border-right: 1px solid #E7E7E7;

        &:nth-of-type(1) {
            font-weight: 600;
        }

        &:nth-of-type(3) {
            color: #E00000;
        }
    }
`;
const StyledTable: React.FC<TableProps> = ({ children }) => {
    return (
        <TableWrapper>
        <Table>{children}</Table>
        </TableWrapper>
        
    )
}
export default StyledTable

