export interface InventoryItem {
    id: number;
    inventoryId: string;
    itemName: string;
    category: string;
    brand: string;
    dosageStrengthNumber: number;
    dosageStrengthUnit: string;
    quantity: number;
    price: number;
    picture: string;
    createdAt: string;
    updatedAt: string;
    pharmacyId: string;
    status?:string
}

export interface inventory {
    status: string;
    data: InventoryItem;
}
