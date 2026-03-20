export interface Product {
  id: string;
  name: string;
  catalogNumber: string;
  brand: string;
  category: string;
  description: string;
  packSizes: string[];
  grade: string;
  casNumber: string;
}

const brands = ["Merck", "Sigma-Aldrich", "Millipore", "Whatman"];

const categories = [
  "Solvents",
  "Reagents",
  "Analytical Standards",
  "Lab Supplies",
  "Indicators",
  "Buffers",
  "Acids",
  "Bases",
  "Salts",
  "Chromatography",
  "Filtration",
  "Biochemicals",
  "Organic Compounds",
  "Inorganic Compounds",
  "Specialty Chemicals",
];

const grades = [
  "ACS",
  "HPLC",
  "GC",
  "AR",
  "LR",
  "Puriss",
  "Reagent Plus",
  "USP",
  "Technical",
  "Extra Pure",
];

const packSizeOptions = [
  ["100 mL", "500 mL", "1 L", "2.5 L"],
  ["250 mL", "1 L", "4 L"],
  ["100 g", "250 g", "500 g", "1 kg"],
  ["25 g", "100 g", "500 g"],
  ["500 g", "1 kg", "2.5 kg"],
  ["50 mL", "100 mL", "500 mL"],
  ["10 g", "25 g", "100 g"],
  ["1 L", "2.5 L", "4 L"],
];

const chemicals: Array<{
  name: string;
  cas: string;
  category: string;
  description: string;
}> = [
  // Solvents
  {
    name: "Acetone",
    cas: "67-64-1",
    category: "Solvents",
    description:
      "Colorless volatile liquid solvent widely used in chemical synthesis and cleaning applications.",
  },
  {
    name: "Methanol",
    cas: "67-56-1",
    category: "Solvents",
    description:
      "Simplest alcohol, used as solvent, antifreeze, and fuel additive in laboratories.",
  },
  {
    name: "Ethanol",
    cas: "64-17-5",
    category: "Solvents",
    description:
      "Common alcohol solvent used in pharmaceutical and chemical applications.",
  },
  {
    name: "Chloroform",
    cas: "67-66-3",
    category: "Solvents",
    description:
      "Halogenated solvent used in chemical extraction and as a DNA/RNA isolation reagent.",
  },
  {
    name: "Hexane",
    cas: "110-54-3",
    category: "Solvents",
    description:
      "Non-polar hydrocarbon solvent ideal for extraction of oils and fats.",
  },
  {
    name: "Toluene",
    cas: "108-88-3",
    category: "Solvents",
    description:
      "Aromatic hydrocarbon solvent used in paint, coating, and adhesive formulations.",
  },
  {
    name: "Acetonitrile",
    cas: "75-05-8",
    category: "Solvents",
    description:
      "Polar aprotic solvent commonly used as mobile phase in HPLC applications.",
  },
  {
    name: "Dimethyl Sulfoxide",
    cas: "67-68-5",
    category: "Solvents",
    description:
      "Highly polar aprotic solvent used for cell preservation and drug delivery.",
  },
  {
    name: "Isopropanol",
    cas: "67-63-0",
    category: "Solvents",
    description:
      "Secondary alcohol used as disinfectant and solvent in pharmaceutical preparations.",
  },
  {
    name: "Diethyl Ether",
    cas: "60-29-7",
    category: "Solvents",
    description:
      "Low-boiling ether solvent used for extraction and as anesthetic.",
  },
  {
    name: "Ethyl Acetate",
    cas: "141-78-6",
    category: "Solvents",
    description:
      "Ester solvent widely used in chromatography and paint formulations.",
  },
  {
    name: "Dichloromethane",
    cas: "75-09-2",
    category: "Solvents",
    description:
      "Chlorinated solvent used for extraction and as paint stripper.",
  },
  {
    name: "Tetrahydrofuran",
    cas: "109-99-9",
    category: "Solvents",
    description:
      "Cyclic ether solvent used in polymer chemistry and as GPC mobile phase.",
  },
  {
    name: "Petroleum Ether",
    cas: "8032-32-4",
    category: "Solvents",
    description:
      "Mixture of aliphatic hydrocarbons used as non-polar extraction solvent.",
  },
  {
    name: "n-Butanol",
    cas: "71-36-3",
    category: "Solvents",
    description:
      "Four-carbon primary alcohol used as industrial solvent and chemical intermediate.",
  },
  {
    name: "Cyclohexane",
    cas: "110-82-7",
    category: "Solvents",
    description:
      "Cycloaliphatic hydrocarbon solvent used in extraction and polymer chemistry.",
  },
  {
    name: "Xylene",
    cas: "1330-20-7",
    category: "Solvents",
    description:
      "Aromatic solvent mixture used in histology and as paint thinner.",
  },
  {
    name: "Pyridine",
    cas: "110-86-1",
    category: "Solvents",
    description:
      "Basic heterocyclic solvent used in chemical synthesis and as reagent.",
  },
  {
    name: "N,N-Dimethylformamide",
    cas: "68-12-2",
    category: "Solvents",
    description:
      "Polar aprotic solvent used in peptide coupling and polymer processing.",
  },
  {
    name: "1,4-Dioxane",
    cas: "123-91-1",
    category: "Solvents",
    description:
      "Cyclic ether solvent used as stabilizer for chlorinated solvents.",
  },
  // Acids
  {
    name: "Hydrochloric Acid",
    cas: "7647-01-0",
    category: "Acids",
    description:
      "Strong mineral acid used in pH adjustment, metal cleaning, and chemical synthesis.",
  },
  {
    name: "Sulfuric Acid",
    cas: "7664-93-9",
    category: "Acids",
    description:
      "Strong diprotic acid essential for fertilizer production and chemical processing.",
  },
  {
    name: "Nitric Acid",
    cas: "7697-37-2",
    category: "Acids",
    description:
      "Strong oxidizing acid used in metal treatment and explosives manufacture.",
  },
  {
    name: "Phosphoric Acid",
    cas: "7664-38-2",
    category: "Acids",
    description:
      "Triprotic acid used in rust removal, food additives, and fertilizers.",
  },
  {
    name: "Acetic Acid",
    cas: "64-19-7",
    category: "Acids",
    description:
      "Weak organic acid and essential solvent used in synthesis and food preservation.",
  },
  {
    name: "Citric Acid",
    cas: "77-92-9",
    category: "Acids",
    description:
      "Triprotic organic acid found in citrus fruits, used as preservative and pH buffer.",
  },
  {
    name: "Tartaric Acid",
    cas: "87-69-4",
    category: "Acids",
    description:
      "Dicarboxylic acid used in food industry and as resolving agent for chiral compounds.",
  },
  {
    name: "Oxalic Acid",
    cas: "144-62-7",
    category: "Acids",
    description:
      "Simplest dicarboxylic acid used for bleaching, rust removal, and analytical chemistry.",
  },
  {
    name: "Benzoic Acid",
    cas: "65-85-0",
    category: "Acids",
    description:
      "Aromatic carboxylic acid used as food preservative and chemical intermediate.",
  },
  {
    name: "Salicylic Acid",
    cas: "69-72-7",
    category: "Acids",
    description:
      "Beta-hydroxy acid used in pharmaceuticals and as analytical reagent.",
  },
  {
    name: "Perchloric Acid",
    cas: "7601-90-3",
    category: "Acids",
    description:
      "Strongest common acid, used in analytical chemistry and as oxidizer.",
  },
  {
    name: "Hydrobromic Acid",
    cas: "10035-10-6",
    category: "Acids",
    description:
      "Strong acid used in organic synthesis and pharmaceutical manufacturing.",
  },
  {
    name: "Trifluoroacetic Acid",
    cas: "76-05-1",
    category: "Acids",
    description:
      "Strong organic acid used as HPLC modifier and deprotection reagent.",
  },
  {
    name: "Formic Acid",
    cas: "64-18-6",
    category: "Acids",
    description:
      "Simplest carboxylic acid used in textile processing and as MS-compatible HPLC additive.",
  },
  {
    name: "Propionic Acid",
    cas: "79-09-4",
    category: "Acids",
    description:
      "Short-chain fatty acid used as food preservative and chemical intermediate.",
  },
  // Bases
  {
    name: "Sodium Hydroxide",
    cas: "1310-73-2",
    category: "Bases",
    description:
      "Strong base used for pH adjustment, saponification, and chemical synthesis.",
  },
  {
    name: "Potassium Hydroxide",
    cas: "1310-58-3",
    category: "Bases",
    description:
      "Strong alkaline compound used in soap making and electrochemical applications.",
  },
  {
    name: "Ammonium Hydroxide",
    cas: "1336-21-6",
    category: "Bases",
    description:
      "Aqueous ammonia solution used for pH adjustment and cleaning applications.",
  },
  {
    name: "Sodium Carbonate",
    cas: "497-19-8",
    category: "Bases",
    description:
      "Mild alkaline salt used in glass making, detergents, and analytical chemistry.",
  },
  {
    name: "Sodium Bicarbonate",
    cas: "144-55-8",
    category: "Bases",
    description:
      "Mild base used in baking, medicine, and as laboratory pH buffer component.",
  },
  {
    name: "Triethylamine",
    cas: "121-44-8",
    category: "Bases",
    description:
      "Organic tertiary amine used as base catalyst in chemical synthesis.",
  },
  {
    name: "Pyridine",
    cas: "110-86-1",
    category: "Bases",
    description:
      "Aromatic nitrogen base used as catalyst and solvent in organic synthesis.",
  },
  {
    name: "Calcium Hydroxide",
    cas: "1305-62-0",
    category: "Bases",
    description:
      "Inorganic base used in construction, water treatment, and food processing.",
  },
  // Salts
  {
    name: "Sodium Chloride",
    cas: "7647-14-5",
    category: "Salts",
    description:
      "Common table salt used in biological buffers and as osmolality standard.",
  },
  {
    name: "Potassium Chloride",
    cas: "7447-40-7",
    category: "Salts",
    description:
      "Inorganic salt essential for biological buffer preparation and electrolyte solutions.",
  },
  {
    name: "Calcium Chloride",
    cas: "10043-52-4",
    category: "Salts",
    description:
      "Hygroscopic salt used as desiccant, road deicer, and in cell biology.",
  },
  {
    name: "Magnesium Sulfate",
    cas: "7487-88-9",
    category: "Salts",
    description:
      "Inorganic salt used as drying agent in organic synthesis and in Epsom salt.",
  },
  {
    name: "Ammonium Chloride",
    cas: "12125-02-9",
    category: "Salts",
    description:
      "Inorganic salt used in batteries, food additives, and as nitrogen source.",
  },
  {
    name: "Copper Sulfate",
    cas: "7758-98-7",
    category: "Salts",
    description:
      "Bright blue salt used in Fehling's solution, fungicide, and electroplating.",
  },
  {
    name: "Zinc Chloride",
    cas: "7646-85-7",
    category: "Salts",
    description:
      "Inorganic salt used as flux in soldering, textile processing, and catalyst.",
  },
  {
    name: "Iron(III) Chloride",
    cas: "7705-08-0",
    category: "Salts",
    description:
      "Ferric salt used as coagulant in water treatment and Lewis acid catalyst.",
  },
  {
    name: "Ammonium Sulfate",
    cas: "7783-20-2",
    category: "Salts",
    description:
      "Inorganic salt used for protein precipitation and as nitrogen fertilizer.",
  },
  {
    name: "Sodium Sulfate",
    cas: "7757-82-6",
    category: "Salts",
    description:
      "Anhydrous salt used as drying agent and in glass and detergent manufacturing.",
  },
  {
    name: "Potassium Phosphate",
    cas: "7778-77-0",
    category: "Salts",
    description:
      "Monobasic phosphate salt used in biological buffer preparation.",
  },
  {
    name: "Sodium Phosphate",
    cas: "7558-79-4",
    category: "Salts",
    description:
      "Dibasic phosphate salt used in PBS buffer preparation and food additives.",
  },
  {
    name: "Magnesium Chloride",
    cas: "7786-30-3",
    category: "Salts",
    description:
      "Essential cofactor salt used in PCR reactions and enzymatic assays.",
  },
  {
    name: "Barium Chloride",
    cas: "10361-37-2",
    category: "Salts",
    description:
      "Inorganic salt used in analytical chemistry and as precipitation reagent.",
  },
  {
    name: "Lithium Chloride",
    cas: "7447-41-8",
    category: "Salts",
    description:
      "Lithium salt used in RNA precipitation protocols and as electrolyte.",
  },
  // Biochemicals
  {
    name: "Glucose",
    cas: "50-99-7",
    category: "Biochemicals",
    description:
      "Primary monosaccharide used as carbon source in cell culture and energy metabolism.",
  },
  {
    name: "Sucrose",
    cas: "57-50-1",
    category: "Biochemicals",
    description:
      "Common disaccharide used in density gradient centrifugation and cryoprotection.",
  },
  {
    name: "Fructose",
    cas: "57-48-7",
    category: "Biochemicals",
    description:
      "Fruit sugar used as sweetener and in biochemical research applications.",
  },
  {
    name: "Lactose",
    cas: "63-42-3",
    category: "Biochemicals",
    description:
      "Milk sugar disaccharide used in bacterial growth media and pharmaceutical excipient.",
  },
  {
    name: "Starch",
    cas: "9005-25-8",
    category: "Biochemicals",
    description:
      "Polysaccharide used as thickening agent and in iodine indicator tests.",
  },
  {
    name: "Glycine",
    cas: "56-40-6",
    category: "Biochemicals",
    description:
      "Simplest amino acid used in gel electrophoresis buffers and cell culture.",
  },
  {
    name: "Alanine",
    cas: "56-41-7",
    category: "Biochemicals",
    description:
      "Non-essential amino acid used in biochemical research and culture media.",
  },
  {
    name: "Leucine",
    cas: "61-90-5",
    category: "Biochemicals",
    description:
      "Essential branched-chain amino acid used in cell biology and metabolism studies.",
  },
  {
    name: "Lysine",
    cas: "56-87-1",
    category: "Biochemicals",
    description:
      "Essential amino acid used in protein modification and cross-linking studies.",
  },
  {
    name: "Serine",
    cas: "56-45-1",
    category: "Biochemicals",
    description:
      "Hydroxyl amino acid involved in phosphorylation signaling pathways.",
  },
  {
    name: "Bovine Serum Albumin",
    cas: "9048-46-8",
    category: "Biochemicals",
    description:
      "Globular protein used as blocking agent in immunoassays and enzyme stabilizer.",
  },
  {
    name: "ATP",
    cas: "987-65-5",
    category: "Biochemicals",
    description:
      "Adenosine triphosphate, primary cellular energy currency for enzymatic reactions.",
  },
  {
    name: "NAD+",
    cas: "53-84-9",
    category: "Biochemicals",
    description:
      "Nicotinamide adenine dinucleotide coenzyme used in redox biochemistry studies.",
  },
  {
    name: "NADH",
    cas: "58-68-4",
    category: "Biochemicals",
    description:
      "Reduced form of NAD used as electron donor in enzyme kinetics assays.",
  },
  {
    name: "Glutathione",
    cas: "70-18-8",
    category: "Biochemicals",
    description:
      "Tripeptide antioxidant used in cell protection assays and as reducing agent.",
  },
  {
    name: "Coenzyme A",
    cas: "85-61-0",
    category: "Biochemicals",
    description:
      "Metabolic coenzyme essential for fatty acid synthesis and citric acid cycle.",
  },
  {
    name: "Dextran",
    cas: "9004-54-0",
    category: "Biochemicals",
    description:
      "Branched polysaccharide used as plasma volume expander and chromatography matrix.",
  },
  {
    name: "Heparin Sodium",
    cas: "9041-08-1",
    category: "Biochemicals",
    description:
      "Anticoagulant glycosaminoglycan used in blood collection and cell culture.",
  },
  // Buffers
  {
    name: "Tris Base",
    cas: "77-86-1",
    category: "Buffers",
    description:
      "Primary amine buffer compound for preparing biological buffers at pH 7-9.",
  },
  {
    name: "HEPES",
    cas: "7365-45-9",
    category: "Buffers",
    description:
      "Zwitterionic buffer maintaining stable pH in cell culture and biochemical assays.",
  },
  {
    name: "MOPS",
    cas: "1132-61-2",
    category: "Buffers",
    description:
      "Morpholine buffer used for RNA electrophoresis and enzyme activity assays.",
  },
  {
    name: "MES",
    cas: "4432-31-9",
    category: "Buffers",
    description:
      "Zwitterionic buffer for pH range 5.5-6.7 in biological research.",
  },
  {
    name: "PIPES",
    cas: "5625-37-6",
    category: "Buffers",
    description:
      "Dipiperazine sulfonic acid buffer for pH 6.1-7.5 range in biological systems.",
  },
  {
    name: "Bicine",
    cas: "150-25-4",
    category: "Buffers",
    description:
      "Glycine-based buffer used for pH 7.6-9.0 in enzymatic and cell biology studies.",
  },
  {
    name: "CHES",
    cas: "103-47-9",
    category: "Buffers",
    description:
      "Cyclohexylaminoethanesulfonic acid buffer for high pH 8.6-10.0 applications.",
  },
  {
    name: "Citrate-Phosphate Buffer",
    cas: "N/A",
    category: "Buffers",
    description:
      "Two-component buffer system for pH 2.6-7.6 with broad biochemical utility.",
  },
  // Indicators
  {
    name: "Phenolphthalein",
    cas: "77-09-8",
    category: "Indicators",
    description:
      "pH indicator that changes from colorless to pink/purple at pH 8.2-10.",
  },
  {
    name: "Methyl Orange",
    cas: "547-58-0",
    category: "Indicators",
    description:
      "Azo dye pH indicator changing from red to orange-yellow between pH 3.1-4.4.",
  },
  {
    name: "Bromophenol Blue",
    cas: "115-39-9",
    category: "Indicators",
    description:
      "pH indicator and tracking dye used in gel electrophoresis sample loading buffers.",
  },
  {
    name: "Congo Red",
    cas: "573-58-0",
    category: "Indicators",
    description: "Azo dye used as pH indicator and amyloid stain in histology.",
  },
  {
    name: "Crystal Violet",
    cas: "548-62-9",
    category: "Indicators",
    description:
      "Triphenylmethane dye used in Gram staining and as cell proliferation indicator.",
  },
  {
    name: "Eosin Y",
    cas: "17372-87-1",
    category: "Indicators",
    description:
      "Red fluorescent dye used in H&E staining for tissue histology.",
  },
  {
    name: "Hematoxylin",
    cas: "517-28-2",
    category: "Indicators",
    description:
      "Natural dye extracted from logwood used in histological staining protocols.",
  },
  {
    name: "Methylene Blue",
    cas: "61-73-4",
    category: "Indicators",
    description:
      "Cationic dye used as redox indicator, biological stain, and antidote.",
  },
  {
    name: "Bromothymol Blue",
    cas: "76-59-5",
    category: "Indicators",
    description:
      "pH indicator changing from yellow to blue between pH 6.0-7.6.",
  },
  {
    name: "Litmus",
    cas: "1393-92-6",
    category: "Indicators",
    description:
      "Natural pH indicator mixture turning red in acids and blue in bases.",
  },
  // Chromatography
  {
    name: "Silica Gel 60",
    cas: "63231-67-4",
    category: "Chromatography",
    description:
      "Standard TLC and column chromatography stationary phase for polar compound separation.",
  },
  {
    name: "Alumina Basic",
    cas: "1344-28-1",
    category: "Chromatography",
    description:
      "Basic alumina adsorbent for column chromatography of sensitive compounds.",
  },
  {
    name: "Activated Carbon",
    cas: "7440-44-0",
    category: "Chromatography",
    description:
      "High surface area carbon for decolorization and trace contaminant removal.",
  },
  {
    name: "Celite 545",
    cas: "61790-53-2",
    category: "Chromatography",
    description:
      "Diatomaceous earth filter aid for Soxhlet extraction and filtration.",
  },
  {
    name: "Sephadex G-25",
    cas: "9041-38-7",
    category: "Chromatography",
    description:
      "Gel filtration medium for desalting and buffer exchange of proteins.",
  },
  {
    name: "DEAE Cellulose",
    cas: "9013-34-7",
    category: "Chromatography",
    description:
      "Anion exchange cellulose resin for protein and nucleic acid purification.",
  },
  {
    name: "Ion Exchange Resin",
    cas: "N/A",
    category: "Chromatography",
    description:
      "Polymer bead resin for ion exchange chromatography of charged biomolecules.",
  },
  {
    name: "C18 Reverse Phase Silica",
    cas: "N/A",
    category: "Chromatography",
    description:
      "Octadecyl-bonded silica for reverse phase HPLC separation of non-polar analytes.",
  },
  {
    name: "Florisil",
    cas: "1343-88-0",
    category: "Chromatography",
    description:
      "Magnesium silicate adsorbent used in pesticide residue analysis by column chromatography.",
  },
  // Filtration
  {
    name: "Whatman No. 1 Filter Paper",
    cas: "N/A",
    category: "Filtration",
    description:
      "General purpose filter paper with medium retention for routine laboratory filtration.",
  },
  {
    name: "Whatman No. 42 Filter Paper",
    cas: "N/A",
    category: "Filtration",
    description:
      "Ashless quantitative filter paper for gravimetric analysis in analytical chemistry.",
  },
  {
    name: "Nitrocellulose Membrane",
    cas: "9004-70-0",
    category: "Filtration",
    description:
      "Porous membrane for Western blotting and nucleic acid transfer applications.",
  },
  {
    name: "PVDF Membrane",
    cas: "24937-79-9",
    category: "Filtration",
    description:
      "Polyvinylidene fluoride membrane for protein blotting with high binding capacity.",
  },
  {
    name: "Nylon Membrane 0.45 µm",
    cas: "N/A",
    category: "Filtration",
    description:
      "Nylon membrane filter for sample preparation and sterile filtration.",
  },
  {
    name: "Syringe Filter PTFE",
    cas: "N/A",
    category: "Filtration",
    description:
      "PTFE syringe tip filter for organic solvent filtration in HPLC sample prep.",
  },
  // Organic Compounds
  {
    name: "Urea",
    cas: "57-13-6",
    category: "Organic Compounds",
    description:
      "Organic nitrogen compound used as protein denaturant and fertilizer.",
  },
  {
    name: "Guanidine HCl",
    cas: "50-01-1",
    category: "Organic Compounds",
    description:
      "Chaotropic agent used for protein denaturation and nucleic acid isolation.",
  },
  {
    name: "SDS",
    cas: "151-21-3",
    category: "Organic Compounds",
    description:
      "Sodium dodecyl sulfate detergent used in SDS-PAGE electrophoresis.",
  },
  {
    name: "Ethidium Bromide",
    cas: "1239-45-8",
    category: "Organic Compounds",
    description:
      "Fluorescent intercalating dye for nucleic acid visualization in gel electrophoresis.",
  },
  {
    name: "EDTA",
    cas: "60-00-4",
    category: "Organic Compounds",
    description:
      "Chelating agent for divalent metal ions, used in buffer preparation and DNA extraction.",
  },
  {
    name: "EGTA",
    cas: "67-42-5",
    category: "Organic Compounds",
    description:
      "Calcium-selective chelator used in cell biology and calcium signaling research.",
  },
  {
    name: "DTT",
    cas: "3483-12-3",
    category: "Organic Compounds",
    description:
      "Dithiothreitol reducing agent for maintaining protein thiol groups in reduced state.",
  },
  {
    name: "2-Mercaptoethanol",
    cas: "60-24-2",
    category: "Organic Compounds",
    description:
      "Thiol reducing agent used in protein denaturation and RNA isolation protocols.",
  },
  {
    name: "Glycerol",
    cas: "56-81-5",
    category: "Organic Compounds",
    description:
      "Polyol cryoprotectant and viscosity modifier used in enzyme storage solutions.",
  },
  {
    name: "Formaldehyde",
    cas: "50-00-0",
    category: "Organic Compounds",
    description:
      "Aldehyde fixative used in histology and cell fixation for immunostaining.",
  },
  {
    name: "Paraformaldehyde",
    cas: "30525-89-4",
    category: "Organic Compounds",
    description:
      "Polymerized formaldehyde used as gentle tissue fixative in cell biology.",
  },
  // Inorganic Compounds
  {
    name: "Potassium Permanganate",
    cas: "7722-64-7",
    category: "Inorganic Compounds",
    description:
      "Strong oxidizing agent used in water treatment and organic synthesis.",
  },
  {
    name: "Sodium Hypochlorite",
    cas: "7681-52-9",
    category: "Inorganic Compounds",
    description:
      "Bleaching and disinfecting agent used in laboratory sterilization.",
  },
  {
    name: "Hydrogen Peroxide",
    cas: "7722-84-1",
    category: "Inorganic Compounds",
    description:
      "Mild oxidizer used for bleaching, disinfection, and as oxygen source.",
  },
  {
    name: "Silver Nitrate",
    cas: "7761-88-8",
    category: "Inorganic Compounds",
    description:
      "Light-sensitive silver salt used for silver staining and antimicrobial applications.",
  },
  {
    name: "Potassium Dichromate",
    cas: "7778-50-9",
    category: "Inorganic Compounds",
    description:
      "Oxidizing chromate salt used in analytical chemistry and as mordant.",
  },
  {
    name: "Sodium Thiosulfate",
    cas: "7772-98-7",
    category: "Inorganic Compounds",
    description:
      "Reducing agent used as photographic fixer and chlorine neutralizer.",
  },
  {
    name: "Ammonium Persulfate",
    cas: "7727-54-0",
    category: "Inorganic Compounds",
    description:
      "Oxidizing initiator used for polyacrylamide gel polymerization in electrophoresis.",
  },
  // Analytical Standards
  {
    name: "Methanol Certified",
    cas: "67-56-1",
    category: "Analytical Standards",
    description:
      "Certified purity methanol for use as HPLC reference standard and calibrant.",
  },
  {
    name: "Caffeine Standard",
    cas: "58-08-2",
    category: "Analytical Standards",
    description:
      "High purity caffeine reference standard for HPLC calibration and method validation.",
  },
  {
    name: "Acetonitrile Gradient Grade",
    cas: "75-05-8",
    category: "Analytical Standards",
    description:
      "Ultra-low UV absorbance acetonitrile for gradient HPLC analysis.",
  },
  {
    name: "Phenanthrene",
    cas: "85-01-8",
    category: "Analytical Standards",
    description:
      "PAH reference compound used as analytical standard in environmental monitoring.",
  },
  {
    name: "Cholesterol",
    cas: "57-88-5",
    category: "Analytical Standards",
    description:
      "Sterol lipid used as analytical reference in biochemical and clinical assays.",
  },
  // Lab Supplies
  {
    name: "Agar",
    cas: "9002-18-0",
    category: "Lab Supplies",
    description:
      "Polysaccharide used for preparing solid microbiological culture media.",
  },
  {
    name: "Agarose",
    cas: "9012-36-6",
    category: "Lab Supplies",
    description:
      "Purified polysaccharide for gel electrophoresis of nucleic acids and proteins.",
  },
  {
    name: "Acrylamide",
    cas: "79-06-1",
    category: "Lab Supplies",
    description:
      "Monomer for polyacrylamide gel preparation used in electrophoresis.",
  },
  {
    name: "Bis-Acrylamide",
    cas: "110-26-9",
    category: "Lab Supplies",
    description:
      "Crosslinker for polyacrylamide gel preparation in protein electrophoresis.",
  },
  {
    name: "Trypsin",
    cas: "9002-07-7",
    category: "Lab Supplies",
    description:
      "Serine protease used for cell dissociation and protein sequence analysis.",
  },
  {
    name: "Proteinase K",
    cas: "39450-01-6",
    category: "Lab Supplies",
    description:
      "Broad-spectrum serine protease used in DNA/RNA isolation protocols.",
  },
  {
    name: "Lysozyme",
    cas: "9001-63-2",
    category: "Lab Supplies",
    description:
      "Antibacterial enzyme for cell lysis and extraction of bacterial intracellular contents.",
  },
  // Specialty Chemicals
  {
    name: "3-Aminopropyltriethoxysilane",
    cas: "919-30-2",
    category: "Specialty Chemicals",
    description:
      "Silane coupling agent for surface functionalization of glass and silica substrates.",
  },
  {
    name: "Glutaraldehyde",
    cas: "111-30-8",
    category: "Specialty Chemicals",
    description:
      "Dialdehyde crosslinker used as fixative and for protein and enzyme immobilization.",
  },
  {
    name: "Polyethylene Glycol",
    cas: "25322-68-3",
    category: "Specialty Chemicals",
    description:
      "Water-soluble polymer used as precipitant, excipient, and in cell fusion protocols.",
  },
  {
    name: "Ficoll 400",
    cas: "26873-85-8",
    category: "Specialty Chemicals",
    description:
      "Branched copolymer used in density gradient centrifugation and osmotic studies.",
  },
  {
    name: "Sodium Azide",
    cas: "26628-22-8",
    category: "Specialty Chemicals",
    description:
      "Antimicrobial preservative used in antibody storage and enzyme inhibitor studies.",
  },
  {
    name: "TEMED",
    cas: "110-18-9",
    category: "Specialty Chemicals",
    description:
      "Tetramethylethylenediamine accelerator for polyacrylamide gel polymerization.",
  },
  {
    name: "Bromocresol Green",
    cas: "76-60-8",
    category: "Indicators",
    description:
      "pH indicator dye changing from yellow to blue between pH 3.8-5.4.",
  },
  {
    name: "Aniline Blue",
    cas: "28631-66-5",
    category: "Indicators",
    description:
      "Fluorescent dye used for staining callose in plant cell biology research.",
  },
  {
    name: "Safranin O",
    cas: "477-73-6",
    category: "Indicators",
    description:
      "Red cationic dye used in Gram staining and plant histology counterstaining.",
  },
  {
    name: "Azure B",
    cas: "531-55-5",
    category: "Indicators",
    description:
      "Thiazine dye used in blood smear staining and nucleic acid visualization.",
  },
  {
    name: "Fast Green FCF",
    cas: "2353-45-9",
    category: "Indicators",
    description:
      "Green dye used in histology and as alternative counterstain to light green.",
  },
  {
    name: "Acridine Orange",
    cas: "494-38-2",
    category: "Indicators",
    description:
      "Fluorescent nucleic acid intercalating dye for cell viability assessment.",
  },
  {
    name: "Propidium Iodide",
    cas: "25535-16-4",
    category: "Indicators",
    description:
      "Membrane-impermeant fluorescent dye for dead cell discrimination in flow cytometry.",
  },
  {
    name: "DAPI",
    cas: "28718-90-3",
    category: "Indicators",
    description:
      "Fluorescent DNA-binding dye for nuclear staining in fluorescence microscopy.",
  },
  {
    name: "Rhodamine B",
    cas: "81-88-9",
    category: "Indicators",
    description:
      "Fluorescent xanthene dye used as water tracer and biological stain.",
  },
  {
    name: "Fluorescein",
    cas: "2321-07-5",
    category: "Indicators",
    description:
      "Bright green fluorescent dye used as tracer and in immunofluorescence.",
  },
  {
    name: "Calcein AM",
    cas: "148504-34-1",
    category: "Indicators",
    description:
      "Cell-permeable fluorescent dye for viability assessment of live cells.",
  },
  {
    name: "Annexin V",
    cas: "N/A",
    category: "Biochemicals",
    description:
      "Calcium-dependent phospholipid-binding protein for apoptosis detection.",
  },
  {
    name: "Bradford Reagent",
    cas: "N/A",
    category: "Biochemicals",
    description:
      "Coomassie dye-based reagent for rapid colorimetric protein quantification.",
  },
  {
    name: "Lowry Reagent",
    cas: "N/A",
    category: "Biochemicals",
    description:
      "Folin-phenol reagent kit for sensitive protein concentration determination.",
  },
  {
    name: "BCA Reagent",
    cas: "N/A",
    category: "Biochemicals",
    description:
      "Bicinchoninic acid protein assay reagent compatible with detergents.",
  },
  {
    name: "Ninhydrin",
    cas: "485-47-2",
    category: "Reagents",
    description:
      "Reagent for detection and quantification of amino acids and peptides.",
  },
  {
    name: "Nessler's Reagent",
    cas: "N/A",
    category: "Reagents",
    description:
      "Alkaline potassium tetraiodomercurate reagent for ammonia detection.",
  },
  {
    name: "Fehling's Solution",
    cas: "N/A",
    category: "Reagents",
    description:
      "Alkaline copper tartrate reagent for detection of reducing sugars.",
  },
  {
    name: "Benedict's Reagent",
    cas: "N/A",
    category: "Reagents",
    description:
      "Qualitative test reagent for detecting reducing sugars in urine and food.",
  },
  {
    name: "Millon's Reagent",
    cas: "N/A",
    category: "Reagents",
    description:
      "Mercury sulfate reagent for detection of tyrosine-containing proteins.",
  },
  {
    name: "Biuret Reagent",
    cas: "N/A",
    category: "Reagents",
    description:
      "Alkaline copper sulfate reagent for colorimetric detection of peptide bonds.",
  },
  {
    name: "Schiff's Reagent",
    cas: "N/A",
    category: "Reagents",
    description:
      "Fuchsin-sulfite reagent for PAS staining of carbohydrates in histology.",
  },
  {
    name: "Molisch's Reagent",
    cas: "N/A",
    category: "Reagents",
    description:
      "Alpha-naphthol reagent for detection of carbohydrates by color reaction.",
  },
  {
    name: "Tollens' Reagent",
    cas: "N/A",
    category: "Reagents",
    description:
      "Silver ammonia reagent for distinguishing aldehydes from ketones.",
  },
  {
    name: "Lucas Reagent",
    cas: "N/A",
    category: "Reagents",
    description:
      "Zinc chloride in hydrochloric acid for classification of alcohols.",
  },
];

const gradeDescriptions: Record<string, string> = {
  ACS: "Meets American Chemical Society purity requirements for analytical applications.",
  HPLC: "Ultra-pure grade suitable for high-performance liquid chromatography.",
  GC: "High purity grade optimized for gas chromatography applications.",
  AR: "Analytical Reagent grade of high purity for quantitative analysis.",
  LR: "Laboratory Reagent grade for general laboratory use and teaching.",
  Puriss:
    "Purum grade meeting high purity standards for sensitive applications.",
  "Reagent Plus":
    "Enhanced purity reagent grade for demanding research applications.",
  USP: "Meets United States Pharmacopeia standards for pharmaceutical use.",
  Technical: "Technical grade for industrial and preparative applications.",
  "Extra Pure":
    "Exceeds standard purity specifications for critical analytical work.",
};

function generateCatalogNumber(brand: string, index: number): string {
  const prefixes: Record<string, string> = {
    Merck: "MRK",
    "Sigma-Aldrich": "SIG",
    Millipore: "MIL",
    Whatman: "WHT",
  };
  const prefix = prefixes[brand] || "CHM";
  const num = String(10000 + index).padStart(6, "0");
  return `${prefix}-${num}`;
}

export const products: Product[] = (() => {
  const result: Product[] = [];
  let globalIdx = 0;

  for (let brandIdx = 0; brandIdx < brands.length; brandIdx++) {
    const brand = brands[brandIdx];
    const targetCount = 7500; // 7500 per brand = 30000 total

    for (let i = 0; i < targetCount; i++) {
      const chem = chemicals[i % chemicals.length];
      const grade = grades[(i + brandIdx) % grades.length];
      const category =
        i % 7 === 0 ? categories[i % categories.length] : chem.category;
      const packSize = packSizeOptions[(i + brandIdx) % packSizeOptions.length];

      // Create variations: different grades, pack sizes, purities
      const variationSuffix = Math.floor(i / chemicals.length);
      let name = chem.name;
      if (variationSuffix === 1) name = `${chem.name}, Anhydrous`;
      else if (variationSuffix === 2) name = `${chem.name} Solution`;
      else if (variationSuffix === 3) name = `${chem.name}, Certified`;
      else if (variationSuffix === 4) name = `${chem.name}, Ultra Pure`;
      else if (variationSuffix === 5) name = `${chem.name}, Reagent Grade`;
      else if (variationSuffix === 6) name = `${chem.name} Monohydrate`;
      else if (variationSuffix === 7) name = `${chem.name}, Technical Grade`;
      else if (variationSuffix === 8) name = `${chem.name} Dihydrate`;
      else if (variationSuffix === 9) name = `${chem.name}, Extra Pure`;
      else if (variationSuffix === 10) name = `${chem.name} Concentrate`;
      else if (variationSuffix > 10) name = `${chem.name}, Special Grade`;

      const gradeNote = gradeDescriptions[grade] || "";
      const description = `${chem.description} ${gradeNote}`.trim();

      result.push({
        id: `prod-${globalIdx + 1}`,
        name,
        catalogNumber: generateCatalogNumber(brand, globalIdx),
        brand,
        category,
        description,
        packSizes: packSize,
        grade,
        casNumber: chem.cas,
      });

      globalIdx++;
    }
  }

  return result;
})();

export const allCategories = [
  ...new Set(products.map((p) => p.category)),
].sort();
