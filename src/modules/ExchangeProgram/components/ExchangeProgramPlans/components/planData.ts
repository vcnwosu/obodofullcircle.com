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
            text: '45mins (max 1Hr)/week live calls',
            showInfoIcon: false
        },
        {
            text: 'Live call sessions with a conversation partner or tutor',
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
            text: 'Predominantly case based learning structure',
            tooltipType: 'Line',
            showInfoIcon: true,
            tooltipText: 'Case based learning'
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
            text: '1h 30mins week live calls',
            showInfoIcon: false
        },
        {
            text: 'Live call sessions with tutor only',
            showInfoIcon: false
        },
        {
            text: 'T/TH voice-note correspondence',
            showInfoIcon: false
        },
        {
            text: 'Classroom structure AND case based learning',
            showInfoIcon: false
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
            text: 'Access to ALL audio flashcards for duration of subscription',
            showInfoIcon: false
        }
    ]
}