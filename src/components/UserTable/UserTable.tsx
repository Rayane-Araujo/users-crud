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
import { useNavigate } from "react-router-dom";


interface Props {
  users: UserData[];
  onDelete: (index: number) => void;
}

const UserTable = ({ users, onDelete }: Props) => {
  const navigate = useNavigate();

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
                  <button onClick={() => navigate(`/userEdit/${user.id}`)}>
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
