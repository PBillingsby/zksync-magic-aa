import React, { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { Wallet } from 'zksync-ethers';
import { useMagic } from '../magic/MagicProvider';

// Create a context for zkSync provider with initial value as null
const ZkSyncProviderContext = createContext(null);

// Custom hook to use zkSync provider
export const useZkSyncProvider = () => useContext(ZkSyncProviderContext);
// Component to wrap your app and provide zkSync provider
export const ZkSyncProvider = ({ children }: any) => {
  const { magic } = useMagic();
  console.log("--", magic)
  const [zkSyncProvider, setZkSyncProvider] = useState(null);

  useEffect(() => {
    const initializeZkSyncProvider = async () => {
      if (magic) {
        const magicProvider = await magic?.wallet.getProvider();

        // Get the signer from the provider
        const signer = provider.getSigner();
        console.log("!!!!", provider, signer)
        // Initialize zkSync wallet using the signer

        // const syncWallet = await Wallet.fromEthSigner(signer, provider);

        // setZkSyncProvider(syncWallet);
      }
    };

    initializeZkSyncProvider();
  }, [magic]);

  return (
    <ZkSyncProviderContext.Provider value={zkSyncProvider}>
      {children}
    </ZkSyncProviderContext.Provider>
  );
};
