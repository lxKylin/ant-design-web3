import { type Wallet } from '@ant-design/web3-common';
import { metadata_WalletConnect } from '@ant-design/web3-assets';
import type { WalletFactory } from '../interface';
import type { Connector } from 'wagmi';

export const WalletConnect: WalletFactory = {
  name: 'WalletConnect',
  create: (connector?: Connector): Wallet => {
    const getQrCode = async () => {
      const provider = await connector?.getProvider();
      return new Promise<{ uri: string }>((resolve) => {
        provider.on('display_uri', (uri: string) => {
          resolve({
            uri,
          });
        });
      });
    };
    return {
      ...metadata_WalletConnect,
      hasWalletReady: async () => {
        return true;
      },
      getQrCode: connector?.options.showQrModal === false ? getQrCode : undefined,
    };
  },
};
