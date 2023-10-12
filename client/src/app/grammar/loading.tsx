import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Container, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

const Loading = () => {
  return (
    <main>
      <Paper>
        <Container>
          <Box>
            <Card>
              <Typography variant="h3">Loading</Typography>
            </Card>
          </Box>
        </Container>
      </Paper>
    </main>
  );
};
export default Loading;
