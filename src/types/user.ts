export interface UserData {
    id: any;
    nome: string;
    email: string;
    avatar?: string;
}


export interface UserFormData {
    id: string | undefined;
    nome: string;
    email: string;
    matricula: string;
    senha: string;
    repetirSenha: string;
}

export interface CancelConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void; 
}
  
  