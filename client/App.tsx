import { Canvas } from "@react-three/fiber";
import { Root, Container, Text } from "@react-three/uikit";
import React, {useState} from "react";
import { useBlockNumber, useNetwork } from "@starknet-react/core";
import { Fullscreen} from "@react-three/uikit";
import { Defaults } from "./components/ui/theme";
import { DialogAnchor } from "./components/ui/dialog";
import Page from "./components/Page";


const App = () => {

    let network = useNetwork();
    console.log(network)
    const [open, setOpen] = useState(false)

    return (
        <Canvas
        flat
        camera={{ position: [0, 0, 18], fov: 35 }}
        style={{ height: '100dvh', touchAction: 'none' }}
        gl={{ localClippingEnabled: true }}
        >
            <Fullscreen backgroundColor={0xffffff} dark={{ backgroundColor: 0x0 }}>
                <Defaults>
                <DialogAnchor>
                    <Container width="100%" height="100%" overflow="scroll">
                    <Page open={open} setOpen={setOpen} />
                    </Container>
                </DialogAnchor>
                </Defaults>
            </Fullscreen>
        </Canvas>
    )
}

export default App;