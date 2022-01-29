import { Box } from "@skynexui/components";
import { Title } from ".";

export default function Custom404(){

    return <>
    <Box
    styleSheet={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: "red",
        backgroundImage: 'url(https://img.quizur.com/f/img5e1b5c2427ede5.66111459.jpg?lastEdited=1578851371)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply'
    }}
    >
        <Title tag="h1" color="000" fontSize="3rem">404 - Page Not Found</Title>
    </Box>
    </>
}