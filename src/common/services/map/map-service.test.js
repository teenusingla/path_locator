import * as gMap from "./map-service";
import { maps } from "./map-service";

describe("map-service", () => {
  test("maps() returns a object", async () => {
    const gMapObj = {
      draw: () => {}
    };
    const mapObj = jest.spyOn(gMap, "maps");
    mapObj.mockImplementation(() => {
      return Promise.resolve(gMapObj);
    });
    const map = await maps();
    expect(map).toBeTruthy();
  });
});
