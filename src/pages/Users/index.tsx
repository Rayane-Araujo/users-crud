import Sidebar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import IconSearch from '../../assets/search-icon.svg';
import IconPlus from '../../assets/plus-sign.svg';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
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
  return(
    <>
      <div>
       <Header/>
      </div>
        <Container>
          <Sidebar/>
          <Content>
            <HeaderUsers>
              <Title>Usuários</Title>
              <Actions>
                <SearchContainer>
                    <img src={IconSearch} alt="Buscar" />
                    <SearchInput placeholder="Pesquisa" />
                </SearchContainer>
                <AddButton>
                    <img src={IconPlus} alt="Adicionar" />
                    Cadastrar Usuário
                </AddButton>
             </Actions>
            </HeaderUsers>
            <Card>
                <EmptyState>
                    <h3>Nenhum Usuário Registrado</h3>
                    <p>Clique em “Cadastrar Usuário” para começar a cadastrar.</p>
                </EmptyState>
            </Card>
            <Footer>
                <FooterLeft>Total de itens: 13</FooterLeft>
                <FooterRight>
                    <span>Itens por página <strong>15</strong></span>
                    <Pagination>
                        <button><FiChevronsLeft size={16} /></button>
                        <button><FiChevronLeft size={16} /></button>
                        <button className="active">1</button>
                        <button><FiChevronRight size={16} /></button>
                        <button><FiChevronsRight size={16} /></button>
                        <span>de 10</span>
                    </Pagination>
                </FooterRight>
            </Footer>
          </Content>  
       </Container>
    </> 
  );
}

export default Users;