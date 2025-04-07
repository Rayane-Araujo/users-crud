export interface UserData {
    nome: string;
    email: string;
    avatar: string;
    matricula: string;
    senha: string;
    repetirSenha?: string;
}


export interface UserFormData {
    nome: string;
    email: string;
    matricula: string;
    senha: string;
    repetirSenha: string;
}

export interface CancelConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
};
  
  