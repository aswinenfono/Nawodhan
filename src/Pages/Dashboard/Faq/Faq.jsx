import React, { useEffect, useState } from "react"

const faqsEnglish = [
  {
    question: 'Who can register on the portal?',
    answer: 'Cultivators and landowners who wish to be part of the NAWO-DHAN Programme.',
  },
  {
    question: 'What documents are needed for registration for landowners?',
    answer: 'Aadhaar, PAN, and land ownership proof for landowners.',
  },
  {
    question: 'Can a user register as both a cultivator and landowner?',
    answer: 'Yes, using the same phone number.',
  },
  {
    question: 'What notifications does the portal provide?',
    answer: 'Notifications for registration, payments, and submissions via email, SMS, and WhatsApp.',
  },
  {
    question: 'Can a landowner edit land details after submission?',
    answer: 'No, only admins have editing rights.',
  },
  {
    question: 'What details are required for land registration?',
    answer: 'Location, ownership type, land type, and availability of basic amenities.',
  },
  {
    question: 'Can a cultivator view all registered lands?',
    answer: 'Yes, all enlisted land details are visible in cultivator logins.',
  },
  {
    question: 'What is an Expression of Interest (EOI)?',
    answer: 'It is a preliminary step to express interest in participating in NAWO-DHAN activities.',
  },
  {
    question: 'How is the EOI fee paid?',
    answer: 'Currently, it is manual, but soon it will be facilitated through an integrated payment gateway.',
  },
  {
    question: 'What happens if an EOI is incomplete by the deadline?',
    answer: 'It is automatically rejected.',
  },
  {
    question: 'Can officials reject an EOI?',
    answer: 'Yes, they can reject or approve EOI submissions.',
  },
  {
    question: 'What are the main components of an RFP?',
    answer: 'Technical and Financial Proposals.',
  },
  {
    question: 'How are financial bids submitted?',
    answer: 'For clusters of 10 acres as a unit or subunits with rates specified per year.',
  },
  {
    question: 'Can a submitted RFP be revised?',
    answer: 'Yes, revisions are allowed for 10 days before the deadline.',
  },
  {
    question: 'What is the matchmaking process?',
    answer: 'It ranks RFPs against land parcels for officials to review and allocate awards.',
  },
  {
    question: 'How is a land award accepted?',
    answer: 'Cultivators must accept it within 48 hours, or it is reallocated.',
  },
  {
    question: 'What is the SLA?',
    answer: 'A Service Level Agreement outlining the terms between stakeholders.',
  },
  {
    question: 'Can SLAs be signed digitally?',
    answer: 'Currently, it is manual. The portal will support digital signatures in the future.',
  },
  {
    question: 'How is payment managed?',
    answer: 'Currently, it is manual. Soon it will be facilitated through secure gateways with options for installment-based payments.',
  },
  {
    question: 'Can cultivators track their farming progress?',
    answer: 'Yes, using the farming tracker with updates on planting, irrigation, and harvesting.',
  },
  {
    question: 'Are notifications sent for farming activities?',
    answer: 'Yes, reminders for deadlines are provided.',
  },
  {
    question: 'Can landowners provide ratings for cultivators?',
    answer: 'Yes, through the gamification and user rating system.',
  },
  {
    question: 'What are the criteria for RFP evaluation?',
    answer: 'Technical and financial aspects such as experience, education, and proposed rates.',
  },
  {
    question: 'What is the role of field verifiers?',
    answer: 'They verify land details and submit field reports.',
  },
  {
    question: 'Can multiple cultivators collaborate on an RFP?',
    answer: 'Yes, partnerships and joint proposals are supported.',
  },
  {
    question: 'What if a cultivator has a pre-existing agreement with a landowner?',
    answer: 'The landowner can invite proposals directly from the pre-agreed cultivator.',
  },
  {
    question: 'What is the purpose of the farming tracker?',
    answer: 'To provide real-time updates and track farming activities.',
  },
  {
    question: 'What kind of reports does the portal provide?',
    answer: 'Monthly, quarterly, and annual reports on farming, land usage, and crop health.',
  },
  {
    question: 'How does the market module benefit cultivators?',
    answer: 'It allows buyers to submit requirements, connecting them directly with cultivators.',
  },
  {
    question: 'Is mobile access supported?',
    answer: 'Yes, the portal is mobile-friendly.',
  },
  {
    question: 'What are the key responsibilities of landowners on the portal?',
    answer: 'Managing land details, submitting EOIs, RFPs, and signing SLAs.',
  },
  {
    question: 'What are the responsibilities of cultivators?',
    answer: 'Managing crops, submitting proposals, and tracking farming progress.',
  },
  {
    question: 'What is KABCO’s role?',
    answer: 'Publishing EOIs and RFPs, matchmaking, and managing reports.',
  },
  {
    question: 'What is the deadline for SLA signing?',
    answer: 'As specified in the award terms.',
  },
  {
    question: 'Can payments be scheduled automatically?',
    answer: 'Yes, based on installment plans.',
  },
  {
    question: 'Are payment receipts downloadable?',
    answer: 'Yes, receipts for all transactions can be downloaded.',
  },
  {
    question: 'What details are captured for farming activities?',
    answer: 'Crop name, variety, planting date, cultivation type, and marketing requirements.',
  },
  {
    question: 'Will field verifiers add remarks during visits?',
    answer: 'Yes, they will add remarks and observations.',
  },
  {
    question: 'Is there a limit on the number of land parcels a landowner can register?',
    answer: 'No specific limit is fixed yet.',
  },
  {
    question: 'How are land parcels clustered for RFPs?',
    answer: 'Based on district or across multiple landowners.',
  },
  {
    question: 'What is the duration of land use specified in RFPs?',
    answer: 'As per the landowner’s proposed duration.',
  },
  {
    question: 'Can rates differ for each year in financial bids?',
    answer: 'Yes, rates can be uniform or different for each year.',
  },
  {
    question: 'What is the size of a unit for financial bids?',
    answer: 'A cluster of 10 acres is considered a single unit.',
  },
  {
    question: 'What happens if a subunit is less than 10 acres?',
    answer: 'It is considered a subunit and rated accordingly.',
  },
  {
    question: 'Can cultivators edit RFPs after submission?',
    answer: 'Yes, within a 10-day revision period.',
  },
  {
    question: 'What is the role of the admin in land and crop management?',
    answer: 'Admins can edit land and crop details and publish SLAs.',
  },
  {
    question: 'What happens if an SLA is not signed within the stipulated time?',
    answer: 'The award may be reassigned to another cultivator.',
  },
  {
    question: 'Can cultivators pay installments through the portal?',
    answer: 'Yes, payment options will be integrated into cultivator logins.',
  },
  {
    question: 'Can buyers submit produce requirements directly to cultivators?',
    answer: 'Yes, via the market module.',
  },
  {
    question: 'How is user feedback handled?',
    answer: 'Ratings and reviews are provided periodically by all stakeholders.',
  },
  {
    question: 'What are the eligibility criteria for cultivators in RFP evaluation?',
    answer: 'Factors like age, education, farming experience, and financial stability are considered.',
  },
  {
    question: 'What additional documents are required for FPOs in RFPs?',
    answer: 'Registration certificates, audited financial statements, and membership proof.',
  },
  {
    question: 'How is financial stability assessed during evaluation?',
    answer: 'Based on annual turnover as per financial statements.',
  },
  {
    question: 'Are there penalties for non-compliance in RFP agreements?',
    answer: 'Yes, repeated instances of non-compliance affect evaluation scores.',
  },
  {
    question: 'How are technical proposals evaluated?',
    answer: 'Based on educational qualifications, experience, certifications, and innovative techniques.',
  },
  {
    question: 'How are financial proposals evaluated?',
    answer: 'Based on the proposed rates for units or subunits and financial stability of the proposer.',
  },
  {
    question: 'What happens if two proposals are ranked equally?',
    answer: 'Manual rank adjustments or automated reallocation may be applied by officials.',
  },
  {
    question: 'Can individual farmers participate without a partnership?',
    answer: 'Yes, individual farmers can submit proposals independently.',
  },
  {
    question: 'What kind of reports can landowners access?',
    answer: 'Payment schedules, farming progress, and activity reports.',
  },
  {
    question: 'Can field verifiers access landowner documents?',
    answer: 'Yes, for verification purposes.',
  },
  {
    question: 'What happens if an RFP is incomplete?',
    answer: 'It may be disqualified or require revisions before submission.',
  },
  {
    question: 'Can cultivators add multiple crops to their farming tracker?',
    answer: 'Yes, details like crop type, duration, and cultural practices can be added.',
  },
  {
    question: 'What is the role of community development in proposal evaluation?',
    answer: 'Leadership roles and membership in organizations earn additional points.',
  },
  {
    question: 'Can partnerships include multiple FPOs or FPCs?',
    answer: 'Yes, partnerships with multiple entities are supported.',
  },
  {
    question: 'Are young agripreneurs given special consideration?',
    answer: 'Yes, their business plans and qualifications are part of the evaluation criteria.',
  },
  {
    question: 'Can landowners limit the duration of cultivation agreements?',
    answer: 'Yes, the RFP specifies the preferred number of years for cultivation.',
  },
  {
    question: 'Are land boundary details required during registration?',
    answer: 'Yes, details about adjacent lands and boundaries are mandatory.',
  },
  {
    question: 'How is irrigation facility availability captured?',
    answer: 'Details like ponds, wells, and rivers are specified during land registration.',
  },
  {
    question: 'What happens if a registered land is found unsuitable for farming?',
    answer: 'The land will not be listed for RFP.',
  },
  {
    question: 'Are there fees associated with submitting an RFP?',
    answer: 'Not for RFP, but EOIs require a submission fee.',
  },
  {
    question: 'Can international farmers or investors use the portal?',
    answer: 'The programme focuses on Indian stakeholders but does not exclude others explicitly.',
  },
  {
    question: 'What is the benefit of long-term SLAs for landowners?',
    answer: 'More years typically result in higher income opportunities.',
  },
  {
    question: 'How are notifications for deadlines sent?',
    answer: 'Through email, SMS, and WhatsApp.',
  },
  {
    question: 'Can cultivators choose specific districts for farming?',
    answer: 'Yes, during the proposal submission process.',
  },
  {
    question: 'Is the portal linked to agricultural advisory services?',
    answer: 'Yes, through KATHIR integration.',
  },
  {
    question: 'What is the next step after proposal acceptance?',
    answer: 'Signing the SLA and initiating farming activities as per agreed terms.',
  },
  {
    question: 'Will my land ownership be transferred to the cultivator?',
    answer: 'No. The SLA ensures Farming as a Service only and no transfer of ownership happens.',
  },
  {
    question: 'Can I choose the crop to be cultivated?',
    answer: 'Yes, the choice of crop is by the cultivator, but it should be environment-friendly.',
  },
];

const faqsMalayalam = [
  { no: 1, question: 'ആർക്കൊക്കെ പോർട്ടലിൽ രജിസ്റ്റർ ചെയ്യാം?', answer: 'NAWO-DHAN പ്രോഗ്രാമിൻ്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന കൃഷിക്കാർക്കും ഭൂവുടമകൾക്കും രജിസ്റ്റർ ചെയ്യാം.' },
  { no: 2, question: 'ഭൂവുടമകൾക്ക് രജിസ്ട്രേഷൻ എന്തൊക്കെ രേഖകൾ ആവശ്യമാണ്?', answer: 'ആധാർ, പാൻ, ഭൂമിയുടെ ഉടമസ്ഥാവകാശ രേഖ എന്നിവ ആവശ്യമാണ്.' },
  { no: 3, question: 'ഒരു ഉപയോക്താവിന് കൃഷിക്കാരനായും ഭൂവുടമയായും രജിസ്റ്റർ ചെയ്യാൻ കഴിയുമോ?', answer: 'കഴിയും, അതേ ഫോൺ നമ്പർ ഉപയോഗിച്ച് കൃഷിക്കാരനായും ഭൂവുടമയായും രജിസ്റ്റർ ചെയ്യാൻ കഴിയും.' },
  { no: 4, question: 'എന്തൊക്കെ അറിയിപ്പുകളാണ് പോർട്ടൽ നൽകുന്നത്?', answer: 'ഇമെയിൽ, SMS, WhatsApp വഴിയുള്ള രജിസ്ട്രേഷൻ, പേയ്‌മെൻ്റുകൾ, അപേക്ഷ സമർപ്പണം എന്നിവയ്ക്കുള്ള അറിയിപ്പുകൾ.' },
  { no: 5, question: 'സമർപ്പിച്ചതിന് ശേഷം ഭൂവുടമയ്ക്ക് ഭൂമി വിശദാംശങ്ങൾ എഡിറ്റ് ചെയ്യാൻ കഴിയുമോ?', answer: 'ഇല്ല, അഡ്മിൻമാർക്ക് മാത്രമേ എഡിറ്റിംഗ് സാധിക്കുകയുള്ളൂ.' },
  { no: 6, question: 'ഭൂമി രജിസ്ട്രേഷനുള്ള എന്തൊക്കെ വിശദാംശങ്ങൾ ആവശ്യമാണ്?', answer: 'ഭൂമിയുടെ വിവരങ്ങള്‍, ഉടമസ്ഥാവകാശ തരം, ഭൂമിയുടെ തരം, അടിസ്ഥാന സൗകര്യങ്ങളുടെ ലഭ്യത തുടങ്ങിയവ.' },
  { no: 7, question: 'രജിസ്റ്റർ ചെയ്ത എല്ലാ ഭൂമിയും ഒരു കൃഷിക്കാരന് കാണാൻ കഴിയുമോ?', answer: 'കഴിയും, ലിസ്റ്റുചെയ്ത എല്ലാ ഭൂവിവരങ്ങളും കൃഷിക്കാരുടെ ലോഗിനുകളിൽ ദൃശ്യമാണ്.' },
  { no: 8, question: 'എന്താണ് താല്പര്യപത്രം (EOI)?', answer: 'NAWO-DHAN പ്രവർത്തനങ്ങളിൽ പങ്കെടുക്കാൻ താൽപ്പര്യം പ്രകടിപ്പിക്കുന്നതിന് ഒരു പ്രാഥമിക നടപടിയാണിത്.' },
  { no: 9, question: 'EOI ഫീസ് എങ്ങനെയാണ് അടക്കുന്നത്?', answer: 'നിലവിൽ ഇത് മാനുവൽ ആണ്, ഉടൻ തന്നെ ഇത് ഒരു സംയോജിത പേയ്‌മെൻ്റ് ഗേറ്റ്‌വേ വഴി ഇത് സുഗമമാക്കും.' },
  { no: 10, question: 'സമയപരിധിക്കുള്ളിൽ ഒരു EOI അപൂർണ്ണമാണെങ്കിൽ എന്ത് സംഭവിക്കും?', answer: 'അത് സ്വാഭാവികമായും നിരസിക്കപ്പെടും.' },
  { no: 11, question: 'ഉദ്യോഗസ്ഥർക്ക് ഒരു ഇഒഐ നിരസിക്കാൻ കഴിയുമോ?', answer: 'കഴിയും, EOI സമർപ്പണം നിരസിക്കാനോ അംഗീകരിക്കാനോ കഴിയും.' },
  { no: 12, question: 'ഒരു RFP-യുടെ പ്രധാന ഘടകങ്ങൾ എന്തൊക്കെയാണ്?', answer: 'സാങ്കേതികവും സാമ്പത്തികവുമായ ഘടകങ്ങൾ.' },
  { no: 13, question: 'സാമ്പത്തിക ബിഡുകൾ എങ്ങനെയാണ് സമർപ്പിക്കുന്നത്?', answer: '10 ഏക്കർ വിസ്തീർണ്ണമുള്ള ക്ലസ്റ്ററുകൾക്ക് അല്ലെങ്കിൽ ഒരു യൂണിറ്റിന് അല്ലെങ്കിൽ സബ്‌യൂണിറ്റുകൾക്ക് പ്രതിവർഷം ലഭ്യമാക്കാവുന്ന തുക.' },
  { no: 14, question: 'സമർപ്പിച്ച RFP പരിഷ്കരിക്കാനാകുമോ?', answer: 'കഴിയും, സമയപരിധിക്ക് 10 ദിവസം മുമ്പ് പുനരവലോകനങ്ങൾ അനുവദനീയമാണ്.' },
  { no: 15, question: 'എന്താണ് മാച്ച് മേക്കിംഗ് പ്രക്രിയ?', answer: 'ഉദ്യോഗസ്ഥർക്ക് അവലോകനം ചെയ്യുന്നതിനും അനുവദിക്കുന്നതിനായി പ്രോപ്പോസലുകളെ റാങ്ക് ചെയ്യുന്നു.' },
  { no: 16, question: 'ഭൂമി അവാർഡ് എങ്ങനെയാണ് സ്വീകരിക്കുന്നത്?', answer: 'കൃഷിക്കാർ ഇത് 48 മണിക്കൂറിനുള്ളിൽ സ്വീകരിക്കണം, അല്ലെങ്കിൽ അത് അടുത്ത ആള്‍ക്ക് അനുവദിക്കും.' },
  { no: 17, question: 'എന്താണ് SLA?', answer: 'കര്‍ഷകരും ഭൂവുടമകളും തമ്മിലുള്ള നിബന്ധനകൾ വിവരിക്കുന്ന ഒരു സേവന തല ഉടമ്പടി.' },
  { no: 18, question: 'SLA-കൾ ഡിജിറ്റലായി ഒപ്പിടാൻ കഴിയുമോ?', answer: 'നിലവിൽ, ഇത് മാനുവൽ ആണ്. ഭാവിയിൽ ഡിജിറ്റൽ സിഗ്നേച്ചറുകൾ വഴി ഇത് സാധ്യമാക്കും.' },
  { no: 19, question: 'പേയ്‌മെൻ്റ് എങ്ങനെയാണ് കൈകാര്യം ചെയ്യുന്നത്?', answer: 'നിലവിൽ ഇത് മാനുവലാണ്. ഇൻസ്റ്റാൾമെൻറ്റുകളെ അടിസ്ഥാനമാക്കിയുള്ള പേയ്‌മെൻ്റുകൾക്കുള്ള ഓപ്ഷനുകളുള്ള സുരക്ഷിത ഗേറ്റ്‌വേകൾ ഉടൻ ലഭ്യമാക്കും.' },
  { no: 20, question: 'കൃഷിക്കാർക്ക് അവരുടെ കൃഷി പുരോഗതി ട്രാക്ക് ചെയ്യാൻ കഴിയുമോ?', answer: 'കഴിയും, നടീൽ, ജലസേചനം, വിളവെടുപ്പ് എന്നിവയെക്കുറിച്ചുള്ള അപ്‌ഡേറ്റുകൾക്കായി ഫാമിംഗ് ട്രാക്കർ ഉപയോഗിക്കുന്നു.' },
  { no: 21, question: 'കാർഷിക പ്രവർത്തനങ്ങൾക്കായി അറിയിപ്പുകൾ നല്‍കുമോ?', answer: 'നല്‍കും, സമയപരിധിക്കുള്ള ഓർമ്മപ്പെടുത്തലുകൾ നൽകുന്നതാണ്.' },
  { no: 22, question: 'കൃഷിക്കാർക്ക് റേറ്റിംഗ് നൽകാൻ ഭൂവുടമകൾക്ക് കഴിയുമോ?', answer: 'കഴിയും, ഗെയിമിഫിക്കേഷനിലൂടെയും ഉപയോക്തൃ റേറ്റിംഗ് സംവിധാനത്തിലൂടെയും ഇത് സാധിക്കും.' },
  { no: 23, question: 'RFP മൂല്യനിർണ്ണയത്തിനുള്ള മാനദണ്ഡങ്ങൾ എന്തൊക്കെയാണ്?', answer: 'അനുഭവം, വിദ്യാഭ്യാസം, തുടങ്ങിയ സാങ്കേതികവും സാമ്പത്തികവുമായ വശങ്ങൾ പരിഗണിച്ചു കൊണ്ട് ചെയ്യുന്നതാണ്.' },
  { no: 24, question: 'ഫീൽഡ് വെരിഫയർമാരുടെ പങ്ക് എന്താണ്?', answer: 'അവർ ഭൂമിയുടെ വിശദാംശങ്ങൾ പരിശോധിച്ച് ഫീൽഡ് റിപ്പോർട്ടുകൾ സമർപ്പിക്കുന്നു.' },
  { no: 25, question: 'ഒന്നിലധികം കൃഷിക്കാർക്ക് ഒരു RFP-യിൽ സഹകരിക്കാൻ കഴിയുമോ?', answer: 'കഴിയും, പങ്കാളിത്തവും സംയുക്ത നിർദ്ദേശങ്ങളും സാധ്യമാണ്.' },
  { no: 26, question: 'ഒരു കൃഷിക്കാരന് ഒരു ഭൂവുടമയുമായി മുൻകാല കരാർ ഉണ്ടെങ്കിൽ എന്തുചെയ്യും?', answer: 'മുൻകൂട്ടി സമ്മതിച്ച കൃഷിക്കാരനിൽ നിന്ന് ഭൂവുടമക്ക് നേരിട്ട് പ്രോപ്പോസലുകൾ ക്ഷണിക്കാവുന്നതാണ്.' },
  { no: 27, question: 'ഫാമിംഗ് ട്രാക്കറിന്റെ ഉദ്ദേശ്യം എന്താണ്?', answer: 'തത്സമയ അപ്ഡേറ്റുകൾ നൽകുന്നതിനും കാർഷിക പ്രവർത്തനങ്ങൾ ട്രാക്ക് ചെയ്യുന്നതിനും.' },
  { no: 28, question: 'ഏത് തരത്തിലുള്ള റിപ്പോർട്ടുകളാണ് പോർട്ടൽ നൽകുന്നത്?', answer: 'കൃഷി, ഭൂവിനിയോഗം, വിളകളുടെ ആരോഗ്യങ്ങൾ എന്നിവയെക്കുറിച്ചുള്ള പ്രതിമാസ, ത്രൈമാസ, വാർഷിക റിപ്പോർട്ടുകൾ.' },
  { no: 29, question: 'മാർക്കറ്റ് മോഡ്യൂൾ കർഷകർക്ക് എങ്ങനെ പ്രയോജനം ചെയ്യും?', answer: 'കർഷകരുമായി നേരിട്ട് ബന്ധിപ്പിച്ച് ആവശ്യകതകൾ സമർപ്പിക്കാൻ ഇത് കച്ചവടക്കാരെ അനുവദിക്കുന്നു.' },
  { no: 30, question: 'മൊബൈൽ ആക്സസ് പിന്തുണയ്ക്കുന്നുണ്ടോ?', answer: 'ഉണ്ട്, പോർട്ടൽ മൊബൈൽ സൗഹൃദമാണ്.' },
  { no: 31, question: 'പോർട്ടലിലെ ഭൂവുടമകളുടെ പ്രധാന ഉത്തരവാദിത്തങ്ങൾ എന്തൊക്കെയാണ്?', answer: 'ഭൂമിയുടെ വിശദാംശങ്ങൾ കൈകാര്യം ചെയ്യുക, EOI-കൾ, RFP-കൾ സമർപ്പിക്കുക, SLA-കളിൽ ഒപ്പിടുക.' },
  { no: 32, question: 'കൃഷിക്കാരുടെ ഉത്തരവാദിത്തങ്ങൾ എന്തൊക്കെയാണ്?', answer: 'വിളകൾ കൈകാര്യം ചെയ്യുക, നിർദ്ദേശങ്ങൾ സമർപ്പിക്കുക, കാർഷിക പുരോഗതി ട്രാക്ക് ചെയ്യുക.' },
  { no: 33, question: 'KABCO യുടെ പങ്ക് എന്താണ്?', answer: 'EOI-കളും RFP-കളും പ്രസിദ്ധീകരിക്കൽ, മാച്ച് മേക്കിംഗ്, റിപ്പോർട്ടുകൾ കൈകാര്യം ചെയ്യൽ.' },
  { no: 34, question: 'SLA ഒപ്പിടുന്നതിന് എത്ര സമയം വേണ്ടിയിരിക്കും?', answer: 'നിലവിൽ, SLA 24 മണിക്കൂറിനുള്ളിൽ ഒപ്പിടാം.' },
  { no: 35, question: 'പേയ്‌മെന്റ് സമർപ്പിക്കുന്നതിനുള്ള സമയപരിധി എത്ര?', answer: 'സാധാരണയായി, പോർട്ടൽ 7-10 ദിവസങ്ങളിൽ പേയ്‌മെന്റുകൾ കൈകാര്യം ചെയ്യുന്നതാണ്.' },
  { no: 36, question: 'RFP-കളുടെ ഫലങ്ങളെയും അവരോട് ബന്ധപ്പെട്ട വിവരങ്ങളും എങ്ങനെ കാണാം?', answer: 'RFP ഫലങ്ങൾ ഓരോ ദിവസവും പോർട്ടലിൽ അപ്‌ഡേറ്റാകും.' },
  { no: 37, question: 'അവാർഡ് ചെയ്ത RFP-നോട് ബന്ധപ്പെട്ട റിപ്പോർട്ട് എങ്ങനെ സമർപ്പിക്കും?', answer: 'അവാർഡ് ചെയ്യപ്പെട്ട RFP-ക്ക് അനുയായമായ റിപ്പോർട്ടുകൾ നേരിട്ട് സമർപ്പിക്കാൻ ഉപയോക്താക്കൾക്ക് ഓപ്ഷൻ ലഭിക്കും.' },
  { no: 38, question: 'RFP സമർപ്പിച്ച ശേഷമുള്ള അവലോകനം എങ്ങനെ നടക്കും?', answer: 'RFP സമർപ്പിച്ച ശേഷം, സാങ്കേതികവും സാമ്പത്തികവുമായ പരിശോധനകൾ നടത്തുന്നുണ്ട്.' },
  { no: 39, question: 'RFP ന്റെ വിലയിരുത്തലിനുള്ള മാനദണ്ഡങ്ങൾ എത്ര ദിവസം തികയും?', answer: 'പ്രതികരണം ലഭിച്ച ശേഷം 7-10 ദിവസങ്ങളിൽ ഉപയോക്തൃ വിലയിരുത്തലുകൾ പൂർത്തിയാകും.' },
  { no: 40, question: 'RFP സമർപ്പിക്കുന്നതിനുള്ള അവസാന തീയതി എങ്ങനെ അറിയാം?', answer: 'RFP പോർട്ടലിൽ കഴിഞ്ഞ തീയതികളുമായി ഓട്ടോമാറ്റിക് ഒറ്റ സമയം അവസാന തീയതി കാണിക്കും.' },
  { no: 41, question: 'ആദ്യ RFP-നു ശേഷം വലുതായുള്ളവ എങ്ങനെ ഉണ്ടാക്കും?', answer: 'അവയുമായി ബന്ധപ്പെട്ട മാനദണ്ഡങ്ങൾ, പാരാമീറ്ററുകൾ, സമയം എന്നിവ എങ്ങനെ ക്രമീകരിക്കാമെന്ന് വരെയുള്ള മാർഗനിർദ്ദേശങ്ങൾ ഉണ്ട്.' },
  { no: 42, question: 'RFP-നുമായി സഹകരിക്കുന്ന അനുയായികൾക്ക് തകർച്ചകൾ ഉണ്ടാകുമോ?', answer: 'സമർപ്പിത അനുപാതത്തിന്‍റെ അടിസ്ഥാനത്തിൽ അനുകൂലമായ വിശദാംശങ്ങൾ സഹകരിക്കുന്നതിന് ആവശ്യമായ അനുമതി ലഭിക്കും.' },
  { no: 43, question: 'പേയ്‌മെൻ്റ് നടത്തുന്നതിന് എത്ര ഓപ്ഷനുകൾ ലഭ്യമാണ്?', answer: 'നിലവിൽ നിരവധി പേയ്‌മെൻ്റ് ഓപ്ഷനുകൾ ഉപയോഗിച്ച് പണമടക്കാൻ കഴിയും, അതുപോലെ ക്രെഡിറ്റ് കാർഡ്, ഡെബിറ്റ് കാർഡ്, ബാക്ക് ട്രാക്ക് ഓപ്ഷനുകളും ഇതിലുണ്ട്.' },
  { no: 44, question: 'പണം വീണ്ടെടുക്കുന്നതിനുള്ള നടപടിക്രമങ്ങൾ എന്തൊക്കെയാണ്?', answer: 'പണം വീണ്ടെടുക്കുന്നതിനായി സാധാരണ രേഖകൾ ആവശ്യമാണ്, രജിസ്ട്രേഷൻ പൂർത്തിയാക്കിയ ശേഷം അത് ഏകദേശം 30 ദിവസത്തിനുള്ളിൽ അനുവദിക്കും.' },
  { no: 45, question: 'RFP-കൾ ഓൺലൈൻ സമർപ്പിക്കുന്നതിനുള്ള പ്രക്രിയ എന്താണ്?', answer: 'RFP സമർപ്പിക്കുന്നതിന് പൂർണ്ണമായ പ്രൊഫൈൽ അപ്‌ഡേറ്റ് ചെയ്യുക, അനുയോജ്യമായ ഫയൽ അപ്‌ലോഡ് ചെയ്യുക, സെർവീസ് നിരീക്ഷണങ്ങൾ ചെയ്ത ശേഷം സമർപ്പിക്കുക.' },
  { no: 46, question: 'RFP-നുള്ള പരിശീലനം ലഭ്യമാണോ?', answer: 'ഹൗ ടു ഗൈഡുകളും ഓൺലൈൻ ട്യൂട്ടോറിയലുകളും എളുപ്പത്തിൽ ലഭ്യമാണ്.' },
  { no: 47, question: 'RFP ഉടമ്പടിയുടെ കാലാവധി എത്ര?', answer: 'RFP-നുള്ള നീണ്ട കാലാവധി 12-18 മാസമായിരിക്കും.' },
  { no: 48, question: 'സുരക്ഷിതമായ ഓൺലൈൻ പേയ്‌മെന്റ് സിസ്റ്റം എങ്ങനെ പ്രവർത്തിക്കുന്നു?', answer: 'പോർട്ടൽ എല്ലാ ട്രാൻസക്ഷനുകൾക്കും എൻക്രിപ്ഷൻ ഉപകരണം ഉപയോഗിക്കുന്നു, ഇതിലൂടെ ഉപയോക്തൃ വിവരങ്ങൾ സുരക്ഷിതമാണ്.' },
  { no: 49, question: 'RFP ഫലങ്ങൾ കൃഷിക്കാർക്ക് എങ്ങനെ ലഭിക്കും?', answer: 'RFP സമർപ്പിച്ചതിന് ശേഷമുള്ള ഫലങ്ങൾ ഉപയോക്തൃ പ്രൊഫൈലിലൂടെയും എമെയിൽ വഴി അറിയിക്കും.' },
  { no: 50, question: 'ഭൂവുടമയുടെ മാർക്കറ്റിംഗ് പോർട്ടലിൽ എങ്ങനെ പങ്കാളിയാകാം?', answer: 'ഉദ്യോഗസ്ഥർക്ക് മൊബൈൽ ആപ്പിൽ ലഭ്യമായ മാർക്കറ്റിംഗ് പോർട്ടലുകൾ ഉപയോഗിച്ച് കൃഷിക്കാർക്ക് കൂട്ടിയിടുക്കുള്ള സാഹചര്യം ലഭിക്കും.' },
  { no: 51, question: 'ഫീൽഡ് വിദഗ്ധന്റെ ജോലി എന്താണ്?', answer: 'ഫീൽഡ് വിദഗ്ധർ ഭൂമിയുടെ സ്ഥിതിവിവരങ്ങൾ പരിശോധിച്ച്, കൃഷി പ്രവർത്തനങ്ങൾ കൃത്യമായി നടന്നതായി ഉറപ്പാക്കുന്നു.' },
  { no: 52, question: 'കൃഷി ഇൻഷുറൻസ് നൽകുന്നുണ്ടോ?', answer: 'ഇത് നിലവിൽ പോർട്ടലിൽ ലഭ്യമായിട്ടില്ല, എന്നാൽ ഭാവിയിൽ ഇന്റഗ്രേറ്റഡ് ഇൻഷുറൻസ് സേവനം നൽകുന്നതിനായി പദ്ധതികൾ ഉണ്ട്.' },
  { no: 53, question: 'കൃഷി പുരോഗതി എങ്ങനെ പടുത്തുയര്ക്കാം?', answer: 'കൃഷി പുരോഗതി കുറിപ്പുകൾ ഓൺലൈനായി അപ്‌ഡേറ്റ് ചെയ്യാനാകും, ഓരോ ദിവസവും പുതിയ വിവരങ്ങൾ നൽകുന്നതാണ്.' },
  { no: 54, question: 'RFP സമർപ്പിക്കുമ്പോൾ അധിക രേഖകൾ ആവശ്യപ്പെടുമോ?', answer: 'നല്ല പരിചയമുളള, ശരിയായ രേഖകൾ ആവശ്യപ്പെടപ്പെടും, അവ ലഭിച്ചാൽ RFP പ്രോസസ്സിൽ പരിഗണിക്കും.' },
  { no: 55, question: 'RFP ഫലം അപ്ഡേറ്റ് ചെയ്യാൻ എങ്ങനെ?', answer: 'RFP ഫലങ്ങൾ 3-4 ദിവസത്തിനുള്ളിൽ പോർട്ടൽ അപ്‌ഡേറ്റ് ചെയ്യും.' },
  { no: 56, question: 'പഠനഗ്രന്ഥം ലഭ്യമാണോ?', answer: 'RFP-കളെക്കുറിച്ച് ഓൺലൈൻ പഠനഗ്രന്ഥങ്ങൾ നൽകും.' },
  { no: 57, question: 'പൊതു ഉപയോക്താവിന് എങ്ങനെ മറുപടി ലഭിക്കും?', answer: 'പൊതു ഉപയോക്തൃ സപ്പോർട്ടും FAQ-ലും ലഭ്യമാണ്.' },
  { no: 58, question: 'പോർട്ടൽ-ലേക്ക് ഔദ്യോഗിക പരാതി എങ്ങനെ സമർപ്പിക്കും?', answer: 'നിങ്ങളുടെ ഔദ്യോഗിക പരാതിയുമായി ബന്ധപ്പെട്ട വിവരങ്ങൾ സെൽഫി, ഫോട്ടോ, എന്നിവയും പോർട്ടലിൽ അപ്‌ഡേറ്റ് ചെയ്യാവുന്നതാണ്.' },
  { no: 59, question: 'RFP-നുള്ള ഭാവി മാർക്കറ്റ് എങ്ങനെ ബാധിക്കും?', answer: 'പുറത്തുള്ള മാർക്കറ്റ് സൂചനകൾ അനുസരിച്ച് RFP-യുടെ വിപണന തന്ത്രങ്ങൾ മാറും.' },
  { no: 60, question: 'രജിസ്റ്റർ ചെയ്ത കർഷകർക്ക് എങ്ങനെ മാർക്കറ്റ്-ലിസ്റ്റ് ഉപയോഗിക്കാം?', answer: 'കൃഷിക്കാർക്ക്, അപ്‌ഡേറ്റ് ചെയ്ത മാർക്കറ്റിംഗ്-ലിസ്റ്റ് വഴി, ഉൽപ്പന്നങ്ങൾ പ്രചരിപ്പിക്കാൻ കഴിയും.' },
  { no: 61, question: 'പോർട്ടലിൽ എങ്ങനെ ഓൺലൈൻ അടിസ്ഥാനപരമായ സഹായം ലഭിക്കും?', answer: 'പോർട്ടലിന്റെ ചാറ്റ് ബോട്ടും, ഉദ്ദേശിക്കുന്ന വിഭാഗങ്ങൾ ഉപയോക്തൃ സഹായത്തിന് ലഭ്യമാണ്.' },
  { no: 62, question: 'എന്താണ് RFP ഫലങ്ങൾ?', answer: 'RFP ഫലങ്ങൾ സാങ്കേതിക, സാമ്പത്തിക, പരിചയ ചോദ്യങ്ങൾ പ്രകാരം നിരീക്ഷിച്ച് സ്ഥിരീകരിക്കുന്നതാണ്.' },
  { no: 63, question: 'എന്താണ് NAWO-DHAN പ്രോഗ്രാമിന്റെ പ്രധാനലക്ഷ്യം?', answer: 'കൃഷിയിലും ഭൂവിനിയോഗത്തിലുമുള്ള സംരംഭങ്ങൾ ലക്ഷ്യമിടുന്ന പ്രോഗ്രാമാണ് NAWO-DHAN.' },
  { no: 64, question: 'ഒരു പ്രോജക്ടിന്റെ റഫറൻസ് നമ്പർ എങ്ങനെ കണ്ടെത്താം?', answer: 'നൽകിയ വിവരങ്ങളിലെ, ഓരോ RFP-നും പ്രത്യേക റഫറൻസ് നമ്പർ പോർട്ടലിൽ ലഭ്യമാണ്.' },
  { no: 65, question: 'പോർട്ടൽ വഴി ലോണുകൾ എങ്ങനെ അപേക്ഷിക്കാം?', answer: 'നിലവിൽ, ലോണുകൾ അപേക്ഷിക്കാൻ പോർട്ടൽ വഴി അധിക മാർഗ്ഗങ്ങൾ നിലവിൽ സജീവമല്ല.' },
  { no: 66, question: 'പേയ്‌മെന്റ് ഗേറ്റ്‌വേ വേഗത എങ്ങനെ?', answer: 'പേയ്‌മെൻറ്റുകൾ 24-48 മണിക്കൂറിനുള്ളിൽ പണം സ്വീകരിക്കും.' },
  { no: 67, question: 'റിട്ടേൺ പ്രവർത്തനങ്ങൾ എങ്ങനെയാണ്?', answer: 'കൃഷി, വിള, വിപണി എന്നിവയുടെ ക്രമീകരണത്തിനുള്ള വിപുലമായ എഡിറ്റ് സാധ്യമാണ്.' },
  { no: 68, question: 'പോർട്ടലിലെ ടെക്‌നിക്കൽ സഹായം എങ്ങനെയാണ്?', answer: '24/7 ടെക്‌നിക്കൽ സഹായം, പ്രത്യേക വിഷയങ്ങളിലായി ലഭ്യമാണ്.' },
  { no: 69, question: 'RFP-ൽ വിവരങ്ങൾ സമർപ്പിക്കാൻ എന്ത് മാർഗ്ഗങ്ങൾ?', answer: 'RFP-ലെ ഫോറം ഫീൽഡ്‌സ് പൂർണ്ണമായി പരിപൂരണം ചെയ്യുന്നതിനുള്ള ഓപ്ഷനുകൾ ഉണ്ട്.' },
  { no: 70, question: 'RFP പ്രോസസ്സിലെ ഓരോ ഘട്ടവും എത്ര ദിവസം?', answer: 'RFP പ്രോസസ്സ് 3-7 ദിവസം വരെ നീണ്ടേക്കാം.' },
  { no: 71, question: 'RFP ഫലത്തിൽ ശ്രദ്ധ ചെലുത്തേണ്ട കാര്യങ്ങൾ?', answer: 'RFP പ്രോസസിൽ അഭ്യർത്ഥന നൽകിയ പാർടികൾക്ക് ശ്രദ്ധ കൊടുക്കുന്ന കാര്യങ്ങൾ ഹൃസ്വമായ ഉത്തരങ്ങളിലൂടെയാണ്.' },
  { no: 72, question: 'എന്താണ് RFP-ലെ സർവേ?', answer: 'RFP-നു മുൻപുള്ള നിർദ്ദേശങ്ങളും സമർപ്പണങ്ങളുടെ മാർഗ്ഗനിർദേശവും.' },
  { no: 73, question: 'RFP ഉപയോക്തൃ പ്രൊഫൈലിന്റെ അപ്ഡേറ്റ് എങ്ങനെ?', answer: 'പോർട്ടലിൽ പ്രൊഫൈൽ അപ്ഡേറ്റ് ചെയ്യാനാകും.' },
  { no: 74, question: 'RFP-യിൽ ആവശ്യമുള്ള വിവരങ്ങൾ?', answer: 'RFP-ലെ ഫീൽഡുകൾ, എത്രമാത്രം അനുയോജ്യമായ വിവരങ്ങൾ ആവശ്യപ്പെടും.' },
  { no: 75, question: 'RFP-കളുടെ എക്സ്പോൾ ടൈം എത്ര?', answer: 'RFP ഫലങ്ങളും വിവരങ്ങളും ശരിയായ സമയം അപ്ഡേറ്റ് ചെയ്യും.' },
  { no: 76, question: 'RFP ഫലത്തിന് അപേക്ഷിക്കാൻ എത്ര സമയം?', answer: 'RFP-ഫലത്തിന് അപേക്ഷിക്കാനായി 7-10 ദിവസം പോർട്ടൽ അനുവദിക്കും.' },
  { no: 77, question: 'പ്രത്യേക ഗുണമുള്ള RFP-കൾ എങ്ങനെ കണ്ടെത്താം?', answer: 'എല്ലാ RFP-കളുടേയും മികവിന്റെ അടിസ്ഥാനത്തിൽ അവ തിരഞ്ഞെടുക്കപ്പെടും.' },
  { no: 78, question: 'RFP ഫലങ്ങളിൽ ഓപ്ഷൻ എങ്ങനെ?', answer: 'RFP ഫലത്തിൽ ഓപ്ഷനുകൾ പോർട്ടലിൽ ലഭ്യമായ ക്രമീകരണങ്ങൾ വഴി സജ്ജമാക്കാവുന്നതാണ്.' },
];

export default function Faq() {
  const language = localStorage.getItem('language');
  const [faqs, setFaqs] = useState(faqsEnglish);

  useEffect(() => {
    if (language === 'en') {
      setFaqs(faqsEnglish);
    } else if (language === 'ml') {
      setFaqs(faqsMalayalam);
    }
  }, [language]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-20">
      <div className="">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-pretty text-base/7 text-gray-600">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                customer support
              </a>{' '}
              team.
            </p>
          </div>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-10 ml-8">
          <div className="mt-10 lg:col-span-10 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base/7 font-semibold text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base/7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
