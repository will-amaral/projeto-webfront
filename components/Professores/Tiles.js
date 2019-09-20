import { Tile } from 'bloomer';
import TileItem from './TileItem';

export default function Tiles() {
    return (
        <Tile style={{marginTop: 0}} isAncestor hasTextAlign="centered">
            <TileItem title="400k" subtitle="Fichas Abertas"/>
            <TileItem title="400k" subtitle="Fichas Abertas"/>
            <TileItem title="400k" subtitle="Fichas Abertas"/>
        </Tile>
    );
}