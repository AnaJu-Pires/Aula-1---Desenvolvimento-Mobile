//o T aceita qualquer tipo (string, number, etc) e retorna um array do mesmo tipo
 export const unique = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};

//necessário para que o typescript entenda que o objeto pode ter chaves dinamicas
interface SimpleObject {
  [key: string]: any;
}

export const groupBy = <T extends SimpleObject>(arr: T[], key: keyof T) => {
  return arr.reduce(
    (acc, item) => {
      const groupKey = item[key] as string; //garante que a chave seja tratada como texto
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(item);
      return acc;
    },
    {} as Record<string, T[]>, //define que o resultado é um objeto de listas
  );
};

export const sumBy = <T extends SimpleObject>(
  arr: T[],
  key: keyof T,
): number => { // retorna sempre um number
  return arr.reduce((total, obj) => total + (obj[key] ?? 0), 0);
};
