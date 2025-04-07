import { useEffect, useState } from 'react';
import Sidebar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import IconSearch from '../../assets/search-icon.svg';
import IconPlus from '../../assets/plus-sign.svg';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import UserTable from '../../components/UserTable/UserTable';
import DeleteConfirmationModal from '../../components/Modal/DeleteConfirmationModal';
import { toast } from 'react-toastify';

import {
  Container,
  HeaderUsers,
  Title,
  Actions,
  SearchInput,
  Card,
  EmptyState,
  Footer,
  FooterLeft,
  FooterRight,
  Pagination,
  Content,
  SearchContainer,
  AddButton
} from './styles';

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(storedUsers);
  }, []);

  const handleDeleteClick = (index: number) => {
    setSelectedUserIndex(index);
    setIsDeleteModalOpen(true);
  };
  
  const confirmDelete = () => {
    if (selectedUserIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers.splice(selectedUserIndex, 1);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
      toast.success('Usuário deletado com sucesso!');
      setIsDeleteModalOpen(false);
    }
  };
  

  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Content>
          <HeaderUsers>
            <Title>Usuários</Title>
            <Actions>
              <SearchContainer>
                <img src={IconSearch} alt="Buscar" />
                <SearchInput placeholder="Pesquisa" />
              </SearchContainer>
              <AddButton onClick={() => navigate('/userRegister')}>
                <img src={IconPlus} alt="Adicionar" />
                Cadastrar Usuário
              </AddButton>
            </Actions>
          </HeaderUsers>

          <Card>
            {users.length === 0 ? (
              <EmptyState>
                <h3>Nenhum Usuário Registrado</h3>
                <p>Clique em “Cadastrar Usuário” para começar a cadastrar.</p>
              </EmptyState>
            ) : (
              <><UserTable users={users} onDelete={handleDeleteClick} /><DeleteConfirmationModal
                  isOpen={isDeleteModalOpen}
                  onClose={() => setIsDeleteModalOpen(false)}
                  onConfirm={confirmDelete} userName={''} /></>
            )}
          </Card>

          <Footer>
            <FooterLeft>Total de itens: {users.length}</FooterLeft>
            <FooterRight>
              <span>Itens por página <strong>15</strong></span>
              <Pagination>
                <button><FiChevronsLeft size={16} /></button>
                <button><FiChevronLeft size={16} /></button>
                <button className="active">1</button>
                <button><FiChevronRight size={16} /></button>
                <button><FiChevronsRight size={16} /></button>
                <span>de 1</span>
              </Pagination>
            </FooterRight>
          </Footer>
        </Content>
      </Container>
    </>
  );
};

export default Users;
