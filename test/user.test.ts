import { initMongo } from "../src/services/mongoService";
import { User } from "../src/models/User";

describe("user", () => {
  beforeAll(() => initMongo());
  it("add user in db", async () => {
    const marketsList = [
      {
        ownerAddress: 'test',
        oracleAddress: 'test',
        masterAddress: 'test',
        clientAddress: 'test',
        userAddress: 'test',
        apiKey: 'test',
        oracleKey: 'test'
      },
    ];
    await User.deleteMany({});
    marketsList.forEach((e) => User.create(e));
  }, 1000000);
});
