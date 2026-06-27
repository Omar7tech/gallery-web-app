/**
 * Curated, verified Unsplash photo IDs (each HEAD-checked → 200).
 * Use with `unsplash(id, { w, h, q })` from "@/lib/utils".
 * Grouped by use so photography direction stays consistent.
 */

export const IMG = {
  // Living room / sofas / lounge
  livingHero: "1567538096630-e0c55bd6374c",
  livingA: "1493663284031-b7e3aefcae8e",
  livingB: "1524758631624-e2822e304c36",
  sofaA: "1555041469-a586c61ea9bc",
  sofaB: "1503602642458-232111445657",
  sofaC: "1617806118233-18e1de247200",
  loungeChairA: "1567016432779-094069958ea5",
  loungeChairB: "1565538810643-b5bdb714032a",
  loungeChairC: "1592078615290-033ee584e267",

  // Bedroom
  bedroomHero: "1540574163026-643ea20ade25",
  bedroomA: "1505693416388-ac5ce068fe85",
  bedroomB: "1505691938895-1758d7feb511",
  bedroomC: "1616627561950-9f746e330187",

  // Dining
  diningHero: "1550226891-ef816aed4a98",
  diningA: "1615875605825-5eb9bb5d52ac",
  diningB: "1449247709967-d4461a6a6103",

  // Office / study
  officeHero: "1497366216548-37526070297c",
  officeA: "1556228453-efd6c1ff04f6",
  officeB: "1551298370-9d3d53740c72",

  // Outdoor
  outdoorHero: "1600210492493-0946911123ea",
  outdoorA: "1604578762246-41134e37f9cc",

  // Architectural / interiors / atmosphere
  interiorA: "1586023492125-27b2c045efd7",
  interiorB: "1616486338812-3dadae4b4ace",
  interiorC: "1618220179428-22790b461013",
  interiorD: "1519710164239-da123dc03ef4",
  interiorE: "1534349762230-e0cadf78f5da",
  interiorF: "1550581190-9c1c48d21d6c",
  interiorG: "1513506003901-1e6a229e2d15",
  interiorH: "1582582621959-48d27397dc69",
  interiorI: "1558211583-d26f610c1eb1",
  interiorJ: "1611967164521-abae8fba4668",
  interiorK: "1598300042247-d088f8ab3a91",
  interiorL: "1532372320572-cda25653a26d",
  interiorM: "1522708323590-d24dbb6b0267",
  interiorN: "1616137466211-f939a420be84",
  interiorO: "1551298370-9d3d53740c72",
  interiorP: "1594026112284-02bb6f3352fe",
  interiorQ: "1538688525198-9b88f6f53126",

  // Materials & craft (texture-led)
  materialWood: "1583847268964-b28dc8f51f92",
  materialStone: "1554995207-c18c203602cb",
  materialTextile: "1556909211-36987daf7b4d",
  craftA: "1567225557594-88d73e55f2cb",
  craftB: "1631049307264-da0ec9d70304",

  // Portraits (testimonials / authors)
  personA: "1500648767791-00dcc994a43e",
  personB: "1494790108377-be9c29b29330",
  personC: "1438761681033-6461ffad8d80",
  personD: "1472099645785-5658abf4ff4e",
  personE: "1507003211169-0a1dd7228f2d",
  personF: "1544005313-94ddf0286df2",
  personG: "1573497019940-1c28c88b4f3e",
  personH: "1506794778202-cad84cf45f1d",
} as const;
