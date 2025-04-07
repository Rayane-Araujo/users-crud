import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 8px;
  overflow-x: auto;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

interface AlignProps {
  align?: 'left' | 'right';
}

export const TableHead = styled.th<AlignProps>`
  background-color: #081735;
  color: white;
  font-weight: 600;
  padding: 16px;
  text-align: ${(props) => props.align || 'left'};
`;

export const TableHeaderCell = styled(TableHead)``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td<AlignProps>`
  padding: 16px;
  font-size: 14px;
  color: #081735;
  text-align: ${(props) => props.align || 'left'};
`;

export const ActionIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  button {
    background-color: #f5f6fa;
    border: none;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    cursor: pointer;

    svg {
      color: #081735;
      font-size: 18px;
      transition: color 0.2s ease;
    }

    &:hover {
      background-color: #0290a4;

      svg {
        color: #fff;
      }
    }
  }
`;
