import React from 'react';

import { TheBadBossy, Aelexe } from 'CONTRIBUTORS';
import Wrapper from 'common/Wrapper';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';

export default [
  {
    date: new Date('2018-04-05'),
    changes: <Wrapper>Added improved suggestions for <SpellLink id={SPELLS.CHARGE.id} icon />, <SpellLink id={SPELLS.HEROIC_LEAP.id} icon /> and <SpellLink id={SPELLS.COMMANDING_SHOUT.id} icon />.</Wrapper>,
    contributors: [Aelexe],
  },
  {
    date: new Date('2018-04-05'),
    changes: <Wrapper>Added <SpellLink id={SPELLS.MORTAL_STRIKE.id} icon /> haste cooldown reduction and <SpellLink id={SPELLS.TACTICIAN.id} icon /> cooldown resets.</Wrapper>,
    contributors: [Aelexe],
  },
  {
    date: new Date('2018-04-05'),
    changes: <Wrapper>Added <SpellLink id={SPELLS.BLADESTORM.id} icon /> channeling.</Wrapper>,
    contributors: [Aelexe],
  },
  {
    date: new Date('2018-04-05'),
    changes: <Wrapper>Added <SpellLink id={SPELLS.IN_FOR_THE_KILL_TALENT.id} icon /> haste buff.</Wrapper>,
    contributors: [Aelexe],
  },
  {
    date: new Date('2017-10-21'),
    changes: 'Added tactician procs.',
    contributors: [TheBadBossy],
  },
  {
    date: new Date('2017-10-19'),
    changes: 'Added initial support.',
    contributors: [TheBadBossy],
  },
];
