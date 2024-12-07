/*
import 'dotenv/config';
import { db } from './db'
import {
    veranstaltungen,
    schichten,
    zeitfenster,
    personen,
    zeitfensterzuweisung,
} from './schema'; // Importiere dein Schema


async function seedDatabase() {
    console.log("Seeding the database...");

    // 1. Veranstaltungen einfügen
    const [veranstaltung1, veranstaltung2] = await db.insert(veranstaltungen).values([
        { name: 'Sommerfest 2024', datum: '2024-06-21' },
        { name: 'Herbstmarkt 2024', datum: '2024-09-15' },
    ]).returning();

    // 2. Schichten einfügen
    const [barschicht1, kassenschicht1] = await db.insert(schichten).values([
        { veranstaltungId: veranstaltung1.veranstaltungId, schichtname: 'Barschicht' },
        { veranstaltungId: veranstaltung1.veranstaltungId, schichtname: 'Kassenschicht' },
    ]).returning();

    const [barschicht2, kassenschicht2] = await db.insert(schichten).values([
        { veranstaltungId: veranstaltung2.veranstaltungId, schichtname: 'Barschicht' },
        { veranstaltungId: veranstaltung2.veranstaltungId, schichtname: 'Kassenschicht' },
    ]).returning();

    // 3. Zeitfenster einfügen
    await db.insert(zeitfenster).values([
        { schichtId: barschicht1.schichtId, startzeit: '18:00', endzeit: '20:00' },
        { schichtId: barschicht1.schichtId, startzeit: '20:00', endzeit: '22:00' },
        { schichtId: kassenschicht1.schichtId, startzeit: '18:00', endzeit: '19:30' },
        { schichtId: kassenschicht1.schichtId, startzeit: '19:30', endzeit: '21:00' },

        { schichtId: barschicht2.schichtId, startzeit: '17:00', endzeit: '19:00' },
        { schichtId: barschicht2.schichtId, startzeit: '19:00', endzeit: '21:00' },
        { schichtId: kassenschicht2.schichtId, startzeit: '16:00', endzeit: '18:30' },
        { schichtId: kassenschicht2.schichtId, startzeit: '18:30', endzeit: '21:00' },
    ]);

    // 4. Personen einfügen
    const [alice, bob, charlie, dave] = await db.insert(personen).values([
        { name: 'Alice' },
        { name: 'Bob' },
        { name: 'Charlie' },
        { name: 'Dave' },
    ]).returning();

    // 5. Zeitfensterzuweisungen
    await db.insert(zeitfensterzuweisung).values([
        { zeitfensterId: 1, personId: alice.personId }, // Alice in erstes Zeitfenster der Barschicht (Sommerfest)
        { zeitfensterId: 2, personId: bob.personId },   // Bob in zweites Zeitfenster der Barschicht (Sommerfest)
        { zeitfensterId: 3, personId: charlie.personId }, // Charlie in erstes Zeitfenster der Kassenschicht (Sommerfest)
        { zeitfensterId: 4, personId: dave.personId },   // Dave in zweites Zeitfenster der Kassenschicht (Sommerfest)

        { zeitfensterId: 5, personId: alice.personId }, // Alice in erstes Zeitfenster der Barschicht (Herbstmarkt)
        { zeitfensterId: 6, personId: bob.personId },   // Bob in zweites Zeitfenster der Barschicht (Herbstmarkt)
        { zeitfensterId: 7, personId: charlie.personId }, // Charlie in erstes Zeitfenster der Kassenschicht (Herbstmarkt)
        { zeitfensterId: 8, personId: dave.personId },   // Dave in zweites Zeitfenster der Kassenschicht (Herbstmarkt)
    ]);

    console.log("Database seeded successfully!");
}

seedDatabase().catch((error) => {
    console.error("Error seeding the database:", error);
});
*/
