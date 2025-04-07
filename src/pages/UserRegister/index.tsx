import { UserFormData } from "../../types/user";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import {
  Container,
  Content,
  FormSection,
  Title,
  Fieldset,
  InputGroup,
  Input,
  ErrorMessage,
  Actions,
  Button,
  TogglePassword,
  Legend,
  HeaderUsers,
  Card,
  ActionsForm,
  MiniHeader,
  HeaderTitle,
  LabelSection,
  InputWrapper,
} from "./styles";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import ArrowLeft from "../../assets/Arrow-Left.svg";
import EyeIcon from "../../assets/EyeIcon.svg";
import EyeOffIcon from "../../assets/EyeOffIcon.svg";
import CancelConfirmationModal from "../../components/Modal/CancelConfirmationModal";

const UserRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<UserFormData>({ mode: "onChange" });

  const navigate = useNavigate();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const senha = watch("senha");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data: UserFormData) => {
    const { nome, email, matricula, senha } = data;
    const novoUsuario = { nome, email, matricula, senha };

    const usuariosSalvos = JSON.parse(localStorage.getItem("users") || "[]");
    localStorage.setItem("users", JSON.stringify([...usuariosSalvos, novoUsuario]));

    toast.success("Usuário cadastrado com sucesso!");
    navigate("/usuarios");
  };

  const handleCancelClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Content>
          <HeaderUsers>
            <MiniHeader>
              <span>Usuários</span>
              <FiChevronRight />
              <span>Cadastro de usuários</span>
            </MiniHeader>

            <HeaderTitle>
              <img onClick={() => navigate("/usuarios")} src={ArrowLeft} alt="Arrow Left" />
              <Title>Cadastro de Usuários</Title>
            </HeaderTitle>

            <Actions />
          </HeaderUsers>

          <Card>
            <FormSection onSubmit={handleSubmit(onSubmit)}>
              <Fieldset>
                <LabelSection>
                  <Legend>Dados do Usuário</Legend>
                  <hr />
                </LabelSection>

                <InputGroup>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <InputWrapper>
                      <Input
                        placeholder="Insira o nome completo*"
                        maxLength={30}
                        {...register("nome", {
                          required: "Campo obrigatório",
                          pattern: {
                            value: /^[A-Za-zÀ-ÿ\s]+$/,
                            message: "Somente letras",
                          },
                        })}
                      />
                      {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
                    </InputWrapper>

                    <InputWrapper>
                      <Input
                        style={{ marginTop: "12px" }}
                        placeholder="Insira o E-mail*"
                        maxLength={40}
                        {...register("email", {
                          required: "Campo obrigatório",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "E-mail inválido",
                          },
                        })}
                      />
                      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </InputWrapper>
                  </div>

                  <InputWrapper>
                    <Input
                      placeholder="Insira o Nº da matrícula"
                      maxLength={10}
                      {...register("matricula", {
                        required: "Campo obrigatório",
                        pattern: {
                          value: /^[0-9]{4,10}$/,
                          message: "Apenas números (4-10 dígitos)",
                        },
                      })}
                    />
                    {errors.matricula && <ErrorMessage>{errors.matricula.message}</ErrorMessage>}
                  </InputWrapper>
                </InputGroup>
              </Fieldset>

              <Fieldset>
                <Legend>Dados de acesso</Legend>
                <hr />
                <InputGroup>
                  <InputWrapper style={{ position: "relative" }}>
                    <Input
                      type={mostrarSenha ? "text" : "password"}
                      placeholder="Senha"
                      {...register("senha", {
                        required: "Campo obrigatório",
                        pattern: {
                          value: /^[A-Za-z0-9]{6}$/,
                          message: "6 caracteres alfanuméricos",
                        },
                      })}
                    />
                    <TogglePassword type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                      <img src={mostrarSenha ? EyeOffIcon : EyeIcon} alt="Toggle password" />
                    </TogglePassword>
                    {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
                  </InputWrapper>

                  <InputWrapper style={{ position: "relative" }}>
                    <Input
                      type={mostrarSenha ? "text" : "password"}
                      placeholder="Repetir Senha"
                      {...register("repetirSenha", {
                        required: "Campo obrigatório",
                        validate: value => value === senha || "As senhas não coincidem",
                      })}
                    />
                    <TogglePassword type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                      <img src={mostrarSenha ? EyeOffIcon : EyeIcon} alt="Toggle password" />
                    </TogglePassword>
                    {errors.repetirSenha && <ErrorMessage>{errors.repetirSenha.message}</ErrorMessage>}
                  </InputWrapper>
                </InputGroup>
              </Fieldset>

              <ActionsForm>
                <Button $outline type="button" onClick={handleCancelClick}>
                  Cancelar
                </Button>
                <CancelConfirmationModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
                <Button type="submit" disabled={!isValid} $enabled={isValid}>
                  Cadastrar
                </Button>
              </ActionsForm>
            </FormSection>
          </Card>
        </Content>
      </Container>
    </>
  );
};

export default UserRegister;
