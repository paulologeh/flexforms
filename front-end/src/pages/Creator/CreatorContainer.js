import { CreatorsProvider } from 'context/contextCreator'
import Creator from 'pages/Creator/Creator'

const CreatorContainer = (props) => {
    return (
        <CreatorsProvider>
            <Creator/>
        </CreatorsProvider>
    )
}

export default CreatorContainer