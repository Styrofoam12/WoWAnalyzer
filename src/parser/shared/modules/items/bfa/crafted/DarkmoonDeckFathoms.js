import React from 'react';

import SPELLS from 'common/SPELLS/index';
import ITEMS from 'common/ITEMS/index';
import Analyzer from 'parser/core/Analyzer';
import ItemDamageDone from 'interface/others/ItemDamageDone';

/**
 * Darkmoon Deck: Fathoms
 * Equip: Chance on attack to drop an anchor on your target, dealing damage to them. Size and damage of anchor depends on the topmost card of the deck.
 * Equip: Periodically shuffle the deck while in combat.
 *
 * Example: https://www.warcraftlogs.com/reports/Xr7Nxjd1KnMT9QBf/#fight=1&source=13&type=auras
 */

class DarkmoonDeckFathoms extends Analyzer {
  damage = 0;

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasTrinket(ITEMS.DARKMOON_DECK_FATHOMS.id);
  }

  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    if (spellId !== SPELLS.FATHOM_FALL.id) {
      return;
    }
    this.damage += event.amount + (event.absorbed || 0);
  }

  item() {
    return {
      item: ITEMS.DARKMOON_DECK_FATHOMS,
      result: <ItemDamageDone amount={this.damage} />,
    };
  }
}

export default DarkmoonDeckFathoms;
