import axios from "axios";
import { CheckQRCode, ResponseCheckQrCode } from "types/qrcode/check";
import { CreateQRCode, ResponseCreateQrCode } from "types/qrcode/create";

const urls = {
  pixQrCode: {
    create: "https://api.abacatepay.com/v1/pixQrCode/create",
    check: (id: string) =>
      `https://api.abacatepay.com/v1/pixQrCode/check?id=${id}`,
  },
};

export class Qrcode {
  private token: string | null;

  constructor(token: string) {
    this.token = token;
  }
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
