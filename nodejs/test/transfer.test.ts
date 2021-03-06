import { transferFromBcToBSc, Asset, transferFromBscToBbc } from '../src/';
import { privateKey } from '../src/helpers';

describe('Transfer', () => {
  beforeEach(() => {
    jest.setTimeout(50000);
  });

  it('transfer from bc to bsc', async () => {
    const toAddress = '0x2Ed7c4BAab7950445550b889C3014203494c6de0';
    const from = 'tbnb1hgm0p7khfk85zpz5v0j8wnej3a90w709zzlffd';
    const result = await transferFromBcToBSc({
      toAddress,
      from,
      amount: 3,
      expireTime: Math.ceil(Date.now() / 1000 + 600),
      symbol: 'BUSD-BAF',
    });

    expect(result.status).toBe(200);
  });

  it('transfer bnb from bsc to bc', async () => {
    const BNB_ON_BBC_TESTNET_ASSET: Asset = {
      id: 'BNB',
      displaySymbol: 'BNB',
      networkSymbol: 'BNB',
      contractAddress: '0x0000000000000000000000000000000000000000',
      decimals: 18,
    };

    const toAddress = 'tbnb1hgm0p7khfk85zpz5v0j8wnej3a90w709zzlffd';
    const amount = 5;
    const expireTime = Math.ceil(Date.now() / 1000 + 600);
    const result = await transferFromBscToBbc({
      privateKey,
      toAddress,
      amount,
      expireTime,
      asset: BNB_ON_BBC_TESTNET_ASSET,
    });

    expect(result).toHaveProperty('transactionHash');
  });

  it('transfer busd from bsc to bc', async () => {
    const BNB_ON_BBC_TESTNET_ASSET: Asset = {
      id: 'BUSD',
      displaySymbol: 'BUSD',
      networkSymbol: 'BUSD',
      contractAddress: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
      decimals: 18,
    };

    const toAddress = 'tbnb1hgm0p7khfk85zpz5v0j8wnej3a90w709zzlffd';
    const amount = 2;
    const expireTime = Math.ceil(Date.now() / 1000 + 600);
    const result = await transferFromBscToBbc({
      privateKey,
      toAddress,
      amount,
      expireTime,
      asset: BNB_ON_BBC_TESTNET_ASSET,
    });

    expect(result).toHaveProperty('transactionHash');
  });
});
