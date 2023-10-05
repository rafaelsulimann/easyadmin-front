import { Container } from "./styles";
import {ReactNode} from 'react';

interface RootProps {
    children: ReactNode;
}

export default function Root({children}:RootProps){
    return(
        <Container>{children}</Container>
    )
}