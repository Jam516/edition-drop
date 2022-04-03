import { useEffect, useState } from 'react';
import { useEditionDrop } from '@thirdweb-dev/react';
import ClaimButton from './ClaimButton';
import './skin.css';

const Nft = () => {
  const editionDrop = useEditionDrop(
    '0x0E2cE1C148A70b1D12505a938B5660cEcfC7C4f6'
  );
  const [nft, setNft] = useState('');

  async function fetchNft() {
    try {
      const nft = await editionDrop?.get('0');
      if (nft?.metadata.image) {
        setNft(nft?.metadata.image);
      }
    } catch (error) {
      console.log('Failed to get NFT. Error: ', error);
    }
  }

  useEffect(() => {
    fetchNft();
  }, []);

  return (
    <div style={{ margin: '10vh' }}>
      <h1 className='title'>Niftymint</h1>
      <div className="container">
        <div className="row">
          <div className="col descriptioncln">
            <div className="descriptionbox">
              <p className="descriptiontxt">We like potted plants. They're like&nbsp;pets. This is the description. Read this to get context on what's going on. Thanks.</p>
            </div>
          </div>
          <div className="col offset-lg-1">
            <div className="d-flex justify-content-center">
              <img src={nft} className="img1"></img>
            </div>
            <ClaimButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
