import { Tile } from 'bloomer';
import TileItem from './TileItem';

export default function Tiles() {
    return (
        <Tile isAncestor hasTextAlign="centered">
            <TileItem title="439k" subtitle="Fichas Abertas"/>
            <TileItem title="59k" subtitle="Alunos"/>
            <TileItem title="3.4k" subtitle="Professores"/>
            <TileItem title="19" subtitle="Solicitações"/>
        </Tile>
    );
}