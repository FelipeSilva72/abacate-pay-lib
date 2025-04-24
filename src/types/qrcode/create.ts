type Customer = {
  /**
   * Nome completo do seu cliente
   */
  name: string;
  /**
   * Celular do cliente
   */
  cellphone: string;
  /**
   * E-mail do cliente
   */
  email: string;
  /**
   * CPF ou CNPJ do cliente.
   */
  taxId: string;
};

type Status = "PENDING" | "EXPIRED" | "CANCELLED" | "PAID" | "REFUNDED";

export interface CreateQRCode {
  /**
   * Valor da cobrança em centavos.
   */
  amount: number;
  /**
   * Tempo de expiração da cobrança em segundos.
   */
  expiresIn?: number;
  /**
   * Mensagem que aparecerá na hora do pagamento do PIX.
   */
  description?: number;
  /**
   * Os dados do seu cliente para criá-lo
   */
  customer?: Customer;
}

export interface ResponseCreateQrCode {
  data: {
    /**
     * Identificador único do QRCode Pix.
     */
    id: string;
    /**
     * Valor a ser pago.
     */
    amount: number;
    /**
     * Informação sobre o andamento do QRCode Pix.
     */
    status: Status;
    /**
     * Ambiente no qual o QRCode Pix foi criado.
     */
    devMode: boolean;
    /**
     * Código copia-e-cola do QRCode Pix.
     */
    brCode: string;
    /**
     * Imagem em Base64 do QRCode Pix.
     */
    brCodeBase64: string;
    /**
     * Taxas da plataforma
     */
    platformFee: number;
    /**
     * Data de criação do QRCode Pix.
     */
    createdAt: string;
    /**
     * Data de atualização do QRCode Pix.
     */
    updatedAt: string;
    /**
     * Data de expiração do QRCode Pix
     */
    expiresAt: string;
  };
  error: string;
}
