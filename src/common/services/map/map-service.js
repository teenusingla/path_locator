import GoogleMapsLoader from "google-maps";

import { googleAPIKey } from "../../config";

init();

//initialization of Google map configurations.
//Todo pick google API key from environment
function init() {
  GoogleMapsLoader.KEY = googleAPIKey;
  GoogleMapsLoader.LIBRARIES = ["geometry", "places"];
}

let googleResp;
const loadMap = () =>
  new Promise((resolve, reject) => {
    if (googleResp) {
      resolve(googleResp);
    } else {
      GoogleMapsLoader.load(api => {
        googleResp = api;
        resolve(api);
      });
    }
  });

const maps = async () => {
  const googleResp = await loadMap();
  return googleResp.maps;
};

export { maps };
