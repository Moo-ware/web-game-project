let skipScene = false;
let chatDelay = 1000;
let isAnimating = true;
let disableHint = false;
let playerName = "Unknown Player";

const characterImages = {
    "Villager": "url('pictures/villager.png')",
    "Knight Bane": "url('pictures/knight.png')",
    "King Eldrian": "url('pictures/king.png')",
    "You": "url('pictures/player.png')",
    "Soldier": "url('pictures/soldier.png')",
    "Injured Soldier": "url('pictures/cursedSoldier.png')",
    "Scout Soldier": "url('pictures/scout.png')",
    "Prince Leoran": "url('pictures/prince.png')",
    "Pope Alaric": "url('pictures/pope.png')",
    "Professor Caradoc": "url('pictures/professor.png')",
    "Aeric": "url('pictures/aeric.png')",
};

let startLocation = "chat06"; // The starting location of the story FIX FOR NORMAL

const passages = [
    {
        id: "prologue",
        type: "cutscene",
        text: "Southern Outpost <br><br><br> Kingdom of Veloria",
        img: 'pictures/southernOutpost.png', // Example image URL
        next: "chat01" // Function to show the next passage
    },
    // chat01
    {
        id: "chat01",
        type: "chat",
        img: "url('pictures/southerGate.png')",
        borderColor: "2px solid rgb(40 106 255 / 0.7)",
        bgOpacity: "rgb(14 14 14 / 0.8)",
        textBoxSize: "400px",
        messages: [
            {
                character: "Scout Soldier",
                text: "Sir! Movement at the Eastern approach, coming from the Forest of Despair! One approacher, appears wounded, appears to be a soldier from the fifth regiment!",
            },
            {
                character: "Knight Bane",
                text: "Fifth regiment... they should be on a routine patrol in the Forest of Despair. Open the gate and ready the healers. Move, with haste!",
            },
            {
                character: "Soldier",
                text: "Right away, Sir!",
            },
            {
                character: " ",
                text: "[The massive gates creak open slowly, revealing a wounded soldier, barely able to stand.]",
            },
            {
                character: "Injured Soldier",
                text: "Ughhhh...*cough*...",
                choices: [
                    { text: "Observe the Injured Soldier", next: "injuredSoldier" },
                    { text: "Ask about what happened", next: "chat02" }
                ]
            }
        ]
    },
    {
        id: "injuredSoldier",
        type: "passage",
        borderColor: "2px solid rgb(150 107 255 / 0.7)",
        bgOpacity: "rgb(14 14 14 / 0.6)",
        textBoxSize: "200px",
        img: "url('pictures/cursedSoldierFull.png')",
        text: "The soldier is heavily wounded. His eyes are filled with fear and pain. \
        His wounds looks like the typical scratch wound from the Shadow Realm creatures, however, there are strange traces of purple glow emanating from his wounds. <br><br>\
        He's armor is completely shattered, tainted with similar purple traces mixed with blood. <br><br> \
        What could this be? Looks like a curse... or perhaps...dark magic? You've never seen anything like this before.",
        choices: [
            { text: "Continue...", next: "chat02" }
        ]
    },
    {
        id: "chat02",
        type: "chat",
        img: "url('pictures/southerGate.png')",
        borderColor: "2px solid rgb(40 106 255 / 0.7)",
        bgOpacity: "rgb(14 14 14 / 90%)",
        textBoxSize: "400px",
        messages: [
            {
                character: "Knight Bane",
                text: "By the gods... that is no ordinary injury. It looks otherworldly. Soldier, what happened? where is the rest of the regiment?"
            },
            {
                character: "Injured Soldier",
                text: "We...*cough* we were ambushed by creatures from the Shadow Realm... they came out of nowhere... we were overwhelmed... *cough* \
                I managed to escape as ordered by Captain Roderick to deliver this urgent message... *cough* They are coming..."
            },
            {
                character: "Knight Bane",
                text: "Impossible... The Shadow Realm has been quiet for years. The few attacks we've faced in the past has been easily repelled. \
                Not to mention, the fifth regiment is one of our most experienced combat regiments. "
            },
            {
                character: "Injured Soldier",
                text: "I... I'm unsure. they felt... different... they felt stronger... faster... *cough* and they were engulfed in a dark purple aura..."
            },
            {
                character: "Soldier",
                text: "We need to get him to the healers, Sir! He is in no condition to speak."
            },
            {
                character: "Knight Bane",
                text: "Get him to the healers. We need to prepare for the worst..."
            },
            {
                character: " ",
                text: "[The soldier is carried away by the healers, the gates close behind him.]"
            },
            {
                character: "Knight Bane",
                text: "I must go inform the King. The rest of you, sound the horns and prepare for siege! We may be facing a threat unlike anything we've seen before...."
            },
            {
                character: "Soldier",
                text: "FOR VELORIA!",
                choices: [
                    { text: "Continue...", next: "cutscene1"}
                ]
            },
        ]
    },
    {
        id: "cutscene1",
        type: "cutscene",
        text: "",
        img: 'pictures/alert.png', 
        next: "chapter1Screen"
    },
    {
        id: "chapter1Screen",
        type: "cutscene",
        text: "Chapter 1 <br><br><br> <The Lost Tales>",
        img: 'pictures/chapter1.png',
        next: "cutscene2"
    },
    {
        id: "cutscene2",
        type: "cutscene",
        text: "Veloria Castle <br><br><br> City of Veloria",
        img: 'pictures/hall.png', 
        next: "chat03" 
    },
    {
        id: "chat03",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: " ",
                text: "[The grand doors of the Royal Castle open to the echoing halls. Prince Leoran and King Eldrian are seen discussing matters of the kingdom.]"
            },
            {
                character: "Knight Bane",
                text: "Urgent report! Your Majesty! *panting*"
            },
            {
                character: "Prince Leoran",
                text: "Well, well, if it isn't Bane, always so dramatic. What brings you here this time? Another dragon sighting, perhaps? Or maybe a giant spider in the forest? *chuckles dismissively*"
            },
            {
                character: "Knight Bane",
                text: "Your Highness, this is no time for jests. We have a situation at the Southern Outpost. Is the shadow realm, they have atta—"
            },
            {
                character: "Prince Leoran",
                text: "Oh, the Shadow Realm? Our 'menacing' neighbors who so kindly offer themselves up for the honing of our blades and the sharpening of our skills once in a blue moon. How could I forget? \
                Tell me, have they sent us another threatening shadow puppy this time?"
            },
            {
                character: "Knight Bane",
                text: "(Irritated) It's serious, Your Highness. They are different this time, they wield a power... — a dark, purplish magic, unlike anything we have seen before."
            },
            {
                character: "Prince Leoran",
                text: "Oh, glowing purple now, are they? *scoffs* How interesting. You know what, Bane? You are imaginative, maybe you should become an author. \
                I'm sure the children would love your stories."
            },
            {
                character: "Knight Bane",
                text: "...",
                choices: [
                    { text: "Bring up Fifth Regiment", next: "explainToHim01" },
                    { text: "Insult Him", next: "insultHim01" }
                ]
            }
        ]
    },
    {
        id: "insultHim01",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "Perhaps if you spent more time outside, and less time admiring yourself in the mirror, you'd seen it for yourself, Your Highness."
            },
            {
                character: "Prince Leoran",
                text: "You..."
            },
            {
                character: "King Eldrian",
                text: "Enough! Both of you! This is not the time for bickering. Bane, explain the situation to us."
            },
            {
                character: "Prince Leoran",
                text: "<i> (Whispering) A sharp tongue can be a dangerous weapon Bane, be careful where you point it...</i>",
                choices: [
                    { text: "AutoSelect", next: "chat04" }
                ]
            }
        ]
    },
    {
        id: "explainToHim01",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "But the Fifth Regiment, they were attacked when—"
            },
            {
                character: "Prince Leoran",
                text: "(Cuts Bane Off) The Fifth Regiment is the very embodiment of this Kingdom's military might. An elite force comprised of our finest soldiers and mages, all of whom have benn handpicked — by me. \
                Anyone or <i>thing</i> that dares to challenge them is either a fool or a madman, or both. I'm sure they have handled the situation with ease."
            },
            {
                character: "King Eldrian",
                text: "Enough Leoran! I want to hear what Bane has to say. Bane, continue."
            },
            {
                character: "Prince Leoran",
                text: "(Angrily) As you wish, Father.",
                choices: [
                    { text: "AutoSelect", next: "chat04" }
                ]
            }
        ]
    },
    {
        id: "chat04",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "As I was saying, the creatures were shrouded in a dark, purple aura, granting them immense strength and agility far beyond the ordinary. \
                The Fifth Regiment was ambushed, and only one managed to escape. He is currently being treated by our healers. He carried a message from Captain Roderick, a warning, that the creatures are advancing towards the Kingdom."
            },
            {
                character: "King Eldrian",
                text: "(Shocked) Purple aura... It can't be..."
            },
            {
                character: " ",
                text: "[The door beside the throne, reserved for confidential entrances, creaks open subtly. Pope Alaric of the Grand Church, revered for his wisdom, enters the hall.]"
            },
            {
                character: "Pope Alaric",
                text: "Indeed Eldrian. The burden of history now looms upon us once more."
            },
            {
                character: "Knight Bane",
                text: "Your Holiness."
            },
            {
                character: "Pope Alaric",
                text: "My apologies for my surreptitious presence, gentlemen."
            },
            {
                character: "Prince Leoran",
                text: "Father, what is he talking about? What has returned?"
            },
            {
                character: " ",
                text: "[Pope Alaric smiles gently.]"
            },
            {
                character: "Pope Alaric",
                text: "Perhaps you should have hearkened more in history class, Leoran."
            },
            {
                character: " ",
                text: "[Pope Alaric slowly rises to his feet, holding his staff and closes his eyes, the staff begins to glow bright yellow.]"
            },
            {
                character: "Pope Alaric",
                text: "I shall tell you a tale — a tale of our land, and the long-forgotten darkness that once consumed it...",
                choices: [
                    { text: "Continue...", next: "popeHologram" }
                ]
            }
        ]
    },
    {
        id: "popeHologram",
        type: "passage",
        img: "url('pictures/hologram.png')",
        borderColor: "2px solid rgb(162 167 93 / 0.6)",
        bgOpacity: "rgb(14 14 14 / 0.6)",
        textBoxSize: "100px",
        text: "The room darkens, with the only source of light emanating from the glowing staff. ⁤⁤As he sweeps the staff in a grand arc, \
        the diamond on top begins to shake, and a mysterious light beams into the air, filling the entire hall. ⁤⁤The cold stone walls slowly crumbles, \
        revealing majestic trees, lush vegetation, and a breathtaking panorama of what looks like a foreign, ancient Kingdom... ",
        choices: [
            { text: "Continue...", next: "cutscene3" }
        ]
    },
    // Vindoria
    {
        id: "cutscene3",
        type: "cutscene",
        text: "Vindoria <br><br><br> Year 252",
        img: 'pictures/cutscene03.png', 
        next: "vindoria01"
    },
    {
        id: "vindoria01",
        type: "passage",
        borderColor: "2px solid rgb(162 167 93 / 0.6)",
        bgOpacity: "rgb(14 14 14 / 0.6)",
        textBoxSize: "200px",
        img: "url('pictures/cutscene03.png')",
        text: "Long before the Kingdom of Veloria, there existed a Kingdom, known as Vindoria. Founded by a council of powerful sorcerers, \
        Vindoria served as a sanctuary for anyone who seeked refuge from the ruthless world. The council blessed the Kingdom with the magic of the Light, \
        and the Kingdom enjoyed centuries of prosperity and peace. <br><br> \
        But peace is often a fragile veil. <br><br>\
        A prodigy student emerged during this time, whose affinity in the magical arts was unparalleled in the Kingdom. He was set to become the next \
        leader of the council, and the most powerful sorcerer the Kingdom has ever seen. For years, he was the pride of Vindoria...", 
        choices: [
            { text: "Continue...", next: "cutscene4" }
        ]
    },
    {
        id: "cutscene4",
        type: "cutscene",
        text: "His name was...          <br><br>Valthor",
        img: 'pictures/valthor.png', 
        next: "vindoria02"
    },
    {
        id: "vindoria02",
        type: "passage",
        borderColor: "2px solid rgb(62 0 52 / 0.6)",
        bgOpacity: "rgb(14 14 14 / 0.6)",
        textBoxSize: "250px",
        img: "url('pictures/valthor.png')",
        text: "Years after his graduation from the academy, he began to change. His once cheerful spirit turned cold, \
        and rumors spread about his experiments with the magic of darkness. Reassured by his proven abilities, the council dismissed these rumors as nothing more than tales spun by those jealous of his skills. \
        Unbeknownst to them, every word from the rumor was true. Valthor has been secretly studying dark magic for years. <br><br>\
        Historical accounts, buried in the dusty archives, indicated that in Year 267, Valthor discovered an ancient artifact whilst on a covert expedition. \
        The artifact — only existed in tales before — was believed to be the genesis of all magic that exists in our world, including the magic of Light. \
        It remains unclear whether Valthor's discovery was a mere stroke of fate, or a planned quest all along. <br><br> \
        Later that year, Valthor successfully fused the essence of dark magic with the ancient artifact in the Forest of Despair, unleashing a dark power so immense \
        that it could rival our creators. However, even a sorcerer as powerful as Valthor could not control what the fused artifact had unleashed. \
        The dark power consumed him and his once bright soul. He became the embodiment of pure darkness...\
        ",
        choices: [
            { text: "Continue...", next: "cutscene5" }
        ]
    },
    {
        id: "cutscene5",
        type: "cutscene",
        text: "He was no longer...Valthor",
        img: 'pictures/valthor2.png', 
        next: "cutscene6"
    },
    {
        id: "cutscene6",
        type: "cutscene",
        text: "Vindoria <br><br><br> Year 268",
        img: 'pictures/vindoriaDestroyed.png', 
        next: "vindoria03"
    },
    {
        id: "vindoria03",
        type: "passage",
        borderColor: "2px solid rgb(62 0 52 / 0.6)",
        bgOpacity: "rgb(14 14 14 / 0.6)",
        textBoxSize: "150px",
        img: "url('pictures/vindoriaDestroyed.png')",
        text: "Valthor, now a vessel of darkness, unleashed his wrath upon the Kingdom of Vindoria along with his cult followers. With the dark power of the artifact, the city was transformed into hell; buildings and churches were burned, citizens were hunted down like preys.\
        The council attempted to stop them, but their efforts were in vain in the face of the artifact, and the once peaceful Kingdom of Vindoria was turned into ruins. \
        He proclaimed a new kingdom on top of the ruins, one that will act as a bastion to grow his dark cult and to conquer neighbouring realms. Anyone who dared to oppose him was obliterated. <br><br>\
        ",
        
        choices: [
            { text: "Continue...", next: "cutscene7" }
        ]
    },
    {
        id: "cutscene7",
        type: "cutscene",
        text: "However, <br><br>his reign was short-lived....",
        img: 'pictures/cutscene07.png', 
        next: "vindoria04"
    },
    {
        id: "vindoria04",
        type: "passage",
        borderColor: "2px solid rgb(62 0 52 / 0.6)",
        bgOpacity: "rgb(14 14 14 / 0.6)",
        textBoxSize: "380px",
        img: "url('pictures/cutscene07.png')",
        text: "He was powerful, but wasn't wise. <br><br>The lone surviving member of the once esteemed council , along with three revered young sorcerers from the same academy as Valthor, united together by their shared loss and were determined to seek retribution. <br><br>\
        They knew they stood no chance against Valthor head on, so they took notice of his artifact, speculating that it was the source of his power. They devised a daring plan to take it from him, in hopes of weakening him. <br><br>\
        The plan succeeded. Valthor, blinded by his hubris, neglected the only thing which granted him his powers.  By a miracle almost as astonishing as Valthor discovering the ancient artifact, the heroes, against all odds, managed to take possession of it unbeknownst to him.\
        Without the artifact's power, he was mortal once more. The surviving heroes rallied together and were able to defeat and destroy him, but the damage he left was irreversible.\
        The once-majestic Kingdom of Vindoria lay in ruins, The few who survived, attempting to erase this painful memory, ventured west beyond the Forest of Despair, into lands untouched by Valthor's darkness. \
        There, they founded a new Kingdom — Veloria. <br><br>\
        Valthor's cult members were banished to the ruins of Vindoria, which is now known as  — the Shadow Realm. <br><br>\
        As for the artifact, its fate became shrouded in mystery. Books records only shows the heroes attempted to separate the dark magic from the artifact, but to no avail. \
        As to what happened after, it is lost to time. Tales were told the heroes sealed it in the depth of an abyss near the Everfrost Mountains, but others believed it was destroyed...",
        choices: [
            { text: "Continue...", next: "cutscene8" }
        ]
    },
    {
        id: "cutscene8",
        type: "cutscene",
        text: "Light always wins... <br><br>...Right?",
        img: 'pictures/cutscene08.webp', 
        next: "popeHologram2"
    },
    {
        id: "popeHologram2",
        type: "passage",
        img: "url('pictures/hologram2.png')",
        borderColor: "2px solid rgb(162 167 93 / 0.6)",
        bgOpacity: "rgb(14 14 14 / 0.6)",
        textBoxSize: "50px",
        text: "The holographic images begins to fade away, and the hall is slowly returned to its original state. The glow on the Pope's staff slowly dies out, and the room is filled with silence.",
        choices: [
            { text: "Continue...", next: "chat05" }
        ]
    },
    // chat05
    {
        id: "chat05",
        type: "chat",
        img: "url('pictures/hall.png')",
        borderColor: "2px solid rgb(82 0 0)",
        bgOpacity: "rgb(14 14 14 / 0.9)",
        textBoxSize: "600px",
        messages: [
            {
                character: "King Eldrian",
                text: "The strength of these creatures, and the aura... it's too similar to be a mere coincidence.",
                choices: [
                    { text: "AutoSelect", next: "chat05-choice" }
                ]
            },
        ]
    },
    {
        id: "chat05-choice",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "...",
                choices: [
                    { text: "Ask if the artifact has been unsealed", next: "chat05-artifactLine" },
                    { text: "Ask if Valthor has returned", next: "chat05-valthorLine" },
                    { text: "Remain silent (Continue)", next: "chat05-continued" }

                ]
            }
        ]
    },
    {
        id: "chat05-artifactLine",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "Is it possible that the artifact was unsealed by someone? Perhaps the cult members of Valthor?"
            },
            {
                character: "Pope Alaric",
                text: "Unlikely, but not impossible. Records are scarce, but rest assured the heroes enacted great measures to ensure the artifact remains sealed for eternity. \
                Breaching such measures, especially those who solely practice the magic of darkness and not light, would require knowledge and power on a scale reminiscent of Valthor himself."
            },
            {
                character: "King Eldrian",
                text: "Not to mention, if the full might of the artifact's dark power were unleashed again, we would not have the luxury of having this conversation right now.",
                choices: [
                    { text: "AutoSelect", next: "chat05-choice" }
                ]
            }
        ]
    },
    {
        id: "chat05-valthorLine",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "Could it be that Valthor has returned once more?"
            },
            {
                character: "Pope Alaric",
                text: "Impossible. Without the artifact, he is nothing more than a mortal. He was vanquished by the heroes for good."
            },
            {
                character: "King Eldrian",
                text: "I agree with Alaric. Valthor is no more. The heroes made sure of that.",
                choices: [
                    { text: "AutoSelect", next: "chat05-choice" }
                ]
            }
        ]
    },
    {
        id: "chat05-continued",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "..."
            },
            {
                character: " ",
                text: "[Pope Alaric slowly sits down, his expression filled with concern.]",
            },
            {
                character: "Pope Alaric",
                text: "Though Valthor is no more,  dark magic akin to those he wielded has re-emerged, with uncertain origins. We find ourselves at a crossroads of possibilities, and prudence dictates that we prepare for the gravest of outcomes."
            },
            {
                character: " ",
                text: "[Leoran's laughter breaks the silence, echoing through the hall.]"
            },
            {
                character: "Prince Leoran",
                text: "Oh, come now, let's not get lost in dusty old tales. What is there to worry about? Valthor is long dead, and it can't be the artifact otherwise we wouldn't be here right now. \
                I say it's just another trick of the Shadow Realm. Fear not Father, let me lead our army to the Southern Outpost, I will show these creatures the full might of Veloria! Bane can accompany me if he wishes, \
                I will show him what a real knight looks like.",
            },
            {
                character: "Knight Bane",
                text: "...",
                choices: [
                    { text: "Sarcastic Response", next: "chat-05-sarcas" },
                    { text: "Normal Response", next: "chat05-diplo" },
                    { text: "Ignore Him", next: "chat05-silent" }
                ]
            },

        ]
    },
    {
        id: "chat-05-sarcas",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "(Sarcastically) Indeed, Your Highness, why send an army when we have the invincible Prince Leoran? Surely the mere mention of your name will send the enemy fleeing in terror."
            },
            {
                character: " ",
                text: "[Leoran laughs again, not catching an ounce of sarcasm.]",
            },
            {
                character: "Prince Leoran",
                text: "Exactly Bane, I'm glad you see it my way. I will prepare the army at once. We leave at dawn —"
            },
            {
                character: "King Eldrian",
                text: "Where do you think you are going, Leoran? (angrily) Do you think you are better than Captain Roderick, our finest commander?"
            },
            {
                character: "Prince Leoran",
                text: "Father, I —",
                choices: [
                    { text: "Continue...", next: "chat-05-end" }
                ]
            }
        ]
    },
    {
        id: "chat05-diplo",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "Your courage is commendable, Your Highness, but perhaps we should consider a more strategic approach. With all due respect, The Fifth Regiment, led by the experienced Captain Roderick, did not stand a chance. \
                We must not underestimate the gravity of this threat."
            },
            {
                character: " ",
                text: "[Leoran's smile fades, as he glares at Bane.]",
            },
            {
                character: "Prince Leoran",
                text: "Captain, Roderick, is not me. I will show you what a real leader looks like, Remember, it was <i>I</i> who handpicked the soldiers of the Fifth Regiment. If they fell with such ease, what does it show Bane? *pauses*\
                It shows this threat requires the skills of a superior leader, like myself. I will —",
                choices: [
                    { text: "Continue...", next: "chat-05-end" }
                ]   
            }
        ]
    },
    {
        id: "chat05-silent",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "<i>(Thinking to self) God, this guy is insufferable.</i>",
                choices: [
                    { text: "AutoSelect", next: "chat-05-end" }
                ]
            },
        ]
    },
    {
        id: "chat-05-end",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "King Eldrian",
                text: "ENOUGH LEORAN!"
            },
            {
                character: " ",
                text: "[Leoran is taken aback by his father's sudden outburst, and falls silent.]",
            },
            {
                character: "King Eldrian",
                text: "This is not the time for your arrogance. Do not forget, you know no magic, you failed out of the Royal Mage Academy. You are not a sorcerer, nor a commander. Your only skill lie with the sword, and even then, you are far from the best."
            },
            {
                character: " ",
                text: "[Leoran puts his head down]"
            },
            {
                character: "King Eldrian",
                text: "Bane, I want you to lead the army and prepare defenses at the Southern Outpost. I trust you. You have my permission to use any means necessary to repel the incoming threat."
            },
            {
                character: "Knight Bane",
                text: "Yes, Your Majesty. I will not fail you."
            },
            {
                character: "King Eldrian",
                text: "As for Leoran... Alaric, what do you suggest we do with the Prince?"
            },
            {
                character: "Pope Alaric",
                text: "Oh Eldrian, I have just the right mission for him."
            },
            {
                character: " ",
                text: "[Pope Alaric looks at Leoran, and smiles gently.]"
            },
            {
                character: "Pope Alaric",
                text: "As it happens, the Grand Church has long guarded the location of the ancient abyss, where Valthor's artifact was rumored to be sealed. It is a place shrouded in mystery, and danger. I believe it is the perfect venture for a Prince who seeks to prove his worth."
            },
            {
                character: " ",
                text: "[Leoran's face freezes and turns pale, as he forces an awkward smile.]"
            },
            {
                character: "Prince Leoran",
                text: "Wait wait wait wait... An ancient abyss? Me? I mean, I'm honored, but perhaps there's someone better suited for such a task... I... I mean we don't even know if the artifact is there, right? Could be a waste of time.\
                I think is best if I go help Bane with defense efforts at the Southern Outpost, Right Bane?"
            },
            {
                character: "Knight Bane",
                text: "...",
                choices: [
                    { text: "Sarcastic Response", next: "chat-05-end-sarc" },
                    { text: "Confrontational Response", next: "chat-05-end-conf" },
                    { text: "Normal Response", next: "chat-05-end-normal" },
                    { text: "Ignore Him", next: "chat-05-end-ignore" }
                ]
            }
        ]
    },
    {
        id: "chat-05-end-sarc",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "(Sarcastically) Oh, absolutely your Highness. After your bold declarations of leading armies and defeating foes, I'm sure a mere dungeon exploration is beneath your grand capabilities. \
                Why not leave the small tasks to us while you prepare for grander battles... from the safety of the castle walls?"
            },
            {
                character: " ",
                text: "[The sarcasm cuts through Leoran's facade, leaving him visibly flustered. He adjusts his armor, and clears his throat.]",
            },
            {
                character: "Prince Leoran",
                text: "Point taken, Bane. Fine, I.. I will go to the abyss alone. I will prove myself, and I will find the artifact. I will show you all, I will show you all!",
                choices: [
                    { text: "Continue...", next: "chat-05-end-continue" }
                ]
            }
        ]
    },
    {
        id: "chat-05-end-conf",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "Your Highness, you just boasted about your bravery, yet cower at the first sign of danger. Are you perhaps all talk and no action? Oh, maybe you are afraid of the dark? *smirks*"
            },
            {
                character: " ",
                text: "[Leoran's face turns red, as he clenches his fists.]",
            },
            {
                character: "Prince Leoran",
                text: "I... I... I... I am not afraid of anything! I will go...alone... and I will prove myself. When I return, you will all praise me!",
                choices: [
                    { text: "Continue...", next: "chat-05-end-continue" }
                ]
            }
        ]
    },
    {
        id: "chat-05-end-normal",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "Your Highness, leadership is not only about directing others from afar, but also about setting an example. Venturing into an ancient abyss from tales could inspire our people and show them the courage of our prince. \
                I can handle the defense efforts here, you can go without worry. *smirks*"
            },
            {
                character: " ",
                text: "[Leoran is visually frustrated]"
            },
            {
                character: "Prince Leoran",
                text: "You...",
                choices: [
                    { text: "Continue...", next: "chat-05-end-continue" }
                ]
            }
        ]
    },
    {
        id: "chat-05-end-ignore",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "<i>whistles~</i>"
            },
            {
                character: "Prince Leoran",
                text: "You...",
                choices: [
                    { text: "Continue...", next: "chat-05-end-continue" }
                ]
            }
        ]
    },
    {
        id: "chat-05-end-continue",
        type: "chat",
        img: "url('pictures/hall.png')",
        messages: [
            {
                character: "Pope Alaric",
                text: "It is settled then. The mission's objective is to investigate the ancient abyss, and to ascertain the artifact's fate. Should it be discovered, securing and returning it here is of paramount importance, regardless of the cost."
            },
            {
                character: "Prince Leoran",
                text: "How do you expect me to retrieve such a powerful artifact? I'm not a mage, I can't even use magic! Let alone break the seal set by the heroes..."
            },
            {
                character: "King Eldrian",
                text: "Worry not, Leoran, you will not venture alone."
            },
            {
                character: " ",
                text: "[King Eldrian pauses, and thinks for a moment.]",
            },
            {
                character: "King Eldrian",
                text: "But who? Most of us are needed here to fortify Veloria's defenses..."
            },
            {
                character: " ",
                text: "[Pope Alaric interjects with a confident tone.]",
            },
            {
                character: "Pope Alaric",
                text: "I believe I know just the individuals for this task. They are not only skilled, but also possess the necessary magical affinity for such an endeavor."
            },
            {
                character: " ",
                text: "[The room falls into a hushed anticipation, everyone's looking at the Pope. However, he offers no further explanation, leaving a mystery over his proposed individuals.]",
            },
            {
                character: "Pope Alaric",
                text: "I will inform them right away. Leoran, please prepare yourself and meet me at the Grand Church."
            },
            {
                character: "King Eldrian",
                text: "Very well. I place my trust in your judgment, Alaric. Let us hope that your chosen ones will shine the light we desperately needs, to overcome the darkness that threatens our land and people once again."
            },
            {
                character: " ",
                text: "[Pope Alaric nods, and leaves the hall, followed by Leoran and Bane]",
                choices: [
                    { text: "Continue...", next: "chat-05-end-final" }
                ]
            }
        ]
    },
    {
        id: "chat-05-end-final",
        type: "chat",
        switchScene: true,
        switchTextBox: true,
        img: "url('pictures/exit1.png')",
        borderColor: "2px solid rgb(162 167 93 / 0.6)",
        bgOpacity: "rgb(14 14 14 / 0.6)",
        textBoxSize: "300px",
        messages: [
            {
                character: " ",
                text: "[As they exit the hall, Bane walks closer to Leoran from the left, and says to him...]"
            },
            {
                character: "Knight Bane",
                text: "...",
                choices: [
                    { text: "Words of Encouragement", next: "chat-05-end-final-a" },
                    { text: "Words of Sarcasm", next: "chat-05-end-final-b" },
                    { text: "Words of Reality", next: "chat-05-end-final-c" },
                    { text: "???", next: "chat-05-end-final-d" }
                ]
            }
        ]
    },
    {
        id: "chat-05-end-final-a",
        type: "chat",
        img: "url('pictures/exit1.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "The pope chose you for a reason, your highness. You may not know magic, but you have a strong ambition. You will find a way to prove yourself, I believe in you."
            },
            {
                character: " ",
                text: "[Leoran, surprised, stood in place as Bane walked away.]"
            },
            {
                character: "Prince Leoran",
                text: "<i>(whispers to self) I don't need your encouragement, Bane. I will prove myself regardless...</i>",
                choices: [
                    { text: "Continue...", next: "cutscene9" }
                ]
            }
        ]
    },
    {
        id: "chat-05-end-final-b",
        type: "chat",
        img: "url('pictures/exit1.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "Remember this, your highness. Should you ever get lost in the darkness, you can always rely on your humor to light the way."
            },
            {
                character: "Prince Leoran",
                text: "Very funny, Bane, Very funny...",
                choices: [
                    { text: "Continue...", next: "cutscene9" }
                ]
            }
        ]
    },
    {
        id: "chat-05-end-final-c",
        type: "chat",
        img: "url('pictures/exit1.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "Let's be clear, your highness. This isn't a game. If you mess this up, our people will die. This is your chance to actually make a difference."
            },
            {
                character: "Prince Leoran",
                text: "I'm not an idiot, Bane. I know the stakes. I don't need you to remind me. I don't plan on being the joke all of you think I am, not this time...",
                choices: [
                    { text: "Continue...", next: "cutscene9" }
                ]
            }
        ]
    },
    {
        id: "chat-05-end-final-d",
        type: "chat",
        img: "url('pictures/exit1.png')",
        messages: [
            {
                character: "Knight Bane",
                text: "Hey, did you hear about the apple that could predict the future? It is another anicent artifact, I found it the other day, I can sell it to you for 50 ducats."
            },
            {
                character: "Prince Leoran",
                text: "What? That's not even funny, Bane."
            },
            {
                character: " ",
                text: "[Leoran shakes his head.]"
            },
            {
                character: "Prince Leoran",
                text: "You know, you all painted me as the jester... It seems like you are making more jokes than I am.",
                choices: [
                    { text: "Continue...", next: "cutscene9" }
                ]
            }
        ]
    },
    // End of the chapter
    {
        id: "cutscene9",
        type: "cutscene",
        img: "pictures/cutscene09.png",
        text: "Royal Mage Academy <br><br><br> City of Veloria",
        next: "chat06"
    },
    {
        id: "chat06",
        type: "chat",
        img: "url('pictures/class.png')",
        borderColor: "2px solid rgb(205 161 0 / 0.7)",
        bgOpacity: "rgb(14 14 14 / 0.9)",
        textBoxSize: "400px",
        messages: [
            {
                character: "Professor Caradoc",
                text: "Class is dismissed. I expect your thesis on the magical properties of the Eldertree sap by next week. Good day, students."
            },
            {
                character: " ",
                text: "[The students begin to pack their belongings and leave the classroom. You are gathering your books, and you notice Aeric approaching your desk.]"
            },
            {
                character: "Aeric",
                text: "Another day, another lecture. I swear, if I have to listen to Caradoc's voice for another minute, I might just turn into a tree myself.",
            },
            {
                character: "Aeric",
                text: "Hey...",
                showModal: "characterName",
                choices: [
                    { text: "Continue...", next: "chat06-2" }
                ]
            }
        ]
    },
    {
        id: "chat06-2",
        type: "chat",
        img: "url('pictures/class.png')",
        messages: [
            {
                character: "Aeric",
                text: `${playerName}, what are your plans for the day? I heard there is a new exhibit at the Royal Museum, and I was thinking of checking it out. Care to join me?`,
                updateCharacterName: true
            },
            {
                character: "You",
                text: "Really? We just got assigned a hundred-page thesis, and you want to go to the museum?",
                isPlayer: true

            },
            {
                character: "Aeric",
                text: "Oh come on, it will be for research! Maybe we'll find something on Eldertree sap at the museum. Plus, it’s good to take a break once in a while. \
                Besides, someone as smart as you can finish that in no time. Miss number one in the academy.",
            },
            {
                character: "You",
                text: "...",
                isPlayer: true,
                choices: [
                    { text: "Accept Aeric's offer", next: "chat06-accept" },
                    { text: "Decline Aeric's offer", next: "chat06-decline" }
                ]
            }
        ]
    },
    {
        id: "chat06-accept",
        type: "chat",
        img: "url('pictures/class.png')",
        messages: [
            {
                character: "You",
                text: "Fine... I'll go with you. But only because I need a some fresh air. I can't stand the smell of old books anymore.",
                isPlayer: true
            },
            {
                character: "Aeric",
                text: "(Smiling) Yaay! I promise it will be fun. We can go to the museum, and then grab a bite at the tavern. I heard they have a new dish called 'Dragon's Breath'.",
            },
            {
                character: "You",
                text: "*Sigh* You seem unfazed for someone who has a thesis to write.",
                isPlayer: true
            },
            {
                character: "Aeric",
                text: "Thats because I got you. You are the best in the academy after all.",
            },
            {
                character: "You",
                text: "...",
                isPlayer: true,
                choices: [
                    { text: "Ask him to clarify", next: "chat06-accept-ask" },
                    { text: "Whatever", next: "chat06-accept-ignore" }
                ]
            }
        ]
    },
    {
        id: "chat06-accept-ask",
        type: "chat",
        img: "url('pictures/class.png')",
        messages: [
            {
                character: "You",
                text: `Ummm... What do you mean by "I got you"? Are you saying I'm doing your thesis for you?`,
                isPlayer: true
            },
            {
                character: "Aeric",
                text: "Oh, no no no. I didn't mean it like that. I just meant that you are the best at everything, and I'm lucky to have you as a friend."
            },
            {
                character: " ",
                text: "[You eye Aeric suspiciously.]"
            },
            {
                character: "You",
                text: "Right...",
                isPlayer: true
            },
            {
                character: "Aeric",
                text: "Anyways, we are going to be late. Let's go!",
                choices: [
                    { text: "Continue...", next: "chat06-3-a" }
                ]
            }
        ]
    },
    {
        id: "chat06-accept-ignore",
        type: "chat",
        img: "url('pictures/class.png')",
        messages: [
            {
                character: "You",
                isPlayer: true,
                text: "Whatever...",
            },
            {
                character: "Aeric",
                text: "Come on, we are going to be late. Let's go!",
                choices: [
                    { text: "Continue...", next: "chat06-3-a" }
                ]
            }
        ]
    },
    {
        id: "chat06-decline",
        type: "chat",
        img: "url('pictures/class.png')",
        messages: [
            {
                character: "You",
                text: "I don't know, Aeric. I don't think I can afford to waste time right now. I think I should really start on this thesis. The Eldertree sap is a complex topic, and Professor Caradoc expects thorough research.",
                isPlayer: true
            },
            {
                character: " ",
                text: "[Aeric looks at you, he seems sad]"
            },
            {
                character: "Aeric",
                text: "Oh, I see. Yeah, you’re right. It’s quite a hefty assignment. I guess I’ll just go alone then..."
            },
            {
                character: "You",
                text: "...",
                isPlayer: true,
                choices: [
                    { text: "Change your mind and go", next: "chat06-accept" },
                    { text: "Stick to your decision", next: "chat06-decline-stick" }
                ]
            }
        ]
    },
    {
        id: "chat06-decline-stick",
        type: "chat",
        img: "url('pictures/class.png')",
        messages: [
            {
                character: "You",
                text: " I’m sorry, Eldric. It’s just... I get anxious if I fall behind. I promise we can go next time. I'll make it up to you.",
                isPlayer: true
            },
            {
                character: "Aeric",
                text: `No worries, ${playerName}. I get it. I'll see you later then.`,
                updateCharacterName: true
            },
            {
                character: "You",
                text: "See you tomorrow, Aeric.",
                isPlayer: true,
                choices: [
                    { text: "Continue...", next: "chat06-3-b" }
                ]
            }
        ]
    },
    {
        id: "chat06-3-a",
        type: "chat",
        img: "url('pictures/academyHall.png')",
        switchScene: true,
        switchTextBox: true,
        borderColor: "2px solid rgb(205 161 0 / 0.7)",
        bgOpacity: "rgb(14 14 14 / 0.8)",
        textBoxSize: "400px",
        messages: [
            {
                character: " ",
                text: "[You and Aeric leave the classroom and come to the academy's main hall. You see students walking around, chatting, and preparing to leave for the day.]"
            },
            {
                character: "You",
                text: "You know, it's refreshing to see you so enthusiastic about something other than potions.",
                isPlayer: true
            },
            {
                character: "Aeric",
                text: "(Laughs) I have my moments. Besides, there’s more to life than just work, right? You gotta enjoy it."
            },
            {
                character: "You",
                text: "I suppose. But school is more important. We can't just ignore our responsibilities.",
                isPlayer: true
            },
            {
                character: "Aeric",
                text: "We can just for today. Come on!",
            },
            {
                character: " ",
                text: "[Aeric takes your hand and pulls you along. You both leave the academy and head towards the museum.]",
                choices: [
                    { text: "Continue...", next: "chat06-3-a-end" }
                ]
            }
        ]
    },
    {
        id: "chat06-3-b",
        type: "chat",
        img: "url('pictures/emptyClass.png')",
        switchScene: true,
        switchTextBox: true,
        borderColor: "2px solid rgb(205 161 0 / 0.7)",
        bgOpacity: "rgb(14 14 14 / 0.7)",
        textBoxSize: "250px",
        messages: [
            {
                character: " ",
                text: "[Aeric leaves the classroom, and you are left alone. The room is quiet, and you can hear the sound of the wind outside. You start to gather your books and notes, and prepare to leave the classroom.]"
            },
            {
                character: "You",
                text: "I hope he's not too upset...",
                isPlayer: true
            },
            {
                character: " ",
                text: "[Pope Alaric appears at the door, and looks at you with a gentle smile.]"
            },
            {
                character: "Pope Alaric",
                text: "Ah, I'm glad I caught you. Mind if I have a word with you, young prodigy?",
                choices: [
                    { text: "Continue...", next: "cutscene10" }
                ]
            }
        ]
    },
    {
        id: "chat06-3-a-end",
        type: "chat",
        img: "url('pictures/emptyClass.png')",
        switchScene: true,
        switchTextBox: true,
        borderColor: "2px solid rgb(205 161 0 / 0.7)",
        bgOpacity: "rgb(14 14 14 / 0.7)",
        textBoxSize: "400px",
        messages: [
            {
                character: " ",
                text: "[Back in the empty classroom, The afternoon light casts long shadows across the room. Pope Alaric appears at the door, and looks into the empty room.]"
            },
            {
                character: "Pope Alaric",
                text: "(Muttering to self) I was certain they should still be in class... Perhaps I have mistaken the time.",
            },
            {
                character: " ",
                text: "[Pope Alaric turns to leave]"
            },
            {
                character: "Professor Caradoc",
                text: "Ah, Alaric! I wasn't expecting anyone here, least of all, you."
            },
            {
                character: " ",
                text: "[Professor Caradoc walks down the hall, and joins Pope Alaric.]"
            },
            {
                character: "Pope Alaric",
                text: `Ah, Professor. It seems I have missed the ones I came to see. Tell me, do you know where I might find ${playerName}?`,
                updateCharacterName: true
            },
            {
                character: "Professor Caradoc",
                text: `${playerName}? Yes she is an exceptional student. My class just ended not long ago, she should be around the academy.`,
                updateCharacterName: true
            },
            {
                character: "Pope Alaric",
                text: "..."
            },
            {
                character: "Professor Caradoc",
                text: "You seem troubled, Alaric, is there something I can help you with?"
            },
            {
                character: "Pope Alaric",
                text: "Just your continued guidance and wisdom, Professor. What lies ahead will test us all..."
            },
            {
                character: " ",
                text: "[Pope Alaric walks away]",
                choices: [
                    { text: "Continue...", next: "cutscene10" }
                ]
            }
        ]
    },
    {
        id: "cutscene10",
        type: "cutscene",
        img: "",
        text: ".   .   . <br><br> Chapter 1 <br><br> End of transmission <br><br> .   .   .",
        next: "cutscene11"
    },
    {
        id: "cutscene11",
        type: "cutscene",
        img: "pictures/chapter2.png",
        text: "Chapter 2 <br><br><br> <Abyssal Ancients> <br><br><br> Coming Soon...",
        next: "end"
    },
    { 
        id: "end",
        type: "cutscene",
        img: "",
        end: true,
        text: "Thank you for playing! Refresh the page to return to the main menu."
    }
];

const points = [
    { cityName: "Veloria", x: 48.25, y: 21.5, population: "2M", location: "Kingdom of Veloria", type: "Capital City", imageUrl: "pictures/veloriaEmblem.png", 
    description: "The capital city of the Kingdom of Veloria. It is a bustling metropolis, home to the King's castle, the Royal Academy, and the Grand Church. \
    The Kingdom has occasionally clashed with evil creatures living in the Shadow Realm, and successfully repeled them with superior weaponry  and magic. \
    However, recent attacks have escalated in intensity, surpassing previous encounters in their ferocity and strength." },
    { cityName: "Frosthold", x: 16, y: 23, population: "100K", location: "Kingdom of Veloria", type: "Town", imageUrl: "pictures/townEmblem.png",
    description: "Located in the Northern region of the Kingdom, this small town sits at the foot of the towering snow mountains. \
    The mountains serve as a protective barrier against the blizzards originating from the neighboring Everfrost region, though due to the proximity the town is unable to escape eternal snowfall." },
    { cityName: "Ocean's Gate", x: 20, y: 70, population: "750K", location: "Kingdom of Veloria", type: "Port City", imageUrl: "pictures/portEmblem.png", 
    description: "Located on the western edge of the Kingdom, this bustling port city serves as the central trade hub for the Kingdom. Narrow cobblestone streets wind through crowed markets and lively taverns, \
    where sailors and merchant from all around the world gather .If you have enough money, you will find answers to anything here."},
    { cityName: "Southern Outpost", x: 56.5, y: 53, population: "200K", location: "Kingdom of Veloria", type: "Gateway Town", imageUrl: "pictures/outpostEmblem.png",
    description: "Located on the sountern edge of the Kingdom of Veloria, this heavily fortified outpost guards the Kingdom against the unknown perils of the Forest of Despair. \
    Characterized by the daunting stone walls and reinforced iron gate, this town serves as the last stop for those who seek to venture into the unknown." },
    // More points as needed
];


function randomChar() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return chars[Math.floor(Math.random() * chars.length)];
}

let counter = document.querySelectorAll('#matrixLine .char').length;
function updateText() {
    const chars = document.querySelectorAll('#matrixLine .char');
    
    chars.forEach((span, index) => {
        if (index < counter) {
            span.textContent = randomChar();
        }
    });

    // Decrement the counter if isAnimating is false
    if (!isAnimating && counter > 0) {
        counter--;
    }
}

document.getElementById('playButton').addEventListener('click', function() {
    this.disabled = true;
    let titleContainer = document.getElementById('titleContainer');
    let backgroundContainer = document.getElementById('backgroundContainer');
    let matrixLine = document.getElementById('matrixLine');
    const chars = document.querySelectorAll('#matrixLine .char');

    // Enlarge the text
    titleContainer.classList.add('fadeOut');
    chars.forEach(span => span.classList.add('enlarge'));

    setTimeout(() => {
        isAnimating = false;
    }, 2500); // 2500 ms for the enlarge effect to finish

    
    setTimeout(() => {
        backgroundContainer.classList.add('fadeOut');
        matrixLine.classList.add('fadeOut');
    }, 4500); // 4500 ms for the title to fade out

    setTimeout(() => {
        let loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.style.display = 'flex'; // show loading icon
    }, 6000); // 6000 FIX FOR NORMAL

    setTimeout(() => {
        container.style.display = 'none';
        document.getElementById('loadingScreen').style.display = 'none'; // hide loading screen
        transitionToPassage(startLocation); // prologue is deafule FIX FOR NORMAL
    }, 1000); // 10000 FIX FOR NORMAL
});

function transitionToPassage(passageId) {
    const passage = passages.find(p => p.id === passageId);

    if (passage.type === "cutscene") {
        document.getElementById('container').style.display = 'none';
        let cutsceneScreen = document.getElementById('cutsceneScreen');
        let cutsceneImage = document.getElementById('cutsceneImage');
        let cutsceneText = document.getElementById('cutsceneText');
        let skipButton = document.getElementById('skipButton');
        const storyScreen = document.getElementById('storyScreen');
        
        // Hides the map and skip button
        mapBtn.classList.add('hidden');
        skipButton.classList.add('hidden');
        hintModal.classList.add('hidden');

        storyScreen.classList.add('fadeOut');

        setTimeout(() => {
            // Reset the cutscene screen and show the cutscene
            storyScreen.classList.add('hidden');
            cutsceneScreen.classList.remove('fadeOut');

            cutsceneImage.src = passage.img;
            cutsceneText.innerHTML = '';

            cutsceneScreen.classList.remove('hidden');

            setTimeout(() => {
                typeWriter(passage.text, cutsceneText, 0, 40, () => {
                    setTimeout(() => {
                        if (!passage.end) {
                            cutsceneScreen.classList.add('fadeOut');
                        }
                    }, 2000);

                    setTimeout(() => {
                        if (!passage.end) {
                            // Transition to the next passage specified in the cutscene
                            cutsceneScreen.classList.add('hidden');
                            storyScreen.classList.remove('fadeOut');
                            transitionToPassage(passage.next);
                        } else {
                            console.log("The end");
                        }
                    }, 4000);
                });
            }, 2000);
        }, 2000);
    } 
    else {
        resetTextBox();
        cutsceneScreen.classList.add('hidden');
        showStory(passageId);
    }
}

function showStory(passageId) {
    const storyScreen = document.getElementById('storyScreen');
    const passage = passages.find(p => p.id === passageId);
    const storyContent = document.getElementById('storyContent');
    const mapButton = document.getElementById('mapButton');
    let skipButton = document.getElementById('skipButton');

    // Clear the storyContent
    clearStoryContent();

    // Update the story image
    if(passage.img) {
        document.getElementById('storyImage').style.backgroundImage = passage.img;
    } else {
        // Default or hide the image if not specified
        document.getElementById('storyImage').style.backgroundImage = 'none'; // Or set to a default image
    }

    // Show the story screen and update the story text
    storyScreen.classList.remove('hidden');
    mapButton.classList.remove('hidden');
    skipButton.classList.remove('hidden');
    if (disableHint === false){
        hintModal.classList.remove('hidden');
    }

    // Set textbox attributes
    if (passage.borderColor && passage.bgOpacity && passage.textBoxSize) {
        changeTextBox(passage.borderColor, passage.bgOpacity, passage.textBoxSize);
    }
    
    if (passage.type === "chat") {
        processScene(passage, 0)
    } else if (passage.type === "passage"){
        // Create a new paragraph element and adding the text to it
        const storyTextElement = document.createElement('p');
        storyTextElement.id = 'storyText';
        storyContent.appendChild(storyTextElement);


        typeWriter(passage.text, storyTextElement, 0, 15, function() {
    });
        // Clear previous choices and add new ones
        let choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = "";

        if(passage.choices) {
            passage.choices.forEach(choice => {
                let button = document.createElement('button');
                button.innerText = choice.text;
                button.className = 'button';
                button.onclick = () => {
                    resetSkip();
                    transitionToPassage(choice.next);
                };
                choicesContainer.appendChild(button);
            });
        }
    }
}

function typeWriter(text, element, i, speed, callback, skip = false) {
    let inItalic = false;

    function write() {
        if (skipScene || skip) {
            // Skip the typing effect and just add the full text.
            // Ensure to close any open italic tags to maintain styling.
            let remainingText = inItalic ? text.slice(i, text.lastIndexOf("</i>") + 4) : text.slice(i);
            // Maintain HTML by converting text to a temporary div, then appending its children to maintain event listeners
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = remainingText;

            while (tempDiv.firstChild) {
                element.appendChild(tempDiv.firstChild);
            }

            // Ensure we correctly close the italic tag if it's open
            if (inItalic) {
                element.innerHTML += "</i>";
            }

            callback && callback();
            return; // Exit the function
        }

        if (i < text.length) {
            const currentSubstring = text.slice(i);

            // Handling <br>
            if (currentSubstring.startsWith("<br>")) {
                element.innerHTML += "<br>";
                i += 4; // Skip the br tag
            }
            // Detect starting <i> tag
            else if (currentSubstring.startsWith("<i>") && !inItalic) {
                inItalic = true;
                element.innerHTML += "<i>";
                i += 3; // Advance past <i>
            }
            // Detect closing </i> tag
            else if (currentSubstring.startsWith("</i>") && inItalic) {
                inItalic = false;
                element.innerHTML += "</i>";
                i += 4; // Advance past </i>
            }
            else if (inItalic) {
                // If we are in an italic section, append directly within <i> tag.
                const iTag = element.querySelector("i:last-child");
                if(iTag) {
                    iTag.innerHTML += text.charAt(i);
                } else {
                    // If for some reason, the i tag wasn't created, append it normally.
                    element.innerHTML += text.charAt(i);
                }
                i++;
            }
            else {
                // Normal character output
                element.innerHTML += text.charAt(i);
                i++;
            }

            setTimeout(write, speed);
        } else if (callback) {
            callback();
        }
    }

    write();
}

function typeWriterPromise(text, element, speed, skip = false) {
    return new Promise(resolve => {
      typeWriter(text, element, 0, speed, resolve, skip);
    });
  }

function clearStoryContent() {
    const storyContent = document.getElementById('storyContent');
    storyContent.innerHTML = ''; // Clears the content
}

function addMessage(characterName, dialogue, isPlayer = false, choices = [], scene, messageIndex) {
    const storyContent = document.getElementById('storyContent');
    let img = characterImages[characterName] || "";
    let choicesContainer = document.getElementById('choices');
    let playerMSG = isPlayer;

    // Clear previous choices
    choicesContainer.innerHTML = "";

    // Function to create and append an element
    function createAndAppend(parent, elementType, classNames, textContent = '') {
        const element = document.createElement(elementType);
        element.className = classNames;
        element.textContent = textContent;
        parent.appendChild(element);
        return element;
    }

    // Creating the message element
    const messageElement = createAndAppend(storyContent, 'div', `message${isPlayer ? ' player-message' : ''}`);
    
    // Creating profile pic and text elements
    if (characterName === " ") {
    } else {
        const profilePicElement = createAndAppend(messageElement, 'div', 'profile-pic');
        profilePicElement.style.backgroundImage = img;
    }


    // Creating text element
    const textElement = createAndAppend(messageElement, 'div', '');

    // Creating name and dialogue elements
    const nameClass = `character-name${isPlayer ? ' player-name' : ''}`;
    createAndAppend(textElement, 'div', nameClass, characterName);
    const dialogueEl = createAndAppend(textElement, 'div', 'dialogue');

    storyContent.scrollTop = storyContent.scrollHeight;

    typeWriterPromise(dialogue, dialogueEl, 15, playerMSG).then(() => {    
    // If there are no choices, automatically proceed to the next message after a delay or user action
        if (choices.length === 0) {
            setTimeout(() => processMessage(scene, messageIndex + 1), chatDelay);
        } else if (choices.length === 1 && choices[0].text === "AutoSelect") {
            setTimeout(() => handleChatChoice(choices[0].next), 1000);
            resetSkip();
        } else {
            choices.forEach(choice => {
                let button = document.createElement('button');
                button.innerText = choice.text;
                button.className = 'button';
                button.onclick = () => {
                    button.disabled = true; // Disable the button after a choice is made
                    if (choice.text != "Continue..."){
                        removeLastMessage(); 
                    }
                    resetSkip();
                    handleChatChoice(choice.next); // Then handle the chat choice
                };
                choicesContainer.appendChild(button);
            });
        }
    });
}

function addMessages(messages) {
    messages.forEach(message => {
        addMessage(message.img, message.character, message.text, message.isPlayer);
    });
}

function removeLastMessage() {
    const storyContent = document.getElementById('storyContent');
    if (storyContent.lastChild) {
        storyContent.removeChild(storyContent.lastChild);
    }
}

function processScene(scene) {
    // Start with the first message of the scene
    processMessage(scene, 0);
    
    if (scene.switchTextBox) {
        if (scene.borderColor && scene.bgOpacity && scene.textBoxSize) {
            changeTextBox(scene.borderColor, scene.bgOpacity, scene.textBoxSize);
        }
    }
}

function processMessage(scene, messageIndex) {
    if (messageIndex < scene.messages.length) {
        let message = scene.messages[messageIndex];
        if (message.updateCharacterName) {
            message.text = message.text.replace("Unknown Player", playerName);
        }
        addMessage(message.character, message.text, message.isPlayer, message.choices, scene, messageIndex);
        if (message.showModal){
            if (message.showModal === "characterName"){
                showCharacterModal()
            }
        }
    }
}

function handleChatChoice(nextSceneId) {
    // Find the next scene by the nextSceneId and start processing it
    let nextScene = passages.find(scene => scene.id === nextSceneId);
    if (nextScene.switchScene) {
        document.getElementById('storyImage').style.backgroundImage = nextScene.img;
        clearStoryContent();
    }

    if (nextScene && nextScene.type === "chat") {
        processScene(nextScene);
    } else {
        transitionToPassage(nextSceneId);
    }
}
document.getElementById('skipButton').addEventListener('click', function() {
    chatDelay = 0;
    skipScene = true;
});

function resetSkip() {
    chatDelay = 1000;
    skipScene = false;
}

function playSound(path) {
    var audio = new Audio(path);
    audio.play();
  }



// Hint Modal stuff
var hintModal = document.getElementById("hintModal");
var hintBtn = document.getElementsByClassName("hintClose")[0];

hintBtn.onclick = function() {
    console.log("clicked");
    disableHint = true;
    hintModal.classList.add('hidden');
}
// MAP STUFF
var modal = document.getElementById("mapModal");
var mapBtn = document.getElementById("mapButton");
var span = document.getElementsByClassName("close")[0];

// Optional: backdrop element for extra effect
var backdrop = document.createElement("div");
backdrop.classList.add("modal-backdrop");
document.body.appendChild(backdrop);

mapBtn.onclick = function() {
    modal.style.display = "block";
    modal.style.opacity = "1";
    backdrop.style.display = "block"; // Optional
    positionPoints();
}

span.onclick = function() {
    modal.style.opacity = "0";
    setTimeout(function(){ 
        modal.style.display = "none";
        backdrop.style.display = "none"; // Optional
    }, 400); // Timeout matches the CSS transition time
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        setTimeout(function(){ 
            modal.style.display = "none";
            backdrop.style.display = "none"; // Optional
        }, 400);
    }
}


function positionPoints() {
    const mapContainer = document.getElementById('mapModal');
    const mapRect = mapContainer.getBoundingClientRect();

    // Clear existing points
    document.querySelectorAll('#mapModal .map-point').forEach(element => {
        element.remove(); // This removes only the selected elements
    });

    // Add new points
    points.forEach(point => {
        let div = document.createElement('div');
        div.className = 'map-point';
        div.style.left = (point.x / 100) * mapRect.width + 'px';
        div.style.top = (point.y / 100) * mapRect.height + 'px';
        div.setAttribute('data-city', point.cityName);
        mapContainer.appendChild(div);
    });

    // Event listeners for points
    document.querySelectorAll('.map-point').forEach(item => {
        item.addEventListener('click', event => {
            var cityName = event.target.getAttribute('data-city');
            // Find the city data from points array
            const cityData = points.find(point => point.cityName === cityName);
            
            // Populate the modal with all city data
            document.getElementById('locationTitle').innerText = cityData.cityName;
            document.getElementById('locationImage').src = cityData.imageUrl; 
            document.getElementById('locationImage').alt = `Image of ${cityData.cityName}`;
            document.getElementById('locationDescription').innerText = cityData.description;
            document.getElementById('locationPopulation').innerText = cityData.population;
            document.getElementById('locationLocation').innerText = cityData.location;
            document.getElementById('locationType').innerText = cityData.type;
    
            // Show the modal
            document.getElementById('locationModal').style.display = 'block';
            
            // Close functionality
            document.querySelector('#locationModal .close').onclick = function() {
                document.getElementById('locationModal').style.display = 'none';
            };
        });
    });
}

function changeTextBox(color, opacity, size) {
    let textBox = document.getElementById('storyChatBox');
    let storyContent = document.getElementById('storyContent');
    textBox.style.border = color;
    textBox.style.background = opacity;
    storyContent.style.height = size;
}

function resetTextBox() {
    let textBox = document.getElementById('storyChatBox');
    let storyContent = document.getElementById('storyContent');
    
    textBox.removeAttribute('style');
    storyContent.removeAttribute('style');
}

function updateCharacterName() {
    let characterName = document.getElementById("characterNameInput").value;
    if (characterName == null || characterName == "") {
        characterName = "Unknown Player";
    }
    playerName = characterName;  
    let characterModal = document.getElementById("characterModal");
    characterModal.style.display = "none";
}

function showCharacterModal() {
    let characterModal = document.getElementById("characterModal");
    characterModal.style.display = "block";
}

window.addEventListener('resize', positionPoints);
setInterval(updateText, 100); // Update every 150 milliseconds