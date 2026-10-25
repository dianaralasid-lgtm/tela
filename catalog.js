// The full list of topics, shared by the student dashboard (index.html) and the tutor page (tutor.html).
// SAMPLE_TOPICS rows are [title, category, tier, description, status, grade]; Maths is built from MATHS_BY_GRADE.
const SAMPLE_TOPICS = {
 Physics: [
  ["Energy stores & transfers", "Energy", "Both", "Kinetic, gravitational and elastic energy stores; conservation of energy and efficiency.", "done"],
  ["Specific heat capacity", "Energy", "Both", "Using ΔE = mcΔθ and the required practical.", "doing"],
  ["Circuits & resistance", "Electricity", "Both", "Series and parallel circuits, V = IR, and I–V characteristics.", "doing"],
  ["Mains electricity & power", "Electricity", "Both", "AC vs DC, the plug, P = IV and the National Grid.", "todo"],
  ["Density & changes of state", "Particle Model", "Both", "ρ = m/V, specific latent heat and internal energy.", "todo"],
  ["Radioactive decay", "Atomic Structure", "Both", "Alpha, beta and gamma radiation, half-life and nuclear equations.", "doing"],
  ["Forces & Newton's laws", "Forces", "Both", "Resultant forces, F = ma, stopping distances and momentum.", "todo"],
  ["Wave properties", "Waves", "Both", "Transverse and longitudinal waves, v = fλ and the EM spectrum.", "todo"],
  ["Magnetism & electromagnetism", "Magnetism", "Both", "Magnetic fields, the motor effect and F = BIl.", "todo"]
 ],
 Chemistry: [
  ["Atomic structure & isotopes", "Atomic Structure", "Both", "Protons, neutrons and electrons, relative atomic mass and the history of the atom.", "done"],
  ["The periodic table", "Atomic Structure", "Both", "Groups 1, 7 and 0, and trends down a group.", "doing"],
  ["Ionic, covalent & metallic bonding", "Bonding", "Both", "How each bond forms and the properties of the resulting structures.", "doing"],
  ["Moles & reacting masses", "Quantitative Chemistry", "Higher", "Avogadro's constant, moles = mass ÷ Mr and limiting reactants.", "todo"],
  ["Acids, alkalis & salts", "Chemical Changes", "Both", "Neutralisation, pH and making soluble salts.", "doing"],
  ["Electrolysis", "Chemical Changes", "Both", "Electrolysis of molten and aqueous compounds and half equations.", "todo"],
  ["Exothermic & endothermic reactions", "Energy Changes", "Both", "Reaction profiles and bond energy calculations.", "todo"],
  ["Rates of reaction", "Rates of Reaction", "Both", "Collision theory, factors affecting rate, and catalysts.", "todo"],
  ["Crude oil & alkanes", "Organic Chemistry", "Both", "Fractional distillation, cracking and hydrocarbons.", "todo"]
 ],
 Biology: [
  ["Cell structure", "Cell Biology", "Both", "Animal, plant and bacterial cells, and microscopy.", "done"],
  ["Mitosis & stem cells", "Cell Biology", "Both", "The cell cycle, differentiation and uses of stem cells.", "doing"],
  ["Diffusion, osmosis & active transport", "Cell Biology", "Both", "Movement of substances into and out of cells.", "doing"],
  ["Enzymes & digestion", "Organisation", "Both", "Lock and key model, digestive enzymes and the required practical.", "todo"],
  ["The heart & circulation", "Organisation", "Both", "Blood vessels, blood, and coronary heart disease.", "todo"],
  ["Communicable diseases", "Infection & Response", "Both", "Pathogens, the immune system and vaccination.", "todo"],
  ["Photosynthesis & respiration", "Bioenergetics", "Both", "Limiting factors, aerobic and anaerobic respiration.", "doing"],
  ["Hormones & homeostasis", "Homeostasis", "Both", "Blood glucose control, diabetes and the menstrual cycle.", "todo"],
  ["DNA & inheritance", "Inheritance", "Both", "Genes, alleles, Punnett squares and genetic disorders.", "todo"],
  ["Ecosystems", "Ecology", "Both", "Food chains, adaptations, biodiversity and the carbon cycle.", "todo"]
 ],
 Maths: []
};

// GCSE Maths topics grouped by grade. Each starts with a code for its area of maths:
// N Number, A Algebra, R Ratio & Proportion, G Geometry & Measures, P Probability, S Statistics.
const MATHS_AREAS = {
  N: "Number", A: "Algebra", R: "Ratio & Proportion",
  G: "Geometry & Measures", P: "Probability", S: "Statistics"
};
const MATHS_BY_GRADE = {
  "Grade 1": [
    "N Addition of integers and decimals", "N Subtraction of integers and decimals",
    "N Multiplication of integers and decimals", "N Division of integers and decimals",
    "N Ordering integers and decimals", "G Reading scales", "N Fractions: writing, simplifying and ordering",
    "N Rounding", "N Place value", "G Time", "A Coordinates", "G Names of polygons", "G Names of angles",
    "S Tally charts", "S Pictograms", "N Negative numbers", "N Powers and roots", "N Factors and multiples", "N BIDMAS"
  ],
  "Grade 2": [
    "N Calculation money problems", "N Fractions of an amount", "N Fractions, decimals and percentages",
    "A Algebra: collecting like terms", "N Estimation", "A Function machines", "G Perimeter and area",
    "P Probability: scales", "S Frequency polygons", "S Averages from lists (mean and median)",
    "S Bar charts", "S Stem and leaf", "S Pie charts", "N Systematic listing strategies"
  ],
  "Grade 3": [
    "N Error intervals", "N Fractions: arithmetic", "R Ratio: as a fraction and simplifying",
    "R Proportion: recipes and ingredients", "R Ratio: sharing", "R Percentages: percentages of amounts",
    "R Percentages: increase/decrease", "R Percentage change", "R Exchange rate", "R Conversions and units",
    "G Scale drawings", "R Best buy questions", "A Number substitution", "A Solving linear equations",
    "A Drawing graphs", "G Area and circumference of circles", "G Area of compound shapes",
    "S Frequency tables", "S Two-way tables", "G Transformations of shapes"
  ],
  "Grade 4": [
    "R Compound interest and depreciation", "N Indices: basics", "N HCF and LCM", "N Prime factor trees",
    "A Real life graphs", "A Distance time graphs", "A Inequalities: representing on a number line",
    "A Inequalities: solving equations", "A Forming and solving equations", "A Sequences: generating",
    "A Sequences: nth term", "A Expanding single and double brackets", "A Factorising",
    "G Angles in parallel lines", "G Angles in polygons", "G Surface area (prisms and cylinders)",
    "G Volume (prisms and cylinders)", "G Loci and construction", "G Bearings", "G Plans and elevations",
    "S Averages: frequency tables (mean and median)", "P Probability basics", "S Scatter graphs", "G Pythagoras"
  ],
  "Grade 5": [
    "R Ratio: writing ratios as fractions", "R Ratio: writing ratios as linear functions",
    "R Reverse percentages", "N Standard form", "R Speed and density", "A Changing the subject of a formula",
    "A Factorising quadratics", "A Solving quadratics", "A Drawing quadratic graphs",
    "A Other graphs: cubic, reciprocal", "A Using graphs to solve equations", "A Simultaneous equations",
    "A Using graphs to solve simultaneous equations", "A Straight line graphs: everything",
    "G Surface area and volume of cone & sphere", "G Sectors: area and arc length",
    "G Similar shapes (lengths)", "G SOHCAHTOA", "G Congruent shapes", "G Exact trig values",
    "P Probability trees", "P Venn diagrams", "G Vectors"
  ],
  "Grade 6": [
    "N Recurring decimals to fractions", "N Product rule for counting", "R Repeated percentage change",
    "N Indices: fractions and negative powers", "A Expanding triple brackets",
    "A Straight line graphs: parallel & perpendicular", "A Straight line graphs: finding areas under graph",
    "A Inequalities on graphs: shading", "G Similar shapes (area and volume)",
    "G Enlargements: negative scale factor", "G Circle theorems", "S Cumulative frequency", "S Box plots",
    "R Ratio: capture recapture"
  ],
  "Grade 7": [
    "P Tree diagrams: conditional probability", "P Probability: conditional probability algebra",
    "P Venn diagrams: \"given that\" questions", "N Surds", "A Factorising harder quadratics",
    "R Direct and inverse proportion", "N Bounds", "A Other graphs: trig and exponential",
    "A Exponential functions and exponential growth", "A Algebraic fractions", "A Re-arranging harder formulae",
    "A Functions: inverse and composite", "A Iteration", "G Sine & cosine rule", "G Area of any triangle",
    "G 3D Pythagoras", "A Rates of change and tangents to curves", "S Histograms"
  ],
  "Grade 8/9": [
    "A Quadratic simultaneous equations", "A Area of shapes with algebra", "G Sine/cosine rule with algebra",
    "R Ratio with algebra", "A Transforming curves", "G Proof: circle theorems, sine & cosine rule",
    "A Completing the square", "A nth term of a quadratic sequence", "A Quadratic inequalities",
    "A Velocity time graphs", "A Equation of a tangent", "G Vector proof questions"
  ]
};
const GRADES = Object.keys(MATHS_BY_GRADE);

// Grades 1–3 sit on Foundation, 4–5 on both tiers, 6 and above on Higher.
const tierForGrade = grade => {
  const n = parseInt(grade.replace("Grade ", ""), 10);
  return n <= 3 ? "Foundation" : n <= 5 ? "Both" : "Higher";
};
SAMPLE_TOPICS.Maths = Object.entries(MATHS_BY_GRADE).flatMap(([grade, entries]) =>
  entries.map(entry => [entry.slice(2), MATHS_AREAS[entry[0]], tierForGrade(grade), "", "todo", grade]));

// Subjects switched off for now: they don't show anywhere in the app (dashboard, filters, homework picker,
// tutor progress), but their topics, questions and everyone's saved progress are kept.
// Take a subject out of this list to bring it back.
const HIDDEN_SUBJECTS = ["Physics", "Chemistry", "Biology"];
const isShownSubject = subject => !HIDDEN_SUBJECTS.includes(subject);
