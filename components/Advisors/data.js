const advisors = [
	{
		photo: 'ian',
		name: 'Ian Grigg',
		role: 'Technical Advisor',
		advisorsGroup: 'Blockchain and Technology',
		linkedIn: 'https://www.linkedin.com/in/ian-grigg-0379',
		cv: [
			'Partner at Block.one (EOS)',
			'Architecture Consultant at R3',
			'Financial Cryptographer',
			'Inventor of Ricardian Contract'
		],
		focus: 'Asset tokenization, Ricardian Contract, blockchain, blockchain architecture',
		experience: 'EOS • Block.One • R3 Distributed Ledger Consortium',
		about: [
			'Ian is a noted financial cryptographer, having entered the space in 1995. He invented the Ricardian Contract as a process to capture all of the prose in a legal contract of issuance, and permit unique identification among many competing issues without the need for a centralised registry.',
			'He is co-inventor of triple entry accounting, which has been termed by some as the most significant change to accounting in 500 years. As well as doing seminal work in digital payment and issuance or registry systems, he has created models for identity and community which have been trialled successfully in low trust environments.',
			'Ian has worked for R3, a $100mn+ blockchain constorium of the largest financial services firms and technology companies in the world. Leading investors included SBI Group, Bank of America Merrill Lynch, HSBC, Intel and Temasek. At R3, Ian developed early architecture Ian continues to consult with leading firms in the blockchain space and he is currently a partner at a $200mn post-ICO venture Block One.'
		]
	},
	{
		photo: 'bokky',
		name: 'Bokky Poobah',
		role: 'Security Advisor',
		advisorsGroup: 'Blockchain and Technology',
		linkedIn: 'https://github.com/bokkypoobah',
		cv: [
			'Smart Contract Developer and Auditor'
		],
		focus: 'Smart Contracts Security Expert, Blockchain Developer, Crypto Derivatives Expert',
		experience: 'Actuary, Software Consultant, Quant & Ethereum Developer',
		about: [
			'Bokky is a world-renowned blockchain and smart contract security expert, who rescues trapped ETH on a regular basis. Also an active Ethereum community leader, Bokky has been working on the ETH Blockchain since it’s platform launch in 2015. The prospect of transacting monetary value over a trusted Ethereum platform by means of smart a contract is what excites him the most. Bokky is also a respect smart contract security auditor, having developed and audited smart contracts for over 20 companies, including Status, Cindicator, Stox and many more.',
			'Bokky is an Actuary and Quantitative Software Developer with over 28 years of industry experience with expertise in fixed interest & derivatives in risk management and trading systems, and other blockchain technologies. He is keenly working to bring decentralised trustless exchanges and traditional fiat financial instruments to the Ethereum platform and is currently editing "Mastering Ethereum" with Andreas M. Antonopolous and Gavin Wood.',
			<a href="https://github.com/ethereumbook/ethereumbook">Master Etherium</a>
		]
	},
	{
		photo: 'ros',
		name: 'Ros Altman',
		role: 'Pensions Advisor',
		advisorsGroup: 'Pensions',
		linkedIn: 'https://www.linkedin.com/in/rosaltmann-profile',
		cv: [
			'UK Minister of State, Department for Work and Pensions (2015-2016)'
		],
		focus: 'Pensions sector advice, relations with pension funds',
		experience: 'UK Minister of State, Department for Work and Pensions, 2015-2016 • Chase Manhattan, Rothschilds • LBS, Harvard',
		about: [
			'Former UK Minister of State for Pensions 2015-16, currently Expert on Pensions to the House of Lords, Baroness Altmann is an experienced Investment Professional and Economist, driven by the desire to improve policy for ordinary people and ensuring good value for customers.',
			'Ros started her career as an academic at University College London, London School of Economics and at Harvard University, researching and publishing on UK pension policy, occupational pensions and retirement.',
			'After this, Ros managed institutional investment portfolios for 15 years, including pension funds, insurance funds and mutual funds, as well as advising central banks and private client fund managers. She was Head of International Equities at Chase Manhattan’s International Investment Operation in London, and a Director at Rothschild Asset Management and at NatWest Investment Management.'
		]
	},
	{
		photo: 'marcus',
		name: 'Marcus Killick',
		role: 'Legal Advisor',
		advisorsGroup: 'Pensions',
		linkedIn: 'https://www.linkedin.com/in/marcus-killick-obe-85b8376',
		cv: [
			'Chief Executive Officer, ISOLAS',
			'\nCEO of the Gibraltar Financial Services Commission'
		],
		focus: 'Regulatory Issues, Fintech law',
		experience: 'ISOLAS',
		about: [
			'Marcus is an English Barrister, a member of the New York State Bar, a Chartered Fellow of the Chartered Institute for Securities and Investments, a member of the Chartered Management Institute (Diploma in Management and Leadership), and a member of the Chartered Insurance Institute. Marcus was awarded the OBE in the 2014 New Years Honours List. Marcus was also Chairman of the Gibraltar Investors Compensation Scheme and the Gibraltar Deposit Guarantee Board as well as the Group of International Insurance Centre Supervisors. Marcus is also a director of Kalphe Advisory Ltd, Kalphe Properties Ltd and Callaghan Insurance Brokers Ltd. Prior roles include Deputy Chief Executive of the Isle of Man Financial Supervision Commission, Head of Banking and Investments at the Cayman Island Monetary Authority and Director in KPMG’s Financial International Regulatory Services Team. Marcus was one of the founding directors of the United Kingdom Association of Compliance Officers (Subsequently renamed the Compliance Institute). He was also principle author of two Transparency International’s reports on Money Laundering.'
		]
	},
	{
		photo: 'sandra',
		name: 'Sandra Wu',
		role: 'Pensions Advisor',
		advisorsGroup: 'Pensions',
		linkedIn: 'https://www.linkedin.com/in/sandra-wu-7a7002a7',
		cv: [
			'Head of Legal and Chief Compliance Officer, Mercer',
			'Fund Formation, Weil Gotshal & Manges',
			'Private Equity, Kirkland & Ellis'
		],
		focus: 'Securities, Finance and Corporate Law; Mergers & Acquisitions • Corporate Structuring & Fund Formation; Commercial Negotiations • Enterprise Risk Management, Government & Public Relations • Legal, Regulatory and Compliance for ICOs, FinTechs, and Startups • Capital Raising & Investor Relations',
		experience: 'Head of Legal and Chief Compliance Officer - Mercer • Fund Formation - Weil Gotshal & Manges • Private Equity - Kirkland & Ellis • M&A - Skadden, Arps, Meagher & Flom • Legal Advisor – CoinFi • Solicitor of the High Court of Hong Kong • Solicitor of the High Court of New South Wales, Australia • University of Sydney',
		about: [
			'Sandra has over 10 years of legal experience in M&A, corporate & securities law, and private equity fund formation. She was previously the Head of Legal and Chief Compliance Officer for a global asset management company managing US$23B+ under advisement in the Asia Pacific region. Sandra also advises ICO issuers and FinTech startups on corporate structuring, governance, legal, and regulatory compliance. She currently serves on the Executive Board of the Association of Corporate Counsels as a Director and the Treasurer. Sandra is passionate about encouraging women to “have a seat at the table” and empowering women to take on senior management leadership roles in the workplace. She volunteers her time to be a mentor to The Women’s Foundation Mentoring Program for rising young female professionals.'
		]
	},
	{
		photo: 'prab',
		name: 'Prabhakar Reddy',
		role: 'VC and Crypto Advisor',
		advisorsGroup: 'Venture and FinTech',
		linkedIn: 'https://www.linkedin.com/in/prabhakar2reddy',
		cv: [
			'Investor at Accel',
			'Blockchain Enthusiast',
			'Serial Entrepreneur Accel Partners',
			'\nHarvard Business School'
		],
		focus: 'Crypto and blockchain',
		experience: 'Investor at Accel • Blockchain Enthusiast • Serial Entrepreneur Accel Partners • Harvard Business School',
		about: [
			'Prabhakar is a Seed/Early stage investor at Accel. Prabhakar has been a Serial Entrepreneur all his professional life, with over 9 years of experience running successful digital-media and online video platforms. He sold his first startup in 2008 while still in Undergrad, and scaled his second startup to the Top 100 websites in the world, having bootstrapped it into a $5M ARR venture in under 3 years. More recently, Prabhakar co-founded Dramatize, a Bollywood content streaming platform, which he excited to BookMyShow – India’s largest ticket booking platform.',
			'Prabhakar has an MBA from Harvard Business School, and also holds a Bachelors of Engineering degree in Electronics & Instrumentation. At the age of 20, he won the “Dubai Software Development Trade Show 2008” in Dubai. In 2012, he was nominated for the BITS Alumni Top 25 under the age of 25.',
			'He is fluent in 4 languages and has basic proficiency in 3 more, and spends most of his spare time researching blockchain technologies or advising startups. Besides being an avid globe-trotter, he has a strong passion for adventure sports, loves playing squash and enjoys strategy-games, karting and archery.'
		]
	},
	{
		photo: 'roderik',
		name: 'Roderick van der Graaf',
		role: 'FinTech Advisor',
		advisorsGroup: 'Venture and FinTech',
		linkedIn: 'https://www.linkedin.com/in/roder1k',
		cv: [
            'Experience Paribas, Deutsche Bank',
            'HSBC',
            'Rabobank',
            'Bear Sterns',
            'KCP Capital',
            'Caldera Pacific'
		],
		focus: 'Finance, Fintech, Venture Capital',
		experience: 'Experience Paribas, Deutsche Bank • HSBC • Rabobank • Bear Sterns • KCP Capital • Caldera Pacific',
		about: [
			'Roderik has been involved in the crypto assets market since 2014, both as an investor and advisor. He has advised Beetoken, DML, NapoleonX, and Svandis. He also advises pioneering Korean blockchain company Blocko and is a member of the Argo Foundation council (which oversees Blocko’s Argo protocol) . At the end of 2017 he founded Lemniscap, an advisory/investment firm in the blockchain space.',
			'Roderik has 20 years of experience in finance. He started his career at Paribas in 1997 as an analyst/developer for bond trading applications and then moved to Deutsche Bank in 1998 to embark on his equity derivatives trading career. Over the next 10 years he traded stock and index options on European, US and Asian markets at HSBC, Rabobank and Bear Stearns. In his various roles, he was responsible for both client and proprietary trading. In 2008 he joined LIM Advisors, a multi-strategy hedge fund in Hong Kong, as Portfolio Manager to setup and manage a pan-Asia volatility arbitrage strategy. In 2010, he became Head of Trading at major market-making firm All Options.',
			'In the last few years he moved to the private markets sphere. In 2011, he was involved in setting up a single country private equity fund focusing on Mongolia. In 2013, he joined merchant banking firm KCP Capital, leading its Asian operations. In 2016 he joined Caldera Pacific, an investment firm active in venture capital and growth capital where he held the position of Managing Director and was a member of the Investment Committee.',
			'Roderik holds a B.Eng. in Aerospace Engineering (University of Hertfordshire), a MSc. in Information Technology (Queen Mary and Westfield College, University of London). He is a Chartered Alternative Investment Analyst charter holder.'
		]
	},
	{
		photo: 'saber',
		name: 'Saber Aria',
		role: 'Advisor & Investor',
		advisorsGroup: 'Ecosystem',
		linkedIn: 'https://www.linkedin.com/in/saaria',
		cv: [
            'BeyondBlocks',
            '\nVrije Universiteit Amsterdam (VU Amsterdam)'
		],
		focus: 'Venture Capital, Finance, Marketing',
		experience: 'BeyondBlocks • Vrije Universiteit Amsterdam (VU Amsterdam)',
		about: [
			'Saber Aria is a strategist with over 10 years of experience in marketing strategies and building businesses. He is an early blockchain enthusiast, with a passion for blockchain technology and decentralization after investing in bitcoin in 2012.',
			'Saber is the founder of a prominent digital marketing agency and an advertising software company, each with a diverse portfolio of clients including several fortune 500 companies. He is the co-founder of Beyond Blocks, a global conference for blockchain enthusiasts, investors, and developers.',
			'Saber has a passion for seeking out and assisting emerging start-ups both as an advisor and investor through his accelerator program. He focuses his council not only on brilliant business ideas, but just as importantly, the teams behind each project.'
		]
	},
	{
		photo: 'stephen',
		name: 'Stephen Reynolds',
		role: 'Partnerships',
		advisorsGroup: 'Ecosystem',
		linkedIn: 'https://www.linkedin.com/in/stevencodyreynolds',
		cv: [
			'Binance',
			'HybridBlock'
		],
		focus: 'Strategic Partnerships',
		experience: 'Community Manager, Binance • Founder, Greychain Capital • Officer, United States Army • West Point',
		about: [
			'Steven brings his extensive leadership experience from the military and financial services sectors to bear on the unique challenges surrounding the digital asset space. Steve has extensive experience in business development, communications, public relations, and crisis management. His steady hand helped to guide Binance through a period of explosive growth and uncertainty all while managing their customer facing communications and media channels. His online presence during US hours facilitated Binance’s rapid rise to the #1 exchange in the world.'
		]
	}
];

export default advisors;