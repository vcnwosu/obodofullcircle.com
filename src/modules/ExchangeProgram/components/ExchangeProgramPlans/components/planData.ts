interface detailText {
    text: string;
    showInfoIcon: boolean;
    tooltipType?: string;
    tooltipList?: string[];
    tooltipText?: string;
}

export interface PlanType {
    heading: string;
    price: string;
    priceSingleMonth: string;
    priceTotal: string;
    detailsList: detailText[]
}

export const basicPlanData: PlanType = {
    heading: 'Basic',
    price: '$65',
    priceSingleMonth: '$49',
    priceTotal: '$98',
    detailsList: [
        {
            text: '<b>45mins (max 1Hr)</b>/week live calls',
            showInfoIcon: false
        },
        {
            text: 'Live call sessions with a <b>conversation partner or tutor</b>',
            showInfoIcon: true,
            tooltipType: 'list',
            tooltipList: [
                'Conversation partner: a native speaker who has undergone detailed training to work with learners, provide optimal learning environment,  and explain basic grammatical details',
                'Tutor: a native speaker with over 2 years of experience teaching the language at various capacities.  Also undergone training to work with learners to provide an ideal learning environment. More experienced with teaching basic and advanced grammatical concepts.'
            ]
        },
        {
            text: 'T/TH Voice-note correspondence Immersion plan/prompts',
            showInfoIcon: false
        },
        {
            text: '<b>Predominantly case based learning structure</b>',
            tooltipType: 'Line',
            showInfoIcon: true,
            tooltipText: 'Case based learning - teaching facilitated through practical examples, scenarios, and role play application and having that lead discussion of grammar and other language topics.'
        },
        {
            text: 'Immersive plan - LMS',
            showInfoIcon: false
        },
        {
            text: 'Quizzes',
            showInfoIcon: false
        },
        {
            text: 'Multimedia Learning Resources',
            showInfoIcon: false
        },
        {
            text: 'Monthly goals and Progress reports',
            showInfoIcon: false
        },
        {
            text: 'Abridged grammar lessons covered over longer period of time',
            showInfoIcon: false
        }
    ]
}

export const premiumPlanData: PlanType = {
    heading: 'Premium',
    price: '$110',
    priceSingleMonth: '$99',
    priceTotal: '$198',
    detailsList: [
        {
            text: '<b>1h 30mins</b> week live calls',
            showInfoIcon: false
        },
        {
            text: 'Live call sessions with <b>tutor only</b>',
            tooltipType: 'Line',
            showInfoIcon: true,
            tooltipText: 'Tutor: a native speaker with over 2 years of experience teaching the language at various capacities.  Also undergone training to work with learners to provide an ideal learning environment. More experienced with teaching basic and advanced grammatical concepts.'
        },
        {
            text: 'T/TH voice-note correspondence',
            showInfoIcon: false
        },
        {
            text: '<b>Classroom structure AND case based learning</b>',
            tooltipType: 'Line',
            showInfoIcon: true,
            tooltipText: 'Case based learning - teaching facilitated through practical examples, scenarios, and role play application and having that lead discussion of grammar and other language topics.'
        },
        {
            text: 'Immersion plan',
            showInfoIcon: false
        },
        {
            text: 'Quizzes',
            showInfoIcon: false
        },
        {
            text: 'Multimedia learning resources',
            showInfoIcon: false
        },
        {
            text: 'Goal making and Progress reports',
            showInfoIcon: false
        },
        {
            text: 'Detailed dive into language grammar while continued focus on practicalilty for everyday speech',
            showInfoIcon: false
        },
        {
            text: 'Access to ALL audio <b>flashcards</b> for duration of subscription',
            showInfoIcon: false
        }
    ]
}