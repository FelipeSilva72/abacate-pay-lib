import axios from "axios";
import {
  CheckQRCode,
  CreateQRCode,
  ResponseCheckQrCode,
  ResponseCreateQrCode,
  SimulatePaymentQRCode,
  SimulatePaymentResponseQRCode,
} from "types";
import { urls } from "../index";

export class Qrcode {
  private token: string | null;

  constructor(token: string) {
    this.token = token;
  }
  /**
   * Permite que você crie um código copia-e-cola e um QRCode Pix para seu cliente fazer o pagamento.
   * @param data
   * @returns
   */
  public async create(data: CreateQRCode) {
    const response = await axios.post<ResponseCreateQrCode>(
      urls.pixQrCode.create,
      data,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  }
  /**
   * Checar status do pagamento do QRCode Pix.
   * @param data
   * @returns
   */
  public async check(data: CheckQRCode) {
    const response = await axios.get<ResponseCheckQrCode>(
      urls.pixQrCode.check(data.id),
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  }
  /**
   * Simula o pagamento de um QRCode Pix criado no modo de desenvolvimento.
   * @param data
   * @returns
   */
  public async simulatePayment(data: SimulatePaymentQRCode) {
    const response = await axios.post<SimulatePaymentResponseQRCode>(
      urls.pixQrCode.simulatePayment,
      data,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  }
}
