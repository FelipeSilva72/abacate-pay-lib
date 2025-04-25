export const urls = {
  pixQrCode: {
    create: "https://api.abacatepay.com/v1/pixQrCode/create",
    check: (id: string) =>
      `https://api.abacatepay.com/v1/pixQrCode/check?id=${id}`,
  },
};
