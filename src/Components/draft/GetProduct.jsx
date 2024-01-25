import axios from "axios";

async function GetProduct(setState) {
  try {
    const products = await axios("http://102.36.176.226:8081/user/getProducts");
    const data = products.data;
    console.log(data);

    if (data && Array.isArray(data.data.content)) {
      setState([...data.data.content]);
    } else {
      alert("Error: Sorry, We don't have this product!");
    }
  } catch (e) {
    console.log("an error was encountered");
    console.log(e);
  }
}
export default GetProduct;
