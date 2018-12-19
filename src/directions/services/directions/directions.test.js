import * as directions from "../directions";
import { apiWrapper } from "../../../common/services/api-wrapper/api-wrapper";

const apiStub = {
  status: "success",
  path: [
    ["22.372081", "114.107877"],
    ["22.326442", "114.167811"],
    ["22.284419", "114.159510"]
  ],
  distance: 20000,
  time: 1800
};

const tokenStub = {
  token: "token"
};

describe("Test for directions api", () => {
  it("Should test for fetchToken method", async () => {
    const post = jest.spyOn(apiWrapper, "post");

    post.mockImplementation(() => Promise.resolve({ data: tokenStub }));

    const token = await directions.fetchToken("from", "to");
    expect(token).toBeDefined();
    post.mockRestore();
  });

  it("Should test for fetchRoute method", async () => {
    const get = jest.spyOn(apiWrapper, "get");

    get.mockImplementation(() => Promise.resolve({ data: apiStub }));

    const result = await directions.fetchRoute("token");
    expect(result).toBeDefined();
    expect(result.status).toEqual("success");
    get.mockRestore();
  });

  it("Should test for fetchDirections method", async () => {
    const get = jest.spyOn(apiWrapper, "get");
    const post = jest.spyOn(apiWrapper, "post");

    post.mockImplementation(() =>
      Promise.resolve({
        data: {
          token: "token"
        }
      })
    );

    get.mockImplementation(() =>
      Promise.resolve({
        data: apiStub
      })
    );

    const result = await directions.fetchDirections("from", "to");
    expect(result).toBeDefined();
    expect(result.status).toEqual("success");
  });
});
