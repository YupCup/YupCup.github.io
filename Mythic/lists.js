let randomEventFocus =
[
    [1, "Remote Event"],
    [6, "Ambiguous Event"],
    [11, "New NPC"],
    [21, "NPC Action"],
    [41, "NPC Negative"],
    [46, "NPC Positive"],
    [51, "Move Toward A Thread"],
    [56, "Move Away From A Thread"],
    [66, "Close A Thread"],
    [71, "PC Negative"],
    [81, "PC Positive"],
    [86, "Current Context"],
];

let eventActions1 = [
    "Abandon", 
    "Accompany", 
    "Activate", 
    "Agree", 
    "Ambush", 
    "Arrive", 
    "Assist", 
    "Attack", 
    "Attain", 
    "Bargain", 
    "Befriend", 
    "Bestow", 
    "Betray", 
    "Block", 
    "Break", 
    "Carry", 
    "Celebrate", 
    "Change", 
    "Close", 
    "Combine", 
    "Communicate", 
    "Conceal", 
    "Continue", 
    "Control", 
    "Create", 
    "Deceive", 
    "Decrease", 
    "Defend", 
    "Delay", 
    "Deny", 
    "Depart", 
    "Deposit", 
    "Destroy", 
    "Dispute", 
    "Disrupt", 
    "Distrust", 
    "Divide", 
    "Drop", 
    "Easy", 
    "Energize", 
    "Escape", 
    "Expose", 
    "Fail", 
    "Fight", 
    "Flee", 
    "Free", 
    "Guide", 
    "Harm", 
    "Heal", 
    "Hinder", 
    "Imitate", 
    "Imprison", 
    "Increase", 
    "Indulge", 
    "Inform", 
    "Inquire", 
    "Inspect", 
    "Invade", 
    "Leave", 
    "Lure", 
    "Misuse", 
    "Move", 
    "Neglect", 
    "Observe", 
    "Open", 
    "Oppose", 
    "Overthrow", 
    "Praise", 
    "Proceed", 
    "Protect", 
    "Punish", 
    "Pursue", 
    "Recruit", 
    "Refuse", 
    "Release", 
    "Relinquish", 
    "Repair", 
    "Repulse", 
    "Return", 
    "Reward", 
    "Ruin", 
    "Separate", 
    "Start", 
    "Stop", 
    "Strange", 
    "Struggle", 
    "Succeed", 
    "Support", 
    "Suppress", 
    "Take", 
    "Threaten", 
    "Transform", 
    "Trap", 
    "Travel", 
    "Triumph", 
    "Truce", 
    "Trust", 
    "Use", 
    "Usurp", 
    "Waste"
];

let eventActions2 = [
    "Advantage", 
    "Adversity", 
    "Agreement", 
    "Animal", 
    "Attention", 
    "Balance", 
    "Battle", 
    "Benefits", 
    "Building", 
    "Burden", 
    "Bureaucracy", 
    "Business", 
    "Chaos", 
    "Comfort", 
    "Completion", 
    "Conflict", 
    "Cooperation", 
    "Danger", 
    "Defense", 
    "Depletion", 
    "Disadvantage", 
    "Distraction", 
    "Elements", 
    "Emotion", 
    "Enemy", 
    "Energy", 
    "Environment", 
    "Expectation", 
    "Exterior", 
    "Extravagance", 
    "Failure", 
    "Fame", 
    "Fear", 
    "Freedom", 
    "Friend", 
    "Goal", 
    "Group", 
    "Health", 
    "Hindrance", 
    "Home", 
    "Hope", 
    "Idea", 
    "Illness", 
    "Illusion", 
    "Individual", 
    "Information", 
    "Innocent", 
    "Intellect", 
    "Interior", 
    "Investment", 
    "Leadership", 
    "Legal", 
    "Location", 
    "Military", 
    "Misfortune", 
    "Mundane", 
    "Nature", 
    "Needs", 
    "News", 
    "Normal", 
    "Object", 
    "Obscurity", 
    "Official", 
    "Opposition", 
    "Outside", 
    "Pain", 
    "Path", 
    "Peace", 
    "People", 
    "Personal", 
    "Physical", 
    "Plot", 
    "Portal", 
    "Possessions", 
    "Poverty", 
    "Power", 
    "Prison", 
    "Project", 
    "Protection", 
    "Reassurance", 
    "Representative", 
    "Riches", 
    "Safety", 
    "Strength", 
    "Success", 
    "Suffering", 
    "Surprise", 
    "Tactic", 
    "Technology", 
    "Tension", 
    "Time", 
    "Trial", 
    "Value", 
    "Vehicle", 
    "Victory", 
    "Vulnerability", 
    "Weapon", 
    "Weather", 
    "Work", 
    "Wound"
];

let eventDescriptor1 = [
   "Adventurously", 
   "Aggressively", 
   "Anxiously", 
   "Awkwardly", 
   "Beautifully", 
   "Bleakly", 
   "Boldly", 
   "Bravely", 
   "Busily", 
   "Calmly", 
   "Carefully", 
   "Carelessly", 
   "Cautiously", 
   "Ceaselessly", 
   "Cheerfully", 
   "Combatively", 
   "Coolly", 
   "Crazily", 
   "Curiously", 
   "Dangerously", 
   "Defiantly", 
   "Deliberately", 
   "Delicately", 
   "Delightfully", 
   "Dimly", 
   "Efficiently", 
   "Emotionally", 
   "Energetically", 
   "Enormously", 
   "Enthusiastically", 
   "Excitedly", 
   "Fearfully", 
   "Ferociously", 
   "Fiercely", 
   "Foolishly", 
   "Fortunately", 
   "Frantically", 
   "Freely", 
   "Frighteningly", 
   "Fully", 
   "Generously", 
   "Gently", 
   "Gladly", 
   "Gracefully", 
   "Gratefully", 
   "Happily", 
   "Hastily", 
   "Healthily", 
   "Helpfully", 
   "Helplessly", 
   "Hopelessly", 
   "Innocently", 
   "Intensely", 
   "Interestingly", 
   "Irritatingly", 
   "Joyfully", 
   "Kindly", 
   "Lazily", 
   "Lightly", 
   "Loosely", 
   "Loudly", 
   "Lovingly", 
   "Loyally", 
   "Majestically", 
   "Meaningfully", 
   "Mechanically", 
   "Mildly", 
   "Miserably", 
   "Mockingly", 
   "Mysteriously", 
   "Naturally", 
   "Neatly", 
   "Nicely", 
   "Oddly", 
   "Offensively", 
   "Officially", 
   "Partially", 
   "Passively", 
   "Peacefully", 
   "Perfectly", 
   "Playfully", 
   "Politely", 
   "Positively", 
   "Powerfully", 
   "Quaintly", 
   "Quarrelsomely", 
   "Quietly", 
   "Roughly", 
   "Rudely", 
   "Ruthlessly", 
   "Slowly", 
   "Softly", 
   "Strangely", 
   "Swiftly", 
   "Threateningly", 
   "Timidly", 
   "Very", 
   "Violently", 
   "Wildly", 
   "Yieldingly"
];

let eventDescriptor2 = [
    "Abnormal", 
    "Amusing", 
    "Artificial", 
    "Average", 
    "Beautiful", 
    "Bizarre", 
    "Boring", 
    "Bright", 
    "Broken", 
    "Clean", 
    "Cold", 
    "Colorful", 
    "Colorless", 
    "Comforting", 
    "Creepy", 
    "Cute", 
    "Damaged", 
    "Dark", 
    "Defeated", 
    "Dirty", 
    "Disagreeable", 
    "Dry", 
    "Dull", 
    "Empty", 
    "Enormous", 
    "Extraordinary", 
    "Extravagant", 
    "Faded", 
    "Familiar", 
    "Fancy", 
    "Feeble", 
    "Festive", 
    "Flawless", 
    "Forlorn", 
    "Fragile", 
    "Fragrant", 
    "Fresh", 
    "Full", 
    "Glorious", 
    "Graceful", 
    "Hard", 
    "Harsh", 
    "Healthy", 
    "Heavy", 
    "Historical", 
    "Horrible", 
    "Important", 
    "Interesting", 
    "Juvenile", 
    "Lacking", 
    "Large", 
    "Lavish", 
    "Lean", 
    "Less", 
    "Lethal", 
    "Lively", 
    "Lonely", 
    "Lovely", 
    "Magnificent", 
    "Mature", 
    "Messy", 
    "Mighty", 
    "Military", 
    "Modern", 
    "Mundane", 
    "Mysterious", 
    "Natural", 
    "Normal", 
    "Odd", 
    "Old", 
    "Pale", 
    "Peaceful", 
    "Petite", 
    "Plain", 
    "Poor", 
    "Powerful", 
    "Protective", 
    "Quaint", 
    "Rare", 
    "Reassuring", 
    "Remarkable", 
    "Rotten", 
    "Rough", 
    "Ruined", 
    "Rustic", 
    "Scary", 
    "Shocking", 
    "Simple", 
    "Small", 
    "Smooth", 
    "Soft", 
    "Strong", 
    "Stylish", 
    "Unpleasant", 
    "Valuable", 
    "Vibrant", 
    "Warm", 
    "Watery", 
    "Weak", 
    "Young"
];

let eventLocations = [
    "Abandoned", 
    "Active", 
    "Artistic", 
    "Atmosphere", 
    "Beautiful", 
    "Bleak", 
    "Bright", 
    "Business", 
    "Calm", 
    "Charming", 
    "Clean", 
    "Cluttered", 
    "Cold", 
    "Colorful", 
    "Colorless", 
    "Confusing", 
    "Cramped", 
    "Creepy", 
    "Crude", 
    "Cute", 
    "Damaged", 
    "Dangerous", 
    "Dark", 
    "Delightful", 
    "Dirty", 
    "Domestic", 
    "Empty", 
    "Enclosed", 
    "Enormous", 
    "Entrance", 
    "Exclusive", 
    "Exposed", 
    "Extravagant", 
    "Familiar", 
    "Fancy", 
    "Festive", 
    "Foreboding", 
    "Fortunate", 
    "Fragrant", 
    "Frantic", 
    "Frightening", 
    "Full", 
    "Harmful", 
    "Helpful", 
    "Horrible", 
    "Important", 
    "Impressive", 
    "Inactive", 
    "Intense", 
    "Intriguing", 
    "Lively", 
    "Lonely", 
    "Long", 
    "Loud", 
    "Meaningful", 
    "Messy", 
    "Mobile", 
    "Modern", 
    "Mundane", 
    "Mysterious", 
    "Natural", 
    "New", 
    "Occupied", 
    "Odd", 
    "Official", 
    "Old", 
    "Open", 
    "Peaceful", 
    "Personal", 
    "Plain", 
    "Portal", 
    "Protected", 
    "Protection", 
    "Purposeful", 
    "Quiet", 
    "Reassuring", 
    "Remote", 
    "Resourceful", 
    "Ruined", 
    "Rustic", 
    "Safe", 
    "Services", 
    "Simple", 
    "Small", 
    "Spacious", 
    "Storage", 
    "Strange", 
    "Stylish", 
    "Suspicious", 
    "Tall", 
    "Threatening", 
    "Tranquil", 
    "Unexpected", 
    "Unpleasant", 
    "Unusual", 
    "Useful", 
    "Warm", 
    "Warning", 
    "Watery", 
    "Welcoming"
];

let eventCharacters = [
    "Accompanied", 
    "Active", 
    "Aggressive", 
    "Ambush", 
    "Animal", 
    "Anxious", 
    "Armed", 
    "Beautiful", 
    "Bold", 
    "Busy", 
    "Calm", 
    "Careless", 
    "Casual", 
    "Cautious", 
    "Classy", 
    "Colorful", 
    "Combative", 
    "Crazy", 
    "Creepy", 
    "Curious", 
    "Dangerous", 
    "Deceitful", 
    "Defeated", 
    "Defiant", 
    "Delightful", 
    "Emotional", 
    "Energetic", 
    "Equipped", 
    "Excited", 
    "Expected", 
    "Familiar", 
    "Fast", 
    "Feeble", 
    "Feminine", 
    "Ferocious", 
    "Foe", 
    "Foolish", 
    "Fortunate", 
    "Fragrant", 
    "Frantic", 
    "Friend", 
    "Frightened", 
    "Frightening", 
    "Generous", 
    "Glad", 
    "Happy", 
    "Harmful", 
    "Helpful", 
    "Helpless", 
    "Hurt", 
    "Important", 
    "Inactive", 
    "Influential", 
    "Innocent", 
    "Intense", 
    "Knowledgeable", 
    "Large", 
    "Lonely", 
    "Loud", 
    "Loyal", 
    "Masculine", 
    "Mighty", 
    "Miserable", 
    "Multiple", 
    "Mundane", 
    "Mysterious", 
    "Natural", 
    "Odd", 
    "Official", 
    "Old", 
    "Passive", 
    "Peaceful", 
    "Playful", 
    "Powerful", 
    "Professional", 
    "Protected", 
    "Protecting", 
    "Questioning", 
    "Quiet", 
    "Reassuring", 
    "Resourceful", 
    "Seeking", 
    "Skilled", 
    "Slow", 
    "Small", 
    "Stealthy", 
    "Strange", 
    "Strong", 
    "Tall", 
    "Thieving", 
    "Threatening", 
    "Triumphant", 
    "Unexpected", 
    "Unnatural", 
    "Unusual", 
    "Violent", 
    "Vocal", 
    "Weak", 
    "Wild", 
    "Young"
];

let eventObjects = [
    "Active", 
    "Artistic", 
    "Average", 
    "Beautiful", 
    "Bizarre", 
    "Bright", 
    "Clothing", 
    "Clue", 
    "Cold", 
    "Colorful", 
    "Communication", 
    "Complicated", 
    "Confusing", 
    "Consumable", 
    "Container", 
    "Creepy", 
    "Crude", 
    "Cute", 
    "Damaged", 
    "Dangerous", 
    "Deactivated", 
    "Deliberate", 
    "Delightful", 
    "Desired", 
    "Domestic", 
    "Empty", 
    "Energy", 
    "Enormous", 
    "Equipment", 
    "Expected", 
    "Expended", 
    "Extravagant", 
    "Faded", 
    "Familiar", 
    "Fancy", 
    "Flora", 
    "Fortunate", 
    "Fragile", 
    "Fragrant", 
    "Frightening", 
    "Garbage", 
    "Guidance", 
    "Hard", 
    "Harmful", 
    "Healing", 
    "Heavy", 
    "Helpful", 
    "Horrible", 
    "Important", 
    "Inactive", 
    "Information", 
    "Intriguing", 
    "Large", 
    "Lethal", 
    "Light", 
    "Liquid", 
    "Loud", 
    "Majestic", 
    "Meaningful", 
    "Mechanical", 
    "Modern", 
    "Moving", 
    "Multiple", 
    "Mundane", 
    "Mysterious", 
    "Natural", 
    "New", 
    "Odd", 
    "Official", 
    "Old", 
    "Ornamental", 
    "Ornate", 
    "Personal", 
    "Powerful", 
    "Prized", 
    "Protection", 
    "Rare", 
    "Ready", 
    "Reassuring", 
    "Resource", 
    "Ruined", 
    "Small", 
    "Soft", 
    "Solitary", 
    "Stolen", 
    "Strange", 
    "Stylish", 
    "Threatening", 
    "Tool", 
    "Travel", 
    "Unexpected", 
    "Unpleasant", 
    "Unusual", 
    "Useful", 
    "Useless", 
    "Valuable", 
    "Warm", 
    "Weapon", 
    "Wet", 
    "Worn"
];

let characterAppearances =[
    "Abnormal", 
    "Rough", 
    "Aromatic", 
    "Athletic", 
    "Attractive", 
    "Average", 
    "Bald", 
    "Beautiful", 
    "Bizarre", 
    "Brutish", 
    "Casual", 
    "Classy", 
    "Clean", 
    "Clothing", 
    "Colorful", 
    "Common", 
    "Cool", 
    "Creepy", 
    "Cute", 
    "Dainty", 
    "Delicate", 
    "Desperate", 
    "Different", 
    "Dirty", 
    "Drab", 
    "Elegant",
    "Exotic", 
    "Expensive", 
    "Extravagant", 
    "Eyewear", 
    "Familiar", 
    "Fancy", 
    "Features", 
    "Feminine", 
    "Festive", 
    "Frail", 
    "Hair", 
    "Hairy", 
    "Headwear", 
    "Heavy", 
    "Hurt", 
    "Innocent",
    "Intense", 
    "Interesting", 
    "Intimidating", 
    "Bejeweled", 
    "Large", 
    "Lavish", 
    "Lean", 
    "Limbs", 
    "Lithe", 
    "Masculine", 
    "Mature", 
    "Messy", 
    "Mighty", 
    "Modern", 
    "Mundane", 
    "Muscular", 
    "Mysterious", 
    "Natural", 
    "Neat", 
    "Normal", 
    "Odd", 
    "Official", 
    "Old", 
    "Petite", 
    "Piercing", 
    "Powerful", 
    "Professional", 
    "Reassuring", 
    "Regal", 
    "Remarkable", 
    "Rough", 
    "Rustic", 
    "Scarred", 
    "Scary", 
    "Scented", 
    "Scholarly", 
    "Short", 
    "Simple", 
    "Sinister", 
    "Small", 
    "Smelly", 
    "Stocky", 
    "Strange", 
    "Striking", 
    "Strong", 
    "Stylish",
    "Sharp",
    "Tall", 
    "Tattoo", 
    "Painted", 
    "Trendy", 
    "Unusual", 
    "Broken", 
    "Weak", 
    "Modified", 
    "Wounded", 
    "Young"
];

let characterBackgrounds = [
    "Abandoned", 
    "Abused", 
    "Academic", 
    "Activity", 
    "Adventurous", 
    "Adversity", 
    "Art", 
    "Assist", 
    "Average", 
    "Bad", 
    "Bizarre", 
    "Bleak", 
    "Bold", 
    "Burden", 
    "Business", 
    "Care", 
    "Career", 
    "Chaotic", 
    "Cheat", 
    "Combat", 
    "Commitment", 
    "Community", 
    "Competition", 
    "Conflict", 
    "Control", 
    "Crime", 
    "Damaged", 
    "Danger", 
    "Death", 
    "Deceive", 
    "Decrease", 
    "Defeated", 
    "Disaster", 
    "Dispute", 
    "Emotion", 
    "Environment", 
    "Escape", 
    "Exile", 
    "Experience", 
    "Failure", 
    "Faith", 
    "Fame", 
    "Family", 
    "Fortunate", 
    "Free", 
    "Freedom", 
    "Friend", 
    "Gifts", 
    "Good", 
    "Guided", 
    "Hard", 
    "Harm", 
    "Harsh", 
    "Heal", 
    "Helped", 
    "Heroic", 
    "Humble", 
    "Humiliation", 
    "Imprisonment", 
    "Independent", 
    "Inherit", 
    "Injury", 
    "Injustice", 
    "Legal", 
    "Loss", 
    "Military", 
    "Mistake", 
    "Mundane", 
    "Nature", 
    "Outsider", 
    "Person", 
    "Place", 
    "Poor", 
    "Power", 
    "Prestige", 
    "Privilege", 
    "Pursued", 
    "Recruited", 
    "Religion", 
    "Rural", 
    "Saved", 
    "Search", 
    "Seclusion", 
    "Service", 
    "Sheltered", 
    "Skill", 
    "Strange", 
    "Successful", 
    "Survival", 
    "Tradition", 
    "Training", 
    "Trauma", 
    "Travel", 
    "Urban", 
    "War", 
    "Wealth", 
    "Wild", 
    "Work", 
    "Wounded", 
    "Youth"
];

let characterDescriptors = [
    "Abnormal", 
    "Active", 
    "Adventurous", 
    "Aggressive", 
    "Agreeable", 
    "Ally", 
    "Ancient", 
    "Angry", 
    "Anxious", 
    "Armed", 
    "Aromatic", 
    "Arrogant", 
    "Attractive", 
    "Awkward", 
    "Beautiful", 
    "Bizarre", 
    "Bleak", 
    "Bold", 
    "Brave", 
    "Busy", 
    "Calm", 
    "Capable", 
    "Careful", 
    "Careless", 
    "Caring", 
    "Cautious", 
    "Cheerful", 
    "Classy", 
    "Clean", 
    "Clumsy", 
    "Colorful", 
    "Combative", 
    "Commanding", 
    "Common", 
    "Competitive", 
    "Confident", 
    "Crazy", 
    "Curious", 
    "Dangerous", 
    "Different", 
    "Difficult", 
    "Dirty", 
    "Disagreeable", 
    "Disciplined", 
    "Educated", 
    "Elegant", 
    "Erratic", 
    "Exotic", 
    "Fancy", 
    "Fast", 
    "Foul", 
    "Frightened", 
    "Gentle", 
    "Harmful", 
    "Helpful", 
    "Heroic", 
    "Humorous", 
    "Hurt", 
    "Ignorant", 
    "Impulsive", 
    "Inept", 
    "Informative", 
    "Intelligent", 
    "Interesting", 
    "Intimidating", 
    "Intrusive", 
    "Large", 
    "Loud", 
    "Meek", 
    "Naive", 
    "Old", 
    "Passive", 
    "Polite", 
    "Poor", 
    "Powerful", 
    "Powerless", 
    "Primitive", 
    "Principled", 
    "Quiet", 
    "Respectful", 
    "Rough", 
    "Rude", 
    "Simple", 
    "Skilled", 
    "Slow", 
    "Small", 
    "Sneaky", 
    "Sophisticated", 
    "Strange", 
    "Strong", 
    "Supportive", 
    "Surprising", 
    "Sweet", 
    "Trained", 
    "Uniformed", 
    "Unusual", 
    "Weak", 
    "Wealthy", 
    "Wild", 
    "Young"
];

let characterIdentities = [
    "Abandoned", 
    "Administrator", 
    "Adventurous", 
    "Adversary", 
    "Advisor", 
    "Ally", 
    "Art", 
    "Artist", 
    "Assistant", 
    "Athlete", 
    "Authority", 
    "Bureaucrat", 
    "Business", 
    "Combatant", 
    "Competitor", 
    "Controller", 
    "Crafter", 
    "Creator", 
    "Criminal", 
    "Deceiver", 
    "Deliverer", 
    "Dependent", 
    "Driver/Pilot", 
    "Elite", 
    "Enemy", 
    "Enforcer", 
    "Engineer", 
    "Entertainer", 
    "Executive", 
    "Expert", 
    "Explorer", 
    "Family", 
    "Farmer", 
    "Fighter", 
    "Fixer", 
    "Foreigner", 
    "Friend", 
    "Gambler", 
    "Gatherer", 
    "Guardian", 
    "Healer", 
    "Helpless", 
    "Hero", 
    "Hunter", 
    "Information", 
    "Innocent", 
    "Inspector", 
    "Intellectual", 
    "Investigator", 
    "Judge", 
    "Killer", 
    "Laborer", 
    "Lackey", 
    "Law", 
    "Leader", 
    "Legal", 
    "Lost", 
    "Mechanical", 
    "Mediator", 
    "Merchant", 
    "Messenger", 
    "Military", 
    "Mundane", 
    "Mystery", 
    "Official", 
    "Organizer", 
    "Outsider", 
    "Performer", 
    "Persecutor", 
    "Planner", 
    "Pleaser", 
    "Power", 
    "Prisoner", 
    "Professional", 
    "Protector", 
    "Public", 
    "Punish", 
    "Radical", 
    "Religious", 
    "Represent", 
    "Rogue", 
    "Ruffian", 
    "Ruler", 
    "Scholar", 
    "Scientist", 
    "Scout", 
    "Servant", 
    "Socialite", 
    "Soldier", 
    "Student", 
    "Subverter", 
    "Supporter", 
    "Survivor", 
    "Teacher", 
    "Thief", 
    "Trader", 
    "Victim", 
    "Villain", 
    "Wanderer", 
    "Warrior"
];

let characterMotivations = [
    "Adventure", 
    "Adversity", 
    "Ambition", 
    "Anger", 
    "Approval", 
    "Art", 
    "Attain", 
    "Business", 
    "Change", 
    "Character", 
    "Conflict", 
    "Control", 
    "Create", 
    "Danger", 
    "Death", 
    "Deceive", 
    "Destroy", 
    "Diminish", 
    "Disrupt", 
    "Emotion", 
    "Enemy", 
    "Environment", 
    "Escape", 
    "Failure", 
    "Fame", 
    "Family", 
    "Fear", 
    "Fight", 
    "Find", 
    "Free", 
    "Friend", 
    "Goal", 
    "Gratify", 
    "Group", 
    "Guide", 
    "Guilt", 
    "Hate", 
    "Heal", 
    "Help", 
    "Hide", 
    "Home", 
    "Hope", 
    "Idea", 
    "Illness", 
    "Important", 
    "Imprison", 
    "Increase", 
    "Information", 
    "Innocent", 
    "Intellect", 
    "Intolerance", 
    "Investment", 
    "Jealousy", 
    "Joy", 
    "Justice", 
    "Leader", 
    "Legal", 
    "Loss", 
    "Love", 
    "Loyalty", 
    "Malice", 
    "Misfortune", 
    "Mistrust", 
    "Mundane", 
    "Mysterious", 
    "Nature", 
    "Object", 
    "Obligation", 
    "Official", 
    "Oppose", 
    "Pain", 
    "Passion", 
    "Path", 
    "Peace", 
    "Physical", 
    "Place", 
    "Plan", 
    "Pleasure", 
    "Power", 
    "Pride", 
    "Protect", 
    "Pursue", 
    "Rare", 
    "Recover", 
    "Reveal", 
    "Revenge", 
    "Riches", 
    "Safety", 
    "Search", 
    "Serve", 
    "Start", 
    "Stop", 
    "Strange", 
    "Struggle", 
    "Success", 
    "Suffering", 
    "Support", 
    "Take", 
    "Transform", 
    "Travel"
];

let characterPersonalities =[
    "Active", 
    "Adventurous", 
    "Aggressive", 
    "Agreeable", 
    "Ambitious", 
    "Amusing", 
    "Angry", 
    "Annoying", 
    "Anxious", 
    "Arrogant", 
    "Average", 
    "Awkward", 
    "Bad", 
    "Bitter", 
    "Bold", 
    "Brave", 
    "Calm", 
    "Careful", 
    "Careless", 
    "Classy", 
    "Cold", 
    "Collector", 
    "Committed", 
    "Competitive", 
    "Confident", 
    "Control", 
    "Crazy", 
    "Creative", 
    "Crude", 
    "Curious", 
    "Deceptive", 
    "Determined", 
    "Devoted", 
    "Disagreeable", 
    "Dull", 
    "Emotion", 
    "Empathetic", 
    "Fair", 
    "Fastidious", 
    "Follower", 
    "Foolish", 
    "Friendly", 
    "Good", 
    "Gourmet", 
    "Greed", 
    "Haunted", 
    "Helpful", 
    "Honest", 
    "Honor", 
    "Humble", 
    "Humorous", 
    "Inconsistent", 
    "Independent", 
    "Interesting", 
    "Intolerant", 
    "Irresponsible", 
    "Knowledgeable", 
    "Larcenous", 
    "Leader", 
    "Likable", 
    "Loyal", 
    "Manipulative", 
    "Mercurial", 
    "Naive", 
    "Nervous", 
    "Oblivious", 
    "Obstinate", 
    "Optimistic", 
    "Perceptive", 
    "Perfectionist", 
    "Practical", 
    "Prepared", 
    "Principled", 
    "Protect", 
    "Quiet", 
    "Quirky", 
    "Rash", 
    "Rational", 
    "Respectful", 
    "Responsible", 
    "Restless", 
    "Risk", 
    "Rude", 
    "Savvy", 
    "Searching", 
    "Selfish", 
    "Selfless", 
    "Shallow", 
    "Social", 
    "Strange", 
    "Strong", 
    "Studious", 
    "Superstitious", 
    "Tolerant", 
    "Vindictive", 
    "Vocal", 
    "Wary", 
    "Weak", 
    "Wild", 
    "Wise"
];

let names = [
    "A", 
    "Ah", 
    "Ahg", 
    "An", 
    "Ar", 
    "As",
    "Bah", 
    "Be", 
    "Bih", 
    "Brah", 
    "Col",
    "Cor", 
    "Dah", 
    "Deeds", 
    "Del", 
    "Drah", 
    "Eq", 
    "Eh", 
    "Ei", 
    "Ell",
    "Ess", 
    "Est", 
    "Et", 
    "Fah", 
    "Fer", 
    "Fi",
    "Gah", 
    "Go", 
    "Grah", 
    "Hee", 
    "Ia", 
    "Ick", 
    "In", 
    "Iss", 
    "Je", 
    "Ke", 
    "Jen", 
    "Kha", 
    "Kru", 
    "Lah", 
    "Lee", 
    "Len", 
    "Lin",
    "Ly", 
    "Mah",
    "N", 
    "Nah",
    "Nee", 
    "Na",
    "Oh", 
    "On", 
    "Or", 
    "Orn", 
    "Oth", 
    "Ow", 
    "Ph", 
    "Pr", 
    "R", 
    "Rah", 
    "Ren", 
    "Sah", 
    "Se", 
    "Sh", 
    "Sha", 
    "T", 
    "Ta", 
    "Tal", 
    "Tar", 
    "Th", 
    "Thah", 
    "Thoh", 
    "Ti",
    "Tor", 
    "Uh", 
    "Va", 
    "Vah", 
    "Ve", 
    "Vice", 
    "Wah", 
    "Wr", 
    "X", 
    "Y", 
    "Yah", 
    "Yuh", 
    "Z"
];

let creatureAbilities = [
    "Ambush", 
    "Animate", 
    "Armor", 
    "Arrive", 
    "Attach", 
    "Attack", 
    "Attract", 
    "Bite", 
    "Block", 
    "Blunt", 
    "Break", 
    "Breath", 
    "Carry", 
    "Change", 
    "Climb", 
    "Cold", 
    "Common", 
    "Communicate", 
    "Conceal", 
    "Contact", 
    "Control", 
    "Create", 
    "Damage", 
    "Dark", 
    "Death", 
    "Deceive", 
    "Decrease", 
    "Defense", 
    "Depower", 
    "Detect", 
    "Disrupt", 
    "Distract", 
    "Dominate", 
    "Drain", 
    "Element", 
    "Energy", 
    "Enhanced", 
    "Entangle", 
    "Environment", 
    "Extra", 
    "Fear", 
    "Fight", 
    "Fire", 
    "Flight", 
    "Harm", 
    "Heal", 
    "Illness", 
    "Illusion", 
    "Imitate", 
    "Immune", 
    "Imprison", 
    "Increase", 
    "Intelligent", 
    "Itself", 
    "Lethal", 
    "Light", 
    "Limited", 
    "Mind", 
    "Move", 
    "Multiple", 
    "Natural", 
    "Normal", 
    "Open", 
    "Others", 
    "Paralyze", 
    "Physical", 
    "Pierce", 
    "Poison", 
    "Power", 
    "Protection", 
    "Proximity", 
    "Pursue", 
    "Ranged", 
    "Rechargeable", 
    "Resistance", 
    "SelfSufficient", 
    "Senses", 
    "Skill", 
    "Sleep", 
    "Speed", 
    "Spy", 
    "Stealth", 
    "Stop", 
    "Strange", 
    "Stun", 
    "Substance", 
    "Summon", 
    "Suppress", 
    "Swim", 
    "Take", 
    "Telepathy", 
    "Touch", 
    "Transform", 
    "Travel", 
    "Trick", 
    "Uncommon", 
    "Vision", 
    "Vulnerable", 
    "Weak", 
    "Weapon"
];

let creatureDescriptions = [
    "Aggressive", 
    "Agile", 
    "Air", 
    "Alien", 
    "Amorphous", 
    "Animal", 
    "Aquatic", 
    "Armored", 
    "Avian", 
    "Beast", 
    "Beautiful", 
    "Body", 
    "Bony", 
    "Carapace", 
    "Clawed", 
    "Clothed", 
    "Cold", 
    "Color", 
    "Composite", 
    "Constructed", 
    "Decayed", 
    "Defensive", 
    "Dripping", 
    "Elements", 
    "Exotic", 
    "Extra", 
    "Limbs", 
    "Fangs", 
    "Feminine", 
    "Feral", 
    "Filthy", 
    "Fire", 
    "Fungal", 
    "Furry", 
    "Gaunt", 
    "Glowing", 
    "Group", 
    "Growling", 
    "Healthy", 
    "Horns", 
    "Humanoid", 
    "Inscribed", 
    "Insectlike", 
    "Insubstantial", 
    "Intelligent", 
    "Intimidating", 
    "Large", 
    "Levitating", 
    "Limited", 
    "Liquid", 
    "Loud", 
    "Mammalian", 
    "Mandibles", 
    "Masculine", 
    "Mechanical", 
    "Metallic", 
    "Movement", 
    "Multiple", 
    "Mutant", 
    "Natural", 
    "Nature", 
    "Nightmarish", 
    "Object", 
    "Odorous", 
    "Passive", 
    "Plant", 
    "Reptilian", 
    "Robotic", 
    "Rooted", 
    "Rough", 
    "Shape", 
    "Shifting", 
    "Silent", 
    "Simple", 
    "Slender", 
    "Small", 
    "Solitary", 
    "Spiderlike", 
    "Spiked", 
    "Steaming", 
    "Sticky", 
    "Stinger", 
    "Strange", 
    "Strong", 
    "Supernatural", 
    "Tail", 
    "Tentacled", 
    "Tongue", 
    "Toothy", 
    "Transparent", 
    "Treelike", 
    "Twisted", 
    "Undead", 
    "Unnatural", 
    "Verbal", 
    "Warm", 
    "Weak", 
    "Weapon", 
    "Wings", 
    "Wooden", 
    "Wormish"
];

let powers = [
    "Absorb", 
    "Adversity", 
    "Alter", 
    "Animate", 
    "Assist", 
    "Attach", 
    "Attack", 
    "Block", 
    "Body", 
    "Change", 
    "Chemical", 
    "Cold", 
    "Colorful", 
    "Combat", 
    "Combine", 
    "Communicate", 
    "Control", 
    "Cosmetic", 
    "Create", 
    "Creature", 
    "Damage", 
    "Dark", 
    "Death", 
    "Deceive", 
    "Defense", 
    "Delay", 
    "Destroy", 
    "Detect", 
    "Dimensions", 
    "Diminish", 
    "Disrupt", 
    "Distance", 
    "Dominate", 
    "Duplicate", 
    "Electricity", 
    "Elements", 
    "Emission", 
    "Emotion", 
    "Enemies", 
    "Energy", 
    "Enhance", 
    "Environment", 
    "Explosion", 
    "Extra", 
    "Fire", 
    "Flight", 
    "Free", 
    "Friend", 
    "Harm", 
    "Heal", 
    "Heat", 
    "Help", 
    "Hide", 
    "Illusion", 
    "Imbue", 
    "Immunity", 
    "Increase", 
    "Information", 
    "Life", 
    "Light", 
    "Limb", 
    "Limited", 
    "Location", 
    "Magic", 
    "Major", 
    "Manipulate", 
    "Matter", 
    "Mental", 
    "Minor", 
    "Natural", 
    "Nature", 
    "Object", 
    "Others", 
    "Physical", 
    "Plants", 
    "Poison", 
    "Power", 
    "Protect", 
    "Radius", 
    "Ranged", 
    "Reflect", 
    "Repel", 
    "Resistance", 
    "Reveal", 
    "Self", 
    "Sense", 
    "Skill", 
    "Spirit", 
    "Stealth", 
    "Strange", 
    "Summon", 
    "Switch", 
    "Take", 
    "Technology", 
    "Time", 
    "Transform", 
    "Trap", 
    "Travel", 
    "Weapon", 
    "Weather"
];

let terrainDescriptors = [
    "Abandoned", 
    "Abundant", 
    "Activity", 
    "Advanced", 
    "Allies", 
    "Ancient", 
    "Animals", 
    "Atmosphere", 
    "Barren", 
    "Beautiful", 
    "Bizarre", 
    "Catastrophe", 
    "Chaotic", 
    "City", 
    "Civilization", 
    "Cliffs", 
    "Clouds", 
    "Cold", 
    "Colorful", 
    "Combative", 
    "Communicate", 
    "Conflict", 
    "Damaged", 
    "Danger", 
    "Defense", 
    "Desert", 
    "Dry", 
    "Dull", 
    "Elements", 
    "Empty", 
    "Energy", 
    "Enormous",
    "Fertile", 
    "Frightening", 
    "Habitable", 
    "Harsh", 
    "Hazy", 
    "Healthy", 
    "Helpful", 
    "Hostile", 
    "Hot", 
    "Intense", 
    "Interesting", 
    "Large", 
    "Lethal", 
    "Life", 
    "Lovely", 
    "Magnificent", 
    "Masses", 
    "Mechanical", 
    "Message", 
    "Mighty", 
    "Misfortune", 
    "Mountainous", 
    "Multiple", 
    "Mundane", 
    "Mysterious", 
    "Natural", 
    "Nature", 
    "Nondescript", 
    "Ocean", 
    "Odd", 
    "Peaceful", 
    "People", 
    "Plants", 
    "Populated", 
    "Powerful", 
    "Primitive", 
    "Rain", 
    "Rare", 
    "Remarkable", 
    "Resourceful", 
    "Riches", 
    "River", 
    "Rocky", 
    "Rough", 
    "Ruined", 
    "Ruins", 
    "Sandy", 
    "Scary", 
    "Simple", 
    "Small", 
    "Strange", 
    "Strong", 
    "Technology", 
    "Threatening", 
    "Toxic", 
    "Tranquil", 
    "Trees", 
    "Unusual", 
    "Valuable", 
    "Violent", 
    "Warm", 
    "Water", 
    "Weak", 
    "Weather", 
    "Wild", 
    "Windy", 
    "Wonders"
];

let smells = [
    "Acrid", 
    "Animal", 
    "Antiseptic", 
    "Aromatic", 
    "Artificial", 
    "Attractive", 
    "Bad", 
    "Bizarre", 
    "Burnt", 
    "Chemical", 
    "Clean", 
    "Comforting", 
    "Cooking", 
    "Decrepit", 
    "Delicious", 
    "Delightful", 
    "Dirty", 
    "Disagreeable", 
    "Disgusting", 
    "Dry", 
    "Dull", 
    "Earthy", 
    "Electrical", 
    "Evocative", 
    "Faded", 
    "Faint", 
    "Familiar", 
    "Fetid", 
    "Fishy", 
    "Floral", 
    "Food", 
    "Foul", 
    "Fragrant", 
    "Fresh", 
    "Fruity", 
    "Funky", 
    "Good", 
    "Grassy", 
    "Gratifying", 
    "Heady", 
    "Heavy", 
    "Herbal", 
    "Horrible", 
    "Humid", 
    "Industrial", 
    "Interesting", 
    "Intoxicating", 
    "Irritating", 
    "Lacking", 
    "Laden", 
    "Malodorous", 
    "Meaningful", 
    "Medicinal", 
    "Metallic", 
    "Mildew", 
    "Moist", 
    "Mossy", 
    "Musky", 
    "Musty", 
    "Mysterious", 
    "Natural", 
    "Nature", 
    "Nauseating", 
    "Normal", 
    "Odd", 
    "Odorless", 
    "Offensive", 
    "Overpowering", 
    "Perfumed", 
    "Pleasurable", 
    "Powerful", 
    "Pungent", 
    "Punishing", 
    "Putrid", 
    "Rancid", 
    "Reassuring", 
    "Reek", 
    "Rich", 
    "Ripe", 
    "Rot", 
    "Rotten", 
    "Savory", 
    "Smelly", 
    "Smokey", 
    "Sour", 
    "Stagnant", 
    "Stale", 
    "Stench", 
    "Stinging", 
    "Strange", 
    "Strong", 
    "Stuffy", 
    "Sulphuric", 
    "Sweet", 
    "Warm", 
    "Waste", 
    "Watery", 
    "Weak", 
    "Weather", 
    "Woody"
];

let terrainElements = [

]

let sizes = [
    "Tiny",
    "Small",
    "Medium",
    "Large",
    "Giant",
    "Hulkish",
    "Long",
    "Short",
    "Humanoid",
    "Dragonic",
    "Many",
    "Thick",
    "Thin",
    "Spindly",
    "Insect"
];

let wants = [
    "Food",
    "Peace",
    "Power"
]

let sounds = [
    "Activity", 
    "Alarm", 
    "Animal", 
    "Approach", 
    "Banging", 
    "Battle", 
    "Beep", 
    "Bell", 
    "Beseeching", 
    "Bizarre", 
    "Burning", 
    "Busy", 
    "Calm", 
    "Ceaseless", 
    "Celebrate", 
    "Chaotic", 
    "Cheerful", 
    "Clang", 
    "Combative", 
    "Communicate", 
    "Construction", 
    "Conversation", 
    "Crash", 
    "Creaking", 
    "Creepy", 
    "Cries", 
    "Damage", 
    "Danger", 
    "Disagreeable", 
    "Distant", 
    "Drip", 
    "Echo", 
    "Emotion", 
    "Energetic", 
    "Explosion", 
    "Familiar", 
    "Ferocious", 
    "Footsteps", 
    "Frantic", 
    "Frightening", 
    "Grinding", 
    "Growl", 
    "Hammering", 
    "Helpful", 
    "Imitate", 
    "Important", 
    "Indistinct", 
    "Industry", 
    "Information", 
    "Innocent", 
    "Intense", 
    "Interesting", 
    "Irritating", 
    "Loud", 
    "Machinery", 
    "Meaningful", 
    "Metallic", 
    "Muffled", 
    "Multiple", 
    "Music", 
    "Mysterious", 
    "Natural", 
    "Near", 
    "Noisy", 
    "Normal", 
    "Odd", 
    "Productivity", 
    "Pursuit", 
    "Quiet", 
    "Reassuring", 
    "Remarkable", 
    "Rip", 
    "Roar", 
    "Rumbling", 
    "Rustling", 
    "Scary", 
    "Scraping", 
    "Scratching", 
    "Simple", 
    "Sizzle", 
    "Slam", 
    "Slow", 
    "Soft", 
    "Start", 
    "Stop", 
    "Strange", 
    "Tapping", 
    "Technology", 
    "Threatening", 
    "Thud", 
    "Traffic", 
    "Tranquil", 
    "Uncertain", 
    "Warning", 
    "Water", 
    "Weather", 
    "Whirring", 
    "Whistle", 
    "Wild", 
    "Wind"
];

let objects = [
    "Bed",
    "Sign",
    "Food",
    "Hanger",
    "Glass",
    "Blanket",
    "Sponge",
    "Ring",
    "Floor",
    "Picture frame",
    "Flowers",
    "Button",
    "Shoes",
    "Magnet",
    "Keys",
    "Pillow",
    "Cookie jar",
    "Cork",
    "Paper",
    "Money",
    "Mirror",
    "Needle",
    "Chalk",
    "Screw",
    "Door",
    "Tomato",
    "Pants",
    "Playing card",
    "Mop",
    "Bottle cap",
    "Towel",
    "Piano",
    "Flowers",
    "Beef",
    "Bag",
    "Puddle",
    "Bracelet",
    "Fork",
    "Cup",
    "Shoe",
    "Spoon",
    "Sand paper",
    "Glasses",
    "Buckle",
    "Paint brush",
    "Bowl",
    "Nail",
    "Shirt",
    "Spoon", 
    "Pot", 
    "Blanket", 
    "Belt", 
    "Knife", 
    "Bowl", 
    "Shirt", 
    "Mug", 
    "Hat", 
    "Ring", 
    "Tunic", 
    "Comb", 
    "Shoes", 
    "Cloth", 
    "Hearth", 
    "Mirror", 
    "Chest", 
    "Trousers", 
    "Quill", 
    "Paper", 
    "Beads", 
    "Nails", 
    "Brooch", 
    "Socks", 
    "Stool", 
    "Tiles", 
    "Spindle", 
    "Cap", 
    "Pouch", 
    "Horseshoe", 
    "Scarf", 
    "Mortar", 
    "Candlestick", 
    "Rake", 
    "Apron", 
    "Gloves", 
    "Cart", 
    "Candle", 
    "Chisel", 
    "Cloak", 
    "Plow", 
    "Sack", 
    "Bridle", 
    "Sharpener", 
    "Key", 
    "Bucket", 
    "Jug", 
    "Scabbard", 
    "Pot", 
    "Hat", 
    "Flute", 
    "Blanket", 
    "Book", 
    "Cover", 
    "Coin", 
    "Ladder", 
    "Lamp", 
    "Saw", 
    "Mittens", 
    "Ax", 
    "Tablecloth", 
    "Belt", 
    "Pouch", 
    "Spoon", 
    "Rack", 
    "Bowl", 
    "Hammer", 
    "Breeches", 
    "Cane", 
    "Napkin", 
    "Saddle", 
    "Needle", 
    "Shield", 
    "Roof", 
    "Pickaxe", 
    "Leggings", 
    "Loom", 
    "Tunic", 
    "Flask", 
    "Weight", 
    "Pin", 
    "Fence", 
    "Pipe", 
    "Chain", 
    "Hood", 
    "Rope", 
    "Belt", 
    "Buckle", 
    "Barrel", 
    "Pot", 
    "Lid", 
    "Tongs", 
    "Cushion", 
    "Mallet", 
    "Undergarment", 
    "Strap", 
    "Arrowhead", 
    "Bracelet", 
    "Figure", 
    "Hoe", 
    "Shawl", 
    "Paddle", 
    "Map",
    "Weapon",
    "String",
    "Gloves",
    "Helmet",
    "Boots"
];

let damage = [
    "Good as new",
    "Slightly used",
    "Streaked",
    "Damaged",
    "Old",
    "New",
    "Dirty",
    "Shined",
    "Rugged",
    "Beaten",
    "Jagged",
    "Rough",
    "Majestic",
    "Time-worn",
    "Perfect"
];

let enchantments = [
    "Fiery", 
    "Invisible", 
    "Healing", 
    "Levitative", 
    "Teleportative", 
    "Shielded", 
    "Electrified", 
    "Frosty", 
    "Telekinetic", 
    "Shapeshifting", 
    "Mindbending", 
    "Illusory", 
    "Charming", 
    "Silent", 
    "Floating", 
    "Strengthened", 
    "Swift", 
    "Nightseeing", 
    "Waterbreathing", 
    "Temporal", 
    "Energetic", 
    "Cursed", 
    "Summoned", 
    "Glowing", 
    "Protective", 
    "Enchanted", 
    "Bewitched", 
    "Mystical", 
    "Ensnaring", 
    "Ethereal", 
    "Empowering", 
    "Amplified", 
    "Rejuvenating", 
    "Magnetic", 
    "Luminous", 
    "Arcane", 
    "Elemental", 
    "Bound", 
    "Rebounding", 
    "Phantasmal", 
    "Blessed", 
    "Hexed", 
    "Hypnotic", 
    "Alchemical", 
    "Celestial", 
    "Shadowed", 
    "Amplified", 
    "Entrancing", 
    "Spellbound", 
    "Sorcerous", 
    "Veiled", 
    "Shimmering", 
    "Phased", 
    "Invigorating", 
    "Sanctified", 
    "Runic", 
    "Spirited", 
    "Enveloping", 
    "Spectral", 
    "Fortifying", 
    "Dazzling", 
    "Transmuted", 
    "Charmed", 
    "Eldritch", 
    "Bewildering", 
    "Clairvoyant", 
    "Enkindled", 
    "Glamoured", 
    "Enlivening", 
    "Transcendent", 
    "Manainfused", 
    "Enshadowed", 
    "Mystic", 
    "Alacritous", 
    "Iridescent", 
    "Hexing", 
    "Warded", 
    "Invulnerable", 
    "Omnipotent", 
    "Wraithlike", 
    "Conjured", 
    "Aetheric", 
    "Animated", 
    "Enlivened", 
    "Phylacteric", 
    "Glistening", 
    "Ensorcelled", 
    "Sealed", 
    "Vibrant", 
    "Fated", 
    "Arcaneinfused", 
    "Feral", 
    "Transfixing", 
    "Ageless", 
    "Divined", 
    "Illustrious", 
    "Wondrous", 
    "Whispering", 
    "Prismatic", 
    "Soulbound"
];

let damages = [
    "Cracked", 
    "Dented", 
    "Chipped", 
    "Tarnished", 
    "Faded", 
    "Splintered", 
    "Warped", 
    "Stained", 
    "Frayed", 
    "Rusted", 
    "Brittle", 
    "Corroded", 
    "Pitted", 
    "Marred", 
    "Weakened", 
    "Scorched", 
    "Blighted", 
    "Cursed", 
    "Hexed", 
    "Blighted", 
    "Tainted", 
    "Blighted", 
    "Haunted", 
    "Withered", 
    "Poisoned", 
    "Shadowed", 
    "Sapped", 
    "Blighted", 
    "Hindered", 
    "Enfeebled", 
    "Decayed", 
    "Ruined", 
    "Vexed", 
    "Tattered", 
    "Besmirched", 
    "Blunted", 
    "Fractured", 
    "Defiled", 
    "Twisted", 
    "Dimmed", 
    "Harmful", 
    "Ailing", 
    "Blemished", 
    "Distorted", 
    "Corrupt", 
    "Sickly", 
    "Infected", 
    "Distressed", 
    "Infested", 
    "Damaged", 
    "Hindered", 
    "Cursed", 
    "Spoiled", 
    "Contaminated", 
    "Jinxed", 
    "Unlucky", 
    "Maligned", 
    "Vandalized", 
    "Doomed", 
    "Inhibited", 
    "Lethargic", 
    "Wounded", 
    "Polluted", 
    "Bewitched", 
    "Plagued", 
    "Smudged", 
    "Burnt", 
    "Wrecked", 
    "Mangled", 
    "Grimy", 
    "Strained", 
    "Ailed", 
    "Infirm", 
    "Ruined", 
    "Blasted", 
    "Sinister", 
    "Malevolent", 
    "Evil", 
    "Degraded", 
    "Noxious", 
    "Malodorous", 
    "Spiteful", 
    "Malformed", 
    "Mangy", 
    "Crippled", 
    "Defective", 
    "Toxified", 
    "Tarnished", 
    "Damaged", 
    "Accursed", 
    "Scathed", 
    "Wracked", 
    "Blasphemous", 
    "Polluted", 
    "Poisonous", 
    "Despoiled", 
    "Begrimed", 
    "Sullied", 
    "Rotted", 
    "Worn",
    "Wet",
    "Rotten",
    "Grimy",
    "Soaked",
    "Tiny",
    "Threadbare",
    "Janky"
];