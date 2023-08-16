export interface SoilSounding {
    id: number | string;
    description: string;
    point: string;
    address: string;
    layers: { depth: number; SPT: number }[];
}