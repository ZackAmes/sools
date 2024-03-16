import React, {FC} from "react"
import { Text, Container } from "@react-three/uikit"
import ConnectModal from "./starknet/ConnectModal"

interface PageProps {
    open: Boolean,
    setOpen: (open: boolean) => void
}

const Page:FC<PageProps> = (open, setOpen) => {
    return (

        <Container flexDirection="column">
        <Container borderBottom={1}>
        <Container height={64} alignItems="center" flexDirection="row" paddingX={16}>
            <Container marginLeft="auto" flexDirection="row" alignItems="center" gap={16}>
                <ConnectModal /> 
            </Container>
        </Container>
        </Container>
        <Text>
            test
        </Text>
        </Container>
    )
}

export default Page;