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
    priceSingleMonth: '$49',
    priceTotal: '$98',
    detailsList: [
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
            text: 'Predominantly case based learning structure'
        },
        {
            text: 'Immersive plan - LMS'
        },
        {
            text: 'Quizzes'
        },
        {
            text: 'Multimedia Learning Resources'
        },
        {
            text: 'Monthly goals and Progress reports'
        },
        {
            text: 'Abridged grammar lessons covered over longer period of time'
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
            text: 'Immersion plan'
        },
        {
            text: 'Quizzes'
        },
        {
            text: 'Multimedia learning resources'
        },
        {
            text: 'Goal making and Progress reports'
        },
        {
            text: 'Detailed dive into language grammar while continued focus on practicalilty for everyday speech'
        },
        {
            text: 'Access to ALL audio flashcards for duration of subscription'
        }
    ]
}