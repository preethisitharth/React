import{Nav,Navbar,NavbarBrand,NavbarCollapse,NavbarToggle,NavDropdown} from "react-bootstrap"
export const Homepage=()=>
    {
        return(
        <>
        <Navbar bg="light" expand="lg">
            <NavbarBrand href="#Home">React Bootstrap</NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar"/>
            <NavbarCollapse id="basic-navbar">
                <Nav classname="mt-auto">
                    <Nav.Link href="./create">CREATE</Nav.Link>
                    <Nav.Link href="./read">READ</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-navbar-dropdown">
                        <NavDropdown.Item href="act1">ACTION</NavDropdown.Item>
                        <NavDropdown.Item href="act2">ACTION ONE</NavDropdown.Item>
                    </NavDropdown>
                </Nav>                                           
            </NavbarCollapse>
        </Navbar>
        </>
        )
    }