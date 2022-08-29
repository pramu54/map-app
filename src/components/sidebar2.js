import { Box, Button } from "@mui/material";

const Sidebar = () => {
    return(
        <>
            <Box sx={{
                width: "280px",
                height: "100vh",
                bgcolor: '#282c37',
                color: '#fffefc'
            }}>
                {[
                    'Merlion', 
                    'Marina Bay Sands', 
                    'Garden by the Bay', 
                    'China town', 
                    'Asian Civilisations Museum', 
                    'Clarke Quay', 
                    'Fort Canning Park', 
                    'Singapore Flyer', 
                    'Orchard Road'].map((text) => (
                <Button variant="text" sx={{
                    height: "10px",
                    padding: 3,
                    color: '#fffefc'
                }}>
                    {text}
                </Button>
                ))}
            </Box>
        </>
    )
}
export default Sidebar;