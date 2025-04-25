import axios from "axios";
import {
  CheckQRCode,
  CreateQRCode,
  ResponseCheckQrCode,
  ResponseCreateQrCode,
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
}
