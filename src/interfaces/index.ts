export interface SearchInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export interface TestimonyProps {
  nome: string;
  message: string;
  image: string;
}

export interface categoriasCardProps {
  titulo: string;
  imagem: string;
}

export interface CategoryProps {
  nome: string;
  imagem: string;
}

export interface CategoriaCardProps {
  titulo: string;
  imagem: string;
} 

export interface DivisorProps {
  width?: string
  marginTop?: string
  marginBottom?: string
}