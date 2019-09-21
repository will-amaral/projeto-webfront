import Link from 'next/link';
import { Box, Media, MediaContent, 
    MediaLeft, Content, Image } from 'bloomer';
import styles from '../styles';

export default function CardItem({ name, area, email, photo, levelColor, id }) {
    return (
        <Link href='/professores/[id]' as={`/professores/${id}`}>
            <div className='column is-one-third selectable-item'>
                <Box>
                    <Media>
                        <MediaLeft>
                            <Image isSize='64x64' src={photo} />
                        </MediaLeft>
                        <MediaContent>
                            <Content>
                                <p>
                                    <strong>{name}</strong><br/>
                                    {area}<br/>
                                    <strong style={{ color: levelColor }}><small>{email}</small></strong>
                                </p>
                            </Content>
                        </MediaContent>
                    </Media>
                    <div style={{  ...styles.levelBar, backgroundColor: levelColor }} />
                </Box>
            </div>
        </Link>
    )
}