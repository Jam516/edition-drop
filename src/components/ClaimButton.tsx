import { useState } from 'react';
import { useEditionDrop, useMetamask, useAddress } from '@thirdweb-dev/react';
import './skin.css';


const ClaimButton = () => {
  const connectWithMetamask = useMetamask();
  const editionDrop = useEditionDrop(
    '0x0E2cE1C148A70b1D12505a938B5660cEcfC7C4f6'
  );
  const address = useAddress();
  // State to track when a user is claiming an NFT
  const [claiming, setClaiming] = useState(false);

  // Claim our NFT with the claim method - (token id, quantity)
  const onClick = async () => {
    setClaiming(true);
    try {
      await editionDrop?.claim(0, 1);
      alert('Successfully Claimed!');
      setClaiming(false);
    } catch (error) {
      console.log('Failed to claim. Error: ', error);
      setClaiming(false);
    }
  };

  return (
    <div>
      {address ? (
        <div className='btnbox'>
          <button
            disabled={claiming}
            className='btn mybtn'
            onClick={onClick}
          >
            {claiming ? 'Claiming...' : 'Claim Early Access NFT'}
          </button>
        </div>
      ) : (
        <div className='btnbox'>
          <button className='btn mybtn' onClick={connectWithMetamask}>Connect MetaMask Wallet</button>
        </div>
      )}
    </div>
  );
};

export default ClaimButton;
