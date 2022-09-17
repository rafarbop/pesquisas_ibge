async function requestPesquisas(url, data = {}) {
    const response = await fetch(url, {
      method: "GET",
      // body: JSON.stringify(data)
    });
    return response.json();
  }

export {requestPesquisas};