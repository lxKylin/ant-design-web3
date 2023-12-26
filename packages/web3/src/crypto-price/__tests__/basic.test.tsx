import { CryptoPrice } from '..';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { EthereumCircleFilled } from '@ant-design/web3-icons';
import { Web3ConfigProvider } from '@ant-design/web3-common';

describe('CryptoPrice', () => {
  it('renders CryptoPrice correctly', () => {
    const { baseElement } = render(<CryptoPrice icon value={1230000000000000000n} />);

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 1.23 ETH');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-filled')).not.toBeNull();
  });

  it('default disable icon', () => {
    const { baseElement } = render(<CryptoPrice value={1230000000000000000n} />);

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe('1.23 ETH');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-filled')).toBeNull();
  });

  it('disable icon', () => {
    const { baseElement } = render(<CryptoPrice icon={false} value={1230000000000000000n} />);

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe('1.23 ETH');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-filled')).toBeNull();
  });

  it('custom icon', () => {
    const { baseElement } = render(
      <CryptoPrice icon={<EthereumCircleFilled />} value={1230000000000000000n} />,
    );

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 1.23 ETH');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-circle-filled')).not.toBeNull();
  });

  it('custom chain', () => {
    const { baseElement } = render(
      <CryptoPrice
        icon
        chain={{
          id: 1,
          name: 'Ethereum',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'WETH',
            decimals: 17,
            icon: <EthereumCircleFilled />,
          },
        }}
        value={1230000000000000000n}
      />,
    );

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 12.3 WETH');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-circle-filled')).not.toBeNull();
  });

  it('custom chain in props', () => {
    const { baseElement } = render(
      <CryptoPrice
        icon={<EthereumCircleFilled />}
        symbol="WETH2"
        chain={{
          id: 1,
          name: 'Ethereum',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'WETH',
            decimals: 17,
          },
        }}
        value={1230000000000000000n}
      />,
    );

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 12.3 WETH2');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-circle-filled')).not.toBeNull();
  });

  it('custom chain in props 2', () => {
    const { baseElement } = render(
      <CryptoPrice
        icon={<EthereumCircleFilled />}
        symbol="WETH2-1"
        chain={{
          id: 1,
          name: 'Ethereum',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'WETH',
            decimals: 0,
          },
        }}
        value={1230000000000000000n}
      />,
    );

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 1230000000000000000 WETH2-1');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-circle-filled')).not.toBeNull();
  });

  it('custom chain in props 3', () => {
    const { baseElement } = render(
      <CryptoPrice
        icon={<EthereumCircleFilled />}
        symbol="WETH2-2"
        chain={{
          id: 1,
          name: 'Ethereum',
          nativeCurrency: {
            name: 'Ether',
            symbol: '',
            decimals: 0,
          },
        }}
        value={1230000000000000000n}
      />,
    );

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 1230000000000000000 WETH2-2');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-circle-filled')).not.toBeNull();
  });

  it('custom chain in provider', () => {
    const { baseElement } = render(
      <Web3ConfigProvider
        chain={{
          id: 1,
          name: 'Ethereum',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'WETH',
            decimals: 17,
          },
        }}
      >
        <CryptoPrice icon={<EthereumCircleFilled />} value={1230000000000000000n} />,
      </Web3ConfigProvider>,
    );

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 12.3 WETH');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-circle-filled')).not.toBeNull();
  });
  it('user props greater then provider', () => {
    const { baseElement } = render(
      <Web3ConfigProvider
        chain={{
          id: 1,
          name: 'Ethereum',
          nativeCurrency: {
            name: 'Ether',
            symbol: 'WETH',
            decimals: 17,
            icon: <EthereumCircleFilled />,
          },
        }}
      >
        <CryptoPrice icon symbol="PROP" value={1230000000000000000n} />,
      </Web3ConfigProvider>,
    );

    const text = baseElement.querySelector('span')?.textContent;
    expect(text).toBe(' 12.3 PROP');
    expect(baseElement.querySelector('.ant-web3-icon-ethereum-circle-filled')).not.toBeNull();
  });
});
