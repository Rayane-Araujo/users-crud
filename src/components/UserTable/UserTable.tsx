import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHeaderCell,
  ActionIcons
} from './styles';
import { UserData } from '../../types/user';

interface Props {
  users: UserData[];
  onDelete: (index: number) => void;
}

const UserTable = ({ users, onDelete }: Props) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeaderCell align="left">Nome</TableHeaderCell>
            <TableHeaderCell align="right">Ações</TableHeaderCell>
          </TableRow>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.nome}</TableCell>
              <TableCell align="right">
              <ActionIcons>
                  <button>
                    <FaEye />
                  </button>
                  <button>
                    <FaEdit />
                  </button>
                  <button onClick={() => onDelete(index)}>
                    <FaTrash />
                  </button>
                </ActionIcons>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
