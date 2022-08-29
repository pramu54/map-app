import { Box, Grid, IconButton, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import CancelIcon from '@mui/icons-material/Cancel';

const Header = () => {
    return(
        <>
            <Box
                sx={{
                    width: '100%',
                    height: "100px",
                    bgcolor: "#f4f8fb",
                    overflow: "hidden"
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant="h6"
                        sx={{
                            pt: 4,
                            pl: 4,
                            fontWeight: 'bold'
                        }}
                        >
                            TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            pt: 4,
                            pr: 4,
                        }}
                        >
                            <IconButton sx={{
                                mr: 0
                            }}>
                                <SettingsIcon />
                            </IconButton>
                            <IconButton>
                                <HelpIcon />
                            </IconButton>
                            <IconButton>
                                <CancelIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                
            </Box>
        </>
    )
}
export default Header;