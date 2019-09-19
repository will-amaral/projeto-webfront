import { Media, MediaContent, MediaLeft , Content, Icon } from 'bloomer';

export default function Activity() {
    return (
        <Media>
            <MediaLeft>
                <Icon isSize='small' className='fa fa-bell' />
            </MediaLeft>
            <MediaContent>
                <Content>
                    <p>
                        <small>2 minutos atrás</small><br/>
                        <b>Fulano de Tal</b> entrou no sistema
                    </p>
                </Content>
            </MediaContent>
        </Media>
    )
}