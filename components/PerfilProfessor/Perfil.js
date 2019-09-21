import { useState } from 'react';
import { Box, Tabs, TabList, Tab, TabLink } from 'bloomer';
import DetailsTab from './DetailsTab';
import AlunosTab from './AlunosTab';

export default function Perfil({ email, area, level }) {
    const [tab, setTab] = useState(true);

    return (
        <Box>
            <Tabs>
                <TabList>
                    <Tab onClick={() => setTab(true)} isActive={tab}>
                        <TabLink>Detalhes</TabLink>
                    </Tab>
                    <Tab onClick={() => setTab(false)} isActive={!tab}>
                        <TabLink>Alunos</TabLink>
                    </Tab>
                </TabList>
            </Tabs>
            {tab
            ? <DetailsTab email={email} area={area} level={level.name} />
            : <AlunosTab />
            }
        </Box>
    )
}