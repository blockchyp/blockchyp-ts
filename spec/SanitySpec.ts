import BlockChyp from '../src/client';

describe("SanityTest", () => {
  it("Should Exist", () => {
    expect(BlockChyp).toBeDefined();
  });

  it("Should Fetch Heartbeat", (done) => {
    BlockChyp.setGatewayHost('https://api.blockchyp.com/');
    BlockChyp.heartbeat()
      .then((response: any) => {
        const hb = response.data;
        expect(hb.success).toBe(true);
        expect(hb.timestamp).toBeDefined();
        expect(hb.latestTick).toBeDefined();
        done();
      })
      .catch((error: any) => {
        console.log("Error:", error);
        done();
      });
  });
});
