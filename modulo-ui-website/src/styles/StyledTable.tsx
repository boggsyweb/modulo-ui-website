import  { ReactNode } from 'react';
import styled from '@emotion/styled'

type TableProps = {
    children: ReactNode;

}
const TableWrapper = styled.div`
    margin: 0 auto;
    overflow: scroll;
`;
const Table = styled.table<TableProps>`
    font-family: monospace;
    font-size: 1rem;
    line-height: 1.3;
     border: 1px solid #BCBCBC;

    & thead {
         background-color: rgba(5, 5, 5, 0.1);
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
        border-bottom: 1px solid #BCBCBC;
        border-right: 1px solid #BCBCBC;

        &:nth-of-type(1) {
            font-weight: 600;
        }

        &:nth-of-type(3) {
            color: #B20113;
        }
        &:last-of-type {
            border-right: none;
        }
        @media (prefers-color-scheme: dark) {
            &:nth-of-type(3) {
                color: #FEAEB9;
            }
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

