/*global describe, it*/
/*jslint nomen: true */

var fs        = require("fs");
var assert    = require("assert");

var lodestone = require("../");

describe("1554967", function () {

    'use strict';

    it("should correctly scrape page 1554967-1.html", function (done) {

        fs.readFile('./test/1554967-1.html', function (err, data) {

            assert(!err, 'errore');

            lodestone._scrape(data, function (err, char) {

                assert(!err, 'errore');

                assert.equal(char.name, "Mariko Shinoda");
                assert.equal(char.current_job, 'Summoner');
                assert.equal(char.current_job_level, 50);
                assert.equal(char.id, '1554967');
                assert.equal(char.server, 'Ultros');
                assert.equal(char.ilv, 64);

                //fc
                assert.equal(char.fc.id, '9234208823458136068');
                assert.equal(char.fc.name, 'Gather Against Fate');
                assert.equal(char.fc.server, 'Ultros');

                //class
                //DoW
                assert.equal(char.class.gladiator.name, 'Gladiator');
                assert.equal(char.class.gladiator.level, 50);

                assert.equal(char.class.pugilist.name,    'Pugilist');
                assert.equal(char.class.pugilist.level,   22);

                assert.equal(char.class.marauder.name,    'Marauder');
                assert.equal(char.class.marauder.level,   26);

                assert.equal(char.class.lancer.name,      'Lancer');
                assert.equal(char.class.lancer.level,     50);

                assert.equal(char.class.archer.name,      'Archer');
                assert.equal(char.class.archer.level,     50);

                //DoM
                assert.equal(char.class.conjurer.name,    'Conjurer');
                assert.equal(char.class.conjurer.level,   50);

                assert.equal(char.class.thaumaturge.name,  'Thaumaturge');
                assert.equal(char.class.thaumaturge.level, 30);

                assert.equal(char.class.arcanist.name,    'Arcanist');
                assert.equal(char.class.arcanist.level,   50);

                //DoH
                assert.equal(char.class.carpenter.name,    'Carpenter');
                assert.equal(char.class.carpenter.level,   15);

                assert.equal(char.class.blacksmith.name,    'Blacksmith');
                assert.equal(char.class.blacksmith.level,   0);

                assert.equal(char.class.goldsmith.name,    'Goldsmith');
                assert.equal(char.class.goldsmith.level,   15);

                assert.equal(char.class.leatherworker.name,  'Leatherworker');
                assert.equal(char.class.leatherworker.level, 6);

                assert.equal(char.class.weaver.name, 'Weaver');
                assert.equal(char.class.weaver.level, 30);

                assert.equal(char.class.alchemist.name,    'Alchemist');
                assert.equal(char.class.alchemist.level,   50);

                assert.equal(char.class.culinarian.name,    'Culinarian');
                assert.equal(char.class.culinarian.level,   17);

                //DoL
                assert.equal(char.class.miner.name,    'Miner');
                assert.equal(char.class.miner.level,   16);

                assert.equal(char.class.botanist.name,  'Botanist');
                assert.equal(char.class.botanist.level, 23);

                assert.equal(char.class.fisher.name,   'Fisher');
                assert.equal(char.class.fisher.level,  11);

                //Equip
                //main hand
                assert.equal(char.equip.main_hand.name, 'Ifrit\'s Grimoire');
                assert.equal(char.equip.main_hand.ilv, 60);
                assert.equal(char.equip.main_hand.type, 'Arcanist\'s Grimoire');
                assert.equal(char.equip.main_hand.id, '0fc72b57329');

                //off hand
                assert.equal(char.equip.off_hand, null);

                //head
                assert.equal(char.equip.head.name, 'Evoker\'s Horn');
                assert.equal(char.equip.head.ilv, 50);
                assert.equal(char.equip.head.type, 'Head');
                assert.equal(char.equip.head.id,   'd25e48c9518');

                // body
                assert.equal(char.equip.body.name, 'Warlock\'s Robe');
                assert.equal(char.equip.body.ilv, 55);
                assert.equal(char.equip.body.type, 'Body');
                assert.equal(char.equip.body.id,   'daa37a271a3');

                // hands
                assert.equal(char.equip.hands.name, 'Warlock\'s Ringbands');
                assert.equal(char.equip.hands.ilv, 55);
                assert.equal(char.equip.hands.type, 'Hands');
                assert.equal(char.equip.hands.id,   'def0a1234b0');

                // waist
                assert.equal(char.equip.waist.name, 'Darklight Sash of Casting');
                assert.equal(char.equip.waist.ilv, 70);
                assert.equal(char.equip.waist.type, 'Waist');
                assert.equal(char.equip.waist.id,   'fbdc9b8c41f');

                // legs
                assert.equal(char.equip.legs.name, 'Darklight Breeches of Casting');
                assert.equal(char.equip.legs.ilv, 70);
                assert.equal(char.equip.legs.type, 'Legs');
                assert.equal(char.equip.legs.id,   '61dc46e1661');

                // feet
                assert.equal(char.equip.feet.name, 'Lominsan Officer\'s Boots');
                assert.equal(char.equip.feet.ilv, 55);
                assert.equal(char.equip.feet.type, 'Feet');
                assert.equal(char.equip.feet.id,   '2df9f1ccf7f');

                // neck
                assert.equal(char.equip.neck.name, 'Darklight Choker of Fending');
                assert.equal(char.equip.neck.ilv, 70);
                assert.equal(char.equip.neck.type, 'Necklace');
                assert.equal(char.equip.neck.id,   '75996a89a56');

                // ears
                assert.equal(char.equip.ears.name, 'Darklight Earrings of Fending');
                assert.equal(char.equip.ears.ilv, 70);
                assert.equal(char.equip.ears.type, 'Earrings');
                assert.equal(char.equip.ears.id,   '2a722aeb7ec');

                // wrists
                assert.equal(char.equip.wrists.name, 'Darklight Bracelet of Fending');
                assert.equal(char.equip.wrists.ilv,  70);
                assert.equal(char.equip.wrists.type, 'Bracelets');
                assert.equal(char.equip.wrists.id,   '81d89a3ef85');

                // ring1
                assert.equal(char.equip.ring1.name, 'Ultima Band of Casting');
                assert.equal(char.equip.ring1.ilv, 80);
                assert.equal(char.equip.ring1.type, 'Ring');
                assert.equal(char.equip.ring1.id,   '14ed8e8bdd1');

                // ring2
                assert.equal(char.equip.ring2.name, 'Darklight Band of Fending');
                assert.equal(char.equip.ring2.ilv, 70);
                assert.equal(char.equip.ring2.type, 'Ring');
                assert.equal(char.equip.ring2.id,   'b8513c5059b');

                // soul_crystal
                assert.equal(char.equip.soul_crystal.name, 'Soul of the Summoner');
                assert.equal(char.equip.soul_crystal.ilv, 30);
                assert.equal(char.equip.soul_crystal.type, 'Soul Crystal');
                assert.equal(char.equip.soul_crystal.id,   'e1570c3d994');

                done();

            });


        });
    });

    it("should correctly scrape page 1554967-2.html", function (done) {

        fs.readFile('./test/1554967-2.html', function (err, data) {

            assert(!err, 'errore file' + err);

            lodestone._scrape(data, function (err, char) {

                assert(!err, 'errore scrapez' + err);

                assert.equal(char.name, "Mariko Shinoda");
                assert.equal(char.current_job, 'Scholar');
                assert.equal(char.current_job_level, 50);
                assert.equal(char.id, '1554967');
                assert.equal(char.server, 'Ultros');
                assert.equal(char.ilv, 89);

                //fc
                assert.equal(char.fc.id, '9234208823458136068');
                assert.equal(char.fc.name, 'Gather Against Fate');
                assert.equal(char.fc.server, 'Ultros');

                //class
                //DoW
                assert.equal(char.class.gladiator.name, 'Gladiator');
                assert.equal(char.class.gladiator.level, 50);

                assert.equal(char.class.pugilist.name,    'Pugilist');
                assert.equal(char.class.pugilist.level,   24);

                assert.equal(char.class.marauder.name,    'Marauder');
                assert.equal(char.class.marauder.level,   26);

                assert.equal(char.class.lancer.name,      'Lancer');
                assert.equal(char.class.lancer.level,     50);

                assert.equal(char.class.archer.name,      'Archer');
                assert.equal(char.class.archer.level,     50);

                //DoM
                assert.equal(char.class.conjurer.name,    'Conjurer');
                assert.equal(char.class.conjurer.level,   50);

                assert.equal(char.class.thaumaturge.name,  'Thaumaturge');
                assert.equal(char.class.thaumaturge.level, 30);

                assert.equal(char.class.arcanist.name,    'Arcanist');
                assert.equal(char.class.arcanist.level,   50);

                //DoH
                assert.equal(char.class.carpenter.name,    'Carpenter');
                assert.equal(char.class.carpenter.level,   15);

                assert.equal(char.class.blacksmith.name,    'Blacksmith');
                assert.equal(char.class.blacksmith.level,   0);

                assert.equal(char.class.goldsmith.name,    'Goldsmith');
                assert.equal(char.class.goldsmith.level,   15);

                assert.equal(char.class.leatherworker.name,  'Leatherworker');
                assert.equal(char.class.leatherworker.level, 6);

                assert.equal(char.class.weaver.name, 'Weaver');
                assert.equal(char.class.weaver.level, 30);

                assert.equal(char.class.alchemist.name,    'Alchemist');
                assert.equal(char.class.alchemist.level,   50);

                assert.equal(char.class.culinarian.name,    'Culinarian');
                assert.equal(char.class.culinarian.level,   17);

                //DoL
                assert.equal(char.class.miner.name,    'Miner');
                assert.equal(char.class.miner.level,   16);

                assert.equal(char.class.botanist.name,  'Botanist');
                assert.equal(char.class.botanist.level, 23);

                assert.equal(char.class.fisher.name,   'Fisher');
                assert.equal(char.class.fisher.level,  11);

                //Equip
                //main hand
                assert.equal(char.equip.main_hand.name, 'Omnilex Zenith');
                assert.equal(char.equip.main_hand.ilv, 90);
                assert.equal(char.equip.main_hand.type, 'Arcanist\'s Grimoire');
                assert.equal(char.equip.main_hand.id, '52a24052a77');

                //off hand
                assert.equal(char.equip.off_hand, null);

                //head
                assert.equal(char.equip.head.name, 'Royal Crown');
                assert.equal(char.equip.head.ilv, 80);
                assert.equal(char.equip.head.type, 'Head');
                assert.equal(char.equip.head.id,   '911ff8956b0');

                // body
                assert.equal(char.equip.body.name, 'Argute Gown');
                assert.equal(char.equip.body.ilv, 90);
                assert.equal(char.equip.body.type, 'Body');
                assert.equal(char.equip.body.id,   '422af3e18ed');

                // hands
                assert.equal(char.equip.hands.name, 'Allagan Gloves of Healing');
                assert.equal(char.equip.hands.ilv, 90);
                assert.equal(char.equip.hands.type, 'Hands');
                assert.equal(char.equip.hands.id,   '6156a10108f');

                // waist
                assert.equal(char.equip.waist.name, 'Hero\'s Belt of Healing');
                assert.equal(char.equip.waist.ilv, 90);
                assert.equal(char.equip.waist.type, 'Waist');
                assert.equal(char.equip.waist.id,   'c6cec4687d4');

                // legs
                assert.equal(char.equip.legs.name, 'Argute Culottes');
                assert.equal(char.equip.legs.ilv, 90);
                assert.equal(char.equip.legs.type, 'Legs');
                assert.equal(char.equip.legs.id,   'b86d40b34d5');

                // feet
                assert.equal(char.equip.feet.name, 'Argute Boots');
                assert.equal(char.equip.feet.ilv, 90);
                assert.equal(char.equip.feet.type, 'Feet');
                assert.equal(char.equip.feet.id,   'a59fabbc3a3');

                // neck
                assert.equal(char.equip.neck.name, 'Hero\'s Necklace of Healing');
                assert.equal(char.equip.neck.ilv, 90);
                assert.equal(char.equip.neck.type, 'Necklace');
                assert.equal(char.equip.neck.id,   '7dbf302238f');

                // ears
                assert.equal(char.equip.ears.name, 'Hero\'s Earrings of Healing');
                assert.equal(char.equip.ears.ilv, 90);
                assert.equal(char.equip.ears.type, 'Earrings');
                assert.equal(char.equip.ears.id,   'eafb648e3dd');

                // wrists
                assert.equal(char.equip.wrists.name, 'Hero\'s Bracelet of Healing');
                assert.equal(char.equip.wrists.ilv,  90);
                assert.equal(char.equip.wrists.type, 'Bracelets');
                assert.equal(char.equip.wrists.id,   '823265d556e');

                // ring1
                assert.equal(char.equip.ring1.name, 'Hero\'s Ring of Healing');
                assert.equal(char.equip.ring1.ilv, 90);
                assert.equal(char.equip.ring1.type, 'Ring');
                assert.equal(char.equip.ring1.id,   '23a4a2cfdad');

                // ring2
                assert.equal(char.equip.ring2.name, 'Allagan Ring of Healing');
                assert.equal(char.equip.ring2.ilv, 90);
                assert.equal(char.equip.ring2.type, 'Ring');
                assert.equal(char.equip.ring2.id,   '2c3b9f86c42');

                // soul_crystal
                assert.equal(char.equip.soul_crystal.name, 'Soul of the Scholar');
                assert.equal(char.equip.soul_crystal.ilv, 30);
                assert.equal(char.equip.soul_crystal.type, 'Soul Crystal');
                assert.equal(char.equip.soul_crystal.id,   'eb511e3871f');

                done();

            });


        });
    });

});