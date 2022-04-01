import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import Nft from './components/Nft';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <Nft />
    </ThirdwebProvider>
  );
}

export default App;
