export interface ProductReview {
    readonly rating: number;
    readonly comment: string;
    readonly date: string; 
    readonly reviewerName: string;
    readonly reviewerEmail: string;
}

export interface ProductDimensions {
    readonly width: number;
    readonly height: number;
    readonly depth: number;
}

export interface ProductMeta {
    readonly createdAt: string; 
    readonly updatedAt: string;
    readonly barcode: string;
    readonly qrCode: string;
}

export interface Product {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly category: string;
    readonly price: number;
    readonly discountPercentage: number;
    readonly rating: number;
    readonly stock: number;
    readonly tags: string[];
    readonly brand: string;
    readonly sku: string;
    readonly weight: number;
    readonly dimensions: ProductDimensions;
    readonly warrantyInformation: string;
    readonly shippingInformation: string;
    readonly availabilityStatus: string;
    readonly reviews: ProductReview[];
    readonly returnPolicy: string;
    readonly minimumOrderQuantity: number;
    readonly meta: ProductMeta;
    readonly images: string[];
    readonly thumbnail: string;
}
