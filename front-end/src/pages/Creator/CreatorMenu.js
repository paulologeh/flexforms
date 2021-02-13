import React, {useState} from 'react'
import { Menu, Image, Dropdown, Container } from 'semantic-ui-react'
import logo from 'assets/FlexFormsLogoNoText.png'

const CreatorMenu = () => {

    const [active, setActive] = useState(null);

    const handleClick = (e, data) => setActive(data.text)

    return (
        <Menu
            fixed='top'
            secondary
            inverted
            color='blue'
        >
            <Container>
                <Menu.Item>
                    <Image src={logo} size='mini'/>
                </Menu.Item>
                <Dropdown item simple text='Menu'>
                    <Dropdown.Menu>
                        <Dropdown.Item icon='file outline' text='New' onClick={handleClick}/>
                        <Dropdown.Item icon='folder open' text='Load Existing' onClick={handleClick}/>
                        <Dropdown.Item icon='save' text='Save' onClick={handleClick}/>
                        <Dropdown.Item icon='refresh' text='Clear Canvas' onClick={handleClick}/>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item as='a' active={active === 'Templates'} onClick={handleClick}>Templates</Menu.Item>
                <Menu.Item as='a' active={active === 'Preview'} onClick={handleClick}> Preview </Menu.Item>
                <Dropdown item simple text='Settings'>
                    <Dropdown.Menu>
                        <Dropdown.Item icon='square full' text='Background' onClick={handleClick}/>
                        <Dropdown.Item icon='amilia' text='Form Title' onClick={handleClick} />
                        <Dropdown.Item disabled  icon='plus' text='To Front' onClick={handleClick} />
                        <Dropdown.Item disabled icon='minus' text='To Back' onClick={handleClick} />
                        <Dropdown.Item disabled icon='resize vertical' text='Resize Vertical' onClick={handleClick}/>
                        <Dropdown.Item disabled icon='resize horizontal' text='Resize Horizontal' onClick={handleClick} />
                        <Dropdown.Item disabled icon='wpforms' text='Add Page' onClick={handleClick} />
                        <Dropdown.Item disabled icon='delete' text='Remove Page' onClick={handleClick} />
                        <Dropdown.Item disabled icon='align justify' text='Auto Align' onClick={handleClick} />
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item icon='help' active={active === 'help'} onClick={handleClick}/>
            </Container>
        </Menu>
    )
}

export default CreatorMenu;