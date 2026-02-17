import fetch from "node-fetch";

async function test() {
  try {
    const res = await fetch("http://192.168.161.140:5000/api/v1/products", {
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

test();
