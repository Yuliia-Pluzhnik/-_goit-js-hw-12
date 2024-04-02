export function getImage(query) {
    const BASE_URL = "https://pixabay.com";
    const END_POINT = "/api/";
    const params = new URLSearchParams({
      key: "43022038-5a6e0a87a795a8bbaa0a62c30",
      q: query,
      type: "photo",
      orientation: "horizontal",
    });
    const url = `${BASE_URL}${END_POINT}?${params}`;
  
    return fetch(url).then(res => res.json());
}
