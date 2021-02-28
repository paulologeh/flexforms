import React, {useState} from 'react'
import { Menu, Image, Dropdown, Container} from 'semantic-ui-react'
import logo from 'assets/FlexFormsLogoNoText.png'
import { CREATOR } from "navigation/CONSTANTS"
import Preview from './Preview'



const CreatorMenu = (props) => {

    const [active, setActive] = useState(null);

    const handleClick = (e, data) => {
        if (data.text)
        {
            setActive(data.text)
            props.callbackActive(data.text)
        }
        else
        {
            setActive(data.children)
            props.callbackActive(data.children)
        }    
    }

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
                        <Dropdown.Item icon='file outline' text='New' href={CREATOR}/>
                        <Dropdown.Item icon='folder open' text='Load Existing' onClick={handleClick}/>
                        <Dropdown.Item icon='save' text='Save' onClick={handleClick}/>
                        <Dropdown.Item icon='refresh' text='Clear Canvas' onClick={handleClick}/>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown item simple text='Templates'>
                    <Dropdown.Menu>
                        <Dropdown.Item text='Application Form' onClick={handleClick}/>
                    </Dropdown.Menu>
                </Dropdown>
                <Preview children={<Menu.Item as='a'> Preview </Menu.Item>}/>
                <Menu.Item as='a' active={active === 'Publish'} onClick={handleClick}> Publish Form </Menu.Item>
            </Container>
        </Menu>
    )
}

export default CreatorMenu;