import { Box, Image, Title, Subtitle, Tag } from 'bloomer';
import styles from '../styles';

export default function Main({ name, area, level, photo }) {
    const style = {
        marginLeft: 'auto', 
        marginRight: 'auto',
        padding: 10,
        border: `0.2rem solid ${level.color}`, 
        borderRadius: '50%'
    }
    return (
        <Box hasTextAlign='centered'>
            <Image style={style} isSize='128x128' src={photo} />
            <Title>{name}</Title>
            <Subtitle isSize={5}>{area}</Subtitle>
            <Tag isColor='dark' style={{ backgroundColor: level.color}}>{level.name}</Tag>
            <div style={{  ...styles.levelBar, backgroundColor: level.color }} />
        </Box>
    );
}