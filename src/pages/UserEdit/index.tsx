import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  Button, 
  TogglePassword, 
  Legend, 
  HeaderUsers, 
  Card, 
  ActionsForm, 
  MiniHeader, 
  HeaderTitle,
  LabelSection, 
  InputWrapper
} from "./styles";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";
import ArrowLeft from "../../assets/Arrow-Left.svg";
import EyeIcon from "../../assets/EyeIcon.svg";
import EyeOffIcon from "../../assets/EyeOffIcon.svg";
import CancelConfirmationModal from "../../components/Modal/CancelConfirmationModal";
import { UserFormData } from "../../types/user";

const UserEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usuarioIndex, setUsuarioIndex] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<UserFormData>({ mode: "onChange" });

  const senha = watch("senha");

  const onSubmit: SubmitHandler<UserFormData> = (data) => {
    if (usuarioIndex === null) return;

    const usuarios = JSON.parse(localStorage.getItem("users") || "[]");
    usuarios[usuarioIndex] = {
      id: usuarios[usuarioIndex].id,
      nome: data.nome,
      email: data.email,
      matricula: data.matricula,
      senha: data.senha,
    };

    localStorage.setItem("users", JSON.stringify(usuarios));
    toast.success("Usuário editado com sucesso!");
    navigate("/usuarios");
  };

  useEffect(() => {
    const usuarios = JSON.parse(localStorage.getItem("users") || "[]");
    const index = usuarios.findIndex((user: UserFormData) => user.id === id);

    if (index === -1) {
      toast.error("Usuário não encontrado.");
      navigate("/usuarios");
      return;
    }

    const user = usuarios[index];
    setUsuarioIndex(index);

    setValue("nome", user.nome);
    setValue("email", user.email);
    setValue("matricula", user.matricula);
    setValue("senha", user.senha);
    setValue("repetirSenha", user.senha);
  }, [id, setValue, navigate]);

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
              <span>Editar usuários</span>
            </MiniHeader>

            <HeaderTitle>
              <img onClick={() => navigate("/usuarios")} src={ArrowLeft} alt="Voltar" />
              <Title>Editar Usuários</Title>
            </HeaderTitle>
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
                      <Input placeholder="Nome completo*" maxLength={30}
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
                      <Input placeholder="E-mail*" maxLength={40}
                        style={{ marginTop: "12px" }}
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
                    <Input placeholder="Matrícula"
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
                      <img src={mostrarSenha ? EyeOffIcon : EyeIcon} alt="Ver senha" />
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
                      <img src={mostrarSenha ? EyeOffIcon : EyeIcon} alt="Ver senha" />
                    </TogglePassword>
                    {errors.repetirSenha && <ErrorMessage>{errors.repetirSenha.message}</ErrorMessage>}
                  </InputWrapper>
                </InputGroup>
              </Fieldset>

              <ActionsForm>
                <Button $outline type="button" onClick={handleCancelClick}>Cancelar</Button>
                <CancelConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={function (): void {
                  throw new Error("Function not implemented.");
                } } />
                <Button type="submit" disabled={!isValid} $enabled={isValid}>Salvar</Button>
              </ActionsForm>
            </FormSection>
          </Card>
        </Content>
      </Container>
    </>
  );
};

export default UserEdit;
