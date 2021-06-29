interface detailText {
    text: string;
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
    priceSingleMonth: '$52',
    priceTotal: '$156',
    detailsList: [
        {
            text: 'Free week trial'
        },
        {
            text: '45mins (max 1Hr)/week live calls'
        },
        {
            text: 'Live call sessions with native speaker or tutor'
        },
        {
            text: 'T/TH Voice-note correspondence Immersion plan/prompts'
        },
        {
            text: 'Case based learning structure'
        },
        {
            text: 'Quizzes'
        },
        {
            text: 'Sessions primary audio and chat based, occasional white board lessons'
        }
    ]
}

export const premiumPlanData: PlanType = {
    heading: 'Premium',
    price: '$110',
    priceSingleMonth: '$88',
    priceTotal: '$264',
    detailsList: [
        {
            text: 'Free week trial'
        },
        {
            text: '1h 30mins week live calls'
        },
        {
            text: 'Live call sessions with tutor only'
        },
        {
            text: 'T/TH voice-note correspondence'
        },
        {
            text: 'Classroom structure AND case based learning'
        },
        {
            text: 'Immersion plan/prompts Quizzes'
        },
        {
            text: 'Deeper dive to language grammar'
        },
        {
            text: 'Focus on conversational Igbo'
        },
        {
            text: 'Multimedia learning resources'
        },
        {
            text: 'Goal making and Progress reports'
        }
    ]
}