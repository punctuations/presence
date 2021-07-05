const imageToBase64 = require("image-to-base64");

export async function urlBase(url: string): Promise<string> {
  let encoded: string = "";

  await imageToBase64(url)
    .then((response: string) => {
      return (encoded = response);
    })
    .catch((error: any) => {
      console.log(error);
    });

  return encoded;
}
