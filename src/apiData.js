import 'regenerator-runtime';
const apiKey = 'MZYdBOJCBWXGCPFDVxaD';

async function postData(inputName) {
    const fetchingURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;
  
    const data = {
      user: inputName,
      score: localStorage.getItem('score'),
    };
    try {
      const response = await fetch(fetchingURL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('Request Failed!');
    } catch (error) {
      return error;
    }
  }
  
  async function getData() {
    const fetchingURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;
    try {
      const response = await fetch(fetchingURL, {
        mode: 'cors',
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse.result;
      }
      throw new Error('Request Failed!');
    } catch (error) {
      return error;
    }
  }
  
  
  export { postData, getData };