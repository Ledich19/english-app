import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export const links = [
  {
    id: Math.random(),
    name: "About",
    path: "about",
  },
  {
    id: Math.random(),
    name: "contacts",
    path: "contacts",
  },
  {
    id: Math.random(),
    name: "dashboard",
    path: "dashboard",
  },
  {
    id: Math.random(),
    name: "grammar",
    path: "grammar",
  },
];

const Navbar = () => {
  return (
    <main>
      <Container>
        <Box>
          <Link href="/">
            <Typography variant="h5">Navbar</Typography>
          </Link>
          <Card>
            {links.map((link) => (
              <Link key={link.id} href={link.path}>
                <Typography variant="h5">{link.name}</Typography>
              </Link>
            ))}
          </Card>
        </Box>
      </Container>
    </main>
  );
};
export default Navbar;
