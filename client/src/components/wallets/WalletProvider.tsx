import { PropsWithChildren } from "react";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";


// Internal components
import { useToast } from "../../components/ui/use-toast";
// Internal constants
// import { APTOS_API_KEY, NETWORK } from "@/constants";
import React from "react";
import { APTOS_API_KEY, NETWORK } from "../../constants";

export function WalletProvider({ children }: PropsWithChildren) {
  const { toast } = useToast();

 
  return (
    <AptosWalletAdapterProvider
      autoConnect={true}
      dappConfig={{ network: NETWORK, aptosApiKey: APTOS_API_KEY }}
      optInWallets={["Petra", "Nightly"]}
      onError={(error) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: error || "Unknown wallet error",
        });
      }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
}

