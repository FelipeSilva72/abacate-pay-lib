type Status = "PENDING" | "EXPIRED" | "CANCELLED" | "PAID" | "REFUNDED";

export interface SimulatePaymentQRCode {
  id: string;
}

export interface SimulatePaymentResponseQRCode {
  data: {
    id: string;
    amount: number;
    status: Status;
    devMode: boolean;
    brCode: string;
    brCodeBase64: string;
    platformFee: number;
    createdAt: string;
    updatedAt: string;
    expiresAt: string;
  };
  error: string;
}
