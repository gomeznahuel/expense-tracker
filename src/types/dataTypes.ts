export type Range = string;

export type Expense = {
  title: string;
  amount: number;
  category: string;
  date: string;
  time: string;
};

export type Deposits = {
  date: string;
  title: string;
  amount: number;
};

export enum Category {
  Bebida = "Bebida",
  Comida = "Comida",
  Deporte = "Deporte",
  Educacion = "Educacion",
  Juego = "Juego",
  Mascota = "Mascota",
  Regalo = "Regalo",
  Ropa = "Ropa",
  Salud = "Salud",
  Servicio = "Servicio",
  Supermercado = "Supermercado",
  Transporte = "Transporte",
}
