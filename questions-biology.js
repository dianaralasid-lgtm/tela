/* =====================================================================
   BIOLOGY QUESTIONS — AQA GCSE Biology (8461)
   =====================================================================
   Built from the key terms and definitions in the glossary of the Oxford
   AQA GCSE Biology student book, and the key processes that come up in
   exams. Each topic's "topic" must match its dashboard tile EXACTLY.

   The questions are written with these short helpers:
     fill("Osmosis is the diffusion of [water] through a membrane.")
                 Fill in the blank. Each [word] becomes a blank; give other
                 accepted answers with "/", e.g. [mitochondria/mitochondrion].
     define("osmosis")       Write the full definition of a key term
                             (marked against the book's definition).
     nameIt("osmosis")       Given the definition, name the key term.
     match(["xylem", "phloem", "stomata"])
                 Match each definition to its term. A pair can also be given
                 as ["term", "description"] for something not in the glossary.
     order("Put the steps of ... in order.", ["first", "second", ...])
                 Put a process in the right order (list the steps in order;
                 the app jumbles them).
   Questions can also be written out in full, like in questions.js
   (diagram questions are written that way).
   ===================================================================== */
(function () {
  // ---------- Key terms (Oxford AQA GCSE Biology glossary) ----------
  const G = {
    // Topic 1: Cell biology
    "active transport": "The movement of substances from a dilute solution to a more concentrated solution against a concentration gradient, requiring energy from respiration.",
    "adult stem cells": "Stem cells that are found in adults that can differentiate and form a limited number of cells.",
    "agar gel": "Widely used solid (gel) culture medium used for growing microorganisms.",
    "algae": "Simple aquatic organisms (protista) that make their own food by photosynthesis.",
    "bacteria": "Single-celled prokaryotic organisms.",
    "binary fission": "Reproduction by simple cell division, for example in bacteria.",
    "cell cycle": "The three-stage process of cell division in a body cell that involves mitosis and results in the formation of two identical daughter cells.",
    "cell membrane": "The membrane around the contents of a cell that controls what moves in and out of the cell.",
    "cell wall": "The rigid structure around plant and algal cells. It is made of cellulose and strengthens the cell.",
    "cellulose": "The complex carbohydrate that makes up plant and algal cell walls and gives them strength.",
    "chloroplasts": "The organelles in which photosynthesis takes place.",
    "culture medium": "A liquid or gel used to support the growth of microorganisms or other cultures, often containing specific nutrients.",
    "cytoplasm": "The water-based gel in which the organelles of all living cells are suspended and most of the chemical reactions of life take place.",
    "differentiate": "The process where cells become specialised for a particular function.",
    "diffusion": "The spreading out of the particles of any substance in a solution, or particles in a gas, resulting in a net movement of particles from an area of higher concentration to an area of lower concentration down a concentration gradient.",
    "embryonic stem cells": "Stem cells from an early embryo that can differentiate to form the specialised cells of the body.",
    "eukaryotic cells": "Cells from eukaryotes that have a cell membrane, cytoplasm, and genetic material enclosed in a nucleus.",
    "hypertonic (osmosis)": "A solution that is more concentrated than the cell contents.",
    "hypotonic (osmosis)": "A solution that is less concentrated than the cell contents.",
    "inoculate": "Introducing microorganisms to a culture medium, or introducing modified microorganisms into an individual to protect them against disease.",
    "isotonic (osmosis)": "A solution that is the same concentration as the cell contents.",
    "mitochondria": "The site of aerobic cellular respiration in a cell.",
    "mitosis": "Part of the cell cycle where one set of new chromosomes is pulled to each end of the cell forming two identical nuclei during cell division.",
    "nucleus": "Organelle found in many living cells containing the genetic information surrounded by the nuclear membrane.",
    "osmosis": "The diffusion of water through a partially permeable membrane from a dilute solution (which has a high concentration of water) to a concentrated solution (with a low concentration of water) down a concentration gradient.",
    "partially permeable membrane": "A membrane that allows only certain substances to pass through.",
    "permanent vacuole": "Space in the cytoplasm filled with cell sap.",
    "plasmolysis": "The state of plant cells when so much water is lost from the cell by osmosis that the vacuole and cytoplasm shrink and the cell membrane pulls away from the cell wall.",
    "prokaryotic cells": "Cells from prokaryotic organisms. They have a cytoplasm surrounded by a cell membrane, and a cell wall that does not contain cellulose. The genetic material is a DNA loop that is free in the cytoplasm and not enclosed by a nucleus. Sometimes there are one or more small rings of DNA called plasmids.",
    "resolving power": "A measure of the ability to distinguish between two separate points that are very close together.",
    "ribosomes": "The site of protein synthesis in a cell.",
    "stem cells": "Undifferentiated cells with the potential to form a wide variety of different cell types.",
    "therapeutic cloning": "A process where an embryo is produced that is genetically identical to the patient so the cells can then be used in medical treatments.",
    "turgor": "The pressure inside a plant cell exerted by the cell contents pressing on the cell wall.",

    // Topic 2: Organisation
    "active site": "The site on an enzyme where the reactants bind.",
    "alveoli": "Tiny air sacs in the lungs that increase the surface area for gaseous exchange.",
    "amino acids": "Molecules made up of carbon, hydrogen, oxygen, and nitrogen that are the building blocks of proteins.",
    "amylase": "Enzyme that speeds up the digestion of starch into sugars.",
    "aorta": "The artery that leaves the heart from the left ventricle and carries oxygenated blood to the body.",
    "arteries": "Blood vessels that carry blood away from the heart. They usually carry oxygenated blood and have a pulse.",
    "atria": "The upper chambers of the heart.",
    "benign tumours": "Growths of abnormal cells that are contained in one area, usually within a membrane, and do not invade other tissues.",
    "bile": "Neutralises stomach acid to give a high pH for the enzymes from the pancreas and small intestine to work well. It is not an enzyme.",
    "cancer": "The common name for a malignant tumour, formed as a result of changes in cells that lead to uncontrolled growth and division.",
    "capillaries": "The smallest blood vessels. They run between individual cells and have a wall that is only one cell thick.",
    "carbohydrases": "Enzymes that speed up the breakdown of carbohydrates into simple sugars.",
    "carbohydrates": "Molecules that contain only carbon, hydrogen, and oxygen. They provide the energy for the metabolism and are found in foods such as rice, potatoes, and bread.",
    "carcinogens": "Agents that cause cancer or significantly increase the risk of developing cancer.",
    "catalyst": "A substance that speeds up the rate of another reaction but is not used up or changed itself.",
    "coronary arteries": "The blood vessels that supply oxygenated blood to the heart muscle.",
    "denatured": "The breakdown of the molecular structure of a protein so it no longer functions.",
    "digestive system": "Organ system where food is digested and absorbed.",
    "double circulatory system": "The circulation of blood from the heart to the lungs is separate from the circulation of blood from the heart to the rest of the body.",
    "enzymes": "Biological catalysts, usually proteins.",
    "epidermal": "The name given to cells that make up the epidermis or outer layer of an organism.",
    "fatty acids": "Part of the structure of a lipid molecule.",
    "glycerol": "Part of the structure of a lipid molecule.",
    "guard cells": "Surround the stomata in the leaves of plants and control their opening and closing.",
    "haemoglobin": "The red pigment that carries oxygen around the body in the red blood cells.",
    "ionising radiation": "Has enough energy to cause ionisation in the materials it passes through, which in turn can make them biologically active and may result in mutation and cancer.",
    "lipase": "Enzymes that speed up the breakdown of lipids into fatty acids and glycerol.",
    "lipids": "Include fats and oils and are found in foods such as butter, olive oil, and crisps. They are made of carbon, hydrogen and oxygen.",
    "malignant tumours": "Invade neighbouring tissues and spread to different parts of the body in the blood where they form secondary tumours. They are also known as cancers.",
    "organ": "An aggregation (collection) of different tissues working together to carry out specific functions.",
    "organ system": "A group of organs that work together to carry out specific functions and form organisms.",
    "palisade mesophyll": "The upper layer of the mesophyll tissue in plant leaves made up of closely packed cells that contain many chloroplasts for photosynthesis.",
    "phloem": "The living transport tissue in plants that carries dissolved food (sugars) around the plant.",
    "plasma": "The clear yellow liquid part of the blood that carries dissolved substances and blood cells around the body.",
    "platelets": "Fragments of cells in the blood that play a vital role in the clotting mechanism of the blood.",
    "proteases": "Enzymes that speed up the breakdown of proteins into amino acids.",
    "proteins": "Molecules that contain carbon, hydrogen, oxygen, and nitrogen and are made of long chains of amino acids. They are used for building the cells and tissues of the body and to form enzymes.",
    "pulmonary artery": "The large blood vessel that takes deoxygenated blood from the right ventricle of the heart to the lungs.",
    "pulmonary vein": "The large blood vessel that carries oxygenated blood from the lungs back to the left atrium of the heart.",
    "red blood cells": "Biconcave cells that contain the red pigment haemoglobin and carry oxygen around the body in the blood.",
    "simple sugars": "Small carbohydrate units, for example glucose.",
    "spongy mesophyll": "The lower layer of mesophyll tissue in plant leaves that contains some chloroplasts and many large air spaces to give a big surface area for the exchange of gases.",
    "statins": "Drugs used to lower blood cholesterol levels and improve the balance of high- to low-density lipoproteins in the blood.",
    "stent": "A metal mesh placed in a blocked or partially blocked artery. They are used to open up the blood vessel by the inflation of a tiny balloon.",
    "stomata": "Openings in the leaves of plants, particularly on the underside and opened and closed by guard cells, allowing gases to enter and leave the leaf.",
    "tissue": "A group of specialised cells with a similar structure and function.",
    "translocation": "The movement of sugars from the leaves to the rest of the plant through the phloem.",
    "transpiration": "The loss of water vapour from the leaves of plants through the stomata when they are opened to allow gas exchange for photosynthesis. It involves evaporation from the surface of the cells and diffusion through the stomata.",
    "tumour": "A mass of abnormally growing cells that forms when the cells do not respond to the normal mechanisms that control growth and when control of the cell cycle is lost.",
    "veins": "Blood vessels that carry blood towards the heart. They usually carry deoxygenated blood and have valves to prevent the backflow of blood.",
    "vena cava": "The large vein that brings deoxygenated blood from the body into the heart.",
    "ventilated": "Movement of air or water into and out of the gas exchange organ, for example lungs or gills.",
    "ventricles": "Chambers of the heart that contract to force blood out of the heart.",
    "white blood cells": "Blood cells involved in the immune system of the body. They engulf pathogens and make antibodies and antitoxins.",
    "xylem": "The non-living transport tissue in plants that transports water from the roots to the leaves and shoots.",

    // Topic 3: Infection and response
    "aphids": "Insects that penetrate the plant phloem and feed on the dissolved food. They act as vectors that carry pathogenic viruses, bacteria, and fungi into healthy plant tissue.",
    "chlorosis": "The yellowing seen on the leaves of plants when they cannot make chlorophyll due to lack of magnesium ions.",
    "clinical trials": "Test potential new drugs on healthy and patient volunteers.",
    "communicable disease": "Disease caused by pathogens that can be passed from one organism to another.",
    "hybridomas": "Cells created during the production of monoclonal antibodies by the fusion of an antibody-specific lymphocyte and a tumour cell.",
    "non-communicable diseases": "Are not infectious and cannot be passed from one organism to another.",
    "pathogens": "Microorganisms that cause disease.",
    "Penicillium": "The mould from which the antibiotic penicillin is extracted.",
    "placebo": "A medicine that does not contain the active drug being tested, used in clinical trials of new medicines.",
    "preclinical testing": "Is carried out on a potential new medicine in a laboratory using cells, tissues, and live animals.",
    "sexually transmitted disease (STD)": "Transmitted from an infected person to an uninfected person by unprotected sexual contact.",
    "vaccine": "Dead or inactive pathogenic material used in vaccination to develop immunity to a disease in a healthy person.",
    "virus": "Pathogens that are much smaller than bacteria and can only reproduce inside living cells of other organisms.",

    // Topic 4: Bioenergetics
    "aerobic respiration": "An exothermic reaction in which glucose is broken down using oxygen to produce carbon dioxide and water and release energy for the cells.",
    "anaerobic respiration": "An exothermic reaction in which glucose is broken down in the absence of oxygen to produce lactic acid in animals and ethanol and carbon dioxide in plants and yeast. A small amount of energy is transferred for the cells.",
    "chlorophyll": "The green pigment contained in the chloroplasts.",
    "endothermic reaction": "A reaction that requires a transfer of energy from the environment.",
    "exothermic reaction": "A reaction that transfers energy to the environment.",
    "glucose": "A simple sugar.",
    "glycogen": "Carbohydrate store in animals.",
    "lactic acid": "The end product of anaerobic respiration in animal cells.",
    "limiting factors": "Limit the rate of a reaction, for example photosynthesis.",
    "metabolism": "The sum of all the reactions taking place in a cell or the body of an organism.",
    "oxygen debt": "The extra oxygen that must be taken into the body after exercise has stopped to complete the aerobic respiration of lactic acid.",
    "photosynthesis": "The process by which plants make food using carbon dioxide, water, and light.",

    // Topic 5: Homeostasis and response
    "ADH": "Anti-diuretic hormone helps control the water balance of the body and affects the amount of urine produced by the kidney.",
    "adrenaline": "Hormone that prepares the body for flight or fight.",
    "auxin": "A plant hormone that controls the responses of plants to light (phototropism) and gravity (gravitropism).",
    "central nervous system (CNS)": "The part of the nervous system where information is processed. It is made up of the brain and spinal cord.",
    "cerebellum": "Region of the brain concerned with coordinating muscular activity and balance.",
    "cerebral cortex": "Region of the brain associated with consciousness, memory, and language.",
    "ciliary muscles": "Muscles that contract and relax to change the shape of the lens of the eye.",
    "contraception": "Methods of preventing pregnancy which usually involve preventing the sperm and egg from meeting.",
    "coordination centres": "Areas that receive and process information from receptors.",
    "dialysis": "The process of cleansing the blood through a dialysis machine when the kidneys fail.",
    "effectors": "Areas (usually muscles or glands) that bring about responses in the body.",
    "endocrine system": "The glands that produce the hormones that control many aspects of the development and metabolism of the body, and the hormones they produce.",
    "follicle stimulating hormone (FSH)": "Causes the eggs to mature in the ovary.",
    "gibberellins": "Plant hormones that are important in initiating seed germination.",
    "glucagon": "Hormone involved in the control of blood sugar levels.",
    "gravitropism": "The response of a plant to gravity.",
    "homeostasis": "The regulation of the internal conditions of a cell or organism to maintain optimum conditions for function, in response to internal and external changes.",
    "hormones": "Chemicals produced in one area of the body of an organism that have an effect on the functioning of another area of the body. In animals hormones are produced in glands.",
    "hyperopia": "Long sightedness, where the rays of light from distant objects can be focused clearly on the retina but the rays of light from close objects are not focused and the objects appear blurred.",
    "insulin": "Hormone involved in the control of blood sugar levels.",
    "medulla": "Region of the brain concerned with unconscious activities such as controlling the heart rate and breathing rate.",
    "motor neurones": "Carry impulses from the central nervous system to the effector organs.",
    "myopia": "Short sightedness, where the rays of light from close objects are brought into focus on the retina but distant objects appear blurred as the light is focused in front of the retina.",
    "nerve": "Bundle of hundreds or even thousands of neurones.",
    "neurones": "Basic cells of the nervous system that carry minute electrical impulses around the body.",
    "oestrogen": "Female sex hormone that controls the development of secondary sexual characteristics in girls at puberty, and the build-up and maintenance of the uterus lining during the menstrual cycle.",
    "ovaries": "Female sex organs that produce eggs and sex hormones.",
    "ovulation": "The release of a mature egg (ovum) from the ovary.",
    "phototropism": "The response of a plant to light, controlled by auxin.",
    "pituitary gland": "Endocrine 'master gland' found in the brain that secretes a number of different hormones into the blood in response to different conditions to control other endocrine glands in the body.",
    "receptors": "Cells that detect stimuli – changes in the internal or external environment.",
    "reflex arcs": "Bring about a reflex action. They involve the sense organ, sensory neurone, relay neurone and motor neurone.",
    "reflexes": "Rapid automatic responses of the nervous system that do not involve conscious thought.",
    "selective reabsorption": "The process in the kidney where the materials needed in the body such as glucose, some mineral ions, and water are reabsorbed back into the blood from the filtrate.",
    "sensory neurone": "Neurone that carries impulses from the sensory organs to the central nervous system.",
    "stimuli": "Changes in the external or internal environment that can be detected by receptors.",
    "suspensory ligaments": "The ligaments that connect the lens of the eye to the ciliary muscles.",
    "testosterone": "The main male sex hormone that controls the male secondary sexual characteristics at puberty and the production of sperm.",
    "thermoregulatory centre": "The area of the brain that is sensitive to the temperature of the blood.",
    "tropism": "The responses of plant roots and shoots to environmental stimuli such as light or gravity.",
    "type 1 diabetes": "A disorder where the pancreas fails to produce sufficient insulin.",
    "type 2 diabetes": "A disorder where the body cells no longer respond to the insulin produced by the pancreas.",
    "urea": "The waste product formed by the breakdown of excess amino acids in the liver.",
    "vasoconstriction": "The constriction or narrowing of the blood vessels.",
    "vasodilation": "The dilation or opening up of the blood vessels.",

    // Topic 6: Inheritance, variation and evolution
    "alleles": "Different forms of the same gene, sometimes referred to as variants.",
    "archaea": "One of the three domains, containing primitive forms of bacteria that can live in many of the extreme environments of the world.",
    "asexual reproduction": "Involves only one individual and the offspring is identical to the parent. There is no fusion of gametes or mixing of genetic information.",
    "bases (DNA)": "Nitrogenous compounds that make up part of the structure of DNA and RNA. They are represented by the letters A, T, C, and G.",
    "carriers": "Individuals who are heterozygous for a recessive allele linked to a genetic disorder. Carriers have one healthy allele so they are not affected themselves but they can pass on the affected allele to their offspring.",
    "classification": "The organisation of living organisms into groups according to their similarities.",
    "cloning": "The production of identical offspring by asexual reproduction.",
    "cystic fibrosis": "An inherited disorder that affects the lungs, digestive, and reproductive system and is inherited through a recessive allele.",
    "domain": "The highest level of classification. There are three domains — Archaea, Bacteria, and Eukaryota.",
    "dominant allele": "The phenotype will be apparent in the offspring even if only one of the alleles is inherited.",
    "evolutionary trees": "Models used to explain the evolutionary links between groups of organisms.",
    "extinction": "The permanent loss of all members of a species from an area or from the world.",
    "genetic engineering": "The process by which scientists can manipulate and change the genotype of an organism.",
    "genotype": "The genetic makeup of an individual for a particular characteristic, for example hair or eye colour.",
    "heterozygote": "Individual with different alleles for a characteristic.",
    "homozygote": "Individual with two identical alleles for a characteristic.",
    "meiosis": "Two-stage process of cell division that reduces the chromosome number of daughter cells. It is involved in making gametes for sexual reproduction.",
    "mutation": "A change in the genetic material of an organism.",
    "natural selection": "The process by which evolution takes place. Organisms produce more offspring than the environment can support. Only those that are most suited to their environment will survive to breed and pass on their useful characteristics to their offspring.",
    "nucleotide": "A molecule made up of a sugar, a phosphate group, and one of four different bases. They are key units in the structure of DNA and RNA.",
    "phenotype": "The physical appearance/biochemistry of an individual for a particular characteristic.",
    "polydactyly": "A dominant inherited disorder that results in babies born with extra fingers and/or toes.",
    "Punnett square diagram": "A way of modelling a genetic cross and predicting the outcome using probability.",
    "recessive": "A phenotype that will only show up in the offspring if both of the alleles coding for that characteristic are inherited.",
    "selective breeding": "Speeds up natural selection by selecting animals or plants for breeding that have a required characteristic.",
    "sex chromosomes": "Carry the information that determines the sex of an individual.",
    "sexual reproduction": "Involves the joining (fusion) of male and female gametes, producing genetic variation in the offspring.",
    "speciation": "The process by which two species evolve from a single original species by natural selection.",
    "species": "The smallest group of clearly identified organisms in Linnaeus's classification system, often described as a group of organisms that can breed together and produce fertile offspring.",
    "sperm": "The male sex cells or gametes that carry the genetic material from the male parent.",
    "tissue culture": "A modern way of cloning plants that allows thousands of new plants to be created from one piece of plant tissue.",
    "zygote": "The single new cell formed by the fusion of gametes in sexual reproduction.",

    // Topic 7: Ecology
    "abundance": "A measure of how common or rare a particular type of organism is in a given environment.",
    "adaptations": "Special features that make an organism particularly well suited to the environment where it lives.",
    "biodiversity": "A measure of the variety of all the different species of organisms on Earth.",
    "biomass": "The amount of biological material in an organism.",
    "carbon cycle": "The cycling of carbon through the living and non-living world.",
    "community": "Group of interdependent living organisms in an ecosystem.",
    "competition": "The process by which living organisms compete with each other for limited resources such as food, light, or reproductive partners.",
    "decomposers": "Microorganisms that break down waste products and dead bodies.",
    "distribution": "Where particular types of organisms are found within an environment.",
    "extremophile": "An organism that can survive and reproduce in extreme conditions.",
    "incident energy": "Light from the Sun arriving at the surface of the Earth.",
    "interdependence": "The network of relationships between different organisms within a community, for example each species depends on other species for food, shelter, pollination, seed dispersal, etc.",
    "primary consumer": "Animals that eat producers.",
    "producers": "Organisms such as plants and algae that can make food from raw materials such as carbon dioxide and water.",
    "quadrat": "A sample area used for measuring the abundance and distribution of organisms in the field.",
    "quantitative sampling": "Records the numbers of organisms rather than just the type.",
    "secondary consumer": "Animals that eat the primary consumers.",
    "transect": "A measured line or area along which ecological measurements are made.",
    "trophic level": "Feeding levels in an ecosystem."
  };

  // ---------- Question makers ----------
  const def = term => {
    if (!(term in G)) throw new Error(`"${term}" isn't in the key terms list`);
    return G[term];
  };
  // How a term is shown: "hypertonic (osmosis)" is just "hypertonic"; "central nervous system (CNS)" keeps CNS.
  const shown = term => term.replace(/\s*\(([^)]*)\)$/, (m, inner) => /^[A-Z]+$/.test(inner) ? ` (${inner})` : "");
  // Other ways of writing a term that also count when naming it.
  const ALSO = {
    "differentiate": "differentiation", "Punnett square diagram": "Punnett square", "reflex arcs": "reflex arc", "stimuli": "stimulus",
    "alveoli": "alveolus", "mitochondria": "mitochondrion", "bacteria": "bacterium", "atria": "atrium", "epidermal": "epidermis",
    "coordination centres": "coordination centre", "ventilated": "ventilation", "dominant allele": "dominant",
    "recessive": "recessive allele", "type 1 diabetes": "type one diabetes", "type 2 diabetes": "type two diabetes",
    "permanent vacuole": "vacuole", "motor neurones": "motor neurone", "neurones": "neurone/neuron/neurons"
  };
  // Accepted answers for a term: its name, its abbreviation if it has one, and any other ways of writing it.
  const accepted = term => {
    const abbr = /\(([A-Z]+)\)$/.exec(term);
    return [term.replace(/\s*\([^)]*\)$/, ""), ...(abbr ? [abbr[1]] : []), ...(ALSO[term] ? [ALSO[term]] : [])].join("/");
  };

  const define = term => ({ question: `Write the definition of "${shown(term)}".`, type: "explain", marks: 2, answer: def(term) });
  const nameIt = term => ({ question: `Which key term is this? "${def(term)}"`, type: "word", marks: 1, answer: accepted(term) });
  const match = (terms, question) => ({
    question: question || "Match each description to the right term.", type: "match", marks: 2,
    pairs: terms.map(t => Array.isArray(t) ? t : [shown(t), def(t)])
  });
  const order = (question, steps) => ({ question, type: "sequence", marks: 2, steps });
  // "[answer]" marks a blank. One blank is a single question; several become parts (a), (b), ... of one question.
  function fill(sentence) {
    const answers = [];
    const text = sentence.replace(/\[([^\]]+)\]/g, (m, a) => {
      answers.push(a);
      return answers.length > 1 || /\[[^\]]+\][\s\S]*\[/.test(sentence) ? `(${String.fromCharCode(96 + answers.length)}) _____` : "_____";
    });
    if (!answers.length) throw new Error(`no blank in "${sentence}"`);
    if (answers.length === 1) return { question: "Fill in the blank: " + text, type: "word", marks: 1, answer: answers[0] };
    return { text: "Fill in the blanks: " + text, parts: answers.map(a => ({ question: "Missing word", type: "word", marks: 1, answer: a })) };
  }

  const TIP = "Fill in the blanks, write definitions, put processes in order and match terms to their meanings. " +
    "For definitions, compare your answer with the book's and mark yourself.";
  // Each topic's block is kept so the exam-style questions further down can join its list.
  const blocks = {};
  const topic = (title, questions) => QUESTION_BANK.add(blocks[title] = { topic: title, title, type: "word", questionsPerSet: 8, tip: TIP, questions });

  // ---------- Diagrams ----------
  const ARROW = `<defs><marker id="bioArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#146c43"/></marker></defs>`;
  const PLANT_CELL = `<svg viewBox="0 0 330 220" width="330" role="img" aria-label="A plant cell with five parts labelled A to E">
    <rect x="20" y="20" width="220" height="180" rx="8"/>
    <rect x="29" y="29" width="202" height="162" rx="5" style="fill:#fbfdfb;stroke-width:1.5"/>
    <ellipse cx="118" cy="112" rx="62" ry="44" fill="#dceefb" stroke="#4a7fb5" stroke-width="2"/>
    <circle cx="198" cy="62" r="18" fill="#e8d8c4" stroke="#7a5230" stroke-width="2"/>
    <ellipse cx="58" cy="54" rx="13" ry="7" fill="#5fb37a" stroke="#146c43" stroke-width="1.5"/>
    <ellipse cx="205" cy="162" rx="13" ry="7" fill="#5fb37a" stroke="#146c43" stroke-width="1.5"/>
    <ellipse cx="62" cy="172" rx="13" ry="7" fill="#5fb37a" stroke="#146c43" stroke-width="1.5"/>
    <line x1="240" y1="34" x2="282" y2="34"/><text x="290" y="39">A</text>
    <line x1="214" y1="66" x2="282" y2="78"/><text x="290" y="83">B</text>
    <line x1="168" y1="114" x2="282" y2="120"/><text x="290" y="125">C</text>
    <line x1="217" y1="160" x2="282" y2="160"/><text x="290" y="165">D</text>
    <line x1="150" y1="178" x2="282" y2="198"/><text x="290" y="203">E</text>
  </svg>`;
  const HEART = `<svg viewBox="0 0 300 220" width="300" role="img" aria-label="The four chambers of the heart, labelled W, X, Y and Z, seen from the front">
    <rect x="40" y="30" width="100" height="60" rx="10"/><text x="84" y="66">W</text>
    <rect x="160" y="30" width="100" height="60" rx="10"/><text x="204" y="66">X</text>
    <rect x="40" y="100" width="100" height="90" rx="10"/><text x="84" y="150">Y</text>
    <rect x="160" y="100" width="100" height="90" rx="10" style="stroke-width:5"/><text x="205" y="150">Z</text>
    <text x="40" y="18" style="font-weight:500;font-size:12px">Right side of the heart</text>
    <text x="164" y="18" style="font-weight:500;font-size:12px">Left side of the heart</text>
    <text x="40" y="210" style="font-weight:500;font-size:12px">The diagram shows the heart from the front.</text>
  </svg>`;
  const box = (x, y, w, label, attrs = "") => `<rect x="${x}" y="${y}" width="${w}" height="40" rx="8" ${attrs}/><text x="${x + w / 2}" y="${y + 25}" text-anchor="middle" style="font-size:12px">${label}</text>`;
  const arrow = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" marker-end="url(#bioArrow)"/>`;
  const REFLEX = `<svg viewBox="0 0 560 120" width="560" role="img" aria-label="A reflex arc as a chain of boxes with two missing, labelled P and Q">${ARROW}
    ${box(0, 10, 90, "Stimulus")}${arrow(92, 30, 108, 30)}${box(110, 10, 90, "Receptor")}${arrow(202, 30, 218, 30)}
    ${box(220, 10, 110, "P", `style="fill:#fff;stroke-dasharray:5 4"`)}${arrow(332, 30, 348, 30)}${box(350, 10, 110, "Relay neurone")}
    ${arrow(462, 30, 478, 30)}${box(480, 10, 80, "(in the CNS)", `style="fill:none;stroke:none"`)}
    ${arrow(405, 52, 405, 68)}${box(350, 70, 110, "Q", `style="fill:#fff;stroke-dasharray:5 4"`)}${arrow(348, 90, 332, 90)}
    ${box(220, 70, 110, "Effector")}${arrow(218, 90, 202, 90)}${box(110, 70, 90, "Response")}
  </svg>`;
  const CARBON = `<svg viewBox="0 0 420 260" width="420" role="img" aria-label="The carbon cycle, with arrows labelled A to E">${ARROW}
    ${box(140, 6, 140, "CO₂ in the air")}
    ${box(10, 110, 100, "Plants")}${box(160, 110, 100, "Animals")}${box(310, 110, 100, "Fossil fuels")}
    ${box(100, 210, 220, "Dead organisms and waste")}
    ${arrow(150, 46, 72, 108)}<text x="92" y="76">A</text>
    ${arrow(92, 108, 168, 46)}<text x="136" y="92">B</text>
    ${arrow(112, 130, 158, 130)}<text x="129" y="124">C</text>
    ${arrow(352, 108, 270, 46)}<text x="318" y="76">D</text>
    ${arrow(300, 208, 262, 48)}<text x="292" y="150">E</text>
    ${arrow(60, 152, 120, 208)}${arrow(210, 152, 210, 208)}
  </svg>`;
  const PYRAMID = `<svg viewBox="0 0 360 190" width="360" role="img" aria-label="A pyramid of biomass with four bars labelled P to S">
    <rect x="150" y="10" width="60" height="36"/><text x="225" y="34" style="font-size:12px;font-weight:500">S: 0.5 kg</text>
    <rect x="125" y="50" width="110" height="36"/><text x="250" y="74" style="font-size:12px;font-weight:500">R: 10 kg</text>
    <rect x="80" y="90" width="200" height="36"/><text x="292" y="114" style="font-size:12px;font-weight:500">Q: 100 kg</text>
    <rect x="20" y="130" width="320" height="36"/><text x="160" y="154" style="font-size:12px">P: 1000 kg</text>
  </svg>`;

  // ======================= PAPER 1 =======================
  // ---------- 4.1 Cell Biology ----------
  topic("Prokaryotic vs eukaryotic cells", [
    define("prokaryotic cells"), define("eukaryotic cells"), nameIt("bacteria"),
    fill("In prokaryotic cells the genetic material is not enclosed in a [nucleus]."),
    fill("In prokaryotic cells the DNA is a single [loop] that is free in the cytoplasm."),
    fill("Small rings of DNA found in some prokaryotic cells are called [plasmids/plasmid]."),
    fill("The cell wall of a prokaryotic cell does not contain [cellulose]."),
    fill("Animal and plant cells are [eukaryotic] cells; bacteria are [prokaryotic] cells."),
    match(["prokaryotic cells", "eukaryotic cells", "bacteria", "algae"]),
    match([["Plasmid", "Small ring of DNA found in some prokaryotic cells"], ["Nucleus", "Encloses the genetic material in eukaryotic cells"],
      ["Cell wall", "Rigid outer layer: made of cellulose in plants, but not in bacteria"], ["Cytoplasm", "Gel where most chemical reactions take place"]],
      "Match each cell feature to its description.")
  ]);

  topic("Animal and plant cell structures and functions", [
    define("nucleus"), define("mitochondria"), define("ribosomes"), define("cell membrane"), define("cell wall"),
    nameIt("chloroplasts"), nameIt("permanent vacuole"), nameIt("cytoplasm"), nameIt("cellulose"),
    fill("Photosynthesis takes place in the [chloroplasts/chloroplast]."),
    fill("Aerobic respiration takes place in the [mitochondria/mitochondrion]."),
    fill("Proteins are made at the [ribosomes/ribosome]."),
    fill("The cell wall is made of [cellulose], which strengthens the cell."),
    fill("The permanent vacuole is filled with [cell sap/sap]."),
    match(["nucleus", "mitochondria", "ribosomes", "cell membrane"]),
    match(["cell wall", "chloroplasts", "permanent vacuole", "cytoplasm"]),
    { text: "The diagram shows a plant cell.", diagram: PLANT_CELL, always: true, parts: [
      { question: "Name part A.", type: "word", answer: "cell wall" },
      { question: "Name part B.", type: "word", answer: "nucleus" },
      { question: "Name part C.", type: "word", answer: "permanent vacuole/vacuole" },
      { question: "Name part D, where photosynthesis takes place.", type: "word", answer: "chloroplast/chloroplasts" },
      { question: "Name part E, the gel where most chemical reactions happen.", type: "word", answer: "cytoplasm" }
    ] },
    { text: "The diagram shows a plant cell.", diagram: PLANT_CELL, parts: [
      { question: "Which letter labels the part that an animal cell also has: A, B or D?", type: "choice", options: ["A", "B", "D"], answer: "B" },
      { question: "Part A is made of which carbohydrate?", type: "word", answer: "cellulose" }
    ] }
  ]);

  topic("Differentiation and specialised cells", [
    define("differentiate"), nameIt("differentiate"), nameIt("stem cells"), nameIt("tissue"),
    fill("As a cell differentiates it gains new sub-cellular structures so it is [specialised] for its function."),
    fill("Most animal cells differentiate at an [early] stage of development, but many plant cells keep the ability to differentiate throughout life."),
    fill("In mature animals, cell division is mainly for [repair] and replacement."),
    match([["Sperm cell", "Has a tail to swim and lots of mitochondria for energy"], ["Root hair cell", "Has a large surface area to absorb water and mineral ions"],
      ["Red blood cell", "Has no nucleus, leaving more room for haemoglobin"], ["Palisade cell", "Packed with chloroplasts for photosynthesis"]],
      "Match each specialised cell to how it is adapted.")
  ]);

  topic("Microscopy: magnification and resolution", [
    define("resolving power"), nameIt("resolving power"),
    fill("Magnification = size of [image] ÷ size of real object"),
    fill("An electron microscope has a much higher [resolution/resolving power] than a light microscope, so it shows more detail."),
    fill("Electron microscopes can show sub-cellular structures such as [ribosomes/ribosome/mitochondria] in detail."),
    { question: "An image of a cell is 20 mm long. The real cell is 0.1 mm long. Work out the magnification.", type: "number", marks: 2, answer: "200" },
    { question: "A cell is magnified ×400. Its image is 12 mm across. How wide is the real cell, in mm?", type: "number", marks: 2, answer: "0.03" },
    match([["Magnification", "How many times bigger the image is than the real object"], ["Resolution", "The ability to tell apart two points that are very close together"],
      ["Light microscope", "Uses light; magnifies up to about ×2000"], ["Electron microscope", "Uses electrons; has a much higher magnification and resolution"]],
      "Match each word to its meaning.")
  ]);

  topic("Microscopy calculations using standard form", [
    fill("1 mm = [1000] µm"),
    fill("1 µm = [1000] nm"),
    { question: "Write 0.00002 m in standard form.", type: "stdform", answer: "2 × 10^-5" },
    { question: "Write 3.5 × 10^-3 mm as an ordinary number.", type: "number", answer: "0.0035" },
    { question: "A mitochondrion is 2 µm long. How long is it in mm?", type: "number", marks: 1, answer: "0.002" },
    { question: "An image of a bacterium is 15 mm long at ×5000 magnification. Find the real length in mm, in standard form.", type: "stdform", marks: 2, answer: "3 × 10^-3" },
    { question: "An image is 40 mm across. The real object is 8 µm across. Work out the magnification.", type: "number", marks: 2, answer: "5000" },
    order("Put these in order of size, smallest first.", ["Ribosome", "Mitochondrion", "Bacterium", "Animal cell", "Plant cell"])
  ]);

  topic("Required practical: using a microscope to observe cells", [
    order("Put the steps for looking at onion cells under a light microscope in order.", [
      "Peel a thin layer of onion epidermis and place it on a slide",
      "Add a drop of iodine solution to stain the cells",
      "Carefully lower a coverslip onto the slide, avoiding air bubbles",
      "Clip the slide onto the stage and select the lowest-power objective lens",
      "Use the coarse focusing wheel, then the fine focusing wheel, to focus",
      "Switch to a higher-power objective lens and refocus with the fine focusing wheel"
    ]),
    fill("Start with the [lowest/low]-power objective lens so it is easier to find the cells."),
    fill("A stain such as [iodine] makes the cell structures easier to see."),
    fill("A thin layer of cells is used so that [light] can pass through it."),
    fill("Total magnification = eyepiece lens magnification × [objective] lens magnification"),
    { question: "The eyepiece lens is ×10 and the objective lens is ×40. What is the total magnification?", type: "number", answer: "400" },
    match([["Coarse focus", "Moves the stage a lot to get the image roughly in focus"], ["Fine focus", "Makes small adjustments to sharpen the image"],
      ["Coverslip", "Holds the specimen flat and stops it drying out"], ["Stain", "Makes parts of the cell show up more clearly"]],
      "Match each part of the method to what it does.")
  ]);

  topic("Mitosis and the cell cycle", [
    define("cell cycle"), define("mitosis"), nameIt("mitosis"), nameIt("binary fission"),
    order("Put the stages of the cell cycle in order.", [
      "The cell grows and the number of sub-cellular structures (ribosomes, mitochondria) increases",
      "The DNA replicates to form two copies of each chromosome",
      "Mitosis: one set of chromosomes is pulled to each end of the cell and the nucleus divides",
      "The cytoplasm and cell membrane divide to form two genetically identical daughter cells"
    ]),
    fill("Before a cell divides, its DNA [replicates/copies] to form two copies of each chromosome."),
    fill("Mitosis produces two daughter cells that are genetically [identical]."),
    fill("Cell division by mitosis is important for growth, [repair] and asexual reproduction."),
    match(["cell cycle", "mitosis", "binary fission"])
  ]);

  topic("Stem cells: types and uses (embryonic & adult)", [
    define("stem cells"), define("therapeutic cloning"), nameIt("embryonic stem cells"), nameIt("adult stem cells"),
    match(["stem cells", "embryonic stem cells", "adult stem cells", "therapeutic cloning"]),
    fill("In adults, stem cells are found in the bone [marrow]."),
    fill("In plants, stem cells are found in the [meristem/meristems], at the tips of roots and shoots."),
    fill("In therapeutic cloning, the embryo is genetically identical to the patient, so the cells are not [rejected] by the body."),
    fill("Embryonic stem cells can form [most/all/any] types of cell, but adult stem cells form only a limited number of cell types.")
  ]);

  topic("Diffusion: factors affecting rate", [
    define("diffusion"), nameIt("diffusion"),
    fill("Diffusion is the net movement of particles from an area of [higher/high] concentration to an area of [lower/low] concentration."),
    fill("Diffusion is passive: it does not need [energy] from respiration."),
    fill("The rate of diffusion increases with a steeper [concentration gradient], a higher [temperature] and a larger [surface area]."),
    fill("Oxygen moves into the blood in the lungs by [diffusion]."),
    match([["Concentration gradient", "The difference in concentration between two areas"], ["Surface area", "The bigger it is, the more particles can move across at once"],
      ["Temperature", "Makes particles move faster when it rises"], ["Net movement", "The overall movement after particles moving both ways are taken into account"]],
      "Match each word to its meaning.")
  ]);

  topic("Osmosis: definition and examples", [
    define("osmosis"), define("partially permeable membrane"), nameIt("osmosis"), nameIt("plasmolysis"), nameIt("turgor"),
    match(["hypertonic (osmosis)", "hypotonic (osmosis)", "isotonic (osmosis)"]),
    match(["osmosis", "partially permeable membrane", "plasmolysis", "turgor"]),
    fill("In osmosis, water moves from a [dilute] solution to a [concentrated] solution."),
    fill("In a hypotonic solution, plant cells gain water and become [turgid]."),
    fill("In a hypertonic solution, plant cells lose water and become [plasmolysed]."),
    fill("Animal cells placed in pure water may [burst/lyse] because they have no cell wall.")
  ]);

  topic("Required practical: osmosis in plant tissue", [
    order("Put the steps of the osmosis practical in order.", [
      "Cut potato cylinders of the same size and blot them dry",
      "Measure the mass of each cylinder",
      "Place each cylinder in a different concentration of sugar solution",
      "Leave them for the same length of time, e.g. overnight",
      "Remove the cylinders, blot them dry and measure their mass again",
      "Work out the percentage change in mass for each cylinder"
    ]),
    fill("Potato cylinders gain mass in a solution that is [hypotonic/dilute] compared with the cell contents."),
    fill("Potato cylinders lose mass in a solution that is [hypertonic/concentrated] compared with the cell contents."),
    fill("Where the line of the graph crosses 0% change, the solution is [isotonic] with the cells."),
    fill("The cylinders are blotted dry to remove [surface] water before weighing."),
    { question: "A potato cylinder's mass goes from 2.0 g to 2.3 g. What is the percentage change in mass?", type: "number", marks: 2, answer: "15" },
    { question: "A cylinder's mass goes from 2.5 g to 2.0 g. What is the percentage change in mass? (Give a negative number for a loss.)", type: "number", marks: 2, answer: "-20" }
  ]);

  topic("Active transport: differences from diffusion", [
    define("active transport"), nameIt("active transport"),
    order("Put these statements about active transport in a logical order.", [
      "Substances move from a dilute solution to a more concentrated one, against the concentration gradient",
      "Carrier proteins in the membrane move the substance",
      "This needs energy from respiration, so active cells have many mitochondria"
    ]),
    fill("Active transport moves substances [against] the concentration gradient."),
    fill("Active transport needs energy from [respiration]."),
    fill("Root hair cells take up mineral [ions] from the soil by active transport."),
    fill("In the gut, [glucose] can be absorbed into the blood by active transport."),
    match(["diffusion", "osmosis", "active transport"])
  ]);

  // ---------- 4.2 Organisation ----------
  topic("Cells → tissues → organs → organ systems", [
    define("tissue"), define("organ"), define("organ system"), nameIt("organ"),
    order("Put these levels of organisation in order, from smallest to largest.", ["Cell", "Tissue", "Organ", "Organ system", "Organism"]),
    match(["tissue", "organ", "organ system"]),
    fill("A [tissue] is a group of specialised cells with a similar structure and function."),
    fill("The stomach is an example of an [organ]; the digestive system is an example of an [organ system]."),
    match([["Tissue", "Muscle tissue"], ["Organ", "Heart"], ["Organ system", "Circulatory system"], ["Cell", "Red blood cell"]],
      "Match each example to its level of organisation.")
  ]);

  topic("Digestive system: organs and enzymes", [
    define("digestive system"), define("bile"), nameIt("amylase"), nameIt("proteases"), nameIt("lipase"), nameIt("carbohydrases"),
    match(["amylase", "proteases", "lipase", "bile"]),
    match(["carbohydrates", "proteins", "lipids", "simple sugars"]),
    fill("Amylase breaks down [starch] into sugars."),
    fill("Proteases break down proteins into [amino acids]."),
    fill("Lipase breaks down lipids into [fatty acids] and [glycerol]."),
    fill("Bile is made in the [liver] and stored in the [gall bladder]."),
    fill("Bile emulsifies fats into small droplets, increasing the [surface area] for lipase to work on."),
    fill("Small soluble products of digestion are absorbed through the [villi/villus] of the small intestine into the blood."),
    match([["Salivary glands", "Make amylase"], ["Stomach", "Makes protease and hydrochloric acid"], ["Pancreas", "Makes amylase, protease and lipase"], ["Liver", "Makes bile"]],
      "Match each organ to what it makes.")
  ]);

  topic("Enzyme action: lock and key, temperature, pH", [
    define("enzymes"), define("catalyst"), define("active site"), nameIt("denatured"), nameIt("catalyst"),
    order("Put the steps of the lock and key model in order.", [
      "The substrate fits into the enzyme's active site, which has a specific shape",
      "An enzyme–substrate complex forms and the reaction is catalysed",
      "The products are released and the enzyme is unchanged"
    ]),
    fill("Enzymes are biological [catalysts/catalyst], usually proteins."),
    fill("The substrate fits into the enzyme's [active site]."),
    fill("A high temperature or the wrong pH changes the shape of the active site, so the enzyme is [denatured]."),
    fill("Each enzyme works best at its [optimum] temperature and pH."),
    match(["enzymes", "catalyst", "active site", "denatured"])
  ]);

  topic("Required practical: food tests (Benedict's, Biuret, iodine)", [
    match([["Iodine solution", "Starch"], ["Benedict's solution", "Reducing sugars"], ["Biuret reagent", "Protein"], ["Ethanol (emulsion test)", "Lipids"]],
      "Match each food test to what it detects."),
    match([["Starch present", "Iodine turns blue-black"], ["Reducing sugar present", "Benedict's turns brick red (after heating)"],
      ["Protein present", "Biuret turns purple"], ["Lipid present", "A cloudy white emulsion forms"]], "Match each result to what it shows."),
    fill("Iodine solution turns from orange-brown to [blue-black/black/blue black/dark blue] if starch is present."),
    fill("Benedict's solution must be [heated/warmed] in a water bath before it changes colour."),
    fill("With reducing sugars, Benedict's solution turns from blue to [brick red/red/orange/brick-red]."),
    fill("Biuret reagent turns from blue to [purple/lilac/mauve] if protein is present."),
    order("Put the steps of the Benedict's test in order.", [
      "Grind the food with distilled water and filter it",
      "Put some of the food solution in a test tube",
      "Add a few drops of Benedict's solution",
      "Heat the tube in a water bath at about 75 °C for a few minutes",
      "Look for a colour change from blue to green, yellow or brick red"
    ])
  ]);

  topic("Required practical: effect of pH on enzyme activity", [
    order("Put the steps of the pH and amylase practical in order.", [
      "Put a drop of iodine solution into each well of a spotting tile",
      "Mix amylase with a pH buffer solution and starch solution, and start the stopwatch",
      "Every 30 seconds, add a drop of the mixture to a fresh well of iodine",
      "Stop when the iodine stays orange-brown, showing the starch has all been broken down",
      "Repeat with buffers at different pH values"
    ]),
    fill("Amylase breaks down [starch] into sugars."),
    fill("When all the starch has gone, the iodine stays [orange/orange-brown/brown]."),
    fill("A [buffer] solution keeps the pH of the mixture constant."),
    fill("The temperature is kept constant using a [water bath]."),
    fill("At a very high or low pH, the enzyme's active site changes shape and it is [denatured]."),
    { question: "Starch is all broken down after 50 seconds. Rate = 1000 ÷ time. What is the rate?", type: "number", answer: "20" }
  ]);

  topic("Heart structure and the circulatory system", [
    define("double circulatory system"), define("atria"), define("ventricles"), nameIt("aorta"), nameIt("vena cava"),
    nameIt("pulmonary artery"), nameIt("pulmonary vein"), nameIt("coronary arteries"), nameIt("alveoli"),
    order("Put the path of blood through the heart in order, starting from the body.", [
      "Deoxygenated blood from the body enters the right atrium through the vena cava",
      "It passes to the right ventricle, which pumps it to the lungs through the pulmonary artery",
      "Oxygenated blood returns through the pulmonary vein to the left atrium",
      "It passes to the left ventricle, which pumps it to the body through the aorta"
    ]),
    match(["aorta", "vena cava", "pulmonary artery", "pulmonary vein"]),
    match(["atria", "ventricles", "coronary arteries", "double circulatory system"]),
    fill("[Valves/Valve] in the heart stop blood flowing backwards."),
    fill("The wall of the left ventricle is thicker because it pumps blood around the whole [body]."),
    fill("In the alveoli, oxygen diffuses into the blood and [carbon dioxide] diffuses out."),
    fill("The heart's natural resting rate is controlled by a group of cells in the right atrium that act as a [pacemaker]."),
    { text: "The diagram shows the four chambers of the heart.", diagram: HEART, always: true, parts: [
      { question: "Name chamber W.", type: "word", answer: "right atrium" },
      { question: "Name chamber Z.", type: "word", answer: "left ventricle" },
      { question: "Which chamber, W, X, Y or Z, pumps blood to the lungs?", type: "choice", options: ["W", "X", "Y", "Z"], answer: "Y" },
      { question: "Which chamber receives blood from the pulmonary vein?", type: "choice", options: ["W", "X", "Y", "Z"], answer: "X" }
    ] },
    order("Put the gas exchange steps in a logical order.", [
      "Air is breathed in and the alveoli fill with air",
      "Oxygen diffuses from the alveoli into the blood in the capillaries",
      "Carbon dioxide diffuses from the blood into the alveoli",
      "Air with more carbon dioxide is breathed out"
    ])
  ]);

  topic("Blood vessels: arteries, veins, capillaries", [
    define("arteries"), define("veins"), define("capillaries"),
    match(["arteries", "veins", "capillaries"]),
    fill("Arteries have thick, muscular, [elastic] walls because the blood is at high pressure."),
    fill("Veins have [valves/valve] to stop blood flowing backwards."),
    fill("Capillary walls are only one [cell] thick, so substances can diffuse in and out easily."),
    fill("Arteries carry blood [away from] the heart; veins carry blood [towards/to] the heart."),
    match([["Artery", "Has a thick, muscular, elastic wall"], ["Vein", "Has valves to stop backflow"], ["Capillary", "Has a wall only one cell thick"], ["Artery", "Has a pulse"]],
      "Match each feature to the blood vessel that has it.")
  ]);

  topic("Blood: components and functions", [
    define("plasma"), define("red blood cells"), define("white blood cells"), define("platelets"), nameIt("haemoglobin"), nameIt("platelets"),
    match(["plasma", "red blood cells", "white blood cells", "platelets"]),
    fill("Red blood cells contain the red pigment [haemoglobin], which carries oxygen."),
    fill("Red blood cells are [biconcave] in shape, giving a large surface area."),
    fill("Red blood cells have no [nucleus], so there is more room for haemoglobin."),
    fill("[Platelets/Platelet] help the blood to clot."),
    fill("Plasma carries dissolved substances such as [carbon dioxide/urea/glucose/hormones]."),
    fill("White blood cells make [antibodies] and antitoxins.")
  ]);

  topic("Coronary heart disease and treatments", [
    define("coronary arteries"), define("statins"), define("stent"), nameIt("stent"), nameIt("statins"),
    match(["coronary arteries", "statins", "stent"]),
    fill("In coronary heart disease, layers of fatty material build up inside the [coronary arteries/coronary artery]."),
    fill("Narrowed coronary arteries reduce the flow of blood, so the heart muscle gets less [oxygen]."),
    fill("Statins lower blood [cholesterol] levels."),
    fill("Faulty heart [valves/valve] can be replaced with biological or mechanical ones."),
    match([["Stent", "Keeps a narrowed artery open"], ["Statins", "Reduce cholesterol, slowing the build-up of fatty material"],
      ["Heart transplant", "Replaces a failing heart with a donor heart"], ["Artificial heart", "Keeps a patient alive while waiting for a transplant"]],
      "Match each treatment to what it does.")
  ]);

  topic("Health: communicable vs non-communicable disease", [
    define("communicable disease"), define("non-communicable diseases"), nameIt("carcinogens"), nameIt("ionising radiation"),
    match(["communicable disease", "non-communicable diseases", "carcinogens", "pathogens"]),
    fill("A [communicable] disease can be passed from one person to another."),
    fill("Heart disease and type 2 diabetes are examples of [non-communicable] diseases."),
    fill("Smoking is a risk factor for lung disease and lung [cancer]."),
    fill("Obesity is a risk factor for type [2/two] diabetes."),
    match([["Smoking", "Lung cancer"], ["Obesity", "Type 2 diabetes"], ["Too much alcohol", "Liver disease"], ["Ionising radiation", "Cancer"]],
      "Match each risk factor to a disease it is linked to.")
  ]);

  topic("Cancer: benign vs malignant tumours", [
    define("tumour"), define("benign tumours"), define("malignant tumours"), define("cancer"), nameIt("carcinogens"),
    match(["tumour", "benign tumours", "malignant tumours", "carcinogens"]),
    fill("Cancer is the result of changes in cells that lead to uncontrolled growth and [division]."),
    fill("Malignant tumour cells spread in the [blood] to other parts of the body."),
    fill("Malignant tumours form [secondary] tumours in different parts of the body."),
    fill("Benign tumours are usually contained in one area within a [membrane]."),
    fill("Ionising radiation and chemicals in tobacco smoke are examples of [carcinogens/carcinogen].")
  ]);

  topic("Plant tissues: leaf structure and transpiration", [
    define("xylem"), define("phloem"), define("transpiration"), define("translocation"),
    nameIt("stomata"), nameIt("guard cells"), nameIt("palisade mesophyll"), nameIt("spongy mesophyll"),
    match(["xylem", "phloem", "stomata", "guard cells"]),
    match(["palisade mesophyll", "spongy mesophyll", "epidermal", "transpiration"]),
    order("Put the steps of the transpiration stream in order, starting in the soil.", [
      "Water enters root hair cells by osmosis",
      "Water is pulled up the xylem from the roots in a continuous stream",
      "Water evaporates from cells inside the leaf",
      "Water vapour diffuses out of the leaf through the stomata"
    ]),
    fill("Water travels up the plant in the [xylem]; dissolved sugars travel in the [phloem]."),
    fill("The movement of sugars through the phloem is called [translocation]."),
    fill("Mineral ions enter root hair cells by [active transport]."),
    fill("The rate of transpiration increases with higher temperature, light intensity and air movement, and lower [humidity]."),
    fill("Stomata are opened and closed by [guard cells/guard cell].")
  ]);

  // ---------- 4.3 Infection and Response ----------
  topic("Pathogens: bacteria, viruses, fungi, protists", [
    define("pathogens"), define("virus"), nameIt("pathogens"), nameIt("communicable disease"),
    match(["pathogens", "virus", "bacteria", "communicable disease"]),
    fill("Viruses can only reproduce inside living [cells/cell]."),
    fill("Bacteria may produce [toxins/toxin] that damage tissues and make us feel ill."),
    fill("Pathogens may be bacteria, viruses, protists or [fungi/fungus]."),
    fill("Pathogens can spread by direct contact, by water or by [air]."),
    match([["Virus", "Reproduces inside cells, damaging them"], ["Bacterium", "Single-celled prokaryote that may release toxins"],
      ["Fungus", "Can grow thread-like hyphae, e.g. rose black spot"], ["Protist", "Single-celled eukaryote, e.g. the cause of malaria"]],
      "Match each type of pathogen to its description.")
  ]);

  topic("Examples of communicable diseases", [
    nameIt("sexually transmitted disease (STD)"),
    match([["Measles", "Virus"], ["Salmonella food poisoning", "Bacterium"], ["Rose black spot", "Fungus"], ["Malaria", "Protist"]],
      "Match each disease to the type of pathogen that causes it."),
    match([["HIV", "Virus spread by sexual contact or body fluids"], ["Gonorrhoea", "Bacterial STD, with a yellow or green discharge"],
      ["Tobacco mosaic virus", "Plant disease causing a mosaic pattern on leaves"], ["Malaria", "Spread by mosquitoes"]], "Match each disease to the right description."),
    fill("Malaria is spread by [mosquitoes/mosquito], which act as vectors."),
    fill("HIV and gonorrhoea are examples of [sexually transmitted diseases/sexually transmitted disease/STDs/STD]."),
    fill("Gonorrhoea is caused by a [bacterium/bacteria] and was treated with penicillin."),
    fill("Measles is spread by inhaling [droplets] from sneezes and coughs."),
    fill("Salmonella food poisoning is spread by bacteria in food or food prepared in [unhygienic] conditions.")
  ]);

  topic("Human defence systems: non-specific (skin, mucus, stomach acid)", [
    match([["Skin", "A barrier; also makes antimicrobial secretions"], ["Nose", "Hairs and mucus trap particles"],
      ["Trachea and bronchi", "Cilia move mucus up to the throat"], ["Stomach", "Hydrochloric acid kills pathogens"]],
      "Match each part of the body to how it stops pathogens."),
    fill("The skin acts as a [barrier] to pathogens."),
    fill("Mucus in the airways [traps/trap] pathogens."),
    fill("Tiny hairs called [cilia] move mucus up to the throat to be swallowed."),
    fill("The stomach makes hydrochloric [acid], which kills pathogens."),
    fill("If a pathogen gets past these defences, the [immune] system attacks it.")
  ]);

  topic("The immune response: white blood cells, antibodies", [
    define("white blood cells"), nameIt("white blood cells"),
    match([["Phagocytosis", "White blood cells engulf and digest pathogens"], ["Antibodies", "Are specific to the antigens on a pathogen and target it for destruction"],
      ["Antitoxins", "Neutralise the toxins released by bacteria"]], "Match each defence to how white blood cells use it."),
    fill("White blood cells engulf and digest pathogens by [phagocytosis]."),
    fill("[Antibodies/antibody] are specific to the antigens on a pathogen."),
    fill("[Antitoxins/antitoxin] neutralise the toxins released by bacteria."),
    fill("The proteins on the surface of a pathogen are called [antigens/antigen].")
  ]);

  topic("Vaccination and herd immunity", [
    define("vaccine"), nameIt("vaccine"),
    order("Put the steps of how vaccination works in order.", [
      "Dead or inactive pathogens are injected",
      "White blood cells (lymphocytes) make antibodies against their antigens",
      "Memory cells remain in the blood",
      "If the live pathogen enters later, antibodies are made faster and in larger amounts",
      "The person does not become ill"
    ]),
    fill("A vaccine contains [dead] or inactive forms of a pathogen."),
    fill("After vaccination, [memory] cells remain in the blood."),
    fill("If a large proportion of people are vaccinated, the spread of the pathogen is reduced. This is called [herd immunity]."),
    fill("The secondary response to a pathogen is [faster/quicker] and produces more antibodies.")
  ]);

  topic("Antibiotics: how they work and resistance", [
    define("Penicillium"), nameIt("Penicillium"),
    fill("Antibiotics kill infective [bacteria/bacterium] inside the body."),
    fill("Antibiotics cannot kill [viruses/virus], which live and reproduce inside cells."),
    fill("Penicillin was discovered by Alexander [Fleming]."),
    fill("Painkillers treat the [symptoms/symptom] of a disease but do not kill the pathogen."),
    fill("Overusing antibiotics has led to [resistant] strains of bacteria such as MRSA."),
    order("Put the steps of how antibiotic resistance spreads in order.", [
      "A mutation makes one bacterium resistant to an antibiotic",
      "The antibiotic kills the non-resistant bacteria",
      "The resistant bacterium survives and reproduces",
      "The population of resistant bacteria grows"
    ]),
    match([["Antibiotic", "Kills bacteria inside the body"], ["Painkiller", "Relieves symptoms but does not kill pathogens"],
      ["Penicillium", "The mould penicillin comes from"], ["Resistant bacteria", "Bacteria that are not killed by an antibiotic"]], "Match each word to its description.")
  ]);

  topic("Drug development: clinical trials, double-blind", [
    define("clinical trials"), define("placebo"), define("preclinical testing"), nameIt("placebo"),
    order("Put the stages of developing a new drug in order.", [
      "Preclinical testing in the lab on cells, tissues and live animals",
      "Clinical trials with very low doses on healthy volunteers, to check safety",
      "The drug is given to patient volunteers to find the optimum dose",
      "Double-blind trials with a placebo",
      "Results are peer reviewed before publication"
    ]),
    match(["clinical trials", "placebo", "preclinical testing"]),
    fill("New drugs are tested for toxicity, efficacy and [dose]."),
    fill("In a [double-blind/double blind] trial, neither the patients nor the doctors know who has the drug."),
    fill("Checking of results by other scientists is called [peer] review."),
    fill("Digitalis comes from foxgloves and aspirin comes from [willow] trees.")
  ]);

  topic("Monoclonal antibodies: production and uses", [
    define("hybridomas"), nameIt("hybridomas"),
    order("Put the steps of producing monoclonal antibodies in order.", [
      "A mouse is injected with an antigen so its lymphocytes make the specific antibody",
      "The lymphocytes are fused with a tumour cell to make a hybridoma cell",
      "The hybridoma cells divide rapidly and each makes the same antibody",
      "The antibodies are collected and purified"
    ]),
    fill("Monoclonal antibodies come from a single clone of [cells/cell]."),
    fill("A lymphocyte is fused with a [tumour/myeloma/cancer] cell to make a hybridoma."),
    fill("Monoclonal antibodies are used in [pregnancy] tests."),
    fill("Monoclonal antibodies can carry drugs straight to [cancer] cells."),
    match([["Pregnancy tests", "Detect the hormone HCG in urine"], ["Diagnosis", "Find pathogens or measure hormone levels in blood"],
      ["Research", "Carry a fluorescent dye to specific molecules in cells, showing where they are"], ["Treating cancer", "Carry a drug or toxin to cancer cells"]],
      "Match each use of monoclonal antibodies to how it works.")
  ]);

  topic("Plant disease: detection and defence", [
    define("aphids"), define("chlorosis"), nameIt("chlorosis"), nameIt("aphids"),
    match([["Stunted growth", "Lack of nitrate ions"], ["Chlorosis", "Lack of magnesium ions"], ["Spots on leaves", "Fungal disease such as rose black spot"],
      ["Mosaic pattern on leaves", "Tobacco mosaic virus"]], "Match each sign of disease to its cause."),
    fill("Plants need nitrate ions to make [proteins/protein]; without them growth is stunted."),
    fill("Plants need [magnesium] ions to make chlorophyll."),
    fill("Aphids are insects that feed on the [phloem]."),
    match([["Cellulose cell walls", "Physical defence"], ["Thorns", "Mechanical defence"], ["Antibacterial chemicals", "Chemical defence"]],
      "Match each plant defence to its type.")
  ]);

  // ---------- 4.4 Bioenergetics ----------
  topic("Photosynthesis equation (word and symbol)", [
    define("photosynthesis"), define("endothermic reaction"), nameIt("chlorophyll"), nameIt("photosynthesis"),
    fill("carbon dioxide + water → [glucose] + oxygen"),
    fill("6CO₂ + 6H₂O → C₆H₁₂O₆ + 6[O₂/O2]"),
    fill("Photosynthesis is an [endothermic] reaction: energy is transferred from the environment."),
    fill("Light energy is absorbed by the green pigment [chlorophyll]."),
    fill("Photosynthesis takes place in the [chloroplasts/chloroplast]."),
    match([["Starch", "Insoluble glucose store"], ["Cellulose", "Strengthens cell walls"], ["Amino acids", "Made from glucose and nitrate ions, then used to build proteins"], ["Lipids", "Fat or oil for storage"]],
      "Match each use of glucose in a plant to its description."),
    order("Put these steps of photosynthesis in order.", [
      "Chlorophyll absorbs light energy",
      "Carbon dioxide and water are converted into glucose and oxygen",
      "The glucose is used for respiration, or converted to starch, cellulose, lipids or amino acids"
    ])
  ]);

  topic("Adaptations of the leaf for photosynthesis", [
    define("palisade mesophyll"), define("spongy mesophyll"), define("stomata"), nameIt("guard cells"),
    match(["palisade mesophyll", "spongy mesophyll", "stomata", "guard cells"]),
    fill("Leaves are broad and flat to give a large [surface area] to absorb light."),
    fill("The palisade cells contain many [chloroplasts/chloroplast]."),
    fill("Air spaces in the spongy mesophyll let [carbon dioxide/CO2] diffuse to the cells."),
    fill("Carbon dioxide enters the leaf through the [stomata/stoma]."),
    fill("Veins containing [xylem] bring water to the leaf.")
  ]);

  topic("Limiting factors: light, CO₂, temperature", [
    define("limiting factors"), nameIt("limiting factors"),
    fill("The rate of photosynthesis is limited by light intensity, carbon dioxide concentration, [temperature] and the amount of chlorophyll."),
    fill("Whichever factor is in [shortest] supply is the limiting factor."),
    fill("At very high temperatures the enzymes involved are [denatured], so the rate falls."),
    fill("Farmers can add paraffin heaters to greenhouses to raise the temperature and the [carbon dioxide/CO2] concentration."),
    match([["Light intensity", "More light means more energy for photosynthesis"], ["Carbon dioxide", "A raw material of photosynthesis"],
      ["Temperature", "Affects the enzymes that control photosynthesis"], ["Chlorophyll", "Too little (e.g. from chlorosis) means less light is absorbed"]],
      "Match each limiting factor to why it affects the rate.")
  ]);

  topic("Limiting factors in depth: interactions, the inverse square law and greenhouse costs", [
    fill("light intensity ∝ 1 ÷ [distance²/distance squared/d²/d^2]"),
    { question: "A lamp is moved from 10 cm to 20 cm from a plant. Light intensity becomes what fraction of what it was?", type: "fraction", marks: 2, answer: "1/4" },
    { question: "A lamp is moved from 30 cm to 10 cm from a plant. How many times greater is the light intensity?", type: "number", marks: 2, answer: "9" },
    fill("On a graph where the rate stops rising as light increases, [light intensity/light] is no longer the limiting factor."),
    fill("Greenhouse owners must balance the extra cost of heating and lighting with the extra [profit/income/yield] from faster growth."),
    fill("Doubling the distance from a lamp makes the light intensity a [quarter]."),
    match([["Rising part of the graph", "Light intensity is limiting"], ["Flat part of the graph", "Another factor (CO₂ or temperature) is limiting"],
      ["Higher plateau with more CO₂", "Carbon dioxide was limiting before"]], "Match each part of a rate graph to what it shows.")
  ]);

  topic("Required practical: investigating the rate of photosynthesis", [
    order("Put the steps of the pondweed practical in order.", [
      "Place pondweed in a test tube of sodium hydrogencarbonate solution",
      "Place a lamp at a set distance from the pondweed",
      "Leave it for a few minutes to adjust to the light",
      "Count the oxygen bubbles given off in one minute",
      "Repeat with the lamp at different distances"
    ]),
    fill("The gas given off by the pondweed is [oxygen/O2]."),
    fill("Sodium hydrogencarbonate solution gives the pondweed plenty of [carbon dioxide/CO2]."),
    fill("The independent variable is the [distance] of the lamp from the pondweed."),
    fill("A beaker of water between the lamp and the plant stops the lamp changing the [temperature]."),
    fill("As the lamp moves closer, the number of bubbles per minute [increases/goes up/rises].")
  ]);

  topic("Aerobic respiration equation", [
    define("aerobic respiration"), define("exothermic reaction"), define("metabolism"), nameIt("mitochondria"),
    fill("glucose + oxygen → carbon dioxide + [water]"),
    fill("C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6[H₂O/H2O]"),
    fill("Aerobic respiration takes place in the [mitochondria/mitochondrion]."),
    fill("Respiration is an [exothermic] reaction: it transfers energy to the environment."),
    fill("Organisms need energy for chemical reactions, movement and keeping [warm]."),
    match(["aerobic respiration", "exothermic reaction", "metabolism", "glucose"])
  ]);

  topic("Anaerobic respiration: fermentation, muscle fatigue", [
    define("anaerobic respiration"), nameIt("lactic acid"),
    fill("In muscles: glucose → [lactic acid]"),
    fill("In plants and yeast: glucose → [ethanol] + carbon dioxide"),
    fill("Anaerobic respiration in yeast is called [fermentation]."),
    fill("Anaerobic respiration releases [less] energy than aerobic respiration."),
    fill("Fermentation is used to make bread and [alcoholic drinks/alcohol/beer/wine]."),
    match([["Aerobic respiration", "Uses oxygen and releases the most energy"], ["Anaerobic respiration in muscles", "Makes lactic acid"],
      ["Fermentation in yeast", "Makes ethanol and carbon dioxide"]], "Match each type of respiration to what it does.")
  ]);

  topic("Exercise: effects on breathing rate and heart rate", [
    define("oxygen debt"), nameIt("glycogen"), nameIt("oxygen debt"),
    order("Put the steps of what happens during and after hard exercise in order.", [
      "Heart rate, breathing rate and breath volume increase to supply more oxygen and glucose to the muscles",
      "Not enough oxygen is supplied, so muscles respire anaerobically",
      "Lactic acid builds up, causing muscle fatigue",
      "After exercise, the oxygen debt is repaid as lactic acid is taken to the liver"
    ]),
    fill("During exercise, heart rate and [breathing] rate increase."),
    fill("Muscles store glucose as [glycogen]."),
    fill("Lactic acid building up in the muscles causes [fatigue]."),
    match(["oxygen debt", "lactic acid", "glycogen"])
  ]);

  topic("Oxygen debt: lactic acid converted back to glucose in the liver", [
    define("oxygen debt"), nameIt("oxygen debt"),
    order("Put the steps of repaying an oxygen debt in order.", [
      "Lactic acid builds up in the muscles during hard exercise",
      "Blood carries the lactic acid to the liver",
      "The liver converts the lactic acid back into glucose",
      "Extra oxygen breathed in after exercise is used to complete this"
    ]),
    fill("Blood carries lactic acid to the [liver]."),
    fill("In the liver, lactic acid is converted back into [glucose]."),
    fill("After exercise, you keep breathing hard to take in [oxygen] to repay the debt."),
    fill("The oxygen debt is the extra oxygen needed to react with the accumulated [lactic acid].")
  ]);

  // ======================= PAPER 2 =======================
  // ---------- 4.5 Homeostasis and Response ----------
  topic("Homeostasis: definition and importance", [
    define("homeostasis"), define("receptors"), define("effectors"), nameIt("homeostasis"), nameIt("stimuli"), nameIt("coordination centres"),
    order("Put the parts of an automatic control system in order.", ["Stimulus", "Receptor", "Coordination centre", "Effector", "Response"]),
    match(["receptors", "coordination centres", "effectors", "stimuli"]),
    fill("Homeostasis keeps internal conditions at their [optimum] for enzymes and cell functions."),
    fill("Homeostasis controls blood glucose concentration, body [temperature] and water levels."),
    fill("Control systems can involve nervous responses or [chemical/hormonal] responses.")
  ]);

  topic("The nervous system: CNS, neurones, synapses", [
    define("central nervous system (CNS)"), define("neurones"), nameIt("nerve"), nameIt("sensory neurone"), nameIt("motor neurones"),
    match(["central nervous system (CNS)", "neurones", "nerve", "sensory neurone", "motor neurones"]),
    fill("The CNS is made up of the brain and the spinal [cord]."),
    fill("The gap between two neurones is called a [synapse]."),
    fill("At a synapse, a [chemical] diffuses across the gap to the next neurone."),
    fill("Motor neurones carry impulses from the CNS to [effectors/effector]."),
    order("Put the pathway of a nervous response in order.", ["Receptor", "Sensory neurone", "CNS", "Motor neurone", "Effector"])
  ]);

  topic("Reflex arc: sensory, relay, motor neurones", [
    define("reflexes"), define("reflex arcs"), nameIt("reflexes"),
    order("Put the steps of a reflex arc in order.", [
      "A stimulus is detected by a receptor",
      "An impulse travels along a sensory neurone to the CNS",
      "It crosses a synapse to a relay neurone",
      "It crosses another synapse to a motor neurone",
      "The impulse reaches the effector, which produces a rapid, automatic response"
    ]),
    fill("Reflexes are rapid and [automatic] and do not involve conscious thought."),
    fill("In a reflex arc, the relay neurone is in the [CNS/spinal cord/central nervous system]."),
    match(["sensory neurone", "motor neurones", "reflexes", "effectors"]),
    { text: "The diagram shows the pathway of a reflex action.", diagram: REFLEX, always: true, parts: [
      { question: "Name neurone P.", type: "word", answer: "sensory neurone/sensory" },
      { question: "Name neurone Q.", type: "word", answer: "motor neurone/motor" },
      { question: "Give an example of an effector.", type: "word", answer: "muscle/gland/muscles/glands" }
    ] }
  ]);

  topic("Required practical: measuring reaction time", [
    order("Put the steps of the ruler-drop test in order.", [
      "Person A holds a ruler vertically above person B's open hand, with 0 cm level with B's thumb",
      "Person A drops the ruler without warning",
      "Person B catches the ruler as quickly as possible",
      "Read the distance the ruler fell, level with the top of B's thumb",
      "Repeat several times and work out a mean, then convert distance to time using a table"
    ]),
    fill("The shorter the distance the ruler falls, the [faster/quicker/shorter] the reaction time."),
    fill("Repeating the test and calculating a [mean/average] makes the results more reliable."),
    fill("Caffeine is a stimulant that may [decrease/reduce/shorten] reaction time."),
    { question: "Three catches give 12 cm, 15 cm and 18 cm. What is the mean distance, in cm?", type: "number", answer: "15" },
    fill("The same hand should be used each time to make it a [fair] test.")
  ]);

  topic("The brain: regions and functions", [
    define("cerebral cortex"), define("cerebellum"), define("medulla"),
    match(["cerebral cortex", "cerebellum", "medulla"]),
    fill("The [cerebral cortex] is linked with consciousness, memory and language."),
    fill("The [cerebellum] coordinates muscular activity and balance."),
    fill("The [medulla] controls unconscious activities such as heart rate and breathing."),
    fill("Brain damage can be studied using [MRI/CT/fMRI] scans."),
    fill("The brain is hard to treat because damaged nerve tissue does not [repair] easily and treatment can easily damage other areas.")
  ]);

  topic("The eye: structure and function, accommodation", [
    define("myopia"), define("hyperopia"), nameIt("ciliary muscles"), nameIt("suspensory ligaments"),
    match(["ciliary muscles", "suspensory ligaments", "myopia", "hyperopia"]),
    order("Put the steps of focusing on a near object in order.", [
      "The ciliary muscles contract",
      "The suspensory ligaments slacken",
      "The lens becomes thicker",
      "Light is refracted more"
    ]),
    order("Put the steps of focusing on a distant object in order.", [
      "The ciliary muscles relax",
      "The suspensory ligaments tighten",
      "The lens is pulled thin",
      "Light is refracted less"
    ]),
    match([["Retina", "Contains light receptor cells"], ["Cornea", "Transparent outer layer that refracts light"], ["Iris", "Controls how much light enters the pupil"],
      ["Optic nerve", "Carries impulses to the brain"]], "Match each part of the eye to its function."),
    fill("Short-sightedness is called [myopia]."),
    fill("Long-sightedness is called [hyperopia]."),
    fill("Myopia and hyperopia can be corrected with glasses, contact lenses or [laser] surgery.")
  ]);

  topic("Thermoregulation: vasodilation, sweating, shivering", [
    define("thermoregulatory centre"), define("vasodilation"), define("vasoconstriction"), nameIt("thermoregulatory centre"),
    match(["thermoregulatory centre", "vasodilation", "vasoconstriction"]),
    fill("When too hot, [vasodilation] brings more blood to the skin surface so more heat is lost."),
    fill("When too hot, sweat [evaporates] from the skin, transferring energy away."),
    fill("When too cold, [vasoconstriction] reduces blood flow to the skin."),
    fill("[Shivering] is muscle contraction that releases heat from respiration."),
    fill("The thermoregulatory centre monitors the temperature of the [blood]."),
    match([["Too hot", "Sweating increases"], ["Too cold", "Vasoconstriction"], ["Too cold", "Shivering"], ["Too hot", "Vasodilation"]],
      "Match each response to when it happens.")
  ]);

  topic("Hormones: endocrine glands and target organs", [
    define("endocrine system"), define("hormones"), define("pituitary gland"), nameIt("adrenaline"), nameIt("pituitary gland"),
    match([["Pituitary gland", "The 'master gland' in the brain"], ["Pancreas", "Makes insulin and glucagon"], ["Thyroid", "Makes thyroxine"],
      ["Adrenal glands", "Make adrenaline"], ["Ovaries", "Make oestrogen"], ["Testes", "Make testosterone"]],
      "Match each gland to what it does or makes."),
    fill("Hormones are carried to their target organs in the [blood/bloodstream]."),
    fill("Compared with the nervous system, hormones act more [slowly] but their effects last longer."),
    fill("The pituitary gland is often called the [master] gland."),
    fill("Adrenaline prepares the body for [fight or flight/flight or fight]."),
    match(["endocrine system", "hormones", "adrenaline", "testosterone"])
  ]);

  topic("Blood glucose control: insulin, diabetes", [
    define("insulin"), nameIt("glycogen"),
    order("Put the steps of controlling a high blood glucose level in order.", [
      "Blood glucose rises after a meal",
      "The pancreas releases insulin",
      "Insulin makes cells take up glucose from the blood",
      "The liver and muscles convert glucose to glycogen for storage",
      "Blood glucose falls back to normal"
    ]),
    fill("Blood glucose is monitored and controlled by the [pancreas]."),
    fill("Insulin causes glucose to move from the blood into the [cells/cell]."),
    fill("In liver and muscle cells, excess glucose is converted to [glycogen] for storage."),
    match(["insulin", "glycogen", "type 1 diabetes", "type 2 diabetes"])
  ]);

  topic("Type 1 vs Type 2 diabetes: causes and treatments", [
    define("type 1 diabetes"), define("type 2 diabetes"), nameIt("type 1 diabetes"), nameIt("type 2 diabetes"),
    match(["type 1 diabetes", "type 2 diabetes"].concat([["Insulin injections", "The main treatment for type 1 diabetes"], ["Diet and exercise", "The first treatment for type 2 diabetes"]])),
    fill("Type 1 diabetes is treated with [insulin] injections."),
    fill("Type 2 diabetes is first treated with a carbohydrate-controlled diet and [exercise]."),
    fill("[Obesity] is a risk factor for type 2 diabetes."),
    fill("In type 1 diabetes, the [pancreas] fails to produce enough insulin.")
  ]);

  topic("Glucagon and insulin: negative feedback", [
    define("glucagon"),
    order("Put the steps of controlling a low blood glucose level in order.", [
      "Blood glucose falls too low",
      "The pancreas releases glucagon",
      "Glucagon makes the liver convert glycogen back into glucose",
      "The glucose is released into the blood",
      "Blood glucose rises back to normal"
    ]),
    fill("If blood glucose is too high, the pancreas releases [insulin]; if too low, it releases [glucagon]."),
    fill("Glucagon makes the liver convert glycogen into [glucose]."),
    fill("Insulin and glucagon work together by [negative] feedback to keep blood glucose steady."),
    match([["Insulin", "Lowers blood glucose"], ["Glucagon", "Raises blood glucose"], ["Glycogen", "Stored form of glucose in liver and muscles"]],
      "Match each word to what it does.")
  ]);

  topic("Osmoregulation: kidneys and water balance", [
    define("urea"), define("dialysis"), define("selective reabsorption"), nameIt("urea"), nameIt("dialysis"),
    match(["urea", "dialysis", "selective reabsorption"]),
    order("Put the steps of how a kidney makes urine in order.", [
      "The kidneys filter the blood",
      "Glucose, some ions and the water the body needs are selectively reabsorbed",
      "Urea, excess ions and excess water are left in the filtrate",
      "Urine is stored in the bladder"
    ]),
    fill("Urea is made in the [liver] from excess amino acids."),
    fill("Water leaves the body from the lungs when we [exhale/breathe out]."),
    fill("If cells lose or gain too much water by [osmosis], they do not work efficiently."),
    fill("Kidney failure can be treated by dialysis or a kidney [transplant].")
  ]);

  topic("Osmoregulation in depth: urea formation and ADH", [
    define("ADH"), nameIt("ADH"), nameIt("urea"),
    order("Put the steps of how ADH controls water in the body in order.", [
      "The blood becomes too concentrated",
      "The pituitary gland releases more ADH",
      "ADH makes the kidney tubules more permeable",
      "More water is reabsorbed into the blood",
      "A small volume of concentrated urine is produced"
    ]),
    order("Put the steps of urea formation in order.", [
      "Excess amino acids are taken to the liver",
      "They are deaminated: the amino group is removed as ammonia",
      "Ammonia is converted into urea",
      "Urea is carried in the blood to the kidneys and removed in urine"
    ]),
    fill("ADH is released by the [pituitary gland/pituitary]."),
    fill("If the blood is too dilute, [less] ADH is released."),
    fill("Removing the amino group from amino acids is called [deamination]."),
    fill("Ammonia is toxic, so it is converted into [urea].")
  ]);

  topic("Hormones in reproduction: FSH, LH, oestrogen and progesterone", [
    define("follicle stimulating hormone (FSH)"), define("oestrogen"), define("testosterone"), nameIt("ovulation"), nameIt("ovaries"),
    match(["follicle stimulating hormone (FSH)", "oestrogen", "testosterone", "ovulation"]),
    match([["FSH", "Makes an egg mature in the ovary"], ["LH", "Triggers ovulation"], ["Oestrogen", "Builds up the uterus lining"], ["Progesterone", "Maintains the uterus lining"]],
      "Match each hormone to its role in the menstrual cycle."),
    fill("The main female reproductive hormone is [oestrogen]; the main male one is [testosterone]."),
    fill("Testosterone is made by the [testes/testis]."),
    fill("Ovulation is the release of an egg from the [ovary/ovaries] about every 28 days."),
    fill("FSH and LH are released by the [pituitary gland/pituitary].")
  ]);

  topic("How hormones interact to control the menstrual cycle", [
    order("Put the stages of the menstrual cycle in order.", [
      "FSH from the pituitary makes an egg mature in the ovary and stimulates oestrogen production",
      "Oestrogen from the ovaries builds up the uterus lining and stimulates LH release",
      "LH from the pituitary triggers ovulation around day 14",
      "Progesterone from the ovaries maintains the uterus lining",
      "If progesterone levels fall, the lining breaks down (menstruation)"
    ]),
    fill("Oestrogen [inhibits/stops] the release of FSH."),
    fill("A surge of [LH] triggers ovulation."),
    fill("Ovulation happens around day [14] of the cycle."),
    fill("[Progesterone] keeps the uterus lining thick."),
    fill("Menstruation happens when the level of [progesterone] falls.")
  ]);

  topic("Contraception: hormonal and non-hormonal", [
    define("contraception"), nameIt("contraception"),
    match([["Oral contraceptive (the pill)", "Contains hormones that stop FSH being released, so no eggs mature"], ["Condom", "A barrier that stops sperm reaching the egg"],
      ["Spermicidal agent", "Kills or disables sperm"], ["Sterilisation", "Surgical method that is permanent"]], "Match each method to how it works."),
    fill("Oral contraceptives contain hormones that stop [FSH] being released, so no eggs mature."),
    fill("Condoms and diaphragms are [barrier] methods."),
    fill("An intrauterine device (IUD) stops an embryo [implanting] in the uterus."),
    fill("Condoms also protect against [sexually transmitted diseases/sexually transmitted disease/STDs/STD/STIs]."),
    match([["Hormonal", "Contraceptive implant"], ["Barrier", "Diaphragm"], ["Surgical", "Sterilisation"], ["Natural method", "Avoiding sex around the time of ovulation"]],
      "Match each type of contraception to an example.")
  ]);

  topic("Fertility treatments: IVF, fertility drugs", [
    order("Put the steps of IVF in order.", [
      "The mother is given FSH and LH to make several eggs mature",
      "The eggs are collected from the mother",
      "The eggs are fertilised by sperm from the father in the lab",
      "The fertilised eggs develop into embryos",
      "One or two embryos are inserted into the mother's uterus"
    ]),
    fill("Fertility drugs contain FSH and [LH] to stimulate ovulation."),
    fill("IVF stands for [in vitro fertilisation/in vitro fertilization]."),
    fill("IVF can lead to multiple [births/pregnancies/birth]."),
    fill("In IVF, the early embryos are a tiny ball of [cells/cell]."),
    match([["FSH and LH", "Make eggs mature"], ["Collecting eggs", "Removes eggs from the mother's ovaries"], ["Lab fertilisation", "Eggs mixed with sperm"], ["Implantation", "Embryos placed in the uterus"]],
      "Match each part of IVF to what happens.")
  ]);

  topic("Plant hormones: auxin, gravitropism, phototropism", [
    define("auxin"), define("phototropism"), define("gravitropism"), nameIt("gibberellins"), nameIt("tropism"),
    match(["auxin", "gibberellins", "phototropism", "gravitropism"]),
    order("Put the steps of phototropism in order.", [
      "Light shines on a shoot from one side",
      "Auxin moves to the shaded side of the shoot",
      "Shoot cells on the shaded side grow faster",
      "The shoot bends towards the light"
    ]),
    fill("In roots, auxin collects on the [lower/bottom] side and slows growth, so the root bends downwards."),
    fill("[Gibberellins/Gibberellin] are important in starting seed germination."),
    fill("Plants produce the gas [ethene] to control the ripening of fruit."),
    fill("Auxins are used as [weedkillers/weed killers/weedkiller] and rooting powders.")
  ]);

  // ---------- 4.6 Inheritance, Variation and Evolution ----------
  topic("Sexual vs asexual reproduction: advantages", [
    define("sexual reproduction"), define("asexual reproduction"), define("zygote"), nameIt("cloning"), nameIt("tissue culture"), nameIt("sperm"),
    match(["sexual reproduction", "asexual reproduction", "zygote", "cloning"]),
    fill("Sexual reproduction involves the fusion of male and female [gametes/gamete]."),
    fill("Asexual reproduction produces offspring that are genetically [identical] to the parent."),
    fill("Asexual reproduction involves only [mitosis]; gametes are made by meiosis."),
    fill("Sexual reproduction produces [variation] in the offspring."),
    match([["Sexual reproduction", "Produces variation, so a species can survive changes in the environment"], ["Asexual reproduction", "Only one parent is needed, so it's faster"]],
      "Match each type of reproduction to an advantage.")
  ]);

  topic("Meiosis: stages and importance of variation", [
    define("meiosis"), nameIt("meiosis"),
    order("Put the stages of meiosis in order.", [
      "The DNA is copied, so each chromosome has two copies",
      "The cell divides twice",
      "Four gametes are formed, each with a single set of chromosomes",
      "At fertilisation, two gametes fuse and the full number of chromosomes is restored"
    ]),
    fill("Meiosis makes [four/4] gametes from each cell."),
    fill("Each gamete has [half] the normal number of chromosomes."),
    fill("All the gametes made by meiosis are genetically [different]."),
    fill("Meiosis happens in the [reproductive organs/testes and ovaries/ovaries and testes/sex organs]."),
    match([["Mitosis", "Makes two identical body cells"], ["Meiosis", "Makes four genetically different gametes"], ["Fertilisation", "Two gametes fuse to form a zygote"]],
      "Match each process to what it does.")
  ]);

  topic("DNA structure and chromosome pairs (basic)", [
    define("bases (DNA)"), nameIt("sex chromosomes"),
    fill("DNA is a polymer made of two strands forming a double [helix]."),
    fill("DNA is found in structures called [chromosomes/chromosome]."),
    fill("A [gene] is a small section of DNA that codes for a particular protein."),
    fill("The entire genetic material of an organism is its [genome]."),
    fill("Human body cells contain [23] pairs of chromosomes."),
    order("Put these in order, from largest to smallest.", ["Nucleus", "Chromosome", "Gene", "Base"])
  ]);

  topic("DNA structure in detail (nucleotides) and protein synthesis", [
    define("nucleotide"), define("bases (DNA)"), nameIt("nucleotide"),
    fill("A nucleotide is made of a sugar, a [phosphate] group and a base."),
    fill("Base A always pairs with base [T]."),
    fill("Base C always pairs with base [G]."),
    fill("A sequence of [three/3] bases codes for one amino acid."),
    order("Put the steps of protein synthesis in order.", [
      "A copy of the gene is made and leaves the nucleus",
      "It attaches to a ribosome in the cytoplasm",
      "Carrier molecules bring the matching amino acids",
      "The amino acids join in the right order to form a protein",
      "The protein chain folds into its unique shape"
    ]),
    match(["nucleotide", "bases (DNA)", "ribosomes"])
  ]);

  topic("How mutations affect the protein made", [
    define("mutation"), nameIt("mutation"),
    order("Put the steps of how a mutation can stop a protein working in order.", [
      "A mutation changes the sequence of bases in a gene",
      "A different amino acid may be coded for",
      "The protein folds into a different shape",
      "An enzyme's active site may change, so the substrate no longer fits"
    ]),
    fill("A mutation is a change in the [DNA/genetic material/base sequence]."),
    fill("Most mutations have [no] effect on the phenotype."),
    fill("A change in the protein's shape can stop an enzyme's [active site] working."),
    fill("Mutations happen continuously and [randomly/at random]."),
    fill("Some mutations affect [non-coding] DNA that switches genes on and off.")
  ]);

  topic("Genes, alleles: dominant and recessive", [
    define("alleles"), define("genotype"), define("phenotype"), define("dominant allele"),
    match(["alleles", "genotype", "phenotype", "dominant allele"]),
    match(["homozygote", "heterozygote", "recessive"]),
    fill("An individual with two identical alleles is a [homozygote/homozygous]."),
    fill("An individual with two different alleles is a [heterozygote/heterozygous]."),
    fill("A [recessive] allele only shows if two copies are present."),
    fill("A dominant allele is shown with a [capital] letter."),
    { question: "What is the phenotype of an individual with genotype Bb, if B (brown eyes) is dominant to b (blue eyes)?", type: "word", answer: "brown/brown eyes" }
  ]);

  topic("Punnett squares and probability of inheritance", [
    define("Punnett square diagram"), nameIt("Punnett square diagram"),
    { question: "Two parents are both Bb. What fraction of the offspring are expected to be bb?", type: "fraction", marks: 2, answer: "1/4" },
    { question: "A parent Bb has children with a parent bb. What is the probability that a child is bb? Give a fraction.", type: "fraction", marks: 2, answer: "1/2" },
    { question: "Two parents are both Bb. What percentage of the offspring are expected to have the dominant phenotype?", type: "number", marks: 2, answer: "75" },
    { question: "Parents BB and bb have children. What percentage of the children will be Bb?", type: "number", answer: "100" },
    fill("A cross between two heterozygous parents gives a ratio of 3 dominant : [1] recessive."),
    order("Put the steps of using a Punnett square in order.", [
      "Write down the genotype of each parent",
      "Write each parent's possible gametes along the sides of the grid",
      "Fill in each box by combining the alleles",
      "Work out the ratio or probability of each genotype and phenotype"
    ])
  ]);

  topic("Constructing Punnett squares from scratch", [
    { question: "Cystic fibrosis is recessive (f). Two carrier parents (Ff) have a child. What is the probability the child has cystic fibrosis? Give a fraction.", type: "fraction", marks: 2, answer: "1/4" },
    { question: "Two carriers (Ff) have a child. What is the probability the child is a carrier? Give a fraction.", type: "fraction", marks: 2, answer: "1/2" },
    { question: "Polydactyly is dominant (D). A parent Dd has children with a parent dd. What percentage of children are expected to have polydactyly?", type: "number", marks: 2, answer: "50" },
    { question: "Two parents are both Tt. Give the expected ratio of TT : Tt : tt.", type: "ratio", marks: 2, answer: "1:2:1" },
    { question: "Out of 200 offspring of a Bb × Bb cross, how many are expected to be bb?", type: "number", marks: 2, answer: "50" },
    order("Put the steps of building a genetic cross in order.", [
      "Choose letters for the alleles (capital for dominant)",
      "Write the genotypes of both parents",
      "Show the gametes each parent can make",
      "Combine the gametes in a Punnett square",
      "State the probability, ratio or percentage asked for"
    ])
  ]);

  topic("Inherited disorders: cystic fibrosis, polydactyly", [
    define("cystic fibrosis"), define("polydactyly"), define("carriers"), nameIt("carriers"),
    match(["cystic fibrosis", "polydactyly", "carriers"]),
    fill("Cystic fibrosis is caused by a [recessive] allele."),
    fill("Polydactyly is caused by a [dominant] allele."),
    fill("Cystic fibrosis is a disorder of [cell membranes/cell membrane]."),
    fill("Embryos can be screened for genetic disorders; this raises economic, social and [ethical] issues."),
    fill("Polydactyly causes extra fingers or [toes/toe].")
  ]);

  topic("Sex determination: X and Y chromosomes", [
    define("sex chromosomes"), nameIt("sex chromosomes"),
    fill("Human body cells have [23] pairs of chromosomes; one of these pairs is the sex chromosomes."),
    fill("Females have two [X] chromosomes."),
    fill("Males have one X and one [Y] chromosome."),
    { question: "What is the probability that a baby will be a boy? Give a fraction.", type: "fraction", answer: "1/2" },
    fill("The sex of a baby is decided by whether the [sperm] carries an X or a Y chromosome."),
    match([["XX", "Female"], ["XY", "Male"], ["Egg", "Always carries an X chromosome"], ["Sperm", "Carries an X or a Y chromosome"]], "Match each item to its description.")
  ]);

  topic("Variation: genetic, environmental, combination", [
    fill("Differences between individuals of the same species are called [variation]."),
    fill("Variation can be caused by genes, the [environment], or a combination of both."),
    fill("Most characteristics are a result of both genes and the [environment]."),
    fill("There is usually a lot of genetic variation within a [population]."),
    match([["Blood group", "Genetic"], ["A scar", "Environmental"], ["Height", "Genetic and environmental"], ["Eye colour", "Genetic"]].map(([a, b]) => [b, a]),
      "Match each characteristic to what causes its variation."),
    nameIt("phenotype")
  ]);

  topic("Mutations: causes and effects (basic)", [
    define("mutation"), nameIt("mutation"),
    fill("A mutation is a change in the [genetic material/DNA] of an organism."),
    fill("Most mutations have [no] effect on the phenotype."),
    fill("Mutations happen [randomly/at random] and continuously."),
    fill("Mutations are a source of new [variation]."),
    fill("Ionising radiation can increase the rate of [mutation/mutations]."),
    match(["mutation", "alleles", "natural selection"])
  ]);

  topic("Natural selection and evolution", [
    define("natural selection"), define("speciation"), define("extinction"), nameIt("natural selection"), nameIt("speciation"),
    order("Put the steps of natural selection in order.", [
      "There is variation within a population, caused by mutations",
      "Some individuals have characteristics that make them better suited to the environment",
      "These individuals are more likely to survive and reproduce",
      "They pass on the alleles for these characteristics to their offspring",
      "Over many generations, the allele becomes more common in the population"
    ]),
    match(["natural selection", "speciation", "extinction", "species"]),
    fill("The theory of evolution by natural selection was put forward by Charles [Darwin]."),
    fill("Two populations become different species when they can no longer [interbreed/breed] to produce fertile offspring.")
  ]);

  topic("Evidence for evolution: fossils, antibiotic resistance", [
    define("extinction"), nameIt("extinction"),
    fill("[Fossils/Fossil] are the remains of organisms from millions of years ago, found in rocks."),
    fill("The fossil record is incomplete because many early forms of life were [soft-bodied/soft bodied/soft]."),
    fill("Bacteria evolve quickly because they [reproduce/divide/multiply] at a fast rate."),
    fill("MRSA is a strain of bacteria that is [resistant] to antibiotics."),
    order("Put the steps of how fossils form in order.", [
      "An organism dies and is quickly buried in sediment",
      "Its hard parts are slowly replaced by minerals",
      "Layers of rock build up over millions of years",
      "The fossil is exposed by erosion and found"
    ]),
    match([["Mineralised fossil", "Bones and shells slowly replaced by minerals"], ["Trace fossil", "Footprints, burrows and root pathways"],
      ["Preserved remains", "Whole organisms kept in amber, ice or peat, where decay can't happen"]], "Match each type of fossil to how it forms.")
  ]);

  topic("Selective breeding: process and examples", [
    define("selective breeding"), nameIt("selective breeding"),
    order("Put the steps of selective breeding in order.", [
      "Choose parents with the desired characteristic",
      "Breed them together",
      "Choose the offspring with the desired characteristic and breed them",
      "Repeat over many generations until all offspring show the characteristic"
    ]),
    fill("Selective breeding is also called artificial [selection]."),
    fill("Inbreeding reduces [variation], so a population is more vulnerable to disease."),
    fill("Crops can be selectively bred for [disease] resistance."),
    match([["Dairy cows", "Bred to produce lots of milk"], ["Wheat", "Bred for high yield and disease resistance"], ["Dogs", "Bred for a gentle nature"], ["Roses", "Bred for large or unusual flowers"]],
      "Match each organism to a characteristic it has been selectively bred for.")
  ]);

  topic("Genetic engineering: what it is, GM crops, insulin", [
    define("genetic engineering"), nameIt("genetic engineering"),
    fill("Genetic engineering changes the [genome/genotype] of an organism by adding a gene from another organism."),
    fill("Bacteria have been genetically engineered to make human [insulin]."),
    fill("GM crops may be resistant to insects or [herbicides/herbicide/weedkiller]."),
    fill("Crops that have had their genes changed are called [GM/genetically modified] crops."),
    match([["GM crops", "Plants with a gene added, e.g. for pest resistance"], ["Human insulin", "Made by genetically engineered bacteria"],
      ["Gene therapy", "Using genetic engineering to treat inherited disorders"]], "Match each example to its description."),
    fill("Some people worry GM crops could affect populations of wild flowers and [insects/insect].")
  ]);

  topic("The steps of genetic engineering (enzymes, vectors)", [
    order("Put the steps of genetic engineering in order.", [
      "The required gene is cut out of an organism's DNA using enzymes",
      "It is inserted into a vector, such as a bacterial plasmid or a virus",
      "The vector puts the gene into the cells of the target organism",
      "The organism now has the useful characteristic"
    ]),
    fill("Genes are cut out using [enzymes/enzyme]."),
    fill("A [vector] carries the gene into the target cell."),
    fill("Bacterial [plasmids/plasmid] or viruses are used as vectors."),
    fill("In plants and animals, genes are put into cells at an [early] stage of development so all cells get the gene."),
    match([["Restriction enzyme", "Cuts out the gene"], ["Ligase", "Joins the gene into the vector"], ["Vector", "Carries the gene into the target cell"]],
      "Match each tool of genetic engineering to its job.")
  ]);

  topic("Classification: kingdoms, phylogenetic trees", [
    define("classification"), define("domain"), define("species"), nameIt("archaea"), nameIt("evolutionary trees"),
    order("Put the levels of Linnaeus's classification in order, from largest to smallest.", ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"]),
    match(["classification", "domain", "species", "evolutionary trees"]),
    fill("The three domains are Archaea, Bacteria and [Eukaryota]."),
    fill("The three-domain system was proposed by Carl [Woese]."),
    fill("The binomial system names an organism by its genus and [species]."),
    fill("Archaea can live in [extreme] environments.")
  ]);

  // ---------- 4.7 Ecology ----------
  topic("Ecosystems: habitats, populations, communities", [
    define("community"), define("interdependence"), nameIt("community"), nameIt("interdependence"),
    match([["Habitat", "The place where an organism lives"], ["Population", "All the organisms of one species in a habitat"],
      ["Community", "The populations of different species in a habitat"], ["Ecosystem", "The community together with the non-living parts of its environment"]],
      "Match each word to its meaning."),
    order("Put these in order, from smallest to largest.", ["Individual", "Population", "Community", "Ecosystem"]),
    fill("A [stable] community is one where all the species and environmental factors are in balance."),
    fill("Organisms depend on each other for food, shelter and [pollination]; this is called interdependence.")
  ]);

  topic("Abiotic factors: temperature, light, pH, moisture", [
    fill("Abiotic factors are [non-living] factors in the environment."),
    fill("Light intensity, temperature and soil pH are examples of [abiotic] factors."),
    fill("Plants need [light] for photosynthesis."),
    fill("Aquatic animals need enough dissolved [oxygen] in the water."),
    match([["Light intensity", "Affects how fast plants photosynthesise"], ["Wind", "Affects water loss from plants"],
      ["Soil pH and minerals", "Affects which plants can grow"], ["Carbon dioxide", "Needed by plants for photosynthesis"]],
      "Match each abiotic factor to its effect."),
    fill("Moisture levels affect both plants and [animals/animal].")
  ]);

  topic("Biotic factors: predation, competition, disease", [
    define("competition"), nameIt("competition"),
    fill("Biotic factors are [living] factors in the environment."),
    fill("Plants compete for light, space, water and mineral [ions/ion]."),
    fill("Animals compete for food, mates and [territory]."),
    fill("A new [predator/pathogen] arriving can reduce the population of a species."),
    match([["Availability of food", "Biotic"], ["New pathogens", "Biotic"], ["Temperature", "Abiotic"], ["Soil pH", "Abiotic"]].map(([a, b]) => [b, a]),
      "Match each factor to whether it is biotic or abiotic.")
  ]);

  topic("Adaptations: structural, behavioural, functional", [
    define("adaptations"), define("extremophile"), nameIt("extremophile"),
    match([["Structural", "A body feature, e.g. thick fur"], ["Behavioural", "The way an organism behaves, e.g. migrating"], ["Functional", "A body process, e.g. making less urine"]],
      "Match each type of adaptation to an example."),
    fill("Organisms that live in very hot, cold or salty places are called [extremophiles/extremophile]."),
    fill("A camel's ability to produce very concentrated urine is a [functional] adaptation."),
    fill("Cacti have spines instead of leaves to reduce [water] loss."),
    fill("A large surface area to volume ratio helps animals in hot climates lose [heat].")
  ]);

  topic("Food chains and food webs", [
    define("producers"), define("primary consumer"), define("secondary consumer"), nameIt("producers"),
    match(["producers", "primary consumer", "secondary consumer"].concat([["Apex predator", "A carnivore with no predators"]])),
    order("Put this food chain in order, starting with the producer.", ["Grass", "Rabbit", "Fox"]),
    order("Put this food chain in order, starting with the producer.", ["Algae", "Mayfly larva", "Small fish", "Heron"]),
    fill("Food chains begin with a [producer], which makes glucose by photosynthesis."),
    fill("The arrows in a food chain show the transfer of [biomass/energy]."),
    fill("Producers are eaten by [primary] consumers.")
  ]);

  topic("Predator-prey relationships and population cycles", [
    fill("In a stable community, the numbers of predators and [prey] rise and fall in cycles."),
    fill("If the number of prey rises, the number of predators [rises/increases/goes up]."),
    fill("The peak in predator numbers comes slightly [after/later than] the peak in prey numbers."),
    order("Put the steps of a predator–prey cycle in order.", [
      "The prey population increases",
      "There is more food, so the predator population increases",
      "More prey are eaten, so the prey population falls",
      "There is less food, so the predator population falls"
    ]),
    match(["community", "interdependence", "competition"])
  ]);

  topic("Required practical: sampling using quadrats and transects", [
    define("quadrat"), define("transect"), define("quantitative sampling"), nameIt("abundance"), nameIt("distribution"),
    match(["quadrat", "transect", "abundance", "distribution"]),
    order("Put the steps of estimating a population with quadrats in order.", [
      "Place quadrats at random coordinates",
      "Count the organisms in each quadrat",
      "Find the mean number per quadrat",
      "Scale up to the total area"
    ]),
    order("Put the steps of using a transect in order.", [
      "Lay a tape across a changing habitat",
      "Place quadrats at regular intervals along the tape",
      "Count the organisms in each quadrat",
      "Compare how the distribution changes along the transect"
    ]),
    fill("Quadrats are placed at [random] to avoid bias."),
    fill("Using many quadrats makes results more [representative]."),
    { question: "The mean is 6 daisies per 1 m² quadrat. The field is 500 m². Estimate the number of daisies.", type: "number", marks: 2, answer: "3000" }
  ]);

  topic("Carbon cycle", [
    define("carbon cycle"), define("decomposers"), nameIt("carbon cycle"),
    order("Put the steps of the carbon cycle in order, starting with carbon dioxide in the air.", [
      "Plants remove CO₂ from the air by photosynthesis and make carbon compounds",
      "Animals eat the plants, passing the carbon along food chains",
      "Plants, animals and decomposers release CO₂ back into the air by respiration",
      "Decomposers break down dead organisms and waste, returning carbon and mineral ions"
    ]),
    fill("Burning fossil fuels and wood, called [combustion], releases CO₂."),
    fill("Plants take carbon dioxide out of the air by [photosynthesis]."),
    { text: "The diagram shows part of the carbon cycle.", diagram: CARBON, always: true, parts: [
      { question: "Name process A.", type: "word", answer: "photosynthesis" },
      { question: "Name process B.", type: "word", answer: "respiration" },
      { question: "Name process D.", type: "word", answer: "combustion/burning" },
      { question: "Which organisms carry out process E?", type: "word", answer: "decomposers/decomposer/microorganisms/bacteria and fungi" }
    ] }
  ]);

  topic("Water cycle", [
    order("Put the stages of the water cycle in order.", [
      "Water evaporates from the sea and land, and transpires from plants",
      "The water vapour condenses to form clouds",
      "Water falls as precipitation",
      "Water runs off into rivers, lakes and seas"
    ]),
    fill("Water vapour cools and [condenses] to form clouds."),
    fill("Rain, snow and hail are all forms of [precipitation]."),
    fill("Water lost from plant leaves is called [transpiration]."),
    fill("The water cycle provides [fresh] water for plants and animals on land."),
    match([["Evaporation", "Liquid water turns to vapour"], ["Condensation", "Water vapour turns to liquid droplets"], ["Precipitation", "Water falls from clouds"], ["Transpiration", "Water vapour lost from leaves"]],
      "Match each process to its description.")
  ]);

  topic("Nitrogen cycle: decomposers, nitrifying bacteria", [
    define("decomposers"), nameIt("decomposers"),
    order("Put the steps of decay in order.", [
      "Organisms die or produce waste",
      "Microorganisms (decomposers) break down the dead material and waste",
      "Mineral ions are returned to the soil and CO₂ to the air",
      "Plants take up the mineral ions to make proteins"
    ]),
    fill("Decay is fastest when it is warm, moist and has plenty of [oxygen]."),
    fill("Nitrifying bacteria turn ammonium compounds into [nitrates/nitrate]."),
    fill("Plants absorb nitrates to make [proteins/protein]."),
    fill("Anaerobic decay in a biogas generator produces [methane]."),
    match([["Decomposers", "Break down dead material"], ["Nitrifying bacteria", "Make nitrates"], ["Nitrogen-fixing bacteria", "Turn nitrogen gas into nitrogen compounds"], ["Denitrifying bacteria", "Turn nitrates back into nitrogen gas"]],
      "Match each kind of bacteria to its job.")
  ]);

  topic("How environmental change affects where species are found", [
    define("distribution"), nameIt("distribution"),
    fill("Changes in the environment affect the [distribution] of species."),
    fill("Changes can be seasonal, geographic or caused by [human] interaction."),
    fill("A change in water availability, temperature or atmospheric gases can change where species [live/are found]."),
    match([["Seasonal", "Birds migrating in winter"], ["Geographic", "Different soil or rock in an area"], ["Human interaction", "Pollution or climate change"]],
      "Match each kind of change to an example."),
    fill("As the climate warms, some species are found further [north/towards the poles] than before.")
  ]);

  topic("Biodiversity: importance and preservation", [
    define("biodiversity"), nameIt("biodiversity"),
    fill("High biodiversity makes an ecosystem more [stable]."),
    fill("Breeding programmes help to protect [endangered] species."),
    fill("Protecting rare [habitats/habitat] helps maintain biodiversity."),
    fill("Reintroducing field margins and [hedgerows/hedgerow] increases biodiversity on farms."),
    match([["Breeding programmes", "Help endangered species to increase their numbers"], ["Hedgerows", "Habitats for many species on farmland"], ["Recycling", "Reduces waste sent to landfill"], ["Reducing deforestation", "Protects habitats and reduces CO₂"]],
      "Match each action to how it helps biodiversity.")
  ]);

  topic("Human impact: deforestation, global warming, land use", [
    fill("Removing large areas of forest is called [deforestation]."),
    fill("Burning forests releases [carbon dioxide/CO2] into the air."),
    fill("Digging up peat bogs to make [compost] releases carbon dioxide."),
    fill("Rising levels of carbon dioxide and [methane] cause global warming."),
    order("Put the steps of how deforestation contributes to global warming in order.", [
      "Trees are cut down and burned",
      "Carbon dioxide is released by burning and by decay",
      "Fewer trees are left to remove carbon dioxide by photosynthesis",
      "Carbon dioxide levels in the air rise, increasing the greenhouse effect"
    ]),
    match([["Deforestation", "Clearing forests to grow crops for biofuels or to raise cattle"], ["Global warming", "Can change species distribution and raise sea levels"], ["Land use", "Building, farming and quarrying leave less land for other animals and plants"]],
      "Match each human impact to its description.")
  ]);

  topic("Pollution indicators: lichen, invertebrates", [
    fill("Lichens are sensitive to [sulfur dioxide/sulphur dioxide/SO2] in the air."),
    fill("More types of lichen growing means the air is [cleaner/less polluted/clean]."),
    fill("Stonefly larvae only live in water with lots of dissolved [oxygen]."),
    fill("Sewage fungus and rat-tailed maggots show that water is [polluted]."),
    match([["Many types of lichen", "Clean air"], ["Blackspot fungus on roses", "Clean air"], ["Stonefly larvae", "Clean water"], ["Rat-tailed maggots", "Polluted water"]].map(([a, b]) => [b, a]),
      "Match each indicator species to what it shows."),
    fill("Pollution can also be measured directly with oxygen meters and [data loggers/data logger].")
  ]);

  topic("Trophic levels and energy transfer", [
    define("trophic level"), define("biomass"), define("incident energy"), nameIt("trophic level"),
    match(["trophic level", "producers", "primary consumer", "secondary consumer"]),
    fill("Only about [10]% of the biomass at each trophic level is transferred to the next."),
    fill("Producers transfer only about 1% of the [incident energy] that reaches them."),
    fill("Biomass is lost through respiration, excretion and [egestion/faeces/urine]."),
    { question: "The producers have 2000 kg of biomass and the primary consumers have 200 kg. What percentage of the biomass is transferred?", type: "number", marks: 2, answer: "10" },
    fill("Level 1 is the producers, level 2 the primary consumers and level 3 the [secondary] consumers.")
  ]);

  topic("Pyramids of biomass", [
    define("biomass"), nameIt("biomass"),
    fill("A pyramid of biomass shows the [biomass] at each trophic level."),
    fill("The bottom bar of a pyramid of biomass is always the [producers/producer]."),
    fill("Each bar is smaller than the one below because biomass is [lost] at each level."),
    { text: "The diagram shows a pyramid of biomass.", diagram: PYRAMID, always: true, parts: [
      { question: "Which trophic level is bar P?", type: "word", answer: "producers/producer" },
      { question: "Which bar shows the secondary consumers?", type: "choice", options: ["P", "Q", "R", "S"], answer: "R" },
      { question: "What percentage of the biomass in P is transferred to Q?", type: "number", marks: 2, answer: "10" },
      { question: "What percentage of the biomass in R is transferred to S?", type: "number", marks: 2, answer: "5" }
    ] },
    order("Put the trophic levels in order, from the bottom of the pyramid to the top.", ["Producers", "Primary consumers", "Secondary consumers", "Tertiary consumers"])
  ]);

  // ======================= EXAM STYLE =======================
  // Short definition and naming questions written in the style of GCSE exam questions (a context, then a
  // question), marked the way an exam would mark them. They join each topic's own list, with no separate heading.
  //   examDefine(question, marks, points, notes)   Write the definition. "points" are what earn the marks (shown
  //                                                 as bullets if the student gets it wrong); "notes" say what
  //                                                 else counts, or what doesn't.
  //   examTerm(question, answers, exact)           Name the term; "/" separates accepted answers, and
  //                                                 exact: true means the spelling must be right.
  const examDefine = (question, marks, points, notes = "") =>
    ({ question, type: "explain", marks, points, notes, answer: points.join("; ") + (notes ? ". " + notes : "") });
  const examTerm = (question, answer, exact = false) =>
    ({ question, type: "word", marks: 1, answer, ...(exact ? { exact } : {}) });
  const examStyle = (title, questions) => {
    if (!blocks[title]) throw new Error(`no topic called "${title}"`);
    blocks[title].questions.push(...questions);
  };

  // ---------- Paper 1 ----------
  examStyle("Diffusion: factors affecting rate", [
    examDefine("A drop of food colouring is added to a beaker of water. The colour slowly spreads through the water. Explain what is meant by diffusion.", 2,
      ["The (net) movement / spreading out of particles (1 mark)", "From an area of higher concentration to an area of lower concentration (1 mark)"],
      "Naming the particles is fine, and so is \"down a concentration gradient\". \"Along\" or \"across\" a gradient doesn't get the mark.")
  ]);
  examStyle("Osmosis: definition and examples", [
    examTerm("Root hair cells take in water from the soil. Name the process by which water moves into these cells.", "osmosis")
  ]);
  examStyle("Active transport: differences from diffusion", [
    { question: "Complete the sentence. Unlike diffusion, active transport needs _____ from respiration.", type: "word", answer: "energy" },
    examTerm("Cells in the small intestine move glucose from a low concentration to a high concentration. Name this process.", "active transport")
  ]);
  examStyle("Mitosis and the cell cycle", [
    examTerm("New skin cells are made to repair a cut. Name the type of cell division that makes them. (Your spelling must be correct.)", "mitosis", true)
  ]);
  examStyle("Differentiation and specialised cells", [
    examTerm("A stem cell changes into a nerve cell. What is this process called?", "differentiation/differentiate")
  ]);
  examStyle("Stem cells: types and uses (embryonic & adult)", [
    examTerm("Name the plant tissue, found at the tips of roots and shoots, that contains stem cells.", "meristem/meristems/meristem tissue")
  ]);
  examStyle("Cells → tissues → organs → organ systems", [
    examDefine("Muscle and xylem are both examples of tissues. What is meant by a tissue?", 1,
      ["A group of cells with a similar structure and function (1 mark)"], "\"A group of cells\" on its own doesn't get the mark."),
    examTerm("The stomach is made of several different tissues working together. What is a structure like this called?", "organ")
  ]);
  examStyle("Enzyme action: lock and key, temperature, pH", [
    examDefine("Amylase is an enzyme found in saliva. Give two features of enzymes.", 2,
      ["It is a biological catalyst: it speeds up reactions", "It is specific: it works on only one substrate", "It is made of protein"],
      "Any two of these, 1 mark each.")
  ]);
  examStyle("Required practical: effect of pH on enzyme activity", [
    examTerm("A student investigates the effect of pH on amylase. They keep the temperature the same throughout. What type of variable is temperature in this investigation?",
      "control variable/control variables/control")
  ]);
  examStyle("Heart structure and the circulatory system", [
    examDefine("Humans have a double circulatory system. Describe what this means.", 1,
      ["One side (the right) pumps blood to the lungs", "AND the other side (the left) pumps blood to the rest of the body"],
      "Both are needed for the 1 mark. Saying blood passes through the heart twice on each circuit of the body also counts.")
  ]);
  examStyle("Blood: components and functions", [
    examTerm("Name the yellow liquid part of the blood that carries the blood cells around the body.", "plasma"),
    examTerm("After a cut, small cell fragments in the blood help it to clot. Name these fragments.", "platelets/platelet/thrombocytes/thrombocyte")
  ]);
  examStyle("Plant tissues: leaf structure and transpiration", [
    examTerm("Water moves into the roots, up through the xylem and out of the leaves. What is this flow of water called? (Two words.)", "transpiration stream"),
    examTerm("Name the process by which plants lose water vapour from their leaves.", "transpiration"),
    examTerm("Carbon dioxide enters a leaf through tiny pores on its lower surface. Name these pores.", "stomata/stoma"),
    examTerm("Name the cells either side of each pore in a leaf that open and close it.", "guard cells/guard cell")
  ]);
  examStyle("Pathogens: bacteria, viruses, fungi, protists", [
    examTerm("Some bacteria, viruses, fungi and protists cause disease. What general name is given to these microorganisms?", "pathogens/pathogen")
  ]);
  examStyle("Examples of communicable diseases", [
    examTerm("Mosquitoes carry the malaria pathogen from one person to another. What name is given to an organism that spreads a pathogen like this?", "vector/vectors")
  ]);
  examStyle("Plant disease: detection and defence", [
    examTerm("Foxgloves make poisons that stop animals eating them. What type of plant defence is this?", "chemical/chemical defence")
  ]);
  examStyle("Drug development: clinical trials, double-blind", [
    examTerm("In a drug trial, some volunteers are given a pill that looks the same but contains no drug. What is this pill called?", "placebo")
  ]);
  examStyle("Aerobic respiration equation", [
    examTerm("Name the type of respiration that uses oxygen.", "aerobic respiration/aerobic"),
    examTerm("Name the process in every living cell that transfers energy from glucose.", "respiration/aerobic respiration/cellular respiration")
  ]);

  // ---------- Paper 2 ----------
  examStyle("Blood glucose control: insulin, diabetes", [
    examTerm("After a meal, the liver stores excess glucose as an insoluble carbohydrate. Name this carbohydrate.", "glycogen")
  ]);
  examStyle("Reflex arc: sensory, relay, motor neurones", [
    examDefine("A person touches a hot pan and pulls their hand away. Explain what is meant by a reflex action.", 2,
      ["A response to a stimulus (1 mark)", "That is automatic: it doesn't involve conscious thought (1 mark)"],
      "\"Fast\" on its own and examples don't earn marks."),
    { question: "Which of these is true of every reflex action?", type: "choice", answer: "It happens automatically.",
      options: ["It happens automatically.", "It has to be learned.", "It is controlled by a hormone.", "It is a conscious decision."] }
  ]);
  examStyle("The eye: structure and function, accommodation", [
    examTerm("A student looks up from a book to a tree far away. Name the process by which the eye changes its focus.", "accommodation")
  ]);
  examStyle("Plant hormones: auxin, gravitropism, phototropism", [
    examTerm("A plant shoot grows towards a window. What general name is given to a plant's growth response to a stimulus like this?", "tropism/tropisms/phototropism")
  ]);
  examStyle("Sexual vs asexual reproduction: advantages", [
    examDefine("A garden centre grows hundreds of new plants from a few cells of one plant. What is meant by tissue culture?", 1,
      ["Growing (a small group of) cells into a whole new organism (1 mark)"], "Just saying \"clones\" doesn't earn the mark.")
  ]);
  examStyle("Meiosis: stages and importance of variation", [
    examTerm("Name the type of cell division that makes eggs and sperm. (Your spelling must be correct.)", "meiosis", true)
  ]);
  examStyle("DNA structure and chromosome pairs (basic)", [
    examTerm("What is the name for a small section of DNA on a chromosome that codes for a protein?", "gene")
  ]);
  examStyle("Genes, alleles: dominant and recessive", [
    examDefine("The allele for blue eyes is recessive. What is meant by a recessive allele?", 1,
      ["An allele that only shows (is expressed) when two copies are present (1 mark)"]),
    examTerm("An allele shows in the phenotype even when only one copy is inherited. What is this type of allele called?", "dominant/dominant allele")
  ]);
  examStyle("Mutations: causes and effects (basic)", [
    examDefine("A new variant of a virus appears because of a mutation. What is meant by a mutation?", 1,
      ["A change in the DNA: in a gene, the base sequence or a chromosome (1 mark)"], "\"A change in genetic information\" is too vague.")
  ]);
  examStyle("Evidence for evolution: fossils, antibiotic resistance", [
    examDefine("Scientists find the shape of an ancient fern in a rock. What is a fossil?", 1,
      ["The remains (or traces) of an organism from millions of years ago (1 mark)"], "Saying \"thousands of years ago\" also counts.")
  ]);
  examStyle("Ecosystems: habitats, populations, communities", [
    examTerm("A pond contains populations of frogs, water snails, pondweed and algae. What name is given to all these populations living together?", "community/communities")
  ]);
  examStyle("Required practical: sampling using quadrats and transects", [
    examTerm("Name the square frame placed on the ground to count the plants inside it.", "quadrat/quadrats")
  ]);
  examStyle("Biodiversity: importance and preservation", [
    examDefine("A survey finds many different species living in a hedgerow. What is meant by biodiversity?", 1,
      ["The variety of different species in an area or ecosystem (1 mark)"])
  ]);

  // ======================= MORE DIAGRAMS =======================
  // Diagram, graph and table questions for more topics. One diagram question per topic has always: true, so
  // every set has a diagram to read.
  const withDiagrams = (title, questions) => {
    if (!blocks[title]) throw new Error(`no topic called "${title}"`);
    blocks[title].questions.push(...questions);
  };
  const label = (x1, y1, x2, y2, letter, tx, ty) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/><text x="${tx}" y="${ty}">${letter}</text>`;
  const axes = (xLabel, yLabel) => `<line x1="40" y1="20" x2="40" y2="170"/><line x1="40" y1="170" x2="340" y2="170"/>
    <text x="190" y="203" text-anchor="middle" style="font-weight:500;font-size:12px">${xLabel}</text>
    <text x="14" y="95" text-anchor="middle" transform="rotate(-90 14 95)" style="font-weight:500;font-size:12px">${yLabel}</text>`;

  const ANIMAL_CELL = `<svg viewBox="0 0 290 200" width="290" role="img" aria-label="An animal cell with four parts labelled A to D">
    <ellipse cx="120" cy="100" rx="100" ry="80" fill="#f2f8f5" stroke="#146c43" stroke-width="2.5"/>
    <circle cx="110" cy="92" r="28" fill="#e8d8c4" stroke="#7a5230" stroke-width="2"/>
    <ellipse cx="62" cy="62" rx="15" ry="7" fill="#f4c7a1" stroke="#b5651d" stroke-width="1.5"/>
    <ellipse cx="172" cy="142" rx="15" ry="7" fill="#f4c7a1" stroke="#b5651d" stroke-width="1.5"/>
    <ellipse cx="168" cy="58" rx="15" ry="7" fill="#f4c7a1" stroke="#b5651d" stroke-width="1.5"/>
    <circle cx="70" cy="125" r="2.5" fill="#555"/><circle cx="85" cy="140" r="2.5" fill="#555"/><circle cx="150" cy="105" r="2.5" fill="#555"/><circle cx="60" cy="95" r="2.5" fill="#555"/>
    ${label(132, 82, 245, 40, "A", 252, 45)}${label(82, 150, 245, 92, "B", 252, 97)}${label(218, 112, 245, 140, "C", 252, 145)}${label(186, 144, 245, 182, "D", 252, 187)}
  </svg>`;
  const BACTERIUM = `<svg viewBox="0 0 360 180" width="360" role="img" aria-label="A bacterial cell with four parts labelled P to S">
    <rect x="40" y="45" width="220" height="90" rx="45"/>
    <rect x="49" y="54" width="202" height="72" rx="36" style="fill:#fbfdfb;stroke-width:1.5"/>
    <path d="M100 90 C110 62 140 115 160 85 S205 70 192 98 S130 116 100 90Z" fill="none" stroke="#7a5230" stroke-width="2"/>
    <circle cx="222" cy="75" r="7" fill="none" stroke="#b5651d" stroke-width="2"/><circle cx="78" cy="108" r="7" fill="none" stroke="#b5651d" stroke-width="2"/>
    <path d="M260 90 q10 -12 20 0 t20 0 t20 0 t20 0" fill="none" stroke="#146c43" stroke-width="2"/>
    ${label(158, 84, 158, 24, "P", 153, 18)}${label(224, 68, 236, 24, "Q", 232, 18)}${label(62, 128, 44, 158, "R", 38, 174)}${label(320, 92, 320, 158, "S", 315, 174)}
  </svg>`;
  const LOCK_KEY = `<svg viewBox="0 0 340 160" width="340" role="img" aria-label="An enzyme with its active site labelled X, and a substrate labelled Y">
    <path d="M20 40 H120 V72 H152 V40 H200 Q220 40 220 60 V120 Q220 140 200 140 H40 Q20 140 20 120 Z" fill="#dceefb" stroke="#4a7fb5" stroke-width="2"/>
    <text x="70" y="110" style="font-weight:500">Enzyme</text>
    <path d="M262 40 h30 v30 h-30 z" fill="#f4c7a1" stroke="#b5651d" stroke-width="2"/>
    ${label(146, 58, 178, 16, "X", 183, 20)}${label(277, 72, 277, 112, "Y", 272, 128)}
  </svg>`;
  const OSMOSIS = `<svg viewBox="0 0 320 200" width="320" role="img" aria-label="A beaker split by membrane M into side A, with a dilute sugar solution, and side B, with a concentrated sugar solution">
    <path d="M32 62 H288 V168 H32 Z" fill="#dceefb" stroke="none"/>
    <path d="M30 30 V170 H290 V30" fill="none" stroke="#146c43" stroke-width="2.5"/>
    <line x1="160" y1="56" x2="160" y2="170" style="stroke:#7a5230;stroke-width:3;stroke-dasharray:6 5"/>
    <circle cx="80" cy="110" r="5" fill="#b5651d"/><circle cx="120" cy="140" r="5" fill="#b5651d"/>
    ${[[190, 90], [215, 120], [240, 85], [265, 140], [200, 150], [250, 110], [228, 150], [272, 95]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#b5651d"/>`).join("")}
    <text x="90" y="52">A</text><text x="222" y="52">B</text><text x="154" y="48">M</text>
    <circle cx="44" cy="188" r="5" fill="#b5651d"/><text x="54" y="193" style="font-weight:500;font-size:12px">= sugar molecule</text>
  </svg>`;
  const LEAF = `<svg viewBox="0 0 330 205" width="330" role="img" aria-label="A cross-section of a leaf with four parts labelled A to D">
    <rect x="20" y="20" width="250" height="18" style="fill:#fff;stroke-width:1.5"/>
    ${Array.from({ length: 12 }, (_, i) => `<rect x="${22 + i * 20.5}" y="40" width="18" height="52" rx="6" style="stroke-width:1.5"/>
      <circle cx="${31 + i * 20.5}" cy="55" r="3" fill="#5fb37a"/><circle cx="${31 + i * 20.5}" cy="75" r="3" fill="#5fb37a"/>`).join("")}
    ${[[40, 112], [75, 130], [110, 108], [145, 135], [180, 112], [215, 132], [250, 110], [55, 148], [125, 148], [235, 148]].map(([x, y]) =>
      `<circle cx="${x}" cy="${y}" r="13" fill="#e7f3ec" stroke="#146c43" stroke-width="1.5"/>`).join("")}
    <rect x="20" y="162" width="118" height="18" style="fill:#fff;stroke-width:1.5"/><rect x="162" y="162" width="108" height="18" style="fill:#fff;stroke-width:1.5"/>
    <ellipse cx="142" cy="171" rx="6" ry="10" fill="#5fb37a" stroke="#146c43" stroke-width="1.5"/><ellipse cx="158" cy="171" rx="6" ry="10" fill="#5fb37a" stroke="#146c43" stroke-width="1.5"/>
    ${label(270, 29, 292, 29, "A", 298, 34)}${label(262, 66, 292, 66, "B", 298, 71)}${label(263, 112, 292, 120, "C", 298, 125)}${label(160, 181, 292, 192, "D", 298, 197)}
  </svg>`;
  const EYE = `<svg viewBox="0 0 360 210" width="360" role="img" aria-label="A cross-section of the eye with four parts labelled A to D">
    <circle cx="170" cy="100" r="80" fill="#fbfdfb" stroke="#146c43" stroke-width="2.5"/>
    <path d="M214 33 A80 80 0 0 1 214 167" fill="none" stroke="#b5651d" stroke-width="6"/>
    <path d="M100 58 Q66 100 100 142" fill="none" stroke="#4a7fb5" stroke-width="3"/>
    <ellipse cx="120" cy="100" rx="11" ry="28" fill="#dceefb" stroke="#4a7fb5" stroke-width="2"/>
    <path d="M247 88 H315 M247 112 H315" fill="none" stroke="#7a5230" stroke-width="2.5"/>
    ${label(78, 100, 40, 100, "A", 24, 105)}${label(120, 128, 120, 186, "B", 115, 202)}${label(238, 60, 300, 30, "C", 306, 35)}${label(300, 112, 326, 140, "D", 330, 152)}
  </svg>`;
  const food = (x, y, name) => `<rect x="${x}" y="${y}" width="90" height="34" rx="8"/><text x="${x + 45}" y="${y + 22}" text-anchor="middle" style="font-size:13px">${name}</text>`;
  const FOOD_WEB = `<svg viewBox="0 0 370 220" width="370" role="img" aria-label="A food web: grass is eaten by rabbits and mice; oak leaves by caterpillars; rabbits and mice by foxes; mice and blue tits by owls; caterpillars by blue tits">${ARROW}
    ${food(40, 176, "Grass")}${food(230, 176, "Oak leaves")}
    ${food(0, 98, "Rabbit")}${food(120, 98, "Mouse")}${food(240, 98, "Caterpillar")}
    ${food(40, 20, "Fox")}${food(160, 20, "Owl")}${food(275, 20, "Blue tit")}
    ${arrow(80, 176, 50, 134)}${arrow(90, 176, 160, 134)}${arrow(275, 176, 283, 134)}
    ${arrow(45, 98, 75, 56)}${arrow(150, 98, 110, 56)}${arrow(170, 98, 200, 56)}${arrow(290, 98, 315, 56)}${arrow(275, 37, 252, 37)}
  </svg>`;
  const vessel = (cx, outer, inner, name, rx = 1) => `<ellipse cx="${cx}" cy="70" rx="${outer * rx}" ry="${outer}" fill="#f2c9c4" stroke="#a33a3a" stroke-width="2"/>
    <ellipse cx="${cx}" cy="70" rx="${inner * rx}" ry="${inner}" fill="#fff" stroke="#a33a3a" stroke-width="1.5"/><text x="${cx - 5}" y="140">${name}</text>`;
  const VESSELS = `<svg viewBox="0 0 320 150" width="320" role="img" aria-label="Cross-sections of three blood vessels, P, Q and R">
    ${vessel(60, 42, 13, "P")}${vessel(170, 40, 31, "Q", 1.25)}${vessel(270, 10, 6, "R")}
  </svg>`;
  const TEMP_GRAPH = `<svg viewBox="0 0 350 212" width="350" role="img" aria-label="A graph of the rate of an enzyme reaction against temperature, rising to a peak at 40 °C then falling to zero at about 60 °C">
    ${axes("Temperature (°C)", "Rate of reaction")}
    ${[0, 20, 40, 60].map((t, i) => `<line x1="${40 + i * 75}" y1="170" x2="${40 + i * 75}" y2="175"/><text x="${40 + i * 75}" y="186" text-anchor="middle" style="font-weight:500;font-size:11px">${t}</text>`).join("")}
    <path d="M40 160 C100 150 160 40 190 40 C215 40 235 120 265 170" fill="none" stroke="#146c43" stroke-width="3"/>
  </svg>`;
  const LIGHT_GRAPH = `<svg viewBox="0 0 350 212" width="350" role="img" aria-label="A graph of the rate of photosynthesis against light intensity: the rate rises at point X, then levels off at point Y">
    ${axes("Light intensity", "Rate of photosynthesis")}
    <path d="M40 170 C100 80 160 62 220 62 L330 62" fill="none" stroke="#146c43" stroke-width="3"/>
    <circle cx="85" cy="115" r="5" fill="#34598f"/><text x="66" y="108">X</text>
    <circle cx="280" cy="62" r="5" fill="#34598f"/><text x="275" y="50">Y</text>
  </svg>`;
  const PRED_PREY = `<svg viewBox="0 0 350 230" width="350" role="img" aria-label="A graph of two populations over time, A and B, rising and falling in cycles; B's peaks come after A's">
    ${axes("Time", "Number of organisms")}
    <path d="M40 120 C60 60 100 60 120 120 S180 165 200 120 S260 60 280 120 S330 165 340 135" fill="none" stroke="#146c43" stroke-width="3"/>
    <path d="M40 160 C70 165 100 120 140 112 S190 150 220 160 S260 112 300 112 S335 150 340 155" fill="none" stroke="#b5651d" stroke-width="3" stroke-dasharray="8 5"/>
    <line x1="60" y1="220" x2="85" y2="220" style="stroke:#146c43;stroke-width:3"/><text x="90" y="225" style="font-size:12px">A</text>
    <line x1="130" y1="220" x2="155" y2="220" style="stroke:#b5651d;stroke-width:3;stroke-dasharray:8 5"/><text x="160" y="225" style="font-size:12px">B</text>
  </svg>`;

  // ---------- Paper 1 ----------
  withDiagrams("Prokaryotic vs eukaryotic cells", [
    { text: "The diagram shows a bacterial cell.", diagram: BACTERIUM, always: true, parts: [
      { question: "Part P is the cell's main genetic material. What form does it take?", type: "word", answer: "loop/DNA loop/a loop of DNA/single loop/circular DNA" },
      { question: "Name the small ring of DNA labelled Q.", type: "word", answer: "plasmid/plasmids" },
      { question: "Name part S, which the bacterium uses to move.", type: "word", answer: "flagellum/flagella/tail" },
      { question: "Which structure, found in animal and plant cells, does this cell NOT have?", type: "choice", options: ["Nucleus", "Cell membrane", "Cytoplasm", "Ribosomes"], answer: "Nucleus" }
    ] }
  ]);
  withDiagrams("Animal and plant cell structures and functions", [
    { text: "The diagram shows an animal cell.", diagram: ANIMAL_CELL, parts: [
      { question: "Name part A, which contains the genetic material.", type: "word", answer: "nucleus" },
      { question: "Name part B, where most chemical reactions take place.", type: "word", answer: "cytoplasm" },
      { question: "Name part C, which controls what enters and leaves the cell.", type: "word", answer: "cell membrane/membrane" },
      { question: "Name part D, where aerobic respiration happens.", type: "word", answer: "mitochondrion/mitochondria" }
    ] }
  ]);
  withDiagrams("Osmosis: definition and examples", [
    { text: "The beaker is split in two by membrane M. Side A has a dilute sugar solution and side B a concentrated sugar solution. Water can pass through M, but sugar can't.",
      diagram: OSMOSIS, always: true, parts: [
      { question: "Which way will water move overall?", type: "choice", options: ["From A to B", "From B to A", "No overall movement"], answer: "From A to B" },
      { question: "Name the type of membrane M.", type: "word", answer: "partially permeable/partially permeable membrane/semi-permeable/selectively permeable" },
      { question: "Name the process by which the water moves.", type: "word", answer: "osmosis" },
      { question: "What will happen to the level of the liquid on side B?", type: "choice", options: ["It will rise", "It will fall", "It will stay the same"], answer: "It will rise" }
    ] }
  ]);
  withDiagrams("Enzyme action: lock and key, temperature, pH", [
    { text: "The diagram shows the lock and key model of enzyme action.", diagram: LOCK_KEY, always: true, parts: [
      { question: "Name part X of the enzyme.", type: "word", answer: "active site" },
      { question: "Name the molecule Y that fits into it.", type: "word", answer: "substrate" },
      { question: "At a very high temperature, X changes shape. What is the enzyme then said to be?", type: "word", answer: "denatured" }
    ] },
    { text: "The graph shows how temperature affects the rate of a reaction controlled by an enzyme.", diagram: TEMP_GRAPH, parts: [
      { question: "What is the optimum temperature for this enzyme, in °C?", type: "number", answer: "40", tolerance: 2 },
      { question: "Above the optimum, the rate falls quickly. What has happened to the enzyme?", type: "word", answer: "denatured/it is denatured/it has denatured" }
    ] }
  ]);
  withDiagrams("Blood vessels: arteries, veins, capillaries", [
    { text: "The diagram shows cross-sections of three blood vessels, P, Q and R (not to scale).", diagram: VESSELS, always: true, parts: [
      { question: "Which vessel is an artery?", type: "choice", options: ["P", "Q", "R"], answer: "P" },
      { question: "Which vessel is a capillary?", type: "choice", options: ["P", "Q", "R"], answer: "R" },
      { question: "Arteries have thick, muscular walls. Blood in arteries is at high _____.", type: "word", answer: "pressure" }
    ] }
  ]);
  withDiagrams("Plant tissues: leaf structure and transpiration", [
    { text: "The diagram shows a cross-section through a leaf.", diagram: LEAF, always: true, parts: [
      { question: "Name layer B, where most photosynthesis happens.", type: "word", answer: "palisade mesophyll/palisade/palisade layer" },
      { question: "Name layer C, which has air spaces for gas exchange.", type: "word", answer: "spongy mesophyll/spongy/spongy layer" },
      { question: "Name the cells labelled D.", type: "word", answer: "guard cells/guard cell" },
      { question: "Name the gap between the two D cells, which lets gases in and out.", type: "word", answer: "stoma/stomata/pore" }
    ] }
  ]);
  withDiagrams("Adaptations of the leaf for photosynthesis", [
    { text: "The diagram shows a cross-section through a leaf.", diagram: LEAF, always: true, parts: [
      { question: "Name layer B.", type: "word", answer: "palisade mesophyll/palisade/palisade layer" },
      { question: "Why do the cells in layer B contain many chloroplasts?", type: "choice", answer: "To absorb more light for photosynthesis",
        options: ["To absorb more light for photosynthesis", "To store water", "To let gases diffuse", "To make the leaf stronger"] },
      { question: "Layer A is transparent. Why does this help photosynthesis?", type: "choice", answer: "It lets light through to the cells below",
        options: ["It lets light through to the cells below", "It absorbs carbon dioxide", "It makes glucose", "It stops water entering"] }
    ] }
  ]);
  withDiagrams("Limiting factors: light, CO₂, temperature", [
    { text: "The graph shows how light intensity affects the rate of photosynthesis.", diagram: LIGHT_GRAPH, always: true, parts: [
      { question: "What is limiting the rate of photosynthesis at point X?", type: "choice", options: ["Light intensity", "Carbon dioxide concentration", "Temperature"], answer: "Light intensity" },
      { question: "Name one factor that could be limiting the rate at point Y.", type: "word",
        answer: "carbon dioxide/carbon dioxide concentration/CO2/CO2 concentration/temperature/chlorophyll" },
      { question: "What happens to the rate between X and Y as light intensity increases?", type: "choice",
        options: ["It increases, then stays the same", "It keeps increasing", "It decreases"], answer: "It increases, then stays the same" }
    ] }
  ]);

  // ---------- Paper 2 ----------
  withDiagrams("The eye: structure and function, accommodation", [
    { text: "The diagram shows a cross-section of the eye.", diagram: EYE, always: true, parts: [
      { question: "Name part A, the clear outer layer at the front.", type: "word", answer: "cornea" },
      { question: "Name part B, which focuses light.", type: "word", answer: "lens" },
      { question: "Name part C, which contains light-sensitive receptor cells.", type: "word", answer: "retina" },
      { question: "Name part D, which carries impulses to the brain.", type: "word", answer: "optic nerve" }
    ] }
  ]);
  withDiagrams("DNA structure in detail (nucleotides) and protein synthesis", [
    { text: "The table shows the bases on one strand of a section of DNA.", table: { headings: ["Strand 1", "A", "T", "T", "G", "C"], rows: [["Strand 2", "?", "?", "?", "?", "?"]] },
      always: true, parts: [
      { question: "Write the bases on strand 2, in order.", type: "word", answer: "TAACG/T A A C G" },
      { question: "How many amino acids could a sequence of 12 bases code for?", type: "number", answer: "4" }
    ] }
  ]);
  withDiagrams("Punnett squares and probability of inheritance", [
    { text: "Brown eyes (B) are dominant to blue eyes (b). The Punnett square shows a cross between two parents who are both Bb.",
      table: { headings: ["", "B", "b"], rows: [["B", "BB", "Bb"], ["b", "Bb", "bb"]] }, always: true, parts: [
      { question: "What fraction of the offspring are expected to have blue eyes?", type: "fraction", answer: "1/4" },
      { question: "What percentage of the offspring are expected to have brown eyes?", type: "number", answer: "75" },
      { question: "What is the expected ratio of brown eyes to blue eyes?", type: "ratio", answer: "3:1" }
    ] }
  ]);
  withDiagrams("Sex determination: X and Y chromosomes", [
    { text: "The Punnett square shows how sex is inherited.", table: { headings: ["", "X", "X"], rows: [["X", "XX", "XX"], ["Y", "XY", "XY"]] }, always: true, parts: [
      { question: "Which parent's gametes are shown down the left side (X and Y)?", type: "choice", options: ["Father", "Mother"], answer: "Father" },
      { question: "What percentage of the offspring are expected to be male?", type: "number", answer: "50" },
      { question: "What is the ratio of female to male offspring?", type: "ratio", answer: "1:1" }
    ] }
  ]);

  // ---------- Ecology ----------
  withDiagrams("Food chains and food webs", [
    { text: "The diagram shows a woodland food web.", diagram: FOOD_WEB, always: true, parts: [
      { question: "Name a producer in this food web.", type: "word", answer: "grass/oak leaves/oak/oak tree" },
      { question: "Name a primary consumer that is eaten by the owl.", type: "word", answer: "mouse/mice" },
      { question: "What does the owl eat that is a secondary consumer?", type: "word", answer: "blue tit/blue tits" },
      { question: "A disease kills most of the foxes. What will most likely happen to the number of rabbits?", type: "choice",
        options: ["It will increase", "It will decrease", "It will stay the same"], answer: "It will increase" }
    ] }
  ]);
  withDiagrams("Predator-prey relationships and population cycles", [
    { text: "The graph shows the populations of a predator and its prey over time.", diagram: PRED_PREY, always: true, parts: [
      { question: "Which line shows the predator?", type: "choice", options: ["A", "B"], answer: "B" },
      { question: "Why do the predator's peaks come after the prey's?", type: "choice", answer: "Predator numbers rise only once there is more prey to eat",
        options: ["Predator numbers rise only once there is more prey to eat", "Predators reproduce faster than prey", "Prey eat the predators"] }
    ] }
  ]);
  withDiagrams("Required practical: sampling using quadrats and transects", [
    { text: "A student placed five 1 m² quadrats at random in a 200 m² field and counted the daisies in each.",
      table: { headings: ["Quadrat", "1", "2", "3", "4", "5"], rows: [["Number of daisies", "3", "7", "4", "6", "5"]] }, always: true, parts: [
      { question: "Work out the mean number of daisies per quadrat.", type: "number", answer: "5" },
      { question: "Estimate the number of daisies in the whole field.", type: "number", marks: 2, answer: "1000" },
      { question: "Why were the quadrats placed at random?", type: "choice", options: ["To avoid bias", "To save time", "To find more daisies"], answer: "To avoid bias" }
    ] }
  ]);
})();
