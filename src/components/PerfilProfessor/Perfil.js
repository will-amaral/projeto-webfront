import React from 'react';
import { useState } from 'react';
import { Box, Tabs, TabList, Tab, TabLink } from 'bloomer';
import DetailsTab from './DetailsTab';
import AlunosTab from './AlunosTab';

export default function Perfil({ user }) {
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
      {tab ? <DetailsTab user={user} /> : <AlunosTab students={user.students} />}
    </Box>
  );
}
