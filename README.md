lodestone-node
==============
Simple lodestone scraper for node.js, created for xivarrsite.com
----------------------------------------------------------------


Install:

```
npm install lodestone
```

How to use:

```
var lodestone = require('lodestone');

var character_id = 1554967;

lodestone.getChar(character_id, function (err, character) {

    console.dir(character);

});
```


Sample output:

```
{ 
  name: 'Mariko Shinoda',
  id: '1554967',
  server: 'Ultros',
  current_job: 'Scholar',
  current_job_level: 50,
  ilv: 89,
  fc:
   { id: '9234208823458136068',
     name: 'Gather Against Fate',
     server: 'Ultros' },
  class:
   { gladiator: { name: 'Gladiator', level: 50 },
     pugilist: { name: 'Pugilist', level: 24 },
     marauder: { name: 'Marauder', level: 26 },
     lancer: { name: 'Lancer', level: 50 },
     archer: { name: 'Archer', level: 50 },
     conjurer: { name: 'Conjurer', level: 50 },
     thaumaturge: { name: 'Thaumaturge', level: 30 },
     arcanist: { name: 'Arcanist', level: 50 },
     carpenter: { name: 'Carpenter', level: 15 },
     blacksmith: { name: 'Blacksmith', level: 0 },
     armorer: { name: 'Armorer', level: 0 },
     goldsmith: { name: 'Goldsmith', level: 15 },
     leatherworker: { name: 'Leatherworker', level: 6 },
     weaver: { name: 'Weaver', level: 30 },
     alchemist: { name: 'Alchemist', level: 50 },
     culinarian: { name: 'Culinarian', level: 17 },
     miner: { name: 'Miner', level: 16 },
     botanist: { name: 'Botanist', level: 23 },
     fisher: { name: 'Fisher', level: 11 } },
  equip:
   { main_hand:
      { name: 'Omnilex Zenith',
        ilv: 90,
        type: 'Arcanist\'s Grimoire',
        id: '52a24052a77' },
     off_hand: null,
     head: { name: 'Royal Crown', ilv: 80, type: 'Head', id: '911ff8956b0' },
     body: { name: 'Argute Gown', ilv: 90, type: 'Body', id: '422af3e18ed' },
     hands:
      { name: 'Allagan Gloves of Healing',
        ilv: 90,
        type: 'Hands',
        id: '6156a10108f' },
     waist:
      { name: 'Hero\'s Belt of Healing',
        ilv: 90,
        type: 'Waist',
        id: 'c6cec4687d4' },
     legs:
      { name: 'Argute Culottes',
        ilv: 90,
        type: 'Legs',
        id: 'b86d40b34d5' },
     feet: { name: 'Argute Boots', ilv: 90, type: 'Feet', id: 'a59fabbc3a3' },
     neck:
      { name: 'Hero\'s Necklace of Healing',
        ilv: 90,
        type: 'Necklace',
        id: '7dbf302238f' },
     ears:
      { name: 'Hero\'s Earrings of Healing',
        ilv: 90,
        type: 'Earrings',
        id: 'eafb648e3dd' },
     wrists:
      { name: 'Hero\'s Bracelet of Healing',
        ilv: 90,
        type: 'Bracelets',
        id: '823265d556e' },
     ring1:
      { name: 'Hero\'s Ring of Healing',
        ilv: 90,
        type: 'Ring',
        id: '23a4a2cfdad' },
     ring2:
      { name: 'Allagan Ring of Healing',
        ilv: 90,
        type: 'Ring',
        id: '2c3b9f86c42' },
     soul_crystal:
      { name: 'Soul of the Scholar',
        ilv: 30,
        type: 'Soul Crystal',
        id: 'eb511e3871f' } }
}
```

more coming soon!