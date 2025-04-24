type Status = "PENDING" | "EXPIRED" | "CANCELLED" | "PAID" | "REFUNDED";

export interface CheckQRCode {
  /**
   * ID do QRCode Pix
   */
  id: string;
}

export interface ResponseCheckQrCode {
  data: {
    /**
     * Informação sobre o andamento do QRCode Pix.
     * Available options: `PENDING`, `EXPIRED`, `CANCELLED`, `PAID`, `REFUNDED`
     */
    status: Status;
    /**
     * Data de expiração do QRCode Pix
     */
    expiresAt: string;
  };
  error: string;
}
