interface InventoryItem {
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
}

interface inventory {
    status: string;
    data: InventoryItem;
}
