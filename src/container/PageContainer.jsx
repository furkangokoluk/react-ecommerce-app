import Container from '@mui/material/Container';
import React from "react";

function PageContainer({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default PageContainer;