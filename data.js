Object.values = function(obj) {
    return Object.keys(obj).map(function(key) {
        return obj[key];
    });
}
function f() {
    return [].slice.call(arguments).reduce(function(object, value) {
        var key = value.replace(/\s&\s/,"_").replace(/[\s-]/g,"_").replace(/'/,'').toLowerCase();
        object[key] = value;
        return object;
    }, {});
}

var c = f("African-Americans", "Anti-Fascism", "Anti-Racism", "Anti-Trump", "Civil Rights", "Civil Society", "Community Organizing", "Congress", "Elections", "Environment", "Gun Violence", "Immigration & Refugees", "Islam", "Judaism", "LGBTQ", "Media", "News", "Politics", "Privacy", "Religious", "Science", "Seattle", "Security", "Strategy", "Trump", "Voting Rights", "Weeklies", "Women's Rights");

var t = f("App", "Article", "Boycott", "Calendar", "Campaign", "Mailing List", "News", "Organization", "Podcast", "Resource");

var date = "2017-01-16";

var data = [
{title: "#FightTrump", url: "https://fighttrump.co/", type: t.resource, cat: [c.weeklies], info: "“Sign up to help #FightTrump every day, week, or month.”"}
,{title: "#GrabYourWallet", url: "https://grabyourwallet.org/", type: t.boycott, cat: [c.anti_trump], info: "Boycott of Trump products started after tapes of him bragging of sexual assault surfaced. "}
,{title: "3 ways you can change the conversation about immigration on Facebook.", author: "Carly Goodman", pub: "AFSC Blog",url: "https://www.afsc.org/blogs/media-uncovered/3-ways-change-conversation-immigration-facebook", date: "18 Nov 2016", type: t.article, cat: [c.immigration_refugees], info: "Good explanation of arguments that can be made to common criticisms and misconceptions about immigration issues."}
,{title: "43rd District Democrats", url: "http://43rddems.ngpvanhost.com/", type: t.organization, cat: [c.congress],info: "The fighting 43rd."}
,{title: "5 Totally Ridiculous Republican Reversals in 2016 They’re Hoping You’ll Forget All About.", url: "http://www.alternet.org/right-wing/5-totally-ridiculous-republican-reversals-2016-theyre-hoping-youll-forget-all-about", author: "Jonah Allon", pub: "AlterNet", date: "27 Dec 2016", type: t.article, cat: [c.trump]}
,{title: "A guide to rebuilding the Democratic Party, from the ground up.", url: "http://www.vox.com/the-big-idea/2017/1/5/14176156/rebuild-democratic-party-dnc-strategy", author: "Theda Skicpol", pub: "Vos", date: "5 Jan 2017", type: t.article, cat: [c.elections]}
,{title: "A Journalist’s Manual: Field Guide to Anti-Muslim Extremists.", url: "https://www.splcenter.org/20161025/journalists-manual-field-guide-anti-muslim-extremists", type: t.article, cat: [c.anti_racism, c.islam], author: "Southern Poverty Law Center", date: "25 Oct 2016", info: "Overview from Southern Poverty Law Center."}
,{title: "A message to my doomed colleagues in the American media.", url: "https://medium.com/@alexey__kovalev/message-to-american-media-from-russia-6e2e76eeae77", author: "Alexey Kovalev", pub: "Medium.com", date: "12 Jan 2017", type: t.article, cat: [c.media], info: "A Russian reporter describes what will happen to press conferences in the US (they’ll become like Putin’s, which are pure propaganda circuses). The answer: investigative journalism, forget the press pools."}
,{title: "ACLU Mobile Justice App", url: "https://www.aclu.org/feature/aclu-apps-record-police-conduct", type: t.app, cat: [c.security], info: "Not available in all states, however."}
,{title: "American Bridge PAC", url: "https://americanbridgepac.org/", type: t.resource, cat: [c.congress], info: "Plenty of information on Republican malfeasance."}
,{title: "American Civil Liberties Union", url: "https://www.aclu.org/", type: t.organization, cat: [c.civil_rights]}
,{title: "American Friends Service Committee", url: "https://www.afsc.org/", type: t.organization, cat: [c.religious], info: "They have a blog and a mailing list, but not sure how much is happening here. However I did get a good article or two from their blog."}
,{title: "Anti-Defamation League", url: "http://www.adl.org/", type: t.organization, cat: [c.anti_racism, c.judaism], info: "The ADL “fights anti-Semitism and all forms of bigotry, defends democratic ideals and protects civil rights for all.”"}
,{title: "Café to Go: A Quick Reference Guide for hosting World Café", url: "http://www.theworldcafe.com/wp-content/uploads/2015/07/Cafe-To-Go-Revised.pdf", author: "The World Café", type: t.article, cat: [c.community_organizing], date: "2015", info: "Many community organizing meetings have followed some variant of the process described here in some depth, to find collective ideas and consensus through conversations."}
,{title: "Call My Congress", url: "https://www.callmycongress.com/", type: t.resource, cat: [c.congress], info: "Another site to get contact information for your legislators."}
,{title: "Call The Halls Guide", url: "https://gumroad.com/l/callthehallsguide", type: t.resource, cat: [c.congress], info: "A PDF guide to lobbying Congress (looks like you need to pay for it, you can pay $0) if you want or need."}
,{title: "Call to Action", url: "http://usecalltoaction.com/", type: t.resource, cat: [c.congress], info: "Enter your address, get the telephone number of your congressional representative."}
,{title: "Campaign Zero", url: "http://www.joincampaignzero.org/", type: t.organization, cat: [c.anti_racism], info: "Black Lives Matter/police accountability."}
,{title: "Cascadia Climate Action Calendar", url: "http://cascadiaclimateaction.org/", type: t.calendar, cat: [c.environment], info: "The best calendar in Seattle for climate change events."}
,{title: "Catalytic Community Calendar", url: "http://www.catalyticcommunity.org/calendar/", type: t.calendar, cat: [c.seattle],info: "Another good calendar for events in Seattle."}
,{title: "Church Council of Greater Seattle", url: "http://thechurchcouncil.org/", type: t.organization, cat: [c.religious], info: "“The Church Council of Greater Seattle convenes and catalyzes communities and people of faith to bring our spiritual commitments of love and reconciliation, peace and justice into the public square. We aspire together to weave a world of justice through right and equitable relationships with one another.”"}
,{title: "Claiming mandate, GOP Congress lays plans to propel sweeping conservative agenda.", type: t.article, cat: [c.trump], url: "https://www.washingtonpost.com/politics/claiming-mandate-gop-congress-lays-plans-to-propel-sweeping-conservative-agenda/2017/01/01/9840338a-ceee-11e6-b8a2-8c2a61b0436f_story.html", author: "David Weigel", pub: "Washington Post", date: "1 Jan 2017"}
,{title: "Code Blue", url: "https://www.codeblue.team/", type: t.organization, cat: [c.elections], info: "Don’t know much about this group, related to MoveOn.org?"}
,{title: "Collectiva Legal del Pueblo", url: "http://colectivalegal.org/", type: t.organization, cat: [c.immigration_refugees],info: "Small organization that provides legal advice and “know your rights” trainings to immigrant communities. They have some volunteer opportunities (particularly if you speak Spanish)."}
,{title: "Common Cause", url: "http://www.commoncause.org/", type: t.organization, cat: [c.civil_society], info: "“We work to create open, honest, and accountable government that serves the public interest; promote equal rights, opportunity, and representation for all; and empower all people to make their voices heard in the political process.”"}
,{title: "Communities Rising!", url: "https://www.facebook.com/CommunitiesRisingUSA/", type: t.organization, cat: [c.community_organizing], info: "A community organizing effort, a little younger than SNAC. It is also currently organizing meetings by neighborhood and planning future activities."}
,{title: "Community Events Calendar", url: "https://thechurchcouncil.org/calendar/", author: "Church Council of Greater Seattle", type: t.calendar, cat: [c.seattle, c.religious], info: "Activist events sponsored by faith communities throughout Seattle."}
,{title: "Confronting Fear: Final Report", url: "http://www.islamophobia.org/images/ConfrontingFear/Final-Report.pdf", author: "Council on American-Islamic Relations", type: t.resource, cat: [c.anti_racism, c.islam]}
,{title: "Council on American-Islamic Relations", url: "https://www.cair.com/press-center/action-alerts.html", type: t.organization, cat: [c.anti_racism, c.islam], info: "Infrequent action alerts, and an email newsletter that documents reported hate crimes across the country and CAIR’s follow-up. Informative."}
,{title: "Countable", url: "https://www.countable.us/", type: t.app, cat: [c.congress, c.news], info: "This is a very good application for reviewing what Congress is doing each day, and for tracking specific legislation."}
,{title: "Daily Action", url: "https://dailyaction.org/", type: t.resource, cat: [c.weeklies], info: "“In 90 seconds, you can conscientiously object and be done with it.” This one works entirely through your phone so you can make phone calls to your elected representatives."}
,{title: "Data Refuge Project", url: "https://www.datarefuge.org", type: t.resource, cat: [c.science, c.environment], info: "One of several data stores saving climate data before it is deleted by Trump administration."}
,{title: "Democratic Coalition Against Trump", url:"http://www.democraticcoalition.org/", type:t.organization, cat: [c.anti_trump], info:"Resisting Trump through research, boycotts, and so forth, a good opposition site."}
,{title: "Dirty money: Trump and the Kazakh connection.", type: t.article, cat: [c.trump], url: "https://www.ft.com/content/33285dfa-9231-11e6-8df8-d3778b55a923", author: "Tom Burgis", pub: "Financial Times", date: "19 Oct 2016"}
,{title: "Donald Trump is Choosing His Cabinet. Here’s the Latest List.", url: "http://www.nytimes.com/interactive/2016/us/politics/donald-trump-administration.html", pub: "New York Times", type: t.resource, cat: [c.trump], info: "“a Hall of Shame of greedy billionaires, right-wing lunatics, scam artists and military mad hatters” (AlterNet), none of whom are qualified for the positions they are filling."}
,{title: "Easy Action", url: "http://tumblr.us14.list-manage1.com/subscribe?u=79af7f6abbb44dfecd7a25fc7&id=4a5099043d", type: t.mailing_list, cat: [c.weeklies], info: "A mailing list with things to do to resist Trump every week. I like it a lot."}
,{title: "Electronic Frontier Foundation", url: "https://www.eff.org/", type: t.organization, cat: [c.privacy], info: "This isn’t super sexy for a lot of people, but issues like state surveillance are critically important, and the EFF is one of the few organizations defending civil liberties in this sphere."}
,{title: "Everytown for Gun Safety", url:"http://everytown.org/", type:t.organization, cat: [c.gun_violence], info:"Everytown is a movement of Americans working together to end gun violence and build safer communities."}
,{title: "FactCheck.org", url: "http://www.factcheck.org/", type: t.news, cat: [t.news], info: "Annenberg Public Policy Center at the University of Pennsylvania"}
,{title: "FairVote.com", url: "http://www.fairvote.org/", type: t.campaign, cat: [c.voting_rights], info: "Ranked choice voting, national interstate compact, ending gerrymandering, etc."}
,{title: "Faith Action Network", url: "http://fanwa.org/", type: t.organization, cat: [c.seattle, c.religious], info: "They have a legislative agenda that is worth knowing about as it’s the practical stuff you’d want to see passed in Washington state."}
,{title: "Fear, Inc.", url: "https://islamophobianetwork.com/", type: t.resource, cat: [c.anti_racism, c.islam], info: "A very in-depth look at the organizations, speakers and funders of anti-Islamic extremists."}
,{title: "Fight The Good Fight Seattle", url: "http://www.ftgf-seattle.com/", type: t.calendar, cat: [c.seattle], info: "Another Seattle city calendar with a lot of good stuff in it."}
,{title: "Flippable", url: "https://www.flippable.org/", type: t.resource, cat: [c.weeklies], info: "“Our mission is to turn America blue by building a movement to flip seats” focusing on weekly actions to flip state legislatures."}
,{title: "Former Mafia-linked figure describes association with Trump.", author: "Rosalind S. Helderman and Tom Hamburger", pub: "Washington Post", date: "17 May 2016", type: t.article, cat: [c.trump], url: "https://www.washingtonpost.com/politics/former-mafia-linked-figure-describes-association-with-trump/2016/05/17/cec6c2c6-16d3-11e6-aa55-670cabef46e0_story.html"}
,{title: "GovTrack", url: "https://www.govtrack.us/", type: t.resource, cat: [c.congress], info: "A good site to research your representative’s voting history, who is on what committee, and so forth."}
,{title: "How an obscure U.S. policy effort could hurt American Muslims.", type: t.article, cat: [c.anti_racism, c.islam], url: "https://www.washingtonpost.com/national/how-an-obscure-policy-effort-could-hurt-american-muslims/2017/01/11/8ce93184-d76e-11e6-b8b2-cb5164beba6b_story.html", author: "Abigail Hauslohner", pub: "Washington Post", date: "11 Jan 2017", info: "Designating the Muslim Brotherhood a terrorist organization for the first time, the GOP could then use this against Mulsim advocacy organizations to brand them as supporters of terrorism (and not civil rights organizations)."}
,{title: "Human Rights Campaign", url: "https://www.hrc.org/", type: t.organization, cat: [c.lgbtq]}
,{title: "Immigrant Solidarity Network", url: "http://www.immigrantsolidarity.org/", type: t.organization, cat:  [c.immigration_refugees], info: "Lots of news and information."}
,{title: "Indivisible Action Calendar", url: "https://www.indivisibleguide.com/action-calendar", type: t.calendar, cat: [c.anti_trump]}
,{title: "Indivisible: A Practical Guide for Resisting the Trump Agenda", url: "https://www.indivisibleguide.com/", type: t.resource, cat: [c.strategy, c.community_organizing], info: "“Former congressional staffers reveal best practices for making Congress listen.” In addition to a strategy guide that is being widely read right now, they are organizing local chapters that are pursuing this strategy, please take a look."}
,{title: "International Rescue Committee", url: "https://www.rescue.org/announcement/10-ways-help-refugees-seattle", type: t.organization, cat:  [c.immigration_refugees], info: "There’s lots of ways to volunteer to help and this seems like a great organization, it is dealing with documented immigrants and refugees."}
,{title: "Lambda Legal", url: "https://www.lambdalegal.org/", type: t.organization, cat: [c.lgbtq]}
,{title: "Lawyers’ Committee for Civil Rights Under Law", url: "https://lawyerscommittee.org/", type: t.organization, cat: [c.civil_rights], info: "In addition to civil rights cases, this organization was very active in receiving reports of vote irregularities during the election."}
,{title: "Moms Demand Action", url: "http://momsdemandaction.org/", type: t.organization, cat: [c.gun_violence], info: "“Much like Mothers Against Drunk Driving was created to reduce drunk driving, Moms Demand Action for Gun Sense in America was created to demand action from legislators, state and federal; companies; and educational institutions to establish common-sense gun reforms.”"}
,{title: "Move to Amend", url: "https://movetoamend.org/", type: t.campaign, cat: [c.voting_rights], info: "National movement to amend the constitution to undo Citizens United."}
,{title: "NAACP", url: "http://www.naacp.org/", type: t.organization, cat: [c.anti_racism, c.african_americans], info: "“The NAACP is the nation’s oldest, largest and most widely recognized grassroots-based civil rights organization.”"}
,{title: "NARAL Pro-Choice America", url: "http://www.naral.org/", type: t.organization, cat: [c.womens_rights]}
,{title: "National Democratic Party", url: "https://www.democrats.org/", type: t.organization, cat: [c.politics], info: "The opposition party."}
,{title: "National Popular Vote", url: "http://www.nationalpopularvote.com/", type: t.campaign, cat: [c.voting_rights], info: "“The National Popular Vote bill would guarantee the Presidency to the candidate who receives the most popular votes in all 50 states and the District of Columbia.” Does not require amendment to the constitution, but would require all compact states to follow the compact."}
,{title: "Natural Resources Defense Council", url: "https://www.nrdc.org/", type: t.organization, cat: [c.environment], info: "“The Natural Resources Defense Council works to safeguard the earth.”"}
,{title: "Northwest Immigrant Rights Project", url: "https://www.nwirp.org/", type: t.organization, cat: [c.immigration_refugees], info: "Volunteer opportunities: general intake volunteers (college students looking to enter law school); volunteer translators/interpreters; document processing volunteers."}
,{title: "One America", url: "http://weareoneamerica.org/", type: t.organization, cat: [c.immigration_refugees], info: "“OneAmerica’s mission is to advance the fundamental principles of democracy and justice through building power in immigrant communities, in collaboration with key allies.” I have met OneAmerica organizers at events, they are out there."}
,{title: "OpenSecrets", url: "http://www.opensecrets.org/search", type: t.resource, cat: [c.congress],info: "Voting records and positions."}
,{title: "Organizing for Action", url: "https://www.facebook.com/OFA/", type: t.organization, cat: [c.community_organizing],info: "This was originally an organization to support Obama’s presidency, it has recently become a little more active in organizing against Trump."}
,{title: "People are in the streets protesting Donald Trump. But when does protest actually work?", url: "https://www.washingtonpost.com/news/monkey-cage/wp/2016/11/21/people-are-in-the-streets-protesting-donald-trump-but-when-does-protest-actually-work/?utm_term=.56fda1767dd0", author: "Erica Chenoweth", pub: "Washington Post", date: "21 Nov 2016", type: t.article, cat: [c.strategy]}
,{title: "Planned Parenthood", url: "https://www.plannedparenthood.org/", type: t.organization, cat: [c.womens_rights], info: "In most advanced industrial countries, family planning is a part of the health care provided by the government to all its citizens, but in America, thanks to Christian Supremacists, supporting family planning has become a political act unto itself."}
,{title: "Pod Save America", url: "https://getcrookedmedia.com/here-have-a-podcast-78ee56b5a323#.x3p0xgjq9", type: t.podcast, cat: [c.news], info: "The successor to “Keepin’ it 1600”, I haven’t heard it but it promises to be interesting."}
,{title: "PolitiFact", url: "http://www.politifact.com/", type: t.news, cat: [t.news], info: "Washington Post and Tampa Bay Times?"}
,{title: "Prospects for the American press under Trump, part two.", type: t.article, cat: [c.media], url: "http://pressthink.org/2016/12/prospects-american-press-trump-part-two/", author: "Jay Rosen", pub: "PressThink", date: "28 Dec 2016", info: "Second article on how the press might respond."}
,{title: "re:act", url: "https://www.reactletter.com/", type: t.resource, cat: [c.weeklies],  info: "“re:act is a list of a few concrete things you can do to take action during the Trump presidency.”"}
,{title: "Refuse Facism", url: "https://refusefascism.org/", type: t.campaign, cat: [c.anti_fascism], info: "This group is trying to organize mass mobilization to stop Trump from ever governing as president."}
,{title: "Republicans were wildly successful at suppressing voters in 2016.", type: t.article, cat: [c.voting_rights],  url: "https://thinkprogress.org/2016-a-case-study-in-voter-suppression-258b5f90ddcd", author: "Alice Ollstein", pub: "Think Progress", date: "15 Nov 2016", info: "“Last week, the first election in 50 years without the full protection of the federal Voting Rights Act propelled Donald Trump to the White House.”"}
,{title: "Resist Here", url: "http://resisthere.org/", type: t.campaign, cat: [c.anti_trump], info: "Another portal onto #ResistTrumpTuesdays by the Working Families Party."}
,{title: "ReWa", url: "http://www.rewa.org/get-involved/volunteer-opportunities/", type: t.organization, cat: [c.immigration_refugees], info: "An organization that specifically helps with refugee relocation to our area."}
,{title: "RISE When We Fall", url: "https://risewhenwefall.org/#pledge", info: "I’m confused about this site, but give them your email and they send you lots of information about what your representatives are doing, including town halls, their votes, etc.", type: t.resource, cat: [c.congress]}
,{title: "Robert Reich’s First 100 Days Resistance Agenda.", url: "http://www.alternet.org/election-2016/robert-reichs-first-100-days-resistance-agenda", author: "Robert Reich", pub: "AlterNet.org", date: "19 Nov 2016", type: t.article, cat: [c.strategy]}
,{title: "Safe Zone Project", url: "http://thesafezoneproject.com/", type: t.resource, cat: [c.lgbtq], info: "“A free online resource for creating powerful, effective LGBTQ awareness and ally training workshops.”"}
,{title: "Seattle Jewish Federation of Greater Seattle", url: "https://www.jewishinseattle.org/", type: t.organization, cat: [c.religious], info: "They wrote a letter “strongly condemning” Bannon appointment."}
,{title: "Seattle Neighborhood Action Coalition", url: "https://www.neighborhoodaction.info/", type: t.organization, cat: [c.community_organizing], info: "A community organizing effort. “A practical, people-powered solution to the many known and imminent threats of a dangerous and authoritarian Trump regime.” The organization has neighborhood NACs for each city district, that are meeting regularly, as well as at a meeting of all the NACs."}
,{title: "Seattle Resistance and Solidarity Calendar", url: "http://www.thestranger.com/events/resistance", pub: "The Stranger", type: t.calendar, cat: [c.seattle], info: "The Stranger’s calendar of events in Seattle."}
,{title: "Shoulder to Shoulder", url: "http://www.shouldertoshouldercampaign.org/", type: t.campaign, cat: [c.anti_racism, c.islam], info: "“Standing with American Muslims; Upholding American Values.”"}
,{title: "Signal", url: "https://whispersystems.org/", type: t.app, cat: [c.security], info: "Encrypted messaging app. The Electronic Frontier Foundation recommends this app."}
,{title: "Sister District Project", url: "https://www.sisterdistrict.com/", type: t.campaign, cat: [c.elections], info: "“If you live in a safe blue or red district, your economic and volunteer resources can be channeled to a swing district that needs your help. We can change the map together.”"}
,{title: "Sleeping Giants", url: "https://www.facebook.com/slpnggiants/", type: t.boycott, cat: [c.anti_trump, c.media], info: "This group is working on a campaign to pull advertisers from Breitbart and other right-wing hate sites."}
,{title: "Southern Poverty Law Center", url: "http://www.splc.org/", type: t.organization, cat: [c.anti_racism, c.african_americans], info: "The SPLC continues to do important research on hate organizations. It is a useful resource."}
,{title: "Stand As One", url: "https://www.registerus.today/", type: t.campaign, cat: [c.anti_racism, c.islam], info: "This is a pledge to sign any registry created for Muslim-Americans. MoveOn also has a similar pledge. The Director of the ADL has pledged to register as a muslim if such a registry is enacted, at the ADL’s Never Is Now conference."}
,{title: "Surveillance Self-Defence", url: "https://ssd.eff.org/", type: t.resource, cat: [c.security]}
,{title: "SwingLeft", url: "https://swingleft.org/", type: t.campaign, cat: [c.elections], info: "Finds a swing district near you so you can support a Democrat and keep them in the House."}
,{title: "Talking Points Memo", url: "http://talkingpointsmemo.com/", type: t.news, cat: [c.news], info: "The daily headlines here tend to be attention grabbing and don’t always weed out the critical news from the chaffe. However the editor, Josh Marshall, has very good analyses of political developments."}
,{title: "The Corleones of the Caspian: How Azerbaijan’s dictator woos the United States and Europe.", url: "http://foreignpolicy.com/2014/06/10/the-corleones-of-the-caspian/", author: "Michael Weiss", pub: "Foreign Policy", date: "10 Jun 2014", type: t.article, cat: [c.trump]}
,{title: "The Curious World of Donald Trump’s Private Russian Connections.", type: t.article, cat: [c.trump], url: "http://www.the-american-interest.com/2016/12/19/the-curious-world-of-donald-trumps-private-russian-connections/", author: "James S. Henry", pub: "The American Interest", date: "19 Dec 2016", info: "“…whatever the nature of President-elect Donald Trump’s relationship with President Putin, he has certainly managed to accumulate direct and indirect connections with a far-flung private Russian/FSU network of outright mobsters, oligarchs, fraudsters, and kleptocrats.”"}
,{title: "The Emoluments Clause: Its text, meaning, and application to Donald J. Trump.", url: "https://www.brookings.edu/research/the-emoluments-clause-its-text-meaning-and-application-to-donald-j-trump/", author: "Norman Eisen et al", pub: "The Brookings Institute", date: "16 Dec 2016", info: "“The Emoluments Clause, until recently not much discussed because its constraints have been taken for granted, constitutes a clear barrier to the intermingling of business and governmental interests that Donald J. Trump proposes to build into his conduct of the Presidency.”", type: t.article, cat: [c.civil_society]}
,{title: "The GOP’s Age of Authoritarianism Has Only Just Begun", url: "http://nymag.com/daily/intelligencer/2016/10/the-gops-age-of-authoritarianism-has-only-just-begun.html?mid=twitter-share-di", author: "Jonathan Chait", pub: "New York Magazine", date: "30 Oct 2016", type: t.article, cat: [c.anti_fascism]}
,{title: "The Myth of the Rust Belt Revolt", url: "http://www.slate.com/articles/news_and_politics/politics/2016/12/the_myth_of_the_rust_belt_revolt.html", author: "Konstantin Kilibarda and Daria Roithmayr", pub: "Slate", date: "1 Dec 2016", type: t.article, cat: [c.elections]}
,{title: "The Resistance Manual", url: "https://www.resistancemanual.org/Resistance_Manual_Home", type: t.resource, cat: [c.strategy], info: "Launched by Black Lives Matter activities (I think), it’s a wiki collecting resources, strategies, etc."}
,{title: "The Resurgent Left", url: "http://www.theresurgentleft.org/", type: t.organization, cat: [c.elections], info: "Another organization targeting vulnerable seats."}
,{title: "The slow-motion decline: Resisting the gradual erosion of democratic institutions under President Trump.", url: "http://www.salon.com/2016/11/27/the-slow-motion-decline-resisting-the-gradual-erosion-of-democratic-institutions-under-president-trump/", author: "Simon Malloy", pub: "Salon", date: "27 Nov 2016", type: t.article, cat: [c.civil_society]}
,{title: "The Spy Who Wrote the Trump-Russia Memos: It Was 'Hair-Raising' Stuff", url: "http://www.motherjones.com/politics/2017/01/spy-who-wrote-trump-russia-memos-it-was-hair-raising-stuff", author: "David Corn", pub: "Mother Jones", date: "13 Jan 2017", type: t.article, cat: [c.trump]}
,{title: "The voting rights manifesto: a state-by-state plan to defend democracy.", author: "Daniel Nichanian", pub: "Vox", url: "http://www.vox.com/the-big-idea/2016/12/15/13957714/voting-rights-states-ballot-franchise-civil-rights", info: "“Access to the franchise is now the object of an all-out political battle. Those committed to protecting people’s right to vote — as well as their actual ability to exercise this right — must organize accordingly.”", date: "15 Dec 2016", type: t.article, cat: [c.voting_rights] }
,{title: "To resist a Trump presidency, ask: “What would the abolitionists do?”", url: "https://www.washingtonpost.com/opinions/to-resist-a-trump-presidency-ask-what-would-the-abolitionists-do/2016/11/18/2615a136-a767-11e6-8fc0-7be8f848c492_story.html", author: "Linda Hirshman", pub: "Washington Post", date: "18 Nov 2016", type: t.article, cat: [c.strategy]}
,{title: "Trump Confirmations", url: "https://www.washingtonpost.com/graphics/politics/trump-administration-appointee-tracker/database/", type: t.resource, cat: [c.trump], info: "Tracking about 700 executive positions that Trump will appoint that have to be confirmed by Congress. Will any grifter be denied a post? Visit this site to find out."}
,{title: "Trump Promised", url: "https://trumppromised.us/", type: t.article, cat: [c.trump], info: "A running tally of all the things Trump promised, and the extent to which he had done nothing or flat out lied about what he was going to do."}
,{title: "Trump, His Children, and 500+ Potential Conflicts of Interest", url: "http://www.wsj.com/graphics/donald-trump-potential-conflicts-of-interest/", author: "Joel Eastwood, Coulter Jones and Julia Wolfe", pub: "Wall Street Journal", date: "19 Jan 2017", type: t.article, cat:[c.trump]}
,{title: "Trump’s (and Putin's) Plan to Dissolve the EU and NATO.", url: "http://talkingpointsmemo.com/edblog/trump-s-and-putin-s-plan-to-dissolve-the-eu-and-nato", author: "Josh Marshall", "pub": "Talking Points Memo", date: "15 Jan 2017", type: t.article, cat: [c.trump]}
,{title: "Trump’s 7 Techniques to Control the Media.", url: "http://www.alternet.org/media/robert-reich-trumps-7-techniques-control-media",  author: "Robert Reich", pub: "AlterNet", date: "28 Nov 2016", type: t.article, cat: [c.media]}
,{title: "TrumpCast", url: "http://www.slate.com/articles/podcasts/trumpcast.html", type: t.podcast, cat: [c.news], info: "Sadly, still relevant after the election, and still posting episodes."}
,{title: "TrumpInfo.org", url: "http://www.trumpinfo.org/", type: t.article, cat: [c.trump], info: "Not sure if this is going to be updated post-election, but I include it here because I will probably go through it over the coming days looking for anything that’s worth referencing in the future."}
,{title: "Ultraviolet", url: "https://weareultraviolet.org/", type: t.organization, cat: [c.womens_rights], info: "UltraViolet is a powerful and rapidly growing community of people from all walks of life mobilized to fight sexism and expand women’s rights, from politics and government to media and pop culture."}
,{title: "Wall of Us", url: "https://www.wall-of-us.org/", type: t.resource, cat: [c.weeklies],  info: "“Four concrete acts of resistance delivered to your inbox each week.”"}
,{title: "Washington Community Action Coalition", url: "http://washingtoncan.org/wordpress/", type: t.organization, cat: [c.community_organizing], info: "Last active in 2016 election, nothing since then about the election of Trump."}
,{title: "Washington Post", url: "https://www.washingtonpost.com/", type: t.news, cat: [c.news], info: "I believe this national paper did the best reporting on the Trump campaign and is a good place to read about the day’s news."}
,{title: "We have 100 days to stop Donald Trump from systemically corrupting our institutions.", url: "http://www.vox.com/policy-and-politics/2016/11/17/13626514/trump-systemic-corruption", author: "Matthew Yglesias", pub: "Vox", date: "17 Nov 2016", type: t.article, cat: [c.strategy]}
,{title: "WhatsApp", url: "https://www.whatsapp.com/", type: t.app, cat: [c.security], info: "Another encrypted messaging app."}
,{title: "Who Decides? The status of women's reproductive rights in the US", url: "http://www.prochoiceamerica.org/government-and-you/who-decides/", type: t.resource, cat: [c.womens_rights], info: "Summary information about reproductive rights, state-by-state."}
,{title: "Who is my representative?", url: "http://whoismyrepresentative.com/", type: t.resource, cat: [c.congress], info: "Enter your zip code, get contact information for your congressional representative and senator."}
,{title: "Winter is coming: prospects for the American press under Trump.", type: t.article, cat: [c.media], url: "http://pressthink.org/2016/12/winter-coming-prospects-american-press-trump/", author: "Jay Rosen", pub: "PressThink", date: "28 Dec 2016", info: "A great explanation of how the press is currently failing, taking into account forces like false news, mistrust of the press, and Trump’s ability to distract and command the daily headlines."}
,{title: "Working Families Party", url: "http://workingfamilies.org/", type: t.campaign, cat: [c.voting_rights], info: "This is a 3rd party that is active in the northeast of the United States. They have had some interesting electoral successess in local races."}
];
//“”
//,{title: "Pantsuit Nation", url: "https://www.facebook.com/WAPantsuitNation/", info: "Unfortunately this group is on Facebook so I can't tell you much about it."}
