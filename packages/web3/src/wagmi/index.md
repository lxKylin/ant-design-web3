---
nav: Components
group:
  title: Adapter
  order: 1
---

# Ethereum

Ant Design Web3 officially provides `@ant-design/web3-wagmi` to adapt to Ethereum. It is an Ant Design Web3 Ethereum adapter based on [wagmi](https://wagmi.sh/). It provides the ability to connect to Ethereum and other EVM compatible chains for the components of `@ant-design/web3`.

Through it, you don't need to handle the connection status of the component, chain data request and other logic by yourself. It will provide relevant global status and interfaces for the components through [Web3ConfigProvider](../web3-config-provider/index.md).

Currently, we officially provide the adapter of Ethereum, and you can also develop your own adapter to support other chains. You can read the [adapter documentation](../../../../docs/guide/adapter.md) to learn more about the adapter.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Add more wallets

We have built-in wallets with `group` as `Popular`. For other wallets, you need to configure `assets` to import related resources. You can export related resources from `@ant-design/web3-wagmi`. If you don't have the resources you need, you can submit [Github issue](https://github.com/ant-design/ant-design-web3/issues) to tell us. You can also configure it yourself or submit a PR to support it.

<code src="./demos/more-wallets.tsx"></code>

## Support switch chains

We have built-in `Mainnet` and `Goerli`, and the remaining chains need to configure `assets` to import related resources to support. The import method is similar to the wallet.

<code src="./demos/chains.tsx"></code>

## Display ENS

<code src="./demos/name.tsx"></code>

## Display balance

<code src="./demos/balance.tsx"></code>

## Configure more UI

Most of the UI attributes that are not related to the chain can be configured directly on the component. The adapter is usually only used to configure content related to the chain. Here is a configuration example. You can refer to the [ConnectButton](../connect-button/index.md), [ConnectModal](../connect-modal/index.md) and other component documents for more details.

<code src="./demos/uiconfig.tsx"></code>

## More components

You can use more components together. The content related to the chain in the component will be obtained from the adapter. Of course, the properties configured directly on the component have a higher priority.

<code src="./demos/more-components.tsx"></code>

## Use web3modal for WalletConnect

When the `showQrModal` configuration is not `false`, the built-in [web3modal](https://web3modal.com/) pop-up window of WallectConnect will be used.

<code src="./demos/web3modal.tsx"></code>

## API

### WagmiWeb3ConfigProviderProps

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| config | wagmi config | [WagmiConfig](https://wagmi.sh/core/config) | - | - |
| assets | Wallet or chain icon and other information | [Chain](./types#chain)\[\] \| [WalletFactory](#walletfactory)\[\] | - | - |
| ens | Whether to display ENS | `boolean` | - | - |
| balance | Whether to display balance | `boolean` | - | - |
| locale | Multilingual settings | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/en_US.ts) | - | - |

### WalletFactory

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| name | Wallet name | `Connector` | - | - |
| create | Method for creating a wallet | `(connector: Connector) => Promise<Wallet>` | - | - |

> The above `Connector` refers to the `Connector` in wagmi, and `Wallet` is [Wallet](./types#wallet).
