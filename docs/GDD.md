# tobal — Game Design Document
### Version 1.0 | Compiled from founder Q&A

---

## 1. Concept & Vision

tobal is a sandbox political strategy game where the player assumes leadership of a real-world country starting in the year 2000 and steers it — or ruins it — across decades of simulated history. The core fantasy is entirely player-defined: you can be a principled statesman, a ruthless empire builder, or a morally grey survivor who does whatever it takes. The game has no win condition. You play until you are removed from power, the world ends in nuclear fire, or you conquer it entirely.

The closest spiritual references are Football Manager (UI language, depth-without-overwhelm), Crusader Kings III (personal leader relationships, dynastic intrigue), and Democracy 4 (policy simulation). Nation State sits at the intersection of all three, with an AI layer powering population reactions, media coverage, and world leader behaviour.

---

## 2. Core Design Pillars

1. **Player-defined morality.** The game never tells you what kind of leader to be. Every system — corruption, media, espionage, war — can be used for good or evil.
2. **A living world.** Other nations pursue their own agendas without the player's involvement. The map looks genuinely different by 2030 depending on what everyone has done.
3. **Legible complexity.** Every system — even supply chains and currency — must be understandable at a glance. Depth is there for those who want it; the surface is always clean.
4. **History as a loose script.** Real events fire on approximate real dates but with randomised intensity and timing. Your actions can prevent, accelerate, or radically alter them.
5. **Shared consequences.** In async multiplayer, players' actions ripple into each other's worlds. The history one player writes becomes the starting conditions another inherits.

---

## 3. Country Selection & Difficulty

- **120+ countries** available at game start, all based on real-world 2000-era data.
- Difficulty is an emergent property of each country's real conditions: economic strength, political stability, geopolitical pressures, active conflicts, debt levels, and population happiness.
- **Difficulty scale (1–5):**
  - 1 — Very Easy (Switzerland, Norway, Iceland): wealthy, stable, high-trust societies. Governing is fine-tuning.
  - 2 — Easy (Canada, Germany, Australia): functional democracies with manageable tensions.
  - 3 — Medium (USA, France, Brazil, India): complex coalition politics, inequality, or global responsibility.
  - 4 — Hard (Russia, China, Turkey, Pakistan): authoritarian pressures, sanctions, ethnic conflict, or economic fragility.
  - 5 — Very Hard (Venezuela, Afghanistan, Somalia, North Korea): near-failed states, sanctions, famine risk, active insurgencies.
- All country stats (GDP, approval, stability, factions, religion depth, military strength, diplomatic relations) are seeded from real 2000 data.

---

## 4. Coming to Power

How the player takes office depends on the country type:

| Government type | Path to power |
|---|---|
| Liberal democracy | Election campaign — pick party, run on a platform, win votes |
| Flawed democracy | Election campaign, but rigging is an available (risky) option |
| Single-party state | Appointed by the party — begin with internal party politics already in play |
| Military junta | Start as the general who just seized power |
| Absolute monarchy / theocracy | Inherit or ascend — legitimacy comes from religion or bloodline |
| **Unlockable after first run** | Rebel leader, warlord, coup plotter — non-state paths to seizing power |

Election campaigns (where applicable) involve: choosing a party, setting out a platform, managing a campaign budget, doing media appearances, and responding to opponent attacks. Your starting approval and faction standings reflect your campaign promises — break them and factions remember.

---

## 5. The Leader Character

Players build a personal leader at the start of each run:

- **Name and portrait** (text-based portrait, stylised illustration style)
- **Trait points system** — spend a fixed pool of points across traits such as:
  - Charisma (approval bonuses, diplomacy effectiveness)
  - Economic acumen (GDP growth modifiers, budget efficiency)
  - Military strategy (war outcome modifiers, coup resistance)
  - Corruption resistance (how much your government leaks money without you noticing)
  - Diplomatic charm (relationship-building speed with foreign leaders)
  - Ideological conviction (how fast you can shift your country's ideology)
- **Party selection** — parties are fictional but recognisable parodies of real parties in each country. In single-party states, only one party exists. Your party determines your starting ideology and which factions begin loyal to you.
- **Starting ideology** is inherited from your party. Over time, your decisions naturally drift the country's political centre — left, right, authoritarian, libertarian, theocratic, corporate, Marxist. The world eventually labels you based on where you land, not where you started.

---

## 6. Population & Factions

The population is modelled as a set of **factions**, each with their own approval rating, demands, and capacity to cause trouble:

| Faction | What they want | How they act out |
|---|---|---|
| Working class | Jobs, wages, housing, welfare | Strikes, protests, riots |
| Middle class | Low taxes, stability, rule of law | Voter swings, brain drain |
| Business & oligarchs | Low corporate tax, deregulation, contracts | Capital flight, funding your rivals |
| Military | Defence spending, respect, autonomy | Coup risk if ignored |
| Religious institutions | Moral laws, funding, political influence | Fatwa, excommunication, mobilised voters |
| Youth | Education, jobs, civil liberties, climate | Social media movements, protests |
| Ethnic/regional minorities | Representation, autonomy, language rights | Separatist movements |
| Press & intelligentsia | Press freedom, academic funding | Investigative exposés, international embarrassment |

Faction approval feeds into your overall approval rating with a weighted average. Factions can be appeased, suppressed, co-opted, or deliberately inflamed against each other.

Regional populations also exist (urban vs rural, north vs south, etc.) for countries where this is historically significant.

---

## 7. Cabinet, Parliament & Internal Politics

- **Cabinet ministers** are appointed by the player and have their own stats: competence, loyalty, ambition, and corruption tendency.
  - A highly competent but disloyal finance minister may leak budget details to the opposition or position themselves to replace you.
  - Ministers can resign in protest, be sacked, or become public scandals.
- **Parliament/legislature** (in democracies) can block, amend, or pass laws. You need to manage coalition arithmetic or build a majority.
- **Internal party rivals** exist from day one. They watch your approval rating and will mount leadership challenges if you appear weak.
- In authoritarian systems, the equivalent is a **politburo, junta council, or royal court** — same dynamics, different aesthetics.
- **Purges** are available in authoritarian playthroughs — remove rivals — but come with stability and international reputation costs.

---

## 8. Law-Making

Three mechanisms exist depending on the type of legislation:

1. **Free-text policy entry** — type any law in plain English. The AI evaluates it against the country's context, faction landscape, and current ideology and returns: faction reactions, approval change, treasury impact, economic effect, and an AI-generated news headline. This is the primary creative tool.

2. **Policy tree** — a structured menu of unlockable reforms grouped by category (economic, social, constitutional, environmental, military). Some laws are locked until prerequisites are met (e.g. you cannot nationalise an industry before passing an enabling act).

3. **Binary approve/reject** — parliament or advisors table a law and you approve or block it. Used for crisis legislation, opposition bills, and international treaty ratification.

All enacted laws persist in a living statute book. Laws can be repealed, amended, or quietly ignored (with corruption cost).

---

## 9. Economy

The economy operates on three visible layers — simple enough to scan, deep enough to nerd out on:

**Layer 1 — Dashboard (always visible)**
GDP per capita, unemployment rate, inflation, national debt, trade balance, treasury balance.

**Layer 2 — Sectors**
Oil & gas, agriculture, manufacturing, technology, financial services, tourism. Each sector has output, employment share, and investment level. Neglect a sector and it shrinks. Over-invest and you crowd out others.

**Layer 3 — Full simulation (accessible via deep-dive panels)**
Supply chains (key imports/exports, vulnerabilities), currency strength and exchange rates, foreign direct investment flows, sanctions impact modelling, black market economy (relevant in corrupt or sanctioned states).

**Budget system:**
Sliders for tax rates (income, corporate, VAT, trade tariffs) and spending allocations (healthcare, military, education, infrastructure, welfare, environment, debt servicing). The balance sheet updates in real time. Deficits accumulate as national debt; surpluses can be invested into a sovereign wealth fund.

---

## 10. Trade

- **Bilateral trade agreements** — negotiate terms with individual countries. AI leaders accept or counter-offer based on their economic needs and relationship with you.
- **Trade blocs** — join or leave bodies like the EU single market, ASEAN, MERCOSUR, African Union trade zones. Membership has rules you must follow or face expulsion.
- **Sanctions** — impose economic sanctions on other countries or be sanctioned by them/the UN. Sanctions have a real GDP drag and can be circumvented through black market trade (with corruption cost).
- **Tariffs & protectionism** — raise tariffs to protect domestic industry; face retaliatory tariffs from partners.
- **Resource dependency** — countries with oil, rare earth minerals, or food surpluses have strategic leverage. You can weaponise yours or become dangerously dependent on another country's.

---

## 11. Diplomacy & World Leaders

Other world leaders are fully AI-simulated and act independently:

- They sign deals, form alliances, go to war, and interfere in your politics without your involvement.
- Each leader has a **relationship score** with you, modified by your actions, shared interests, and personal interactions.
- **Personal diplomacy (Crusader Kings-style):**
  - Hold bilateral summits, exchange state visits, send gifts or ultimatums.
  - Build genuine friendships with foreign leaders — they are more likely to support you in the UN, warn you of plots, or share intelligence.
  - Romantic relationships and marriage between leaders are possible (where constitutionally permitted), creating powerful political alliances — and complicated divorces.
- **International bodies:**
  - UN: can pass resolutions against you, authorise military interventions, or validate your legitimacy. You can lobby member states for votes.
  - EU/AU/NATO equivalents: membership comes with rules, benefits, and political constraints. You can be expelled.
  - ICC: commit enough war crimes and you may face an international arrest warrant.

---

## 12. Military & Warfare

**Military strength** is an abstracted score built from: defence budget (% of GDP), troop count, equipment modernity, morale, and officer loyalty.

**Warfare is auto-resolved** with meaningful modifiers:
- Your military strength vs. enemy strength
- Terrain, alliances, supply lines (abstracted)
- International support or condemnation
- Morale of your population (unpopular wars drain approval fast)

**War options:**
- Declare war (requires justification or face UN condemnation)
- Covert military support to rebels in another country
- UN peacekeeping deployment (soft power gain)
- Proxy wars — fund another faction to fight your enemy

**Nuclear weapons:**
- Acquiring nukes requires a secret programme, significant treasury spend, and carries discovery risk (sanctions, pre-emptive strike threat).
- Deterrence is the primary use — other nuclear states will not invade you.
- Launch is possible but triggers MAD calculations. If multiple nuclear states are involved, global nuclear exchange is a real end state — everyone loses.
- Nuclear treaties (NPT, START equivalents) can be signed, broken, or used as diplomatic leverage.
- You can be accused of nuclear development even if innocent — a powerful covert ops tool for rivals.

---

## 13. Espionage & Covert Operations

A full shadow game runs parallel to official diplomacy:

- **Offensive operations:** fund opposition parties in rival countries, assassinate foreign leaders (high risk, high reward), run disinformation campaigns, interfere in elections, steal technology, sabotage infrastructure.
- **Defensive operations:** counter-intelligence, protect cabinet members, detect foreign interference, run loyalty checks on military officers.
- **Other AI leaders do all of this to you.** You may discover a foreign power has been funding your opposition, or that your finance minister is on another country's payroll.
- A **covert ops budget** is set separately from the main budget and is deniable — it doesn't appear in public accounts (unless a journalist finds it).

---

## 14. Corruption System

Corruption is a parallel economy you can fight, manage, or exploit:

- **Background corruption level** — every country starts with a base corruption level. It drains treasury and reduces government effectiveness.
- **Playing it straight** — invest in anti-corruption agencies, prosecute officials, pass transparency laws. Approval goes up with reformist factions; business oligarchs and corrupt officials push back.
- **Playing it corrupt** — siphon state funds, take bribes from oligarchs for favourable contracts, rig procurement, accept foreign backhanders. Treasury gets a personal cut; overall state effectiveness drops.
- **Election rigging** — available in weak democracies and authoritarian states. If discovered, causes international sanctions and domestic unrest.
- **Kleptocracy path** — build a personal fortune stashed in foreign accounts. If you're ousted, you have a golden parachute. But if the ICC catches up with you, assets can be frozen.

---

## 15. Media, Propaganda & Social Media

**Press freedom slider** — from fully free press to complete state media monopoly. Where you sit determines the baseline tone of coverage.

**Specific tools:**
- Fund state broadcaster — shape the official narrative
- Suppress specific outlets — legal threats, licence revocation, or (in authoritarian runs) imprisonment of journalists
- Plant stories — pay friendly outlets to run favourable coverage or smear opponents
- Social media sentiment (unlocked as a mechanic from ~2004 in-game) — a separate approval layer reflecting online discourse, influenceable through astroturfing campaigns or susceptible to viral scandals
- **Journalists investigate.** A free press will dig. Corruption, war crimes, secret budgets, affairs with foreign leaders — all can be exposed. Suppressing a story costs press freedom points and risks the Streisand effect.

**The newspaper front page** is the game's primary dramatic visual — AI-generated headlines and layout appear after major events, elections, wars, and scandals.

---

## 16. Crises & World Events

Events fire on a **semi-historical timeline** — real events happen near their real dates but with randomised intensity and slight timing variance so no run is perfectly predictable.

**Confirmed historical events on the timeline:**
- 9/11 attacks (Sept 2001, ±2 months)
- War on Terror ripple effects (2001–2010)
- 2003 Iraq invasion (affects all countries' diplomacy)
- 2008 global financial crash (Oct 2008, ±3 months)
- Arab Spring (2010–2012, affects Middle East/North Africa countries)
- Eurozone crisis (2010–2015, affects EU members)
- COVID-19 pandemic (early 2020, ±4 months)
- Climate tipping point events (escalating from 2015 onward)

**Your actions create chain reactions.** Go to war early → regional destabilisation → refugee crisis → faction unrest in your country. Suppress a pandemic → economic bounce → later international accusation of bioweapon development. Every major decision has a second and third order effect.

**Random crisis events** also fire independently: earthquakes, droughts, floods, terrorist attacks, financial shocks, assassination attempts, coup plots, and tech disruptions.

---

## 17. Climate System

Climate change is a slow-burn existential mechanic:

- **Carbon output** is a function of your energy policy, industrial sector, and transport infrastructure.
- **Paris Agreement equivalent** — you can sign, ignore, or withdraw. Signing constrains your industrial growth; withdrawal tanks your international reputation.
- **Consequences escalate over time:** more frequent extreme weather events, crop failures, coastal flooding (affects island nations and low-lying countries most), climate refugee flows from affected neighbours.
- **Green transition:** invest in renewables, phase out fossil fuels, build nuclear power — each has treasury costs, faction reactions (business vs environment), and long-term payoffs.
- **Climate denial path:** ignore it for short-term economic gain. The consequences arrive regardless, and are worse.
- Countries that did not cause the problem but suffer most (small island states, sub-Saharan Africa) can bring claims through international bodies.

---

## 18. Pandemics & Natural Disasters

- Pandemics fire as major world events. Your **health spending and emergency preparedness** determines how hard it hits your population and economy.
- **Response options:** lockdown (kills economy, saves lives), open up (kills people, saves economy), vaccine programme (treasury cost, approval from health-focused factions), information suppression (short term stability, long term risk of bioweapon accusation by rivals).
- Natural disasters (earthquakes, floods, hurricanes) hit countries based on their real-world geographic risk. Your infrastructure spending determines recovery speed.
- **International aid** can be requested or offered — both have diplomatic value.

---

## 19. Religion

Depth scales with country context:

- **Secular states:** religion is a minor faction with modest influence. Keep them from feeling disrespected and they are a non-issue.
- **Mixed states:** religious institutions are a significant faction. Moral legislation (abortion, LGBT rights, alcohol, blasphemy laws) requires careful management.
- **Theocracies (Iran, Saudi Arabia, Vatican equivalent):** religion is the operating system of the state. Laws must pass religious review. The supreme religious authority may outrank you politically. You can attempt to gradually secularise — but this is slow, risky, and potentially fatal.
- Religious tension between faiths within a country (e.g. Hindu-Muslim in India, Sunni-Shia in the Middle East) is modelled as an inter-faction relationship that can be inflamed or calmed by your policies.

---

## 20. Territory & the Living Map

- Borders are fully dynamic. Wars, diplomacy, and separatist movements reshape the map over decades.
- **Territorial actions:** annex (full integration), occupy (control without annexation), create puppet state (nominally independent, actually yours), grant independence (goodwill move or de-escalation), recognise or refuse to recognise breakaway regions.
- **Separatist movements** exist in countries with historically restless regions. Neglect minority rights or regional investment and they grow. You can negotiate autonomy deals, offer referendums, or suppress them militarily.
- **Renaming:** conquer a country and you can rename it and its capital. Over a long enough run, the map can look completely unrecognisable from the real 2000 starting point.
- **New countries** can be born from separatist movements you trigger in other states — a covert ops tool with long-term geopolitical consequences.

---

## 21. Technology Progression

The game models the advancing tech era through event unlocks rather than a research tree:

| Era | Unlocks |
|---|---|
| 2000–2004 | Mobile phones become mainstream. Dot-com bust event fires. |
| 2004–2008 | Social media emerges as a political mechanic. YouTube/blogging affects press freedom dynamics. |
| 2008–2012 | Smartphones mainstream. Arab Spring partly driven by social media mechanic. |
| 2012–2016 | Big data, surveillance capitalism. You can build a surveillance state using tech investment. |
| 2016–2020 | Disinformation as a weaponised tool. Deepfakes available as a covert ops option. |
| 2020+ | AI automation affects employment (faction unrest in working class). Renewable energy becomes cost-competitive. |

No space mechanics are in scope for v1.

---

## 22. Losing & Returning to Power

Removal from power is not always game over:

| How you lost power | What happens next |
|---|---|
| Lost election | Play as opposition leader. Build support, expose government failures, win next election. |
| Vote of no confidence | Internal party battle. Win the leadership contest or go to backbenches. |
| Military coup | Exile. Can attempt return via foreign backing, popular uprising, or covert ops. |
| Assassination attempt survived | Medical recovery period. Faction loyalty tested. Potential sympathy surge. |
| Assassination — fatal | Game over. Legacy screen shows what you built. |
| Nuclear annihilation | Game over. Everyone loses. |
| Revolution/popular uprising | Flee the country. Exile gameplay — plot return or live in infamy. |

---

## 23. Legacy System

When your era ends:

- **The world remembers.** Laws you passed remain on the statute books. Infrastructure you built exists. Countries you annexed stay annexed (unless a future leader reverses it).
- **Historical record** — a newspaper-front-page-style retrospective of your leadership is generated, highlighting your biggest decisions and their consequences.
- **Future AI leaders inherit your world.** If you ran your country into the ground, the next leader starts in a crisis. If you built a superpower, your successor starts dominant.
- **In async multiplayer**, your legacy is literally the world state other players continue playing in.

---

## 24. Async Multiplayer & Shared World

- Players each choose a different country and play on the same shared world instance.
- Time advances for all players simultaneously (e.g. one real-world day = one in-game month, configurable).
- **Actions ripple.** If your friend playing the USA imposes sanctions on your Iran playthrough, your economy takes a real hit. If you declare war on their ally, they have to decide whether to intervene.
- **Diplomacy between players** — direct negotiation through the in-game diplomacy interface. You can make deals, form alliances, threaten, betray.
- **Async means no one needs to be online simultaneously.** You make your decisions, they take effect, the world updates.
- **Shared world history** — a world timeline feed shows what all players have done, framed as news headlines. Your community writes history together.

---

## 25. Progression & Unlocks

| Milestone | Unlock |
|---|---|
| Complete first full playthrough (any country) | Non-state actor paths: rebel leader, warlord, coup plotter |
| Reach 2020 in-game | Scenario editor |
| Achieve nuclear superpower status | Advanced nuclear diplomacy tree |
| Be removed from power and return | "Comeback" achievement + exile gameplay mechanics |
| Lead a country for 30+ in-game years | Legacy hall of fame entry |

---

## 26. Visual Identity

Nation State uses a **minimal but distinctive** visual language:

- **Flags** are the primary country identity — always prominent, always accurate.
- **The newspaper front page** is the game's cinematic moment — AI-generated layout fires after major events: elections, wars, scandals, natural disasters. Feels like opening a real paper.
- **Charts and graphs** carry data — approval over time, GDP trajectory, faction support bars. Clean, readable, FM-style.
- **Leader portraits** — stylised flat illustration, not photorealistic. Enough character to feel personal.
- **The world map** — political boundaries, colour-coded by your relationships (allies green, enemies red, neutral grey). Updates dynamically as borders change.
- **No 3D. No animations beyond transitions.** The drama is in the words, numbers, and newspaper headlines.

---

## 27. AI Layer

The game's AI serves three distinct roles:

1. **Population reaction engine** — evaluates every player policy decision in the context of the country, current factions, and ideology, and returns: approval change per faction, treasury impact, and a news headline. Powered by LLM API calls (Claude).

2. **World leader AI** — other countries pursue independent foreign policies. Alliances form, wars happen, economies grow or collapse without player involvement. Rule-based simulation with LLM flavour for leader dialogue and negotiation responses.

3. **Media generation** — every few in-game months, AI generates contextually accurate news coverage reflecting your approval rating, recent decisions, and world events. Different outlets have different political leanings. In late-game authoritarian runs, state media praises you; foreign outlets condemn you.

---

## 28. Onboarding

- An **in-game advisor** (stylised as your chief of staff) introduces mechanics as they become relevant.
- New players are gently nudged toward easy-difficulty countries on first run.
- Advisor explains each new screen the first time it is visited.
- No wall-of-text tutorial. Mechanics reveal themselves through play.
- **Advisor has a personality** — can be loyal, cynical, or self-interested depending on which party you run under. A parody of real political chief-of-staff dynamics.

---

## 29. Platforms & Technical Approach

- **Primary:** Web browser (React, responsive)
- **Secondary:** Desktop app (Electron wrapper of the web app)
- **Free to play.** No monetisation in v1.
- **AI:** Anthropic Claude API for population reactions, policy evaluation, news generation, and leader dialogue.
- **Save system:** Cloud-saved per user account. Async multiplayer state persisted server-side.
- **Starting era:** Year 2000. No defined end year — play until nuclear annihilation, world conquest, or your own death.

---

## 30. Phased Development Roadmap

**Phase 1 — Core loop (current prototype)**
Country selection, basic stats, policy entry with AI reaction, news feed, budget sliders, dashboard.

**Phase 2 — Political simulation**
Factions, cabinet, parliament, elections, party system, ideology drift, corruption system.

**Phase 3 — World simulation**
AI world leaders, diplomacy, trade, sanctions, alliances, UN, world map.

**Phase 4 — Conflict & covert ops**
War declaration and auto-resolve, espionage, nuclear programme, proxy wars.

**Phase 5 — Living world**
Historical events timeline, climate system, pandemic system, technology era unlocks, dynamic borders.

**Phase 6 — Leader & legacy**
Character creation with traits, leader relationships (CK3-style), succession, legacy system.

**Phase 7 — Multiplayer**
Async shared world, player diplomacy, shared history feed.

**Phase 8 — Unlockables**
Non-state actor paths, scenario editor, alternate history modes.

---

*tobal v1.0 — compiled June 2026*
