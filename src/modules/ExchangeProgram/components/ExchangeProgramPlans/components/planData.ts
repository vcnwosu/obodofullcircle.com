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
    priceSingleMonthQuaterly: string;
    priceTotal: string;
    detailsList: detailText[]
}

export const basicPlanData: PlanType = {
    heading: 'Basic',
    price: '$65',
    priceSingleMonth: '$55',
    priceSingleMonthQuaterly: '$50',
    priceTotal: '$98',
    detailsList: [
        {
            text: 'Live calls : Per week upto <b>1 hour</b>',
            showInfoIcon: false
        },
        {
            text: 'Live calls with : <b>Conversation partner</b>',
            showInfoIcon: true,
            tooltipType: 'list',
            tooltipList: [
                'Conversation partner: a native speaker who has undergone detailed training to work with learners, provide optimal learning environment,  and explain basic grammatical details',
                'Tutor: a native speaker with over 2 years of experience teaching the language at various capacities.  Also undergone training to work with learners to provide an ideal learning environment. More experienced with teaching basic and advanced grammatical concepts.'
            ]
        },
        {
            text: 'Access : Voice notes correspondence',
            showInfoIcon: false
        },
        {
            text: 'Learning Mode: <b>Case based</b>',
            tooltipType: 'Line',
            showInfoIcon: true,
            tooltipText: 'Case based learning - teaching facilitated through practical examples, scenarios, and role play application and having that lead discussion of grammar and other language topics.'
        },
        {
            text: 'Immersive plans through LMS',
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
            text: 'Progress Tracking : Monthly Goals and Reports',
            showInfoIcon: false
        },
        {
            text: 'Abridged grammar lessons',
            showInfoIcon: false
        }
    ]
}

export const premiumPlanData: PlanType = {
    heading: 'Premium',
    price: '$115',
    priceSingleMonth: '$110',
    priceSingleMonthQuaterly: '$95',
    priceTotal: '$198',
    detailsList: [
        {
            text: 'Live calls : <b>1 hr 30 mins</b> per week',
            showInfoIcon: false
        },
        {
            text: 'Live calls with : <b>Tutor</b>',
            tooltipType: 'Line',
            showInfoIcon: true,
            tooltipText: 'Tutor: a native speaker with over 2 years of experience teaching the language at various capacities.  Also undergone training to work with learners to provide an ideal learning environment. More experienced with teaching basic and advanced grammatical concepts.'
        },
        {
            text: 'Access : Voice notes correspondence',
            showInfoIcon: false
        },
        {
            text: 'Learning Mode: <b>Case based and Classroom</b>',
            tooltipType: 'Line',
            showInfoIcon: true,
            tooltipText: 'Case based learning - teaching facilitated through practical examples, scenarios, and role play application and having that lead discussion of grammar and other language topics.'
        },
        {
            text: 'Immersion Plan through LMS',
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
            text: 'Progress Tracking : Monthly Goal and Reports',
            showInfoIcon: false
        },
        {
            text: 'Deep dive into language grammar with continued focus to improve speech',
            showInfoIcon: false
        },
        {
            text: '<b>Access to all audio flashcards</b>',
            showInfoIcon: false
        }
    ]
}