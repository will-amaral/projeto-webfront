import { Tile, Box, Media, MediaContent, Level, LevelRight, LevelItem, Icon, Tag,
    MediaLeft, MediaRight, Content, Image, Progress } from 'bloomer';

export default function TileItem({ title, subtitle }) {
    return (
        <Tile isParent>
            <Tile
                title={ title }
                subtitle={ subtitle }
                isChild
                render={
                    props => (
                        <Box {...props}>
                            <Media>
                                <MediaLeft>
                                    <Image isSize='64x64' src='https://via.placeholder.com/128x128' />
                                </MediaLeft>
                                <MediaContent>
                                    <Content>
                                        <p>
                                            <strong>Fulana de Tal</strong><br/>
                                            Musculação<br/>
                                            <strong style={{ color: '#00d1b2'}}><small>fulana@email.com</small></strong>
                                        </p>
                                    </Content>
                                </MediaContent>
                                <MediaRight>
                                    <Level>
                                        <LevelRight>
                                            <LevelItem>
                                                <Icon isSize='small' className='fas fa-pencil-alt'/>
                                            </LevelItem>
                                        </LevelRight>
                                    </Level>
                                </MediaRight>
                            </Media>
                            <Progress style={{ height: '0.2rem', marginTop: 20}} isSize='small' isColor='primary' value={100} max={100}/>
                        </Box>
                    )
                }
            />
        </Tile>
    );
}