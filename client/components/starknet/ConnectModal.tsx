import { Connector, useConnect } from "@starknet-react/core";
import React from "react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { Text, Image } from "@react-three/uikit";

export default function ConnectModal() {
  const { connect, connectors } = useConnect();

  console.log(connectors);

  return (
    <Dialog >
      <DialogTrigger>
        <Button variant="outline">
          <Text>Connect Wallet</Text>
        </Button>
      </DialogTrigger>
      <DialogContent positionType="relative" transformTranslateZ={200} sm={{ maxWidth: 425 }}>
        {connectors.map((connector: Connector) => {
          return (
            <Button
              key={connector.id}
              onClick={async () =>
                connector.available() ? connect({ connector }) : null
              }
              disabled={!connector.available()}
            >
              {connector.icon.light && (
                <Image src={connector.icon.dark} />
              )}
              <Text >Connect {connector.name}</Text>
            </Button>
          );
        })}
      </DialogContent>
    </Dialog>
  );
}
