export const getRandomItems = (items: string[], length: number): string[] => items.slice().sort(() => 0.5 - Math.random()).slice(0,length);
