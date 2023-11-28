export interface ProductData {
    name: string;
    description: string;
    specs: string[];
    price: number;
    discount: number;
    image?: File;
    images: File[];
    active: boolean;
    admin_id: string|null;
    category_id: string;
}