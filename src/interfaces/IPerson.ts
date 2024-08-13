// IPerson.ts
export interface IPerson {
  getName(): string;
  getCpf(): string;
  setName(name: string): void;
  setCpf(cpf: string): void;
}
