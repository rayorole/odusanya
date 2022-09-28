const { expect } = require('chai');

describe('Deployment', function () {
  let token;

  beforeEach(async function () {
    const Token = await ethers.getContractFactory('Token');
    token = await Token.deploy('Token', 'TKN', 10000000000);
  });

  it('Should be right name', async function () {
    expect(await token.name()).to.equal('Token');
  });
});
